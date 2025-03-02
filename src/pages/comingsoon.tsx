import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import ComingSoonPage from "@/components/ComingSoonPage"
export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <ComingSoonPage />
      <Footer />
    </div>
  );
}
