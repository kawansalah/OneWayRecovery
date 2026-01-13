import { motion } from "framer-motion";
import logo from "../assets/logo.svg";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-oxford-dark via-rich-black to-oxford-dark"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,white_2px,white_4px)]" />

      <div className="relative flex flex-col items-center">
        {/* Circular Progress Ring */}
        <div className="relative w-48 h-48 mb-8">
          {/* Outer Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="96"
              cy="96"
              r="88"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="4"
              fill="none"
            />
            <motion.circle
              cx="96"
              cy="96"
              r="88"
              stroke="url(#gradient)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              initial={{ strokeDasharray: "0 552.9" }}
              animate={{ strokeDasharray: "552.9 0" }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e40af" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
            </defs>
          </svg>

          {/* Logo in Center */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <img
              src={logo}
              alt="OneWay Recovery"
              className="h-20 w-auto filter drop-shadow-2xl"
            />
          </motion.div>

          {/* Inner Glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-brand-primary/20 rounded-full blur-3xl animate-pulse" />
          </div>
        </div>

        {/* Company Name with Stagger Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-center"
        >
          <div className="flex items-center gap-2 mb-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "40px" }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="h-0.5 bg-gradient-to-r from-transparent to-brand-primary"
            />
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              One Way{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                Recovery
              </span>
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "40px" }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="h-0.5 bg-gradient-to-l from-transparent to-brand-primary"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="text-white/50 text-sm font-semibold tracking-wider uppercase"
          >
            24/7 Emergency Service
          </motion.p>
        </motion.div>

        {/* Loading Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="flex items-center gap-2 mt-8"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-brand-primary"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </motion.div>

        {/* Rotating Rings Background */}
        <motion.div
          className="absolute -z-10 pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-[500px] h-[500px] rounded-full border border-dashed border-brand-primary/10" />
        </motion.div>

        <motion.div
          className="absolute -z-10 pointer-events-none"
          animate={{ rotate: -360 }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="w-[400px] h-[400px] rounded-full border border-dashed border-brand-secondary/10" />
        </motion.div>

        {/* Outer Glow Effect */}
        <div className="absolute -z-20 w-[600px] h-[600px] bg-gradient-radial from-brand-primary/5 via-transparent to-transparent rounded-full blur-3xl" />
      </div>
    </motion.div>
  );
}
