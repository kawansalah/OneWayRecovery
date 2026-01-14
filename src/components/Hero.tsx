import { ChevronRight, Phone } from "lucide-react";
import { WhatsApp } from "./Icons";
import heroImg from "../assets/hero-image-5.jpg";
import heroImg2 from "../assets/hero-image-6.jpg";
import heroImg3 from "../assets/hero-image-7.jpg";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [heroImg, heroImg2, heroImg3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative h-125 sm:h-150 md:h-170 lg:h-180 rounded-3xl sm:rounded-[40px] lg:rounded-[80px] overflow-hidden group shadow-2xl mx-2 sm:mx-4"
    >
      {/* Background Container */}
      <div className="absolute inset-0 bg-rich-black">
        {/* Cinematic Background Image Slider */}
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Professional Recovery Service"
            className={`absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Dynamic Overlays - Reduced for clearer image visibility */}
        <div className="absolute inset-0 bg-linear-to-r from-oxford-dark/80 via-oxford-dark/40 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-oxford-dark/70 via-oxford-dark/30 to-transparent" />

        {/* Subtle Grid Pattern for Premium Feel */}
        <div className="absolute inset-0 opacity-[0.02] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,white_2px,white_4px)]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Hero Text Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center space-x-2 bg-brand-primary/15 border border-brand-primary/40 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-brand-secondary text-[10px] sm:text-xs font-black tracking-widest uppercase backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-brand-primary rounded-full animate-pulse" />
              <span className="hidden sm:inline">
                Available in Leicester & Surrounding Areas
              </span>
              <span className="sm:hidden">Leicester & Areas</span>
            </motion.div>

            {/* Main Heading - Mobile: With 24 Badge, Desktop: Standard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="lg:hidden flex items-start gap-4"
            >
              {/* Mobile 24 Badge - Top Left */}
              <div className="shrink-0 relative w-24 h-24 bg-linear-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center shadow-xl border-4 border-white/10">
                <div className="absolute inset-1 rounded-full border-2 border-dashed border-white/30 animate-[spin_15s_linear_infinite]" />
                <div className="flex flex-col items-center relative z-10">
                  <span className="text-white font-black text-4xl italic drop-shadow-lg">
                    24
                  </span>
                  <span className="text-white/90 font-black text-[8px] tracking-[0.2em] uppercase -mt-1">
                    HOURS
                  </span>
                </div>
              </div>

              {/* Mobile Heading Text */}
              <h1 className="text-white font-black text-[2rem] leading-[1.1] tracking-tighter flex-1">
                <span className="block italic">24 Hour</span>
                <span className="block bg-linear-to-r from-brand-primary via-brand-secondary to-sky-blue bg-clip-text text-transparent italic py-1">
                  Car Recovery
                </span>
                <span className="block text-xl not-italic font-bold tracking-tight text-white/95 mt-1">
                  in Leicester
                </span>
              </h1>
            </motion.div>

            {/* Desktop Heading - Hidden on Mobile */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="hidden lg:block text-white font-black text-6xl md:text-7xl lg:text-8xl xl:text-[100px] leading-[1.1] tracking-tighter"
            >
              <span className="block italic">24 Hour</span>
              <span className="block bg-linear-to-r from-brand-primary via-brand-secondary to-sky-blue bg-clip-text text-transparent italic py-1">
                Car Recovery
              </span>
              <span className="block text-4xl md:text-5xl lg:text-6xl not-italic tracking-tight font-bold text-white/95 mt-1 sm:mt-2">
                in Leicester
              </span>
            </motion.h1>

            {/* Description Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-white/90 text-base sm:text-lg md:text-xl max-w-xl font-medium leading-relaxed"
            >
              Fast, reliable, and professional emergency car recovery. We're
              here to help you get back on the road safely, anytime, anywhere.
            </motion.p>

            {/* CTA Buttons - Responsive Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/447377226647?text=Hello%2C%20I%20need%20car%20recovery%20assistance."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black text-base sm:text-lg shadow-xl shadow-[#25D366]/20 transition-all flex items-center justify-center space-x-3 group/btn hover:shadow-2xl hover:shadow-[#25D366]/30"
              >
                <WhatsApp className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>WhatsApp Us</span>
                <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="tel:+447377226647"
                className="bg-white/5 hover:bg-white/10 border border-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black text-base sm:text-lg backdrop-blur-md transition-all hover:border-white/30 flex items-center justify-center space-x-3"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>Call Now</span>
                <ChevronRight className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </div>

          {/* Decorative 24 Icon - Hidden on Mobile, Visible on Large Screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:flex lg:col-span-5 justify-center items-center"
          >
            <div className="relative">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-brand-primary/20 blur-[100px] rounded-full animate-pulse" />

              {/* Main Icon Circle */}
              <div className="relative w-72 xl:w-80 h-72 xl:h-80 bg-linear-to-br from-brand-primary via-brand-secondary to-sky-blue rounded-full flex items-center justify-center shadow-2xl border-8 border-white/10 backdrop-blur-sm">
                {/* Rotating Dotted Ring */}
                <div className="absolute inset-4 rounded-full border-4 border-dashed border-white/30 animate-[spin_20s_linear_infinite]" />

                {/* Inner Glow Effect */}
                <div className="absolute inset-8 rounded-full bg-white/5 backdrop-blur-xl" />

                {/* 24 Text */}
                <div className="flex flex-col items-center relative z-10">
                  <span className="text-white font-black text-8xl xl:text-9xl italic tracking-tighter drop-shadow-2xl">
                    24
                  </span>
                  <span className="text-white/90 font-black text-lg xl:text-xl tracking-[0.3em] uppercase -mt-3 xl:-mt-4 drop-shadow-lg">
                    Hours
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
