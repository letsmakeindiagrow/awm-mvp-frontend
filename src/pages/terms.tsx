import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import TermsPage from "@/components/TermsOfUse";
export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <TermsPage />
      <Footer />
    </div>
  );
}
