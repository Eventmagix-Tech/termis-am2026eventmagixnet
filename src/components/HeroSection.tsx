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
          
          {/* River Flow Animation Overlay */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 500"
            preserveAspectRatio="none"
          >
            <defs>
              {/* River flow gradient animation */}
              <linearGradient id="riverFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="40%" stopColor="transparent" />
                <stop offset="50%" stopColor="rgba(212, 175, 55, 0.4)" />
                <stop offset="60%" stopColor="transparent" />
                <stop offset="100%" stopColor="transparent" />
                <animate 
                  attributeName="x1" 
                  values="-100%;100%" 
                  dur="4s" 
                  repeatCount="indefinite"
                />
                <animate 
                  attributeName="x2" 
                  values="0%;200%" 
                  dur="4s" 
                  repeatCount="indefinite"
                />
              </linearGradient>
              
              {/* Secondary shimmer */}
              <linearGradient id="riverShimmer" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="45%" stopColor="transparent" />
                <stop offset="50%" stopColor="rgba(255, 255, 255, 0.2)" />
                <stop offset="55%" stopColor="transparent" />
                <stop offset="100%" stopColor="transparent" />
                <animate 
                  attributeName="x1" 
                  values="-100%;100%" 
                  dur="3s" 
                  repeatCount="indefinite"
                />
                <animate 
                  attributeName="x2" 
                  values="0%;200%" 
                  dur="3s" 
                  repeatCount="indefinite"
                />
              </linearGradient>
            </defs>
            
            {/* River path - curved path following typical banner river position */}
            <path 
              d="M0,350 Q150,320 300,340 T500,300 T700,320 T900,280 L1000,290 L1000,320 L900,310 T700,350 T500,330 T300,370 Q150,350 0,380 Z"
              fill="url(#riverFlow)"
              opacity="0.6"
            />
            <path 
              d="M0,355 Q150,325 300,345 T500,305 T700,325 T900,285 L1000,295 L1000,310 L900,300 T700,340 T500,320 T300,360 Q150,340 0,370 Z"
              fill="url(#riverShimmer)"
              opacity="0.5"
            />
          </svg>

          {/* Floating Sphere Animation Overlay - positioned over sphere area */}
          <motion.div
            className="absolute pointer-events-none"
            style={{
              top: '15%',
              right: '8%',
              width: '25%',
              height: '50%',
            }}
            animate={{
              y: [0, -8, 0, 6, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Subtle glow effect for the sphere */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: 'radial-gradient(circle at 30% 30%, rgba(212, 175, 55, 0.08) 0%, transparent 60%)',
                filter: 'blur(20px)',
              }}
            />
          </motion.div>

          {/* Additional ambient floating particles */}
          <motion.div
            className="absolute w-2 h-2 rounded-full bg-accent/20 blur-sm pointer-events-none"
            style={{ top: '25%', right: '20%' }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute w-1.5 h-1.5 rounded-full bg-accent/30 blur-sm pointer-events-none"
            style={{ top: '35%', right: '15%' }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute w-1 h-1 rounded-full bg-primary-foreground/20 blur-sm pointer-events-none"
            style={{ top: '45%', right: '25%' }}
            animate={{
              y: [0, -12, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
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