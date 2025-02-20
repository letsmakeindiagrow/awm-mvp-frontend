import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import AboutHero from "@/components/AboutHero";
import TeamSection from "@/components/TeamSection";
import TechnologyVision from "@/components/TechnologyVision";
import BlobStatic from "@/components/BlobStatic";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 bg-gray-50 mt-24">
        {/* <BlobStatic/> */}
        <AboutHero />
        <TeamSection />
        <TechnologyVision />
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;