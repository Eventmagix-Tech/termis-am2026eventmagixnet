import { motion } from "framer-motion";
import { Medal } from "lucide-react";
import { Link } from "react-router-dom";

const keyDates = [
  {
    icon: Medal,
    title: "NIH R13 Travel Awards Application Deadline",
    date: "August 1, 2026",
  },
  {
    icon: Medal,
    title: "HCS Travel Awards Application Deadline",
    date: "August 1, 2026",
  },
  {
    icon: Medal,
    title: "SYIS Awards Application Deadline",
    date: "August 18, 2026",
  },
  {
    icon: Medal,
    title: "WFIRM YI Awards Application Deadline",
    date: "August 1, 2026",
  },
];

const KeyDatesSection = () => {
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
            ⚜ Mark Your Calendar ⚜
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
            Key Dates
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto justify-items-center">
          {keyDates.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <Link
                to="/key-dates"
                className="relative bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden group h-full flex flex-col block"
              >
                <div className="h-1 bg-gradient-to-r from-accent to-gold" />

                <div className="p-4 text-center flex flex-col flex-1">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-2 group-hover:bg-accent/20 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>

                  <h3 className="text-sm font-serif font-semibold text-foreground mb-2 leading-snug flex-1">
                    {item.title}
                  </h3>

                  <div className="text-base font-bold text-secondary mt-auto">
                    {item.date}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-6"
        >
          <Link
            to="/key-dates"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/90 underline underline-offset-4 font-semibold transition-colors"
          >
            View all key dates
            <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyDatesSection;
