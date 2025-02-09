import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import RegistrationForm from "@/components/RegistrationForm";
import BlobBackground from "@/components/BlobBackground";
import BlobBackgroundOther from "@/components/BlobBackgroundOther";
export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* <Navbar /> */}
      <BlobBackgroundOther />
      <RegistrationForm />
      {/* <Footer /> */}
    </div>
  );
}
