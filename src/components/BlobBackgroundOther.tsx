import { motion } from "framer-motion";

const BlobBackgroundOther: React.FC = () => {
  return (
    <svg
      width="100%"
      height="100vh"
      viewBox="0 0 100 300"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 z-0"
    >
      {/* Green Blobs - #AACF45 */}
      <motion.circle
        cx="15"
        cy="40"
        r="8"
        fill="rgba(170, 207, 69, 0.3)"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="15"
        cy="80"
        r="6"
        fill="rgba(170, 207, 69, 0.25)"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="30"
        cy="120"
        r="10"
        fill="rgba(170, 207, 69, 0.3)"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.ellipse
        cx="35"
        cy="160"
        rx="12"
        ry="8"
        fill="rgba(170, 207, 69, 0.2)"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="50"
        cy="200"
        r="10"
        fill="rgba(170, 207, 69, 0.3)"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.polygon
        points="25,240 40,270 15,270"
        fill="rgba(170, 207, 69, 0.2)"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Blue Blobs - #08AFF1 */}
      <motion.circle
        cx="60"
        cy="60"
        r="10"
        fill="rgba(8, 175, 241, 0.3)"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.ellipse
        cx="65"
        cy="100"
        rx="15"
        ry="10"
        fill="rgba(8, 175, 241, 0.25)"
        animate={{ x: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="75"
        cy="140"
        r="7"
        fill="rgba(8, 175, 241, 0.2)"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="80"
        cy="180"
        rx="10"
        ry="6"
        fill="rgba(8, 175, 241, 0.2)"
        animate={{ x: [0, 6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* <motion.circle
        cx="85"
        cy="220"
        r="5"
        fill="rgba(8, 175, 241, 0.2)"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      /> */}
      <motion.polygon
        points="60,260 75,290 50,290"
        fill="rgba(8, 175, 241, 0.2)"
        animate={{ rotate: [0, -15, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="90"
        cy="400"
        r="8"
        fill="rgba(8, 175, 241, 0.2)"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
};

export default BlobBackgroundOther;
