import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Globe, Shirt, Mail, Shield, ShieldAlert, Calendar, MapPin, Building, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import hiltonImg from "@/assets/hilton-new-orleans-riverside.png";

const GeneralInformation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <PageHeader
          title="General Information"
          subtitle="Essential information for TERMIS-AM 2026 attendees"
        />

        {/* Quick Info Cards */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
              {/* Conference Dates */}
              <div className="bg-card rounded-xl p-6 shadow-card text-center">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Conference Dates</h3>
                <p className="text-2xl font-bold text-primary">November 15-18, 2026</p>
              </div>

              {/* Destination */}
              <div className="bg-card rounded-xl p-6 shadow-card text-center">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Destination</h3>
                <p className="text-xl font-bold text-primary mb-2">New Orleans, LA</p>
                <Link 
                  to="/explore-new-orleans" 
                  className="text-accent hover:text-accent/80 text-sm font-medium inline-flex items-center gap-1"
                >
                  Explore New Orleans <span>→</span>
                </Link>
              </div>

              {/* Venue */}
              <div className="bg-card rounded-xl p-6 shadow-card text-center">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Building className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Venue</h3>
                <p className="text-lg font-bold text-primary">Hilton New Orleans Riverside</p>
              </div>
            </div>
          </div>
        </section>

        {/* Venue Details */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-muted/50 rounded-xl overflow-hidden shadow-lg border border-accent/10">
                <div className="grid md:grid-cols-2 gap-0">
                  <img 
                    src={hiltonImg} 
                    alt="Hilton New Orleans Riverside" 
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <div className="p-8">
                    <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                      Hilton New Orleans Riverside
                    </h2>
                    <div className="space-y-3 text-foreground/80">
                      <p>Two Poydras Street</p>
                      <p>New Orleans, Louisiana 70130</p>
                      <p className="font-medium">+1 504-561-0500</p>
                    </div>
                    <a 
                      href="https://www.hilton.com/en/hotels/msynhhh-hilton-new-orleans-riverside/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium"
                    >
                      Visit hotel website <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Information Sections */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Language */}
              <div className="bg-card rounded-xl p-6 md:p-8 shadow-card border border-accent/10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">Language</h2>
                    <p className="text-foreground/80 leading-relaxed">
                      The official language of the 2026 TERMIS-AM Conference & Exhibition is English. No translations will be available during the meeting sessions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Clothing */}
              <div className="bg-card rounded-xl p-6 md:p-8 shadow-card border border-accent/10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shirt className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">Clothing</h2>
                    <p className="text-foreground/80 leading-relaxed">
                      The dress code for the 2026 TERMIS-AM Conference & Exhibition is business formal or business casual for all occasions unless stated otherwise.
                    </p>
                  </div>
                </div>
              </div>

              {/* Invitation Letter */}
              <div className="bg-card rounded-xl p-6 md:p-8 shadow-card border border-accent/10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">Invitation Letter</h2>
                    <div className="text-foreground/80 leading-relaxed space-y-4">
                      <p>
                        TERMIS-AM 2026 participants requiring a signed and stamped invitation letter should contact{" "}
                        <strong>Ms. Neyir Seda Utugen</strong>, Registration & Accommodation Manager, at{" "}
                        <a href="mailto:nutugen@kenes.com" className="text-accent hover:underline font-medium">
                          nutugen@kenes.com
                        </a>.
                      </p>
                      <p>
                        The invitation letters can be provided for the purpose of getting your institution's approval for your leave to attend the conference or for the purpose of visa application for international participants.
                      </p>
                      <p>
                        <strong>If you are a US citizen</strong> and are requesting the letter for institutional approval for your leave, please make sure to provide your full name (as printed in your passport/ID card), your organization, and full postal address.
                      </p>
                      <p>
                        <strong>If you are an international participant</strong> and are requesting the letter for visa application, please make sure to provide your full name (as printed in your passport), passport number, issue and expiry dates of your passport, your organization, and full postal address.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Liability & Insurance */}
              <div className="bg-card rounded-xl p-6 md:p-8 shadow-card border border-accent/10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">Liability & Insurance</h2>
                    <div className="text-foreground/80 leading-relaxed space-y-4">
                      <p>
                        TERMIS-AM and the Conference Organizing Secretariat cannot accept liability for personal accidents or loss of or damage to the private property of participants. Upon registration, participants agree that neither the TERMIS-AM Leadership and Council nor the Conference Organizing Secretariat assumes any liabilities.
                      </p>
                      <p>
                        Participants are advised to arrange their personal travel and health insurances for their trip wherever necessary.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Safety & Security */}
              <div className="bg-card rounded-xl p-6 md:p-8 shadow-card border border-accent/10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <ShieldAlert className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">Safety & Security</h2>
                    <div className="text-foreground/80 leading-relaxed space-y-4">
                      <p>
                        Bags and/or suitcases must not be left unattended at any time whether inside or outside the meeting venue and session halls. As all hotels do, we strongly recommend our participants to use their safety deposit boxes for their valuables.
                      </p>
                      <p>
                        As with the rest of the USA, please call <strong>911</strong> in case of any emergency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GeneralInformation;
