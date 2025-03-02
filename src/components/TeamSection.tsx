import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeamMemberCard from "./TeamMemberCard";
import { TeamMember } from "../types";

const teamData: TeamMember[] = [
  {
    name: "Atul Shukla",
    role: "Founder & CEO",
    imageUrl: "./Atul.jpg",
    bio: "Atul is a seasoned derivatives professional with over 13 years of expertise in the Indian capital markets. He founded Aadyanvi Wealth Management to empower retail traders with sustainable wealth creation strategies.",
  },
  {
    name: "Puja Shukla",
    role: "Co-Founder and Philanthropist",
    imageUrl: "./Puja.jpg",
    bio: "Pooja Shukla is a dedicated philanthropist with a strong background in Sociology and Philosophy. She focuses on community empowerment and financial literacy.",
  },
  {
    name: "Rishabh Patidar",
    role: "Senior Research Analyst (Equity)",
    imageUrl: "./Rishabh.jpg",
    bio: "Rishabh Patidar is a Senior Research Analyst specializing in equity research and sector analysis. He holds a Master’s degree in Chemical Engineering from IIT Gandhinagar.",
  },
  {
    name: "Pranay Sharma",
    role: "Tech. Developer",
    imageUrl: "./pranay.jpeg",
    bio: "Pranay is a skilled developer with a passion for building scalable and efficient systems.",
  },
  {
    name: "Pushkar Aggarwal",
    role: "Tech. Developer",
    imageUrl: "./pushkar.jpeg",
    bio: "Pushkar is an expert in Python and full-stack development, with a focus on delivering high-quality solutions.",
  },
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
    <div className="flex flex-col items-center py-100">
      <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
      <Slider {...settings} className="w-full max-w-5xl">
        {teamData.map((member) => (
          <div key={member.name} className="px-6">
            <TeamMemberCard member={member} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamSection;
