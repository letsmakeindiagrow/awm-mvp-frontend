import React from "react";

const BlobStatic: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0"
      >
        {/* Vertical green blobs */}
        <path
          d="M-20 -20 C30 0, 60 40, 80 20 S120 40, 140 20 S160 50, 180 30 V-50 H-50 Z"
          fill="rgba(170, 207, 69, 0.2)"
        />

        <path
          d="M-40 160 C10 180, 30 220, 80 200 S120 220, 140 200 S160 230, 180 210 V250 H-60 Z"
          fill="rgba(170, 207, 69, 0.2)"
        />
        <path
          d="M-20 240 C30 260, 50 300, 100 280 S140 300, 160 280 S180 310, 200 290 V330 H-40 Z"
          fill="rgba(170, 207, 69, 0.15)"
        />
        <path
          d="M-30 320 C20 340, 40 380, 90 360 S130 380, 150 360 S170 390, 190 370 V410 H-50 Z"
          fill="rgba(170, 207, 69, 0.2)"
        />
        {/* Horizontal wavy shapes */}
        <path
          d="M-50 40 C0 30, 50 50, 100 40 S150 30, 200 40 V60 C150 70, 100 50, 50 60 S0 70, -50 60 Z"
          fill="rgba(170, 207, 69, 0.15)"
        />
      </svg>
    </div>
  );
};

export default BlobStatic;
