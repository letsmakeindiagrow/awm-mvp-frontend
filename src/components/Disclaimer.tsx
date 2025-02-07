import React from "react";
"use client";

const Disclaimer: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-gray-200 border border-gray-300 rounded-2xl shadow-lg text-gray-800 mt-24 mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center uppercase tracking-wide">
        Disclaimer
      </h2>
      <p className="mb-4 leading-relaxed text-lg">
        The information provided on this platform is made available <strong>"as is"</strong> for general informational purposes only. It is not intended as financial or investment advice and should not be relied upon for trading or decision-making.
      </p>
      <p className="mb-4 leading-relaxed text-lg">
        While we strive to ensure accuracy, completeness, and timeliness, we cannot guarantee that all data is up-to-date or error-free. Users must verify information independently before making any financial or investment decisions.
      </p>
      <p className="mb-4 leading-relaxed text-lg">
        The application assumes no responsibility for any inaccuracies, omissions, or delays in the data provided. Users bear full risk associated with the use of this information and acknowledge that investing involves risks, including potential losses.
      </p>
      <p className="mb-4 leading-relaxed text-lg">
        Nothing presented on this platform should be considered an endorsement or recommendation to buy, sell, or hold any financial asset. As investors ourselves, we may hold positions in some of the mentioned assets.
      </p>
      <p className="mb-4 leading-relaxed text-lg">
        Under no circumstances shall this application be liable for any direct, indirect, incidental, or consequential damages arising from the use of its content.
      </p>
      <p className="mb-4 leading-relaxed text-lg">
        This platform operates under the laws of <strong>India</strong>. By accessing this application, you agree that any legal disputes shall be resolved exclusively in the courts of <strong>Prayagraj, Uttar Pradesh</strong>.
      </p>
      <p className="text-gray-600 italic text-sm text-center mt-6">
        *By using this application, you acknowledge and accept the terms stated in this disclaimer.*
      </p>
    </div>
  );
};

export default Disclaimer;
