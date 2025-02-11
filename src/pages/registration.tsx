import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import RegistrationForm from "@/components/RegistrationForm";
import BlobBackground from "@/components/BlobBackground";
import BlobBackgroundOther from "@/components/BlobBackgroundOther";
import TempRegistration from "@/components/TempRegistration";
import PushkarRegistration from "@/components/PushkarRegistration";
export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* <Navbar /> */}
      {/* <RegistrationForm /> */}
      {/* <TempRegistration /> */}
      <PushkarRegistration />
      {/* <Footer /> */}
    </div>
  );
}
