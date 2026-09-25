import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Users, Download, ExternalLink } from "lucide-react";
import twigsPdfAsset from "@/assets/TWIGs_TERMIS-AM_2026_PPT_final_post.pdf.asset.json";

const PDF_URL = twigsPdfAsset.url;

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
        <section className="py-16 md:py-16">
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

        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <p className="text-foreground text-lg leading-relaxed">
                  New! Each TWIG now has its own 1-hour session at TERMIS-AM — Tuesday 3PM – 4PM, November 17, 2026.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Button variant="purple" asChild>
                    <a href={PDF_URL} download>
                      <Download className="w-4 h-4 mr-2" />
                      Download TWIGs Flyer (PDF)
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={PDF_URL} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Open PDF in new tab
                    </a>
                  </Button>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden border border-border shadow-card bg-white">
                <iframe
                  src={PDF_URL}
                  title="TWIGs of TERMIS-AM 2026 Flyer"
                  className="w-full h-[800px] md:h-[1100px]"
                  loading="lazy"
                >
                  <p className="text-foreground text-base">
                    Your browser is preventing the PDF from displaying inline. Use the buttons above to open or download it.
                  </p>
                </iframe>
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
