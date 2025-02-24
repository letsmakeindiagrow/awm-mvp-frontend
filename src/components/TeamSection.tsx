import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeamMemberCard from "./TeamMemberCard";
import { TeamMember } from "../types";

const teamData: TeamMember[] = [
  { name: "Atul Shukla", role: "Founder & CEO", imageUrl: "./atul_shukla.webp" },
  { name: "Rishabh Patidar", role: "Senior Advisor", imageUrl: "./rishabh.jpeg" },
  { name: "Pranay Sharma", role: "Python & Full Stack Developer", imageUrl: "./pranay.jpeg" },
  { name: "Pushkar Aggarwal", role: "Python & Full Stack Developer", imageUrl: "./pushkar.jpeg" },
];

const TeamSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col items-center py-16">
      <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
      <Slider {...settings} className="w-full max-w-5xl">
        {teamData.map((member) => (
          <div key={member.name} className="px-6">
            <TeamMemberCard 
              member={member} 
              className="shadow-xl rounded-2xl overflow-hidden transform transition duration-300 hover:scale-110 bg-white p-6 text-center text-lg font-medium" 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamSection;
