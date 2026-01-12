import { motion } from "framer-motion";

const WelcomeLetterSection = () => {
  return (
    <section id="welcome" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-medium text-sm tracking-wider uppercase">
            ⚜ Welcome Message ⚜
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mt-2">
            Welcome Letter
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg shadow-card p-8 md:p-12 border border-accent/20"
        >
          <div className="prose prose-lg max-w-none text-foreground/90 space-y-6">
            <p className="text-lg leading-relaxed">
              Dear Colleagues and Friends,
            </p>

            <p className="leading-relaxed">
              It is our distinct pleasure to invite you to the Tissue Engineering and Regenerative Medicine International Society - Americas 2026 (TERMIS-AM 2026) Conference and 20th Anniversary Celebration of TERMIS in the vibrant city of New Orleans, Louisiana.
            </p>

            <p className="leading-relaxed">
              This year holds special significance. As we mark two decades of leadership in tissue engineering and regenerative medicine since the founding of TERMIS in 2006, we celebrate our collective achievements and look boldly to the future under the conference slogan: <span className="font-serif italic text-accent">"Bench. Chip. Clinic. Where y'at in regeneration?"</span>
            </p>

            <p className="leading-relaxed">
              Our scientific program will spotlight three cross-cutting themes that are reshaping tissue engineering and regenerative medicine while accelerating clinical translation: <strong className="text-secondary">CRISPR and Lipid Nanoparticles</strong>, <strong className="text-secondary">Organ-on-Chip Models</strong>, and <strong className="text-secondary">Artificial Intelligence</strong>.
            </p>

            <p className="leading-relaxed">
              The 20th anniversary of TERMIS will also offer a great opportunity to take stock of the successes in bringing tissue engineering and regenerative medicine from bench to bedside and of the opportunities for the next 20 years.
            </p>

            <p className="leading-relaxed">
              We invite you to join us for an unforgettable blend of innovation, anniversary festivities, and Southern hospitality. In the spirit of New Orleans, we will make sure the conference delivers a little <span className="font-serif italic">"lagniappe"</span>.
            </p>

            <p className="leading-relaxed">
              We look forward to welcoming you in 2026!
            </p>

            <p className="text-lg mt-8">
              Warm regards,
            </p>
          </div>

          {/* Decorative fleur-de-lis divider */}
          <div className="flex items-center justify-center mt-8 gap-4">
            <div className="h-px w-16 bg-accent/40" />
            <span className="text-accent text-2xl">⚜</span>
            <div className="h-px w-16 bg-accent/40" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WelcomeLetterSection;