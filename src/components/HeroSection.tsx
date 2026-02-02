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

          {/* River floating/flowing effect overlay */}
          <div className="absolute inset-0 z-20 rounded-lg overflow-hidden pointer-events-none">
            {/* Main river flow - diagonal shimmer */}
            <motion.div
              className="absolute"
              style={{
                top: '35%',
                left: '-20%',
                width: '140%',
                height: '30%',
                background: 'linear-gradient(105deg, transparent 0%, transparent 40%, rgba(100, 200, 255, 0.08) 45%, rgba(150, 220, 255, 0.12) 50%, rgba(100, 200, 255, 0.08) 55%, transparent 60%, transparent 100%)',
                transform: 'rotate(-5deg)',
              }}
              animate={{
                x: ['-30%', '30%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            {/* Secondary river shimmer - slower */}
            <motion.div
              className="absolute"
              style={{
                top: '38%',
                left: '-20%',
                width: '140%',
                height: '25%',
                background: 'linear-gradient(105deg, transparent 0%, transparent 35%, rgba(80, 180, 220, 0.06) 42%, rgba(120, 200, 240, 0.1) 50%, rgba(80, 180, 220, 0.06) 58%, transparent 65%, transparent 100%)',
                transform: 'rotate(-5deg)',
              }}
              animate={{
                x: ['20%', '-40%'],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Subtle floating particles effect */}
            <motion.div
              className="absolute"
              style={{
                top: '30%',
                left: '0%',
                width: '100%',
                height: '35%',
                background: 'radial-gradient(ellipse 100px 30px at 20% 50%, rgba(150, 220, 255, 0.15) 0%, transparent 70%)',
              }}
              animate={{
                x: ['-10%', '110%'],
                opacity: [0, 0.8, 0.8, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Second floating particle */}
            <motion.div
              className="absolute"
              style={{
                top: '40%',
                left: '0%',
                width: '100%',
                height: '25%',
                background: 'radial-gradient(ellipse 60px 20px at 30% 50%, rgba(100, 200, 255, 0.12) 0%, transparent 70%)',
              }}
              animate={{
                x: ['-15%', '115%'],
                opacity: [0, 0.6, 0.6, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
                delay: 2,
              }}
            />
          </div>

          {/* Subtle border glow animation */}
          <motion.div
            className="absolute inset-0 rounded-lg pointer-events-none z-30"
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

      {/* Animated bottom wave divider */}
      <div className="absolute -bottom-1 left-0 right-0 z-10">
        <svg 
          viewBox="0 0 1440 120" 
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          {/* Background wave layer - gold */}
          <motion.path
            className="fill-accent/20"
            initial={{ d: "M0,120 L0,120 L1440,120 L1440,120 Z" }}
            animate={{ 
              d: [
                "M0,80 C180,100 360,60 540,80 C720,100 900,40 1080,60 C1260,80 1380,50 1440,70 L1440,120 L0,120 Z",
                "M0,70 C180,50 360,90 540,70 C720,50 900,90 1080,70 C1260,50 1380,80 1440,60 L1440,120 L0,120 Z",
                "M0,80 C180,100 360,60 540,80 C720,100 900,40 1080,60 C1260,80 1380,50 1440,70 L1440,120 L0,120 Z"
              ]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          {/* Middle wave layer - gold */}
          <motion.path
            className="fill-accent/40"
            initial={{ d: "M0,120 L0,120 L1440,120 L1440,120 Z" }}
            animate={{ 
              d: [
                "M0,90 C240,70 480,110 720,90 C960,70 1200,100 1440,80 L1440,120 L0,120 Z",
                "M0,85 C240,105 480,65 720,85 C960,105 1200,70 1440,90 L1440,120 L0,120 Z",
                "M0,90 C240,70 480,110 720,90 C960,70 1200,100 1440,80 L1440,120 L0,120 Z"
              ]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          
          {/* Front wave layer - background color (main divider) */}
          <motion.path
            className="fill-background"
            initial={{ d: "M0,120 L0,120 L1440,120 L1440,120 Z" }}
            animate={{ 
              d: [
                "M0,100 C320,80 640,110 960,95 C1280,80 1400,100 1440,90 L1440,120 L0,120 Z",
                "M0,95 C320,110 640,85 960,100 C1280,115 1400,90 1440,100 L1440,120 L0,120 Z",
                "M0,100 C320,80 640,110 960,95 C1280,80 1400,100 1440,90 L1440,120 L0,120 Z"
              ]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;