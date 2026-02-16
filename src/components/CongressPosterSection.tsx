import { motion } from "framer-motion";
import congressPoster from "@/assets/congress-poster-banner.jpg";

const CongressPosterSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={congressPoster}
            alt="TERMIS-AM 2026 Congress Poster – Bench. Chip. Clinic. Where Y'at in regeneration?"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CongressPosterSection;
