import React from "react";
"use client";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-gray-200 border border-gray-300 rounded-2xl shadow-lg text-gray-800 mt-24 mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center uppercase tracking-wide">
        Privacy Policy
      </h2>
      <div className="h-[600px] overflow-hidden rounded-lg">
        <iframe
          src="/PrivacyPolicy.pdf"
          width="100%"
          height="100%"
          style={{ border: "none" }}
          title="Privacy Policy"
        >
          Your browser does not support PDFs. Please{" "}
          <a href="/PrivacyPolicy.pdf" download>
            download the PDF
          </a>{" "}
          to view it.
        </iframe>
      </div>
    </div>
  );
};

export default PrivacyPolicy;