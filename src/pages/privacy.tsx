import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import PrivacyPolicy from "@/components/PrivacyPolicy"
export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
}
