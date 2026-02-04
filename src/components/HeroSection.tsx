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

          {/* Glowing gold line tracing Bench → Chip → Clinic */}
          <svg 
            className="absolute inset-0 w-full h-full z-20 pointer-events-none"
            viewBox="0 0 1000 400"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              {/* Glow filter for the line */}
              <filter id="goldGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              
              {/* Gradient for the animated line */}
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0" />
                <stop offset="40%" stopColor="hsl(var(--accent))" stopOpacity="1" />
                <stop offset="60%" stopColor="hsl(var(--accent))" stopOpacity="1" />
                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
              </linearGradient>
            </defs>
            
            {/* Static faint path outline */}
            <motion.path
              d="M 50,280 
                 C 100,260 150,240 200,220 
                 Q 280,180 360,200 
                 C 420,215 480,190 540,200 
                 Q 620,215 700,195 
                 C 780,175 860,210 950,180"
              fill="none"
              stroke="hsl(var(--accent))"
              strokeWidth="1"
              strokeOpacity="0.15"
              strokeLinecap="round"
            />
            
            {/* Animated glowing line */}
            <motion.path
              d="M 50,280 
                 C 100,260 150,240 200,220 
                 Q 280,180 360,200 
                 C 420,215 480,190 540,200 
                 Q 620,215 700,195 
                 C 780,175 860,210 950,180"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              filter="url(#goldGlow)"
              initial={{ pathLength: 0, pathOffset: 0 }}
              animate={{ 
                pathLength: [0, 0.3, 0.3, 0],
                pathOffset: [0, 0, 0.7, 1]
              }}
              transition={{ 
                duration: 8,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 2
              }}
            />

            {/* Secondary trailing glow */}
            <motion.path
              d="M 50,280 
                 C 100,260 150,240 200,220 
                 Q 280,180 360,200 
                 C 420,215 480,190 540,200 
                 Q 620,215 700,195 
                 C 780,175 860,210 950,180"
              fill="none"
              stroke="hsl(var(--accent))"
              strokeWidth="4"
              strokeOpacity="0.3"
              strokeLinecap="round"
              filter="url(#goldGlow)"
              initial={{ pathLength: 0, pathOffset: 0 }}
              animate={{ 
                pathLength: [0, 0.15, 0.15, 0],
                pathOffset: [0, 0.05, 0.75, 1]
              }}
              transition={{ 
                duration: 8,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 2
              }}
            />
          </svg>

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