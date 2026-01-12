import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clock } from "lucide-react";

interface ComingSoonProps {
  title: string;
}

const ComingSoon = ({ title }: ComingSoonProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Banner */}
      <section className="pt-20 md:pt-24 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
            {title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-muted/50 rounded-2xl p-12 shadow-lg">
              <Clock className="w-16 h-16 text-accent mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-primary mb-4">
                Will be available soon...
              </h2>
              <p className="text-muted-foreground">
                We are working hard to bring you this content. Please check back later for updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComingSoon;
