import { motion } from "framer-motion";
import { FileText, Info, Calendar, Handshake } from "lucide-react";

const cards = [
  {
    title: "Session & Workshop Submission",
    description: "Submit your session and workshop proposals for TERMIS-AM 2026",
    icon: FileText,
    href: "/session-workshop-submission",
    color: "from-purple-deep to-purple-light",
  },
  {
    title: "General Information",
    description: "Essential details about the conference, venue, and attendance",
    icon: Info,
    href: "/general-information",
    color: "from-emerald-deep to-emerald-light",
  },
  {
    title: "Key Dates",
    description: "Important deadlines and milestones for TERMIS-AM 2026",
    icon: Calendar,
    href: "/key-dates",
    color: "from-purple-deep to-emerald-deep",
  },
  {
    title: "Sponsorship",
    description: "Partner with TERMIS-AM and showcase your innovations",
    icon: Handshake,
    href: "/support-opportunities",
    color: "from-gold-dark to-gold",
  },
];

const InfoCards = () => {
  return (
    <section className="pt-10 pb-20 px-4 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-medium text-sm tracking-wider uppercase">
            ⚜ Get Involved ⚜
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
            Conference Highlights
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.a
              key={card.title}
              href={card.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2"
            >
              {/* Top gradient bar */}
              <div className={`h-2 bg-gradient-to-r ${card.color}`} />
              
              <div className="p-6">
                <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <card.icon className="w-7 h-7 text-accent" />
                </div>
                
                <h3 className="text-xl font-serif font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {card.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.description}
                </p>

                {/* Decorative fleur-de-lis */}
                <div className="absolute bottom-4 right-4 text-accent/10 text-2xl group-hover:text-accent/30 transition-colors duration-300">
                  ⚜
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCards;
