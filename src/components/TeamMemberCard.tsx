import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";
import SocialIcon from "./ScoailIcon";
import { TeamMember } from "../types";

const TeamMemberCard: React.FC<{
  member: TeamMember;
  variant?: "default" | "detailed";
}> = ({ member, variant = "default" }) => (
  <Card
    className={`hover:shadow-xl transition-all ${variant === "detailed" ? "h-full" : ""}`}
  >
    <CardHeader className="flex flex-col items-center">
      <Avatar className="w-32 h-32 mb-4 border-4 border-[#AACF45]">
        <AvatarImage src={member.image} alt={member.name} />
        <AvatarFallback>
          {member.name.split(" ").map((n) => n[0]).join("")}
        </AvatarFallback>
      </Avatar>
      <CardTitle className="text-center">
        <div className="text-xl font-bold text-[#08AFF1]">{member.name}</div>
        <div className="text-sm text-gray-600 mt-1">{member.role}</div>
      </CardTitle>
    </CardHeader>
    <CardContent className="text-center">
      <p className="text-gray-700 mb-4 text-sm">{member.bio}</p>
      <div className="flex justify-center gap-2 mb-4">
        {member.background.map((skill: any) => (
          <Badge key={skill} variant="secondary" className="bg-[#AACF45]">
            {skill}
          </Badge>
        ))}
      </div>
      {variant === "detailed" && (
        <>
          {/* Checking if achievements is defined before rendering */}
          {member.achievements?.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-[#08AFF1] mb-2">
                Key Achievements
              </h4>
              <ul className="text-xs text-gray-600 space-y-1">
                {member.achievements.map((achievement, index) => (
                  <li key={index}>• {achievement}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
      <div className="flex justify-center space-x-3 mt-4">
        {Object.entries(member.socialLinks || {}).map(([type, href]) => (
          <SocialIcon key={type} type={type as "linkedin" | "twitter" | "github" | "email"} href={href} />
        ))}
      </div>
    </CardContent>
  </Card>
);

export default TeamMemberCard;
