import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient pt-20">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* DNA-like patterns */}
        <div className="absolute top-20 left-10 w-64 h-64 opacity-10">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              d="M20,10 Q50,30 20,50 Q-10,70 20,90"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-accent"
            />
            <path
              d="M80,10 Q50,30 80,50 Q110,70 80,90"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-accent"
            />
          </svg>
        </div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 rounded-full bg-accent/30 animate-float" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-accent/40 animate-float stagger-2" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 rounded-full bg-accent/20 animate-float stagger-3" />
        
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-accent border border-accent/40 rounded-full backdrop-blur-sm">
                ⚜ Annual Conference & Exhibition ⚜
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground mb-4"
            >
              TERMIS-AM
              <span className="block text-accent">2026</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-6 text-primary-foreground/90"
            >
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-accent" />
                <span className="font-medium">November 15-18, 2026</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-accent hidden sm:block" />
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="font-medium">New Orleans, LA</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl font-serif italic text-accent mb-8"
            >
              "Bench. Chip. Clinic. Where Y'at in regeneration?"
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="xl">
                Register Now
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="gold-outline" size="xl">
                Submit Abstract
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Flow Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative w-full lg:max-w-lg mx-auto"
          >
            <FlowVisualization />
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto fill-background">
          <path d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
};

const FlowVisualization = () => {
  const stages = [
    { 
      title: "Bench", 
      subtitle: "Lab Research",
      icon: "🔬"
    },
    { 
      title: "Chip", 
      subtitle: "Microfluidics",
      icon: "🧬"
    },
    { 
      title: "Clinic", 
      subtitle: "Patient Care",
      icon: "🏥"
    },
  ];

  return (
    <div className="relative py-8 px-4">
      {/* Connection line */}
      <div className="absolute top-1/2 left-12 right-12 h-1 bg-gradient-to-r from-accent/30 via-accent to-accent/30 transform -translate-y-1/2 hidden md:block rounded-full" />
      
      {/* Flow particles animation */}
      <div className="absolute top-1/2 left-12 right-12 transform -translate-y-1/2 hidden md:block overflow-hidden">
        <div className="w-3 h-3 rounded-full bg-accent animate-flow-particle absolute left-0" />
        <div className="w-2 h-2 rounded-full bg-accent/70 animate-flow-particle absolute left-0 [animation-delay:1s]" />
        <div className="w-2 h-2 rounded-full bg-accent/50 animate-flow-particle absolute left-0 [animation-delay:2s]" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 relative z-10">
        {stages.map((stage, index) => (
          <motion.div
            key={stage.title}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
            className="flex flex-col items-center relative"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/80 backdrop-blur-sm border-4 border-accent shadow-[0_8px_30px_-4px_rgba(212,175,55,0.5)] flex items-center justify-center mb-3 hover:scale-110 transition-transform duration-300">
              <span className="text-3xl md:text-4xl">{stage.icon}</span>
            </div>
            <h3 className="text-lg md:text-xl font-serif font-bold text-primary-foreground">
              {stage.title}
            </h3>
            <p className="text-xs md:text-sm text-primary-foreground/70">{stage.subtitle}</p>
            
            {/* Arrow between stages */}
            {index < stages.length - 1 && (
              <div className="hidden md:flex absolute top-1/2 -right-10 transform -translate-y-1/2">
                <ArrowRight className="w-5 h-5 text-accent" />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
