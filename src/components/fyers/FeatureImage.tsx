// File: FeatureImage.tsx
import React from 'react';

const FeatureImage: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-50">
      <div className="max-w-lg mx-auto">
    
        
        {/* This is where you would place your trading interface image */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
          {/* <div className="h-64 bg-gray-700 flex items-center justify-center"> */}

            <img 
              src="/trading-dashboard.jpg" 
              alt="Trading Interface" 
              className="w-full h-auto"
            /> 
          {/* </div> */}
          
          {/* Chart indicators */}
          <div className="flex justify-center p-4">
            <div className="w-2 h-2 rounded-full bg-blue-500 mx-1"></div>
            <div className="w-2 h-2 rounded-full bg-blue-500 mx-1"></div>
            <div className="w-2 h-2 rounded-full bg-blue-500 mx-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureImage;