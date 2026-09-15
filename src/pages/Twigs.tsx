import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { Users } from "lucide-react";

const Twigs = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="TWIGs (Thematic Working Interest Groups)"
        description="Thematic Working Interest Groups (TWIGs) at TERMIS-AM 2026 in New Orleans. Please check back soon for TWIG session program updates."
      />
      <Header />
      <PageHeader title="TWIGs (Thematic Working Interest Groups)" />

      <main id="main">
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-muted/50 rounded-2xl p-12 shadow-lg">
                <Users className="w-16 h-16 text-accent mx-auto mb-6" aria-hidden="true" />
                <p className="text-xl text-primary font-medium leading-relaxed">
                  Please check back soon for TWIG session program updates!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Twigs;
