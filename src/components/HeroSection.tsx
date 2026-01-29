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
        <div className="relative">
          <img 
            src={keyVisual} 
            alt="TERMIS-AM 2026 - Bench. Chip. Clinic. Where Y'at in regeneration?"
            className="w-full h-auto object-contain rounded-lg shadow-2xl"
          />
          
          {/* Water ripple overlay - targeting the blue channel */}
          <div 
            className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 35%, black 45%, black 65%, transparent 75%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 35%, black 45%, black 65%, transparent 75%, transparent 100%)',
            }}
          >
            <div 
              className="absolute inset-0 water-ripple-effect"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(100, 180, 220, 0.08) 25%, rgba(120, 200, 240, 0.12) 50%, rgba(100, 180, 220, 0.08) 75%, transparent 100%)',
                backgroundSize: '200% 100%',
              }}
            />
            <div 
              className="absolute inset-0 water-shimmer-effect"
              style={{
                background: 'repeating-linear-gradient(90deg, transparent 0px, rgba(255, 255, 255, 0.03) 2px, transparent 4px, rgba(200, 230, 255, 0.05) 8px, transparent 12px)',
                backgroundSize: '100px 100%',
              }}
            />
          </div>
        </div>
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