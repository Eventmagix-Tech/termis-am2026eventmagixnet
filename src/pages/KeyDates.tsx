import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Calendar, FileText, UserPlus, Clock, CalendarDays } from "lucide-react";

const keyDates = [
  {
    icon: FileText,
    title: "Call for General Sessions, TWIG Sessions & Workshop Submissions Opens",
    date: "January 7, 2026",
  },
  {
    icon: Clock,
    title: "General Sessions, TWIG Sessions & Workshops Submission Deadline",
    date: "February 23, 2026",
  },
  {
    icon: FileText,
    title: "Call for Abstracts Opens",
    date: "March 16, 2026",
  },
  {
    icon: UserPlus,
    title: "Registration Opens",
    date: "March 30, 2026",
  },
  {
    icon: Clock,
    title: "Abstract Submission Deadline",
    date: "May 11, 2026",
  },
  {
    icon: Calendar,
    title: "Early Registration Deadline",
    date: "September 18, 2026",
  },
  {
    icon: CalendarDays,
    title: "Conference Dates",
    date: "November 15-18, 2026",
    highlight: true,
  },
];

const KeyDates = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead title="Key Dates" description="Important deadlines for abstract submission, registration, and more at TERMIS-AM 2026." />
      <Header />
      
      <main className="flex-1">
        <PageHeader
          title="Key Dates"
          subtitle="Important deadlines and milestones for TERMIS-AM 2026"
          tag="⚜ Mark Your Calendar ⚜"
        />

        {/* Dates Timeline */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {keyDates.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-start gap-6 pb-8 ${
                    index !== keyDates.length - 1 ? "border-l-2 border-accent/30 ml-7" : "ml-7"
                  }`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute -left-[1.9rem] w-14 h-14 rounded-full flex items-center justify-center shadow-lg ${
                    item.highlight 
                      ? "bg-gradient-to-br from-accent to-gold" 
                      : "bg-white border-2 border-accent"
                  }`}>
                    <item.icon className={`w-6 h-6 ${item.highlight ? "text-white" : "text-accent"}`} />
                  </div>
                  
                  {/* Content */}
                  <div className={`flex-1 ml-10 p-6 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 ${
                    item.highlight 
                      ? "bg-gradient-to-br from-primary to-secondary text-white" 
                      : "bg-card"
                  }`}>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <h3 className={`text-lg font-semibold ${item.highlight ? "text-white" : "text-foreground"}`}>
                        {item.title}
                      </h3>
                      <span className={`text-xl font-bold whitespace-nowrap ${
                        item.highlight ? "text-gold" : "text-primary"
                      }`}>
                        {item.date}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default KeyDates;
