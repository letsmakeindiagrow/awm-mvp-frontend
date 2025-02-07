import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface SocialIconProps {
  type: "linkedin" | "twitter" | "github" | "email";
  href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ type, href }) => {
  const iconMap = {
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </svg>
    ),
    github: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    email: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
      </svg>
    ),
  };

  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-blue-600 transition-colors"
    >
      {iconMap[type]}
    </a>
  ) : null;
};

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  background: string[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
  };
  achievements?: string[];
}

const TeamMemberCard: React.FC<{
  member: TeamMember;
  variant?: "default" | "detailed";
}> = ({ member, variant = "default" }) => (
  <Card
    className={`hover:shadow-xl transition-all ${
      variant === "detailed" ? "h-full" : ""
    }`}
  >
    <CardHeader className="flex flex-col items-center">
      <Avatar className="w-32 h-32 mb-4 border-4 border-blue-100">
        <AvatarImage src={member.image} alt={member.name} />
        <AvatarFallback>
          {member.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <CardTitle className="text-center">
        <div className="text-xl font-bold text-blue-600">{member.name}</div>
        <div className="text-sm text-gray-600 mt-1">{member.role}</div>
      </CardTitle>
    </CardHeader>
    <CardContent className="text-center">
      <p className="text-gray-700 mb-4 text-sm">{member.bio}</p>
      <div className="flex justify-center gap-2 mb-4">
        {member.background.map((skill: any) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </div>
      {variant === "detailed" && member.achievements && (
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-blue-600 mb-2">
            Key Achievements
          </h4>
          <ul className="text-xs text-gray-600 space-y-1">
            {member.achievements.map((achievement: any, index: any) => (
              <li key={index}>• {achievement}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex justify-center space-x-3 mt-4">
        {Object.entries(member.socialLinks || {}).map(([type, href]) => (
          <SocialIcon
            key={type}
            type={type as "linkedin" | "twitter" | "github" | "email"}
            href={href}
          />
        ))}
      </div>
    </CardContent>
  </Card>
);

const teamData = {
  leadership: [
    {
      name: "Raj Patel",
      role: "Founder & CEO",
      bio: "Financial visionary with 15+ years transforming wealth management through innovative technology and strategic insights.",
      image: "/api/placeholder/400/400",
      background: [
        "Strategic Planning",
        "Investment Banking",
        "Fintech Innovation",
      ],
      socialLinks: {
        linkedin: "#",
        twitter: "#",
        email: "raj.patel@aadyanvi.com",
      },
      achievements: [
        "Recognized as Top 30 Fintech Leaders",
        "Published research in Global Investment Strategies",
        "Built 500M+ portfolio management platform",
      ],
    },
    {
      name: "Sarah Thompson",
      role: "Chief Investment Officer",
      bio: "Quantum finance expert specializing in algorithmic trading and comprehensive risk management strategies.",
      image: "/api/placeholder/400/400",
      background: [
        "Quantitative Analysis",
        "Machine Learning",
        "Risk Optimization",
      ],
      socialLinks: {
        linkedin: "#",
        github: "#",
        email: "sarah.thompson@aadyanvi.com",
      },
      achievements: [
        "Developed proprietary AI-driven investment models",
        "Consistent 20%+ annual portfolio returns",
        "Speaker at International Finance Conferences",
      ],
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      bio: "Technology strategist bridging advanced software engineering with financial technology ecosystem.",
      image: "/api/placeholder/400/400",
      background: ["Distributed Systems", "Blockchain", "Cybersecurity"],
      socialLinks: {
        linkedin: "#",
        github: "#",
        email: "michael.chen@aadyanvi.com",
      },
      achievements: [
        "Patent-holder in Secure Trading Platforms",
        "Led digital transformation for multiple financial firms",
        "Open-source contributor to financial tech projects",
      ],
    },
  ],
  advisors: [
    {
      name: "Dr. Elena Rodriguez",
      role: "Senior Economic Advisor",
      bio: "Global economic strategist with deep insights into emerging market dynamics and monetary policy.",
      image: "/api/placeholder/400/400",
      background: [
        "Economic Policy",
        "International Finance",
        "Market Research",
      ],
      socialLinks: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "James Franklin",
      role: "Regulatory & Compliance Advisor",
      bio: "Veteran regulatory expert ensuring our strategies align with global financial regulations.",
      image: "/api/placeholder/400/400",
      background: [
        "Financial Compliance",
        "Risk Management",
        "Regulatory Strategy",
      ],
      socialLinks: {
        linkedin: "#",
        email: "james.franklin@advisory.com",
      },
    },
  ],
  developers: [
    {
      name: "Alex Rodriguez",
      role: "Lead Software Architect",
      bio: "Specializes in building scalable financial technology platforms with a focus on performance and security.",
      image: "/api/placeholder/400/400",
      background: [
        "Distributed Systems",
        "Microservices",
        "Cloud Infrastructure",
      ],
      socialLinks: {
        linkedin: "#",
        github: "#",
        email: "alex.rodriguez@aadyanvi.com",
      },
      achievements: [
        "Designed high-performance trading infrastructure",
        "Implemented zero-downtime deployment strategies",
        "Contributor to open-source financial tech projects",
      ],
    },
    {
      name: "Emma Chen",
      role: "Machine Learning Engineer",
      bio: "Expert in developing AI-driven financial prediction models and algorithmic trading systems.",
      image: "/api/placeholder/400/400",
      background: ["AI/ML", "Data Science", "Algorithmic Trading"],
      socialLinks: {
        linkedin: "#",
        github: "#",
        email: "emma.chen@aadyanvi.com",
      },
      achievements: [
        "Developed proprietary market prediction algorithms",
        "Published research in AI-driven financial modeling",
        "Built real-time trading signal generation system",
      ],
    },
    {
      name: "David Kumar",
      role: "Cybersecurity Specialist",
      bio: "Ensuring robust security and compliance across our technological infrastructure.",
      image: "/api/placeholder/400/400",
      background: ["Cybersecurity", "Network Security", "Compliance"],
      socialLinks: {
        linkedin: "#",
        github: "#",
        email: "david.kumar@aadyanvi.com",
      },
      achievements: [
        "Implemented advanced threat detection systems",
        "Secured multi-million dollar trading platforms",
        "Regular speaker at cybersecurity conferences",
      ],
    },
  ],
};

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("leadership");

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 bg-gray-50 mt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-blue-600">
            About Aadyanvi Wealth Management
          </h1>
          <div className="bg-white rounded-lg shadow-md p-8 text-center mb-12">
            <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
              Founded in 2018, Aadyanvi Wealth Management is a pioneering
              financial technology company dedicated to transforming investment
              strategies through innovative digital solutions. We combine deep
              financial expertise with cutting-edge technology to provide
              personalized, data-driven investment approaches. Our mission is to
              democratize sophisticated investment tools, making advanced
              financial strategies accessible to a broader range of investors
              while maintaining the highest standards of security, transparency,
              and performance.
            </p>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="mb-12"
          >
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="leadership">Leadership Team</TabsTrigger>
              <TabsTrigger value="advisors">Advisory Board</TabsTrigger>
              <TabsTrigger value="developers">Technology Team</TabsTrigger>
            </TabsList>
            <TabsContent value="leadership">
              <div className="grid md:grid-cols-3 gap-6">
                {teamData.leadership.map((member) => (
                  <TeamMemberCard
                    key={member.name}
                    member={member}
                    variant="detailed"
                  />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="advisors">
              <div className="grid md:grid-cols-2 gap-6">
                {teamData.advisors.map((member) => (
                  <TeamMemberCard key={member.name} member={member} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="developers">
              <div className="grid md:grid-cols-3 gap-6">
                {teamData.developers.map((member) => (
                  <TeamMemberCard
                    key={member.name}
                    member={member}
                    variant="detailed"
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <section className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              Our Technology Vision
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We leverage cutting-edge technologies to transform financial
              management. Our engineering team combines deep domain expertise
              with innovative software solutions, creating robust, secure, and
              intelligent platforms that redefine investment strategies.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
