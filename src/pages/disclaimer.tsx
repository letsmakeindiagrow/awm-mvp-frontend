import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { BlogSection } from "@/components/blog-section";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import Disclaimer from "@/components/Disclaimer";
export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <Disclaimer />
      <Footer />
    </div>
  );
}
