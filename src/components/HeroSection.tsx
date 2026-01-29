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
          
          {/* River of Science - Animated gold line overlay */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 400"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              {/* Gold gradient for the line */}
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#E8C84B" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.3" />
              </linearGradient>
              
              {/* Glow filter */}
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              
              {/* Animated gradient for the flowing effect */}
              <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0">
                  <animate attributeName="offset" values="-1;1" dur="4s" repeatCount="indefinite" />
                </stop>
                <stop offset="15%" stopColor="#E8C84B" stopOpacity="0.9">
                  <animate attributeName="offset" values="-0.85;1.15" dur="4s" repeatCount="indefinite" />
                </stop>
                <stop offset="30%" stopColor="#D4AF37" stopOpacity="0">
                  <animate attributeName="offset" values="-0.7;1.3" dur="4s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
            </defs>
            
            {/* Base path - subtle static gold line */}
            <path
              d="M 50 200 
                 C 150 180, 200 220, 280 200 
                 S 380 160, 450 190 
                 C 520 220, 580 180, 650 200 
                 S 780 240, 850 200 
                 C 900 170, 930 190, 950 200"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.4"
            />
            
            {/* Animated flowing light */}
            <path
              d="M 50 200 
                 C 150 180, 200 220, 280 200 
                 S 380 160, 450 190 
                 C 520 220, 580 180, 650 200 
                 S 780 240, 850 200 
                 C 900 170, 930 190, 950 200"
              fill="none"
              stroke="url(#flowGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              filter="url(#glow)"
            />
            
            {/* Secondary animated particle line */}
            <path
              d="M 50 200 
                 C 150 180, 200 220, 280 200 
                 S 380 160, 450 190 
                 C 520 220, 580 180, 650 200 
                 S 780 240, 850 200 
                 C 900 170, 930 190, 950 200"
              fill="none"
              stroke="#E8C84B"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="5 25"
              opacity="0.6"
              filter="url(#glow)"
            >
              <animate 
                attributeName="stroke-dashoffset" 
                values="0;-30" 
                dur="2s" 
                repeatCount="indefinite" 
              />
            </path>
          </svg>
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