"use client";

import type React from "react";

import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  Calendar,
  FileText,
  CreditCard,
  LogIn,
} from "lucide-react";
import { Link } from "react-router-dom";

interface NavItemProps {
  title: string;
  icon?: React.ReactNode;
  isOpen?: boolean;
  hasChildren?: boolean;
  level?: number;
  href?: string;
  isActive?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const NavItem = ({
  title,
  icon,
  isOpen = false,
  hasChildren = false,
  level = 0,
  href = "#",
  isActive = false,
  onClick,
  children,
}: NavItemProps) => {
  if (!hasChildren) {
    const className =
      level === 0
        ? `sidebar-item ${isActive ? "active" : ""}`
        : level === 1
        ? "sidebar-item-child"
        : "sidebar-item-grandchild";

    return (
      <Link to={href} className={className}>
        {icon && level === 0 && icon}
        <span>{title}</span>
      </Link>
    );
  }

  const className =
    level === 0
      ? `sidebar-item ${isActive ? "active" : ""}`
      : level === 1
      ? "sidebar-item-child"
      : "sidebar-item-grandchild";

  return (
    <div>
      <button
        onClick={onClick}
        className={`${className} justify-between w-full`}
      >
        <div className="flex items-center gap-2">
          {icon && level === 0 && icon}
          <span>{title}</span>
        </div>
        {isOpen ? (
          <ChevronDown className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
      </button>
      {isOpen && <div className="mt-1">{children}</div>}
    </div>
  );
};

export function Sidebar() {
  const [openItems, setOpenItems] = useState({
    dashboard: false,
  });

  const toggleItem = (key: keyof typeof openItems) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="w-64 bg-white rounded-lg shadow-md p-4">
      <div className="mb-6">
        <h2 className="text-xl font-bold bg-gradient-to-r from-brand-green to-brand-blue bg-clip-text text-transparent">
          Trading Platform
        </h2>
      </div>

      <nav className="space-y-1">
        <NavItem title="Client Login" icon={<LogIn className="w-5 h-5" />} />

        <NavItem
          title="Dashboard"
          icon={<LayoutDashboard className="w-5 h-5" />}
          hasChildren={true}
          isOpen={openItems.dashboard}
          onClick={() => toggleItem("dashboard")}
          isActive={true}
        >
          <NavItem title="Position" level={1} />
          <NavItem title="Holding" level={1} />
        </NavItem>

        <NavItem title="Backtest" icon={<Calendar className="w-5 h-5" />} />

        <NavItem title="Reports" icon={<FileText className="w-5 h-5" />} />

        <NavItem title="Billing" icon={<CreditCard className="w-5 h-5" />} />
      </nav>
    </div>
  );
}
