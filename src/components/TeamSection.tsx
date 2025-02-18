import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import TeamMemberCard from "./TeamMemberCard";
import { TeamMember } from "../types"; // Define this type if not already defined

const teamData: { [key: string]: TeamMember[] } = {
  leadership: [
    { name: "Alice Johnson", role: "CEO", imageUrl: "/images/alice.jpg", bio: "Alice's bio", background: ["Business", "Leadership"], achievements: ["Founder of Company X"] },
    { name: "Bob Smith", role: "CTO", imageUrl: "/images/bob.jpg", bio: "Bob's bio", background: ["Tech", "Management"], achievements: ["Built platform Y"] },
  ],
  advisors: [
    { name: "Dr. John Doe", role: "Senior Advisor", imageUrl: "/images/john.jpg", bio: "Dr. John's bio", background: ["Consulting"], achievements: [] },
    { name: "Jane Wilson", role: "Strategy Consultant", imageUrl: "/images/jane.jpg", bio: "Jane's bio", background: ["Strategy"], achievements: [] },
  ],
  developers: [
    { name: "Charlie Brown", role: "Frontend Developer", imageUrl: "/images/charlie.jpg", bio: "Charlie's bio", background: ["Frontend"], achievements: ["Developed App X"] },
    { name: "Diana Prince", role: "Backend Developer", imageUrl: "/images/diana.jpg", bio: "Diana's bio", background: ["Backend"], achievements: [] },
  ],
};

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState("leadership");
  const [selectedMember, setSelectedMember] = useState<string | null>(null);

  // Toggle the selected member for detailed view
  const toggleMemberDetail = (name: string) => {
    setSelectedMember((prev) => (prev === name ? null : name));
  };

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="leadership">Leadership Team</TabsTrigger>
        <TabsTrigger value="advisors">Advisory Board</TabsTrigger>
        <TabsTrigger value="developers">Technology Team</TabsTrigger>
      </TabsList>
      
      {/* Leadership Tab */}
      <TabsContent value="leadership">
        <div className="grid md:grid-cols-3 gap-6">
          {teamData.leadership.map((member) => (
            <div key={member.name} onClick={() => toggleMemberDetail(member.name)}>
              <TeamMemberCard member={member} variant={selectedMember === member.name ? "detailed" : "default"} />
            </div>
          ))}
        </div>
      </TabsContent>

      {/* Advisors Tab */}
      <TabsContent value="advisors">
        <div className="grid md:grid-cols-2 gap-6">
          {teamData.advisors.map((member) => (
            <div key={member.name} onClick={() => toggleMemberDetail(member.name)}>
              <TeamMemberCard member={member} variant={selectedMember === member.name ? "detailed" : "default"} />
            </div>
          ))}
        </div>
      </TabsContent>

      {/* Developers Tab */}
      <TabsContent value="developers">
        <div className="grid md:grid-cols-3 gap-6">
          {teamData.developers.map((member) => (
            <div key={member.name} onClick={() => toggleMemberDetail(member.name)}>
              <TeamMemberCard member={member} variant={selectedMember === member.name ? "detailed" : "default"} />
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default TeamSection;
