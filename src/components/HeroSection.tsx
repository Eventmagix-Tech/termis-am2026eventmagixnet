import { motion } from "framer-motion";
import keyVisual from "@/assets/termis-hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full pt-14 md:pt-16 overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 -top-[25%] -bottom-[25%] -left-[25%] -right-[25%]">
        {/* Base gradient layer */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 30% 20%, #2E1236 0%, transparent 50%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Emerald green blob */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 70% 60%, #004d2b 0%, transparent 45%)",
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Gold accent blob */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 50% 80%, rgba(212, 175, 55, 0.6) 0%, transparent 35%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 20, -20, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Secondary purple blob */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 80% 30%, #4A2C5A 0%, transparent 40%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            x: [-20, 20, -20],
            y: [10, -10, 10],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Deep emerald accent */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 20% 70%, #006d3b 0%, transparent 35%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 35, 0],
            y: [-15, 15, -15],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Subtle gold shimmer */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 40% 40%, rgba(232, 200, 75, 0.3) 0%, transparent 30%)",
          }}
          animate={{
            scale: [1.1, 0.9, 1.1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Blur overlay for smooth blending */}
        <div 
          className="absolute inset-0"
          style={{
            backdropFilter: 'blur(60px)',
            WebkitBackdropFilter: 'blur(60px)',
          }}
        />
      </div>
      
      {/* Gradient overlays for smooth blending with page */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-background/30" />

      {/* Key Visual - Full image visible */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative w-full px-4 md:px-8 lg:px-12 py-6 md:py-10"
      >
        <img 
          src={keyVisual} 
          alt="TERMIS-AM 2026 - Bench. Chip. Clinic. Where Y'at in regeneration?"
          className="w-full h-auto object-contain rounded-lg shadow-2xl"
        />
      </motion.div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 60" className="w-full h-auto fill-background">
          <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;