import { motion } from "framer-motion";
import keyVisual from "@/assets/termis-hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full pt-14 md:pt-16 overflow-hidden">
      {/* Animated background effect */}
      <motion.div 
        initial={{ scale: 1.6, opacity: 0 }}
        animate={{ scale: 1.5, opacity: 0.8 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 -top-[25%] -bottom-[25%] -left-[25%] -right-[25%]"
        style={{
          backgroundImage: `url(${keyVisual})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(40px) saturate(1.2)',
        }}
      />
      
      {/* Animated gradient overlays */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-background/30" 
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20" 
      />

      {/* Floating shimmer effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 3, delay: 1, repeat: Infinity, repeatDelay: 5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12" />
      </motion.div>

      {/* Key Visual with enhanced animations */}
      <motion.div 
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          duration: 1, 
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.2
        }}
        className="relative w-full px-4 md:px-8 lg:px-12 py-6 md:py-10"
      >
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.4 }}
          className="relative group"
        >
          {/* Animated glow behind image */}
          <motion.div
            className="absolute -inset-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.img 
            src={keyVisual} 
            alt="TERMIS-AM 2026 - Bench. Chip. Clinic. Where Y'at in regeneration?"
            className="w-full h-auto object-contain rounded-lg shadow-2xl relative z-10"
            initial={{ filter: "brightness(0.8)" }}
            animate={{ filter: "brightness(1)" }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          {/* Subtle border glow animation */}
          <motion.div
            className="absolute inset-0 rounded-lg pointer-events-none z-20"
            initial={{ boxShadow: "inset 0 0 0 0 rgba(212, 175, 55, 0)" }}
            animate={{ 
              boxShadow: [
                "inset 0 0 0 0 rgba(212, 175, 55, 0)",
                "inset 0 0 30px 0 rgba(212, 175, 55, 0.1)",
                "inset 0 0 0 0 rgba(212, 175, 55, 0)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      {/* Animated bottom wave */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 z-10"
      >
        <svg viewBox="0 0 1440 60" className="w-full h-auto fill-background">
          <motion.path 
            d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
            initial={{ d: "M0,40 C240,40 480,40 720,40 C960,40 1200,40 1440,40 L1440,60 L0,60 Z" }}
            animate={{ d: "M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z" }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;