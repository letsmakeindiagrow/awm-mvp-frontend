import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import LoginComponent from "@/components/LoginComponent";
export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <LoginComponent />
      <Footer />
    </div>
  );
}
