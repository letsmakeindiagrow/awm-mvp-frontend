import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ContactInfo() {
  return (
    <div className="space-y-8 md:space-y-10 h-full flex flex-col">
      <div
        className="space-y-2 animate-fade-in"
        style={{ animationDelay: "0.1s" }}
      >
        <h2 className="text-4xl font-bold text-[#08AFF1] mb-3">
          Get in Touch
        </h2>
        <p className="text-gray-600 text-lg max-w-md">
          Have questions about our wealth management services? Reach out to us
          using any of the contact methods below.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mt-8 flex-grow">
        <ContactCard
          icon={
            <MapPin
              className="text-[#AACF45]"
              size={24}
              strokeWidth={1.5}
            />
          }
          title="Offices"
          delay={0.2}
          content={
            <div className="space-y-3">
              <div>
                <p className="font-medium text-[#08AFF1]">Allahabad</p>
                <p className="text-gray-600">......</p>
                <p className="text-gray-600">......</p>
              </div>
              <div>
                <p className="font-medium text-[#08AFF1]">New Delhi</p>
                <p className="text-gray-600">......</p>
                <p className="text-gray-600">Delhi</p>
              </div>
            </div>
          }
        />

        <ContactCard
          icon={
            <Mail className="text-[#AACF45]" size={24} strokeWidth={1.5} />
          }
          title="Email"
          delay={0.3}
          content={
            <a
              href="mailto:namaste@aadyanvi.com"
              className="text-gray-600 hover:text-[#AACF45] transition-colors"
            >
              namaste@aadyanvi.com
            </a>
          }
        />

        <ContactCard
          icon={
            <Phone className="text-[#AACF45]" size={24} strokeWidth={1.5} />
          }
          title="Helpline"
          delay={0.4}
          content={
            <a
              href="tel:+918004218007"
              className="text-gray-600 hover:text-[#AACF45] transition-colors"
            >
              +91 8004218007
            </a>
          }
        />

        <ContactCard
          icon={
            <Clock className="text-[#AACF45]" size={24} strokeWidth={1.5} />
          }
          title="Business Details"
          delay={0.5}
          content={
            <div className="space-y-1">
              <p className="text-gray-600">
                <span className="font-medium text-[#08AFF1]">CIN: </span>
                U65990UP2021PTC145944
              </p>
              <p className="text-gray-600">
                <span className="font-medium text-[#08AFF1]">Hours: </span>
                Monday - Sunday, 9:00 AM - 8:00 PM
              </p>
            </div>
          }
        />
      </div>
    </div>
  );
}

function ContactCard({
  icon,
  title,
  content,
  className,
  delay = 0,
}: ContactCardProps) {
  return (
    <div
      className={cn(
        "p-6 rounded-2xl bg-white shadow-lg border border-gray-100 animate-fade-in hover:shadow-xl transition-shadow",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex space-x-4">
        <div className="mt-1">{icon}</div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-[#08AFF1]">{title}</h3>
          <div className="text-sm text-gray-600">{content}</div>
        </div>
      </div>
    </div>
  );
}