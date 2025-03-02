import { MapPin, Mail } from "lucide-react";
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
        <h2 className="text-4xl font-bold text-[#08AFF1] mb-3">Get in Touch</h2>
        <p className="text-gray-600 text-lg max-w-md">
          Have questions about our wealth management services? Reach out to us
          using any of the contact methods below.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mt-8 flex-grow">
        {/* Office and Business Details Card */}
        <ContactCard
          icon={
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#AACF45]/10">
              <MapPin className="text-[#AACF45]" size={24} strokeWidth={2} />
            </div>
          }
          title="Office & Business Details"
          delay={0.2}
          content={
            <div className="space-y-4">
              {/* Office Section */}
              <div>
                <h4 className="text-md font-semibold text-[#08AFF1] mb-2">
                  Office
                </h4>
                <p className="text-gray-700">
                  <span className="font-medium">
                    AADYANVI WEALTH MANAGEMENT PRIVATE LIMITED
                  </span>
                </p>
                <p className="text-gray-600 mt-1">
                  <span className="font-medium">Locations:</span> Prayagraj |
                  New Delhi
                </p>
              </div>

              {/* Business Section */}
              <div>
                <h4 className="text-md font-semibold text-[#08AFF1] mb-2">
                  Business Details
                </h4>
                <p className="text-gray-700">
                  <span className="font-medium">CIN:</span>{" "}
                  U65990UP2021PTC145944
                </p>
                <p className="text-gray-600 mt-1">
                  <span className="font-medium">Call Us:</span> Timing (Mon-Sat,
                  09:15 AM to 8:00 PM)
                </p>
              </div>
            </div>
          }
        />

        {/* Email and Helpline Card */}
        <ContactCard
          icon={
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#AACF45]/10">
              <Mail className="text-[#AACF45]" size={24} strokeWidth={2} />
            </div>
          }
          title="Email & Helpline"
          delay={0.3}
          content={
            <div className="space-y-4">
              {/* Email Section */}
              <div>
                <h4 className="text-md font-semibold text-[#08AFF1] mb-2">
                  Email
                </h4>
                <p className="text-gray-700">
                  <span className="font-medium">General Information:</span>{" "}
                  <a
                    href="mailto:namaste@aadyanvi.com"
                    className="text-[#AACF45] hover:underline transition-colors"
                  >
                    namaste@aadyanvi.com
                  </a>
                </p>
                <p className="text-gray-600 mt-1">
                  <span className="font-medium">
                    Support & Technical Issues:
                  </span>{" "}
                  <a
                    href="mailto:support@aadyanvi.com"
                    className="text-[#AACF45] hover:underline transition-colors"
                  >
                    support@aadyanvi.com
                  </a>
                </p>
              </div>

              {/* Helpline Section */}
              <div>
                <h4 className="text-md font-semibold text-[#08AFF1] mb-2">
                  Helpline
                </h4>
                <p className="text-gray-700">
                  <span className="font-medium">Helpline Number:</span>{" "}
                  <a
                    href="tel:+918004218007"
                    className="text-[#AACF45] hover:underline transition-colors"
                  >
                    +91 8004218007
                  </a>
                </p>
              </div>
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
        "p-6 rounded-xl bg-white shadow-md border border-gray-100 animate-fade-in hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-start space-x-4">
        <div>{icon}</div>
        <div className="space-y-3 flex-1">
          <h3 className="text-xl font-semibold text-[#08AFF1]">{title}</h3>
          <div className="text-sm text-gray-600">{content}</div>
        </div>
      </div>
    </div>
  );
}
