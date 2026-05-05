import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const PDF_URL = "/downloads/TERMIS-AM-2026-Program-at-a-Glance.pdf";

const ProgramAtAGlance = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Program at a Glance"
      description="Overview of the TERMIS-AM 2026 scientific program schedule."
    />
    <Header />
    <PageHeader title="Program at a Glance" />

    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-foreground text-lg leading-relaxed mb-6">
            Please click the button below to view the preliminary TERMIS-AM 2026 scientific program at a glance.
          </p>
          <Button variant="purple" size="lg" asChild>
            <a href={PDF_URL} download>
              <Download className="w-4 h-4 mr-2" />
              TERMIS-AM 2026 Program at a Glance
            </a>
          </Button>
        </div>

        <div className="max-w-5xl mx-auto mt-12">
          <div className="rounded-2xl overflow-hidden border border-border shadow-card bg-white">
            <iframe
              src={PDF_URL}
              title="TERMIS-AM 2026 Program at a Glance"
              className="w-full h-[800px] md:h-[1000px]"
            />
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default ProgramAtAGlance;
