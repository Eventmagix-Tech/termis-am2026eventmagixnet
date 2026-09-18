import { motion } from "framer-motion";
import { CalendarClock, Medal } from "lucide-react";
import { Link } from "react-router-dom";

const keyDates = [
  {
    icon: Medal,
    title: "NIH R13 Travel Awards Application Deadline",
    date: "August 1, 2026",
    past: true,
  },
  {
    icon: Medal,
    title: "HCS Travel Awards Application Deadline",
    date: "August 1, 2026",
    past: true,
  },
  {
    icon: Medal,
    title: "SYIS Awards Application Deadline",
    date: "August 18, 2026",
    past: true,
  },
  {
    icon: Medal,
    title: "WFIRM YI Awards Application Deadline",
    date: "August 1, 2026",
    past: true,
  },
  {
    icon: Medal,
    title: "Business Pitch Competition Submission Deadline",
    date: "August 28, 2026",
    past: true,
  },
  {
    icon: Medal,
    title: "Late Breaking Abstract Submission Deadline",
    date: "September 7, 2026",
    past: true,
  },
  {
    icon: CalendarClock,
    title: "Extended Early-Bird Registration Deadline",
    date: "October 2, 2026",
    past: false,
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
                className={`relative bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden group h-full flex flex-col block ${
                  item.past ? "opacity-60 saturate-50" : ""
                }`}
              >
                <div className={`h-1 ${item.past ? "bg-muted" : "bg-gradient-to-r from-accent to-gold"}`} />

                <div className="p-4 text-center flex flex-col flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 transition-colors duration-300 ${
                      item.past
                        ? "bg-muted text-muted-foreground"
                        : "bg-accent/10 group-hover:bg-accent/20"
                    }`}
                  >
                    <item.icon className={`w-5 h-5 ${item.past ? "text-muted-foreground" : "text-accent"}`} />
                  </div>

                  <h3
                    className={`text-sm font-serif font-semibold mb-2 leading-snug flex-1 ${
                      item.past ? "text-muted-foreground" : "text-foreground"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <div className={`text-base font-bold mt-auto ${item.past ? "text-muted-foreground" : "text-secondary"}`}>
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
