import { Sidebar } from "@/components/client-dashboard/sidebar";
import { Header } from "@/components/client-dashboard/header";
import { DashboardStats } from "@/components/client-dashboard/Dashboard-Stats";
import { DeployedStrategies } from "@/components/client-dashboard/deployed-strtegies";
import { StockScanner } from "@/components/client-dashboard/stock-scanner";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-brand-background">
      <Header />

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-64 shrink-0">
            <Sidebar />
          </div>

          <div className="flex-1">
            <DashboardStats />
            <StockScanner />
            <DeployedStrategies />
          </div>
        </div>
      </div>
    </div>
  );
}
