import { motion } from "framer-motion";
import { ArrowRight, Award, Medal, Star, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const awards = [
  {
    icon: Medal,
    title: "HCS Travel Awards",
    description:
      "\n",
    to: "/hcs-travel-awards",
  },
  {
    icon: Trophy,
    title: "TERMIS-AM Chapter Awards",
    description:
      "\n",
    to: "/am-chapter-awards",
  },
  {
    icon: Award,
    title: "WFIRM Young Investigator Awards",
    description:
      "\n",
    to: "/wfirm-young-investigator-awards",
  },
  {
    icon: Star,
    title: "Rising Stars of TERMIS-AM",
    description:
      "\n",
    to: "/rising-stars",
  },
];

const AwardsRecognitionSection = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="text-gold-text font-semibold text-sm tracking-wider uppercase">
            ⚜ Honoring Excellence ⚜
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
            Awards &amp; Recognition
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="h-full"
            >
              <Link
                to={award.to}
                className="relative bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden group h-full flex flex-col block"
              >
                <div className="h-1 bg-gradient-to-r from-accent to-gold" />

                <div className="p-4 text-center flex flex-col flex-1">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                    <award.icon className="w-5 h-5 text-accent" />
                  </div>

                  <h3 className="text-sm font-serif font-semibold mb-2 leading-snug flex-1 text-foreground">
                    {award.title}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    {award.description}
                  </p>

                  <span className="inline-flex items-center justify-center gap-1 text-xs font-semibold text-gold-text group-hover:text-gold transition-colors mt-auto">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsRecognitionSection;
