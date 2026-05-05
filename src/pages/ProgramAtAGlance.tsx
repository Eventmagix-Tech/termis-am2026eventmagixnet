import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

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
            <object
              data={PDF_URL}
              type="application/pdf"
              className="w-full h-[800px] md:h-[1000px]"
            >
              <div className="flex flex-col items-center justify-center text-center gap-4 p-8 h-[800px] md:h-[1000px]">
                <p className="text-foreground text-base max-w-md">
                  Your browser or an extension is preventing the PDF from displaying inline.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="purple" asChild>
                    <a href={PDF_URL} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Open PDF in new tab
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={PDF_URL} download>
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </a>
                  </Button>
                </div>
              </div>
            </object>
          </div>
          <p className="text-sm text-muted-foreground text-center mt-4">
            If the document does not load, please disable your ad blocker for this page or use the buttons above to open or download it.
          </p>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default ProgramAtAGlance;
