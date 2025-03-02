const LogosSlideshow = () => {
  // Sample media logos with image paths - replace with your actual logos
  const logos = [
    { name: "Moneycontrol", imgSrc: "/groww.jpg" },
    { name: "The Economic Times", imgSrc: "/angelone.png" },
    { name: "Business Today", imgSrc: "/hdfc.jpg" },
    { name: "Forbes", imgSrc: "/fyers.png" },
    { name: "Banking Finance", imgSrc: "/kotak.png" },
    { name: "YourStory", imgSrc: "/motilala.png" },
    { name: "India Today", imgSrc: "/upstox.png" },
    { name: "Mint", imgSrc: "/zerodha.jpg" },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-gray-50 to-blue-50 p-12 overflow-hidden">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-gray-800 tracking-tight">
          Brokers Supported
        </h2>
        <div className="mx-auto w-24 h-1 bg-blue-500 mt-3 rounded-full"></div>
      </div>

      <div className="relative overflow-hidden">
        {/* Primary slider container */}
        <div className="logo-slider">
          <div className="logo-slide-track">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div key={`logo-${index}`} className="logo-slide">
                <div className="w-48 h-20 flex items-center justify-center px-4 py-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200">
                  <img
                    src={logo.imgSrc}
                    alt={logo.name}
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
              </div>
            ))}

            {/* Duplicate set for continuous loop */}
            {logos.map((logo, index) => (
              <div key={`logo-dup-${index}`} className="logo-slide">
                <div className="w-48 h-20 flex items-center justify-center px-4 py-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200">
                  <img
                    src={logo.imgSrc}
                    alt={logo.name}
                    className="max-h-16 max-w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .logo-slider {
          height: 100px;
          margin: auto;
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .logo-slide-track {
          animation: scroll 20s linear infinite;
          display: flex;
          width: calc(256px * ${logos.length * 2});
        }

        .logo-slide-track:hover {
          animation-play-state: paused;
        }

        .logo-slide {
          width: 192px;
          margin: 0 32px;
          transition: transform 0.3s;
        }

        .logo-slide:hover {
          transform: scale(1.1);
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-256px * ${logos.length}));
          }
        }
      `}</style>
    </div>
  );
};

export default LogosSlideshow;
