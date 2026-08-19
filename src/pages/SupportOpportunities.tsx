import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Mail, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import prospectusImage from "@/assets/sponsorshipexhibition-prospectus.jpg.asset.json";
import floorPlanImage from "@/assets/floor-plan-section.jpeg.asset.json";
import onlineSponsorshipImage from "@/assets/online-sponsorship-portal.webp.asset.json";
import exhibitorManualPdf from "@/assets/TERMIS-2026_Expo-Manual.pdf.asset.json";
import exhibitorManualThumb from "@/assets/Technical_Manual_thumbnail.webp.asset.json";

const SupportOpportunities = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead title="Support Opportunities" description="Sponsorship and exhibition opportunities at TERMIS-AM 2026." />
      <Header />
      
      <main id="main" className="flex-1">
        <PageHeader
          title="Support Opportunities"
          subtitle="Partner with TERMIS-AM 2026 and showcase your organization"
        />

        {/* Downloadable Resources */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-primary mb-8">Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border/50 group">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={prospectusImage.url}
                      alt="Conference exhibition hall with networking attendees"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <Button variant="gold" className="w-full whitespace-normal h-auto py-3 text-sm leading-tight" asChild>
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

                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border/50 group">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={floorPlanImage.url}
                      alt="Live exhibition floor plan showing booth layout and exhibitor positions"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <Button variant="gold" className="w-full whitespace-normal h-auto py-3 text-sm leading-tight" asChild>
                      <a
                        href="https://kenes.eventsair.com/ExhibitionPortal/termis-am-2026/exhibition-portal-app/floorplan/live"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Exhibition Floorplan
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border/50 group">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={onlineSponsorshipImage.url}
                      alt="Online Sponsorship Portal"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <Button variant="gold" className="w-full whitespace-normal h-auto py-3 text-sm leading-tight" asChild>
                      <a
                        href="https://kenes.eventsair.com/SponsorshipPortal/Account/Login?ReturnUrl=%2FSponsorshipPortal%2Ftermis-am-2026%2Fonlinesponsorshipportal"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Online Sponsorship Portal
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border/50 group">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={exhibitorManualThumb.url}
                      alt="Exhibitor Technical Manual cover showing a conference exhibition floor"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <Button variant="gold" className="w-full whitespace-normal h-auto py-3 text-sm leading-tight" asChild>
                      <a
                        href={exhibitorManualPdf.url}
                        target="_blank"
                        download
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Exhibitor Technical Manual
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
                <p className="text-foreground/85 mb-6">
                  TERMIS-AM 2026 Organizing Secretariat, Industry Liaison & Sales Associate
                </p>
                <a 
                  href="mailto:jalexander@kenes.com"
                  className="inline-flex items-center gap-2 text-accent hover:underline transition-colors font-medium text-lg"
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
