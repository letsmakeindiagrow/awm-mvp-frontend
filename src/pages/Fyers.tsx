// File: LoginPage.tsx
import React from 'react';
import Logo from "../components/fyers/logo";
import LoginForm from '../components/fyers/LoginForm';
import FeatureImage from '../components/fyers/FeatureImage';
import Navbar from '@/components/navbar';

const LoginPage: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Left side - Dark background with image */}
      <div className="hidden md:flex md:w-1/2 bg-gray-900 text-white relative">
        <div className="absolute left-4">
          <Logo />
          {/* <Navbar /> */}
        </div>
        <FeatureImage />
      </div>

      {/* Right side - Login form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8">
        <div className="md:hidden mb-8">
          <Logo />
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;