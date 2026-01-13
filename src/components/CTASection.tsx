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
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-accent border border-accent/40 rounded-full">
              Early Bird Registration Open
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6"
          >
            Join the Future of
            <span className="block text-accent">Regenerative Medicine</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-foreground/70 text-lg mb-8 max-w-xl mx-auto"
          >
            Be part of the most comprehensive tissue engineering conference in the Americas. 
            Connect, collaborate, and shape the future of medicine.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="flex items-center gap-2 text-foreground/80 text-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>{benefit}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="hero" size="xl">
              Register Now
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="gold-outline" size="xl">
              Download Brochure
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-foreground/50 text-sm mt-6"
          >
            Early bird deadline: July 31, 2026 · Abstract submission deadline: August 15, 2026
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
