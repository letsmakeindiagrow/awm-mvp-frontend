import { useState, useEffect } from "react";
import {
  Mail,
  ArrowRight,
  Twitter,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";

const ComingSoonPage = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const targetDate = new Date("2025-04-30T00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <div className="pt-12 mt-14 min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl w-full text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          We're still building<span className="text-[#08AFF1]">.</span>
        </h1>

        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Our team is working hard to bring you something amazing. We'll be
          launching soon, so please check back or subscribe to get notified.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-lg shadow-md p-4">
              <div className="text-3xl sm:text-4xl font-bold text-[#08AFF1]">
                {item.value}
              </div>
              <div className="text-gray-500">{item.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Get notified when we launch
          </h2>

          {isSubscribed ? (
            <div className="flex items-center justify-center space-x-2 text-[#AACF45] font-medium">
              <span>Thanks for subscribing! We'll be in touch soon.</span>
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="flex-grow relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#08AFF1] focus:border-[#08AFF1] outline-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-[#08AFF1] text-white font-medium py-3 px-6 rounded-lg hover:bg-[#07a0d8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#08AFF1] focus:ring-offset-2"
              >
                Notify Me <ArrowRight className="inline-block ml-1 h-4 w-4" />
              </button>
            </form>
          )}
        </div>

        <div className="text-gray-500">
          <p className="mb-6">
            Want to know more about what we're building? Follow us on social
            media for updates.
          </p>
          <div className="flex justify-center space-x-6">
            {[
              {
                name: "Twitter",
                icon: Twitter,
                link: "https://twitter.com/aadyanviwealth",
              },
              {
                name: "Instagram",
                icon: Instagram,
                link: "https://www.instagram.com/aadyanviwealth",
              },
              {
                name: "Facebook",
                icon: Facebook,
                link: "https://www.facebook.com/aadyanviwealth",
              },
              {
                name: "LinkedIn",
                icon: Linkedin,
                link: "https://www.linkedin.com/company/aadyanviwealth/",
              },
            ].map((platform) => (
              <a
                key={platform.name}
                href={platform.link}
                className="text-gray-600 hover:text-[#08AFF1] transition-colors"
              >
                <platform.icon className="h-8 w-8" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
