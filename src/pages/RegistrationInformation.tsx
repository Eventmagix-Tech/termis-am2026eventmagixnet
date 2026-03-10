import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const RegistrationInformation = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Registration Information" description="Registration details, fees, and deadlines for TERMIS-AM 2026." />
      <Header />
      
      <PageHeader title="Registration Information" />

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-muted/50 rounded-2xl p-8 md:p-12 shadow-lg text-center"
            >
              <div className="flex justify-center gap-4 mb-6">
                <Calendar className="w-12 h-12 text-accent" />
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Registration Opens March 30, 2026
              </h2>
              
              <p className="text-lg text-foreground/80 mb-8">
                Registration for the 2026 TERMIS-AM Conference & Exhibition will open on March 30, 2026. We look forward to welcoming you to New Orleans in November 2026.
              </p>

              <div className="flex items-center justify-center gap-2 text-accent font-medium">
                <MapPin className="w-5 h-5" />
                <span>New Orleans, Louisiana</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RegistrationInformation;