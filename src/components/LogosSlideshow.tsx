import { useEffect, useRef, useState } from "react";

const LogosSlideshow = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

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

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Clone the first item and check when it's out of view
    const checkPosition = () => {
      if (isHovering) return; // Pause scrolling when hovering

      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        // Reset scroll position to start when we reach halfway
        slider.scrollLeft = 0;
      } else {
        // Continue scrolling with increased speed (changed from 1 to 2)
        slider.scrollLeft += 2;
      }
    };

    // Start the animation with slightly increased speed (changed from 20ms to 15ms)
    const slideInterval = setInterval(checkPosition, 15);

    // Cleanup on unmount
    return () => clearInterval(slideInterval);
  }, [isHovering]);

  return (
    <div className="w-full bg-gradient-to-r from-gray-50 to-blue-50 p-12 overflow-hidden">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-gray-800 tracking-tight">
          Brokers Supported
        </h2>
        <div className="mx-auto w-24 h-1 bg-blue-500 mt-3 rounded-full"></div>
      </div>

      <div
        ref={sliderRef}
        className="flex overflow-x-scroll scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <div
            key={`logo-${index}`}
            className="flex-none flex items-center justify-center w-48 h-20 mx-4 transform transition-transform duration-300 hover:scale-110"
          >
            <div className="w-48 h-20 flex items-center justify-center px-4 py-2 rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200">
              <img
                src={logo.imgSrc}
                alt={logo.name}
                className="max-h-16 max-w-full object-contain"
              />
            </div>
          </div>
        ))}

        {/* Duplicate set for continuous scroll */}
        {logos.map((logo, index) => (
          <div
            key={`logo-dup-${index}`}
            className="flex-none flex items-center justify-center w-48 h-20 mx-4 transform transition-transform duration-300 hover:scale-110"
          >
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

      <style>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default LogosSlideshow;
