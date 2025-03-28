import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { TeamMember } from "../types";

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="w-64 h-80">
      <div className="flip-card w-full h-full">
        <div className="flip-card-inner w-full h-full">
          {/* Front Side */}
          <div className="flip-card-front w-full h-full">
            <Card className="w-full h-full flex items-center justify-center">
              <CardHeader className="flex flex-col items-center space-y-4">
                {/* Avatar */}
                <Avatar className="w-32 h-32 border-4 border-[#AACF45]">
                  <AvatarImage src={member.imageUrl} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                {/* Name and Role */}
                <CardTitle className="text-center">
                  <div className="text-xl font-bold text-[#08AFF1]">
                    {member.name}
                  </div>
                  <div className="text-md text-gray-600 mt-2">{member.role}</div>
                </CardTitle>
              </CardHeader>
            </Card>
          </div>

          {/* Back Side */}
          <div className="flip-card-back w-full h-full">
            <Card className="w-full h-full flex items-center justify-center p-4 text-center bg-white shadow-lg rounded-lg">
              <CardContent>
                <p className="text-gray-700 text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;