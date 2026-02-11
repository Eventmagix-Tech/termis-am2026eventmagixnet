import { motion } from "framer-motion";
import bgImage from "@/assets/new-orleans-venue.jpg";

const milestones = [
  {
    year: "2006",
    title: "Biomaterials & Stem Cells",
    description: "Foundation of tissue engineering with groundbreaking stem cell research",
    icon: "🧫",
  },
  {
    year: "2012",
    title: "3D Bioprinting",
    description: "Revolutionary printing technologies for tissue scaffolds",
    icon: "🖨️",
  },
  {
    year: "2018",
    title: "Organ-on-a-Chip",
    description: "Microfluidic platforms revolutionizing drug testing",
    icon: "🔬",
  },
  {
    year: "2024",
    title: "AI & Machine Learning",
    description: "Computational approaches accelerating regenerative therapies",
    icon: "🤖",
  },
  {
    year: "2026",
    title: "Clinical Translation",
    description: "From bench to bedside - regenerative medicine in practice",
    icon: "🏥",
  },
];

const TimelineSection = () => {
  return (
    <section
      className="relative min-h-[70vh] flex items-center py-20 px-4 overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/75 to-primary/90" />

      <div className="relative z-10 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-wider uppercase">
            ⚜ Our Journey ⚜
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mt-2">
            20 Years of Clinical Translation
          </h2>
          <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto">
            The River of Science - flowing from fundamental research to transformative patient care
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Horizontal line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-accent/30 via-accent to-accent/30 transform -translate-y-1/2" />
          
          {/* Vertical line - Mobile */}
          <div className="lg:hidden absolute top-0 bottom-0 left-8 w-1 bg-gradient-to-b from-accent/30 via-accent to-accent/30" />

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-4 lg:min-h-[320px]">
            {milestones.map((milestone, index) => {
              const isTop = index % 2 === 0;
              
              return (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: isTop ? -30 : 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex lg:flex-col items-start lg:items-center ${
                    isTop 
                      ? "lg:self-start lg:pb-20" 
                      : "lg:self-end lg:pt-20"
                  }`}
                >
                  {isTop && (
                    <div className="hidden lg:block lg:mb-6 lg:text-center lg:order-first">
                      <h3 className="text-lg font-serif font-semibold text-primary-foreground mb-1">
                        {milestone.title}
                      </h3>
                      <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
                        {milestone.description}
                      </p>
                    </div>
                  )}

                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-white/10 border-4 border-accent shadow-gold flex items-center justify-center">
                      <span className="text-2xl">{milestone.icon}</span>
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                      {milestone.year}
                    </div>
                  </div>

                  <div className={`ml-6 lg:ml-0 lg:mt-6 lg:text-center ${isTop ? "lg:hidden" : ""}`}>
                    <h3 className="text-lg font-serif font-semibold text-primary-foreground mb-1">
                      {milestone.title}
                    </h3>
                    <p className="text-primary-foreground/60 text-sm leading-relaxed max-w-xs">
                      {milestone.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Decorative bridge illustration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative w-full max-w-3xl h-16 overflow-hidden">
            <svg viewBox="0 0 400 60" className="w-full h-full" preserveAspectRatio="none">
              <path
                d="M0,50 Q100,10 200,50 Q300,10 400,50"
                stroke="url(#goldGradientTimeline)"
                strokeWidth="3"
                fill="none"
              />
              <rect x="0" y="48" width="400" height="4" fill="url(#goldGradientTimeline)" rx="2" />
              <rect x="95" y="30" width="10" height="22" fill="hsl(43, 64%, 52%)" rx="2" />
              <rect x="195" y="30" width="10" height="22" fill="hsl(43, 64%, 52%)" rx="2" />
              <rect x="295" y="30" width="10" height="22" fill="hsl(43, 64%, 52%)" rx="2" />
              <defs>
                <linearGradient id="goldGradientTimeline" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(43, 64%, 52%)" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="hsl(43, 80%, 65%)" stopOpacity="1" />
                  <stop offset="100%" stopColor="hsl(43, 64%, 52%)" stopOpacity="0.5" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Animated bottom wave divider */}
      <div className="absolute -bottom-1 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" className="w-full h-auto block" preserveAspectRatio="none">
          <motion.path
            className="fill-background"
            initial={{ d: "M0,120 L0,120 L1440,120 L1440,120 Z" }}
            animate={{
              d: [
                "M0,100 C320,80 640,110 960,95 C1280,80 1400,100 1440,90 L1440,120 L0,120 Z",
                "M0,95 C320,110 640,85 960,100 C1280,115 1400,90 1440,100 L1440,120 L0,120 Z",
                "M0,100 C320,80 640,110 960,95 C1280,80 1400,100 1440,90 L1440,120 L0,120 Z",
              ],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </section>
  );
};

export default TimelineSection;
