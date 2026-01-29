import { motion } from "framer-motion";
import keyVisual from "@/assets/termis-hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full pt-14 md:pt-16 overflow-hidden">
      {/* Extended background effect - creates the illusion of a larger banner */}
      <div 
        className="absolute inset-0 -top-[25%] -bottom-[25%] -left-[25%] -right-[25%] scale-150"
        style={{
          backgroundImage: `url(${keyVisual})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(40px) saturate(1.2)',
          opacity: 0.8,
        }}
      />
      
      {/* Gradient overlays for smooth blending */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20" />

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