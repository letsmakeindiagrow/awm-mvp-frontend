import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { BlogSection } from "@/components/blog-section";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer"; // ✅ Import the Blob Background
import BlobStatic from "@/components/BlobStatic";
import LogosSlideshow from "@/components/LogosSlideshow";
// import Quotes from "@/components/Quotes";
export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <BlobStatic />
      <Navbar />
      {/* <Quotes /> */}
      <Hero />
      <Features />
      <BlogSection />
      <Stats />
      <Testimonials />
      <CTA />
      <LogosSlideshow />
      <Footer />
    </div>
  );
}
