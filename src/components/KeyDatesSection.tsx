import { motion } from "framer-motion";
import { Calendar, FileText, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

const keyDates = [
  {
    icon: Calendar,
    title: "Call for Abstracts",
    description: "Abstract submission opens",
    date: "April 10, 2026",
  },
  {
    icon: UserPlus,
    title: "Registration Opens",
    description: "Secure your spot at TERMIS-AM 2026",
    date: "April 2026",
  },
  {
    icon: FileText,
    title: "Abstract Submission Deadline",
    description: "Submit your abstracts before the deadline",
    date: "May 18, 2026",
  },
];

const KeyDatesSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-medium text-sm tracking-wider uppercase">
            ⚜ Mark Your Calendar ⚜
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
            Key Dates
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {keyDates.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 overflow-hidden group h-full flex flex-col"
            >
              {/* Top accent bar */}
              <div className="h-1.5 bg-gradient-to-r from-accent to-gold" />
              
              <div className="p-6 text-center flex flex-col flex-1">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-accent" />
                </div>
                
                <h3 className="text-lg font-serif font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-3 flex-1">
                  {item.description}
                </p>
                
                <div className="text-xl font-bold text-secondary mt-auto">
                  {item.date}
                </div>

                {/* Decorative fleur-de-lis */}
                <div className="absolute bottom-3 right-3 text-accent/10 text-xl group-hover:text-accent/30 transition-colors duration-300">
                  ⚜
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-8"
        >
          <Link
            to="/key-dates"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
          >
            View all key dates
            <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyDatesSection;
