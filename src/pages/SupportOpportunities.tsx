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
              </div>
            </div>
          </div>
        </section>

        {/* Exhibition Timetable */}
        <section className="py-12 md:py-16 bg-white,">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 border-b pb-4">
                EXHIBITION TIMETABLE
              </h2>

              <p className="text-lg mb-8">
                <strong>Setup:</strong> Sunday, November 15, 2026: 8:00am - 12:30pm
              </p>

              <h3 className="text-xl font-bold text-primary mb-6">
                Exhibition Dates & Hours:
              </h3>

              <div className="flex flex-col space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground text-lg border-b border-muted pb-1 mb-2">
                    Sunday, November 15, 2026
                  </h4>
                  <p className="text-foreground ml-4">
                    6:30pm - 8:30pm (Welcome Reception & Poster Session 1)
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground text-lg border-b border-muted pb-1 mb-2">
                    Monday, November 16, 2026
                  </h4>
                  <ul className="space-y-1 ml-4 text-foreground">
                    <li>9:30am - 10:00am (AM Coffee Break)</li>
                    <li>12:00pm - 1:30pm (Lunch Break – on your own)</li>
                    <li>4:35pm - 5:05pm (PM Coffee Break)</li>
                    <li>6:35pm - 8:00pm (Poster Session 2 & Exhibitor Viewing / Reception)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground text-lg border-b border-muted pb-1 mb-2">
                    Tuesday, November 17, 2026
                  </h4>
                  <ul className="space-y-1 ml-4 text-foreground">
                    <li>9:30am – 10:00am (AM Coffee Break)</li>
                    <li>12:00pm – 1:30pm (Lunch Break – on your own)</li>
                    <li>3:00pm – 3:30pm (PM Coffee Break)</li>
                    <li>5:15pm – 6:45pm (Poster Session 3 & Exhibitor Viewing / Reception)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground text-lg border-b border-muted pb-1 mb-2">
                    Wednesday, November 18, 2026
                  </h4>
                  <p className="text-foreground ml-4">
                    10:30am – 11:00am (AM Coffee Break)
                  </p>
                </div>
              </div>

              <div className="mt-8 text-lg">
                <p>
                  <strong>Dismantling:</strong> Wednesday, November 18, 2026: 13:00 - 17:00
                </p>
                <p className="text-muted-foreground text-base">
                  (larger builds dismantle should begin after 14:00)
                </p>
              </div>

              <p className="text-sm text-muted-foreground italic mt-6">
                *Hours are subject to change
              </p>
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
