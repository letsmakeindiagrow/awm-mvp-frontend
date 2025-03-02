const OurCommitment = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 mb-16">
      <div className="relative bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#AACF45]">
        <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-8 -translate-y-8">
          <svg viewBox="0 0 100 100" className="text-[#08AFF1] opacity-60">
            <path
              d="M96,20.3c-1.4-2-3.8-3.3-6.4-3.3h-30c-2.2,0-4,1.8-4,4v28c0,2.2,1.8,4,4,4h3.3l-8.8,16.6c-1.1,2-1.2,4.5-0.3,6.7 c0.9,2.2,2.8,3.7,5.1,4.1c4.3,0.8,8.7-1.6,10.1-5.5l8.7-26h11.8c2.3,0,4.6-1,6.1-2.8l10.9-13.1C99.1,28.7,98.7,23.7,96,20.3z"
              fill="currentColor"
            />
            <path
              d="M52.4,17H22.6c-2.2,0-4,1.8-4,4v28c0,2.2,1.8,4,4,4h3.3l-8.8,16.6c-1.1,2-1.2,4.5-0.3,6.7c0.9,2.2,2.8,3.7,5.1,4.1 c4.3,0.8,8.7-1.6,10.1-5.5l8.7-26h11.8c2.2,0,4-1.8,4-4V21C56.4,18.8,54.6,17,52.4,17z"
              fill="currentColor"
            />
          </svg>
        </div>

        <h2 className="text-2xl font-bold text-[#08AFF1] mb-6">
          Our Commitment
        </h2>

        <div className="text-justify text-gray-700 text-lg leading-relaxed relative z-10">
          <p className="mb-4">
            At Aadyanvi Wealth Management, our commitment is to ensure your
            investment goals are not just met but exceeded. We strive to provide
            clarity and confidence in your financial journey, helping you
            navigate the complexities of the market with ease.
          </p>
          <p>
            We aim to build lasting relationships with our clients, grounded in
            trust and a shared commitment to financial success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-center">
          <div className="bg-gray-50 p-6 rounded-lg border-b-2 border-[#08AFF1]">
            <div className="w-16 h-16 bg-[#AACF45] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800">Trust</h3>
            <p className="text-gray-600 text-sm mt-2">
              Building relationships based on transparency and integrity
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border-b-2 border-[#08AFF1]">
            <div className="w-16 h-16 bg-[#AACF45] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800">Excellence</h3>
            <p className="text-gray-600 text-sm mt-2">
              Striving for exceptional results in everything we do
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border-b-2 border-[#08AFF1]">
            <div className="w-16 h-16 bg-[#AACF45] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800">Client-Centric</h3>
            <p className="text-gray-600 text-sm mt-2">
              Putting your financial goals at the center of all we do
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCommitment;
