import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import hcsLogo from "@/assets/histochemical-society-logo.png";

const GuestSocietyAnnouncementsSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-accent/5 via-background to-secondary/5">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-accent font-medium text-sm tracking-wider uppercase">
            <span aria-hidden="true">⚜</span> In Partnership <span aria-hidden="true">⚜</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
            Guest Society Announcements
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Link
            to="/hcs-travel-awards"
            aria-label="The Histochemical Society — HCS Travel Awards"
            className="block bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 p-8 md:p-12 border border-accent/10"
          >
            <img
              src={hcsLogo}
              alt="The Histochemical Society"
              className="max-w-md w-full h-auto mx-auto"
              loading="lazy"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GuestSocietyAnnouncementsSection;
