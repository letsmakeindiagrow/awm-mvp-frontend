import React from 'react';

const BlobStatic: React.FC = () => {
  return (
    <svg
      width="100%"
      height="350vh"
      viewBox="0 0 100 350"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 z-0"
    >
      {/* First section - top blobs */}
      <path
        d="M-20 -20 C30 0, 60 40, 80 20 S120 40, 140 20 S160 50, 180 30 V-50 H-50 Z"
        fill="rgba(170, 207, 69, 0.2)"
      />
      
      <path
        d="M40 -30 C90 20, 120 40, 150 20 S190 40, 210 20 S230 50, 250 30 V-50 H20 Z"
        fill="rgba(8, 175, 241, 0.15)"
      />

      {/* Second section */}
      <path
        d="M-30 80 C20 100, 40 130, 90 110 S130 130, 150 110 S170 140, 190 120 V160 H-50 Z"
        fill="rgba(170, 207, 69, 0.15)"
      />
      
      <path
        d="M50 90 C100 110, 130 140, 160 120 S200 140, 220 120 S240 150, 260 130 V170 H30 Z"
        fill="rgba(8, 175, 241, 0.2)"
      />

      {/* Third section */}
      <path
        d="M-40 160 C10 180, 30 220, 80 200 S120 220, 140 200 S160 230, 180 210 V250 H-60 Z"
        fill="rgba(170, 207, 69, 0.2)"
      />
      
      <path
        d="M30 170 C80 190, 110 230, 140 210 S180 230, 200 210 S220 240, 240 220 V260 H10 Z"
        fill="rgba(8, 175, 241, 0.15)"
      />

      {/* Fourth section */}
      <path
        d="M-20 240 C30 260, 50 300, 100 280 S140 300, 160 280 S180 310, 200 290 V330 H-40 Z"
        fill="rgba(170, 207, 69, 0.15)"
      />
      
      <path
        d="M50 250 C100 270, 130 310, 160 290 S200 310, 220 290 S240 320, 260 300 V340 H30 Z"
        fill="rgba(8, 175, 241, 0.2)"
      />

      {/* Fifth section - bottom blobs */}
      <path
        d="M-30 320 C20 340, 40 380, 90 360 S130 380, 150 360 S170 390, 190 370 V410 H-50 Z"
        fill="rgba(170, 207, 69, 0.2)"
      />
      
      <path
        d="M40 330 C90 350, 120 390, 150 370 S190 390, 210 370 S230 400, 250 380 V420 H20 Z"
        fill="rgba(8, 175, 241, 0.15)"
      />
    </svg>
  );
};

export default BlobStatic;