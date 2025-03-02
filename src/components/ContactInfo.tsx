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
        <h2 className="text-3xl font-medium text-brand-dark mb-2">
          Get in Touch
        </h2>
        <p className="text-gray-600 max-w-md">
          Have questions about our wealth management services? Reach out to us
          using any of the contact methods below.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mt-8 flex-grow">
        <ContactCard
          icon={
            <MapPin
              className="text-brand-primary"
              size={24}
              strokeWidth={1.5}
            />
          }
          title="Offices"
          delay={0.2}
          content={
            <div className="space-y-3">
              <div>
                <p className="font-medium">Allahabad</p>
                <p className="text-gray-600">......</p>
                <p className="text-gray-600">......</p>
              </div>
              <div>
                <p className="font-medium">New Delhi</p>
                <p className="text-gray-600">......</p>
                <p className="text-gray-600">Delhi</p>
              </div>
            </div>
          }
        />

        <ContactCard
          icon={
            <Mail className="text-brand-primary" size={24} strokeWidth={1.5} />
          }
          title="Email"
          delay={0.3}
          content={
            <a
              href="mailto:namaste@aadyanvi.com"
              className="text-gray-600 hover:text-brand-primary transition-colors"
            >
              namaste@aadyanvi.com
            </a>
          }
        />

        <ContactCard
          icon={
            <Phone className="text-brand-primary" size={24} strokeWidth={1.5} />
          }
          title="Helpline"
          delay={0.4}
          content={
            <a
              href="tel:+918004218007"
              className="text-gray-600 hover:text-brand-primary transition-colors"
            >
              +91 8004218007
            </a>
          }
        />

        <ContactCard
          icon={
            <Clock className="text-brand-primary" size={24} strokeWidth={1.5} />
          }
          title="Business Details"
          delay={0.5}
          content={
            <div className="space-y-1">
              <p className="text-gray-600">
                <span className="font-medium">CIN: </span>
                U65990UP2021PTC145944
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Hours: </span>
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
        "p-6 rounded-2xl bg-white shadow-md border border-brand-light/30 animate-fade-in",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex space-x-4">
        <div className="mt-1">{icon}</div>
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-brand-dark">{title}</h3>
          <div className="text-sm">{content}</div>
        </div>
      </div>
    </div>
  );
}
