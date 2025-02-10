import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { BlogSection } from "@/components/blog-section";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer"; // ✅ Import the Blob Background
import BlobStatic from "@/components/BlobStatic";
export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <BlobStatic />
      <Navbar />
      <Hero />
      <Features />
      <BlogSection />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
