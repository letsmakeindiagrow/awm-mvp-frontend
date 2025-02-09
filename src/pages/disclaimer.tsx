import { Navbar } from "@/components/navbar";
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
