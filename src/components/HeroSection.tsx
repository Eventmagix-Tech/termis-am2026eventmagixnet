import { motion } from "framer-motion";
import keyVisual from "@/assets/termis-key-visual.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full pt-16 md:pt-20 overflow-hidden bg-[#e8e0d0]">
      {/* Key Visual - Full image visible */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full"
      >
        <img 
          src={keyVisual} 
          alt="TERMIS-AM 2026 - Bench. Chip. Clinic. Where Y'at in regeneration?"
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full h-auto fill-background">
          <path d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;