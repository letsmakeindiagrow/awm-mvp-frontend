import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import TeamMemberCard from "./TeamMemberCard";
import { TeamMember } from "../types";

const teamData: { [key: string]: TeamMember[] } = {
  leadership: [
    {
      name: "Atul Shukla",
      role: "Founder & CEO",
      imageUrl: "./atul_shukla.webp",
      bio: "atulshukla@aadyanvi.com",
      background: ["Business", "Leadership"],
      achievements: ["Founder of Aadyanvi Wealth Management"],
    },
  ],
  advisors: [
    {
      name: "Rishabh Patidar",
      role: "Senior Advisor",
      imageUrl: "./rishabh.jpeg",
      bio: "rishabh.patidar@aadyanvi.com",
      background: ["Consulting"],
      achievements: [],
    },
  ],
  developers: [
    {
      name: "Pranay Sharma",
      role: "Python & Full Stack Developer",
      imageUrl: "./pranay.jpeg",
      bio: "pranay.sharma@aadyanvi.com",
      background: ["Python", "Full Stack"],
      achievements: [],
    },
    {
      name: "Pushkar Aggarwal",
      role: "Python & Full Stack Developer",
      imageUrl: "./pushkar.jpeg",
      bio: "pushkar.aggarwal@aadyanvi.com",
      background: ["Python", "Full Stack"],
      achievements: [],
    },
  ],
};

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState("leadership");
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  const toggleMemberDetail = (name: string) => {
    setSelectedMember((prev) => (prev === name ? null : name));
  };

  return (
    <div className="flex flex-col items-center">
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="mb-12 w-full max-w-4xl"
      >
        <TabsList className="flex justify-center space-x-4 bg-gray-100 p-2 rounded-lg shadow-md">
          <TabsTrigger value="leadership">Leadership Team</TabsTrigger>
          <TabsTrigger value="advisors">Advisory Board</TabsTrigger>
          <TabsTrigger value="developers">Development Team</TabsTrigger>
        </TabsList>

        {Object.keys(teamData).map((key) => (
          <TabsContent key={key} value={key}>
            <div className="flex flex-wrap justify-center gap-8 mt-6">
              {teamData[key].map((member) => (
                <div
                  key={member.name}
                  onClick={() => toggleMemberDetail(member.name)}
                  className="w-80 flex justify-center"
                >
                  <TeamMemberCard
                    member={member}
                    variant={
                      selectedMember === member.name ? "detailed" : "default"
                    }
                    className="shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default TeamSection;
