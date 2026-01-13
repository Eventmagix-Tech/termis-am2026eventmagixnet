import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const CTASection = () => {
  const benefits = [
    "Access to 100+ scientific sessions",
    "Networking with 2,000+ researchers",
    "Industry exhibition & career fair",
    "CME credits available",
  ];

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-5 left-10 w-24 h-24 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-5 right-10 w-32 h-32 rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center lg:justify-start gap-3 mb-3"
              >
                <span className="inline-block px-3 py-1 text-xs font-medium text-accent border border-accent/40 rounded-full">
                  Early Bird Open
                </span>
                <span className="text-foreground/50 text-xs hidden sm:inline">
                  Deadline: July 31, 2026
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl md:text-3xl font-serif font-bold text-primary mb-2"
              >
                Join the Future of <span className="text-accent">Regenerative Medicine</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-1 text-xs text-foreground/70"
              >
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right side - CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-end shrink-0"
            >
              <Button variant="hero" size="lg">
                Register Now
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button variant="gold-outline" size="lg">
                Download Brochure
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
