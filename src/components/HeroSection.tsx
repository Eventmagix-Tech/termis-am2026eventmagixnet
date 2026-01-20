import { motion } from "framer-motion";
import keyVisual from "@/assets/termis-hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full pt-14 md:pt-16 overflow-hidden bg-gradient-to-b from-[#2a3d2a] via-[#3d2a4a] to-background">
      {/* Gradient overlay on sides for smooth blending */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#2a3d2a] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#3d2a4a] to-transparent" />
      </div>

      {/* Key Visual - Larger with padding adjustment */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="relative w-full px-0"
      >
        <img 
          src={keyVisual} 
          alt="TERMIS-AM 2026 - Bench. Chip. Clinic. Where Y'at in regeneration?"
          className="w-full h-auto object-contain scale-105 md:scale-110"
        />
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;