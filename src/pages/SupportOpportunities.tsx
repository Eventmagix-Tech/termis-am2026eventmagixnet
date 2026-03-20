import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import prospectusImage from "@/assets/sponsorship-prospectus-cover.jpg";

const SupportOpportunities = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead title="Support Opportunities" description="Sponsorship and exhibition opportunities at TERMIS-AM 2026." />
      <Header />
      
      <main className="flex-1">
        <PageHeader
          title="Support Opportunities"
          subtitle="Partner with TERMIS-AM 2026 and showcase your organization"
        />

        {/* Downloadable Resources */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-primary mb-8">Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border/50 group">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={prospectusImage}
                      alt="Conference exhibition hall with networking attendees"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <Button variant="gold" className="w-full h-auto py-3 !whitespace-normal text-center" asChild>
                      <a
                        href="/downloads/TERMIS-AM-2026-Sponsorship-Exhibition-Prospectus.pdf"
                        target="_blank"
                        download
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Sponsorship & Exhibition Prospectus
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-foreground/80 mb-8">
                For any enquiries regarding TERMIS-AM 2026 Sponsorship & Exhibition opportunities, please contact:
              </p>
              
              <div className="bg-muted/50 rounded-xl p-8 shadow-lg border border-accent/10">
                <h2 className="text-2xl font-bold text-primary mb-2">
                  Mr. Jason Alexander
                </h2>
                <p className="text-foreground/70 mb-6">
                  TERMIS-AM 2026 Organizing Secretariat, Industry Liaison & Sales Associate
                </p>
                <a 
                  href="mailto:jalexander@kenes.com"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium text-lg"
                >
                  <Mail className="h-5 w-5" />
                  jalexander@kenes.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SupportOpportunities;
