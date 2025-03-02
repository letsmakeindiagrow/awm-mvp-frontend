const TechnologyVision = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 mb-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-[#08AFF1] p-8 flex items-center justify-center">
            <div className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h2 className="text-2xl font-bold mt-4 text-center">
                Our Technology Vision
              </h2>
            </div>
          </div>
          <div className="md:w-2/3 p-8">
            <p className="text-justify text-gray-700 text-lg leading-relaxed mb-6">
              We leverage cutting-edge technologies to transform financial
              management. Our engineering team combines deep domain expertise
              with innovative software solutions, creating robust, secure, and
              intelligent platforms that redefine investment strategies.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="text-[#AACF45] font-bold mb-2 text-center">
                  AI-Powered Analysis
                </div>
                <p className="text-justify text-gray-600 text-sm">
                  Machine learning algorithms that analyze market trends and
                  predict high-growth opportunities
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="text-[#AACF45] font-bold mb-2 text-center">
                  Data Analytics
                </div>
                <p className="text-justify text-gray-600 text-sm">
                  Comprehensive data processing to extract valuable insights and
                  inform strategic decisions
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="text-center text-[#AACF45] font-bold mb-2">
                  Secure Infrastructure
                </div>
                <p className="text-justify text-gray-600 text-sm">
                  Enterprise-grade security protocols protecting client
                  information and financial assets
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="text-center text-[#AACF45] font-bold mb-2">
                  Personalized Solutions
                </div>
                <p className="text-justify text-gray-600 text-sm">
                  Customized technology tools tailored to individual client
                  needs and investment goals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyVision;
