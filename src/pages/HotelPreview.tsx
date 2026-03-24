import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import hiltonImg from "@/assets/hilton-new-orleans-riverside.png";

const HotelPreview = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Hotel Information"
        description="Book your stay at the Hilton New Orleans Riverside for TERMIS-AM 2026."
        noindex={true}
      />
      <Header />

      <main className="flex-1">
        <PageHeader
          title="Hotel Information"
          subtitle="Official accommodation for TERMIS-AM 2026"
        />

        {/* Intro Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="bg-muted/50 rounded-xl overflow-hidden shadow-lg border border-accent/10 mb-10">
                <div className="grid md:grid-cols-2 gap-0">
                  <img
                    src={hiltonImg}
                    alt="Hilton New Orleans Riverside"
                    className="w-full h-64 md:h-full object-cover"
                  />
                  <div className="p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                      Welcome
                    </h2>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      Welcome to the official accommodation booking platform for delegates attending the 2026 TERMIS-AM Conference.
                    </p>
                    <p className="text-foreground/80 leading-relaxed mb-4">
                      We are delighted to offer you a seamless booking experience at the conference's headquarters hotel, the renowned Hilton New Orleans Riverside, ideally located in the heart of the city:
                    </p>
                    <p className="text-lg font-semibold text-primary">
                      📍 2 Poydras St, New Orleans, LA 70130
                    </p>
                    <p className="text-foreground/80 leading-relaxed mt-4">
                      Enjoy the convenience of staying just moments away from the conference venue while experiencing the comfort and hospitality of one of New Orleans' premier hotels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto flex flex-col space-y-12">

              {/* Effortless Booking */}
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">🏨 Effortless Booking Experience</h3>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  Secure your accommodation through our dedicated online booking system:
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  All rooms are managed within a centralized system, allowing you to confirm your reservation quickly and securely using either:
                </p>
                <ul className="list-disc list-inside text-foreground/80 space-y-1 mb-6">
                  <li>Credit/Debit Card</li>
                  <li>Pro-forma Invoice</li>
                </ul>
                <a
                  href="https://book.passkey.com/e/51204738"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="gold" className="h-auto py-3 px-8 text-sm leading-tight">
                    Book Now <ExternalLink className="w-4 h-4 ml-1" />
                  </Button>
                </a>
              </div>

              {/* Exclusive Group Rates */}
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">💼 Exclusive Group Rates</h3>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  Special conference rates have been negotiated for your convenience:
                </p>
                <div className="bg-primary/5 rounded-lg p-4 mb-4 max-w-md">
                  <p className="font-semibold text-primary mb-1">Hilton New Orleans Riverside</p>
                  <p className="text-lg font-bold text-accent">💲 From 295 USD per night</p>
                  <p className="text-sm text-foreground/60">(single room)</p>
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Please note: Rates are subject to 16.75% tax and a $3.00 nightly occupancy fee (subject to change). Final pricing, including applicable taxes and fees, will be displayed during booking.
                </p>
              </div>

              {/* Additional Details */}
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Additional Details</h3>
                <ul className="space-y-4 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-lg">🕓</span>
                    <span><strong>Check-in:</strong> 4:00 PM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg">🕚</span>
                    <span><strong>Check-out:</strong> 11:00 AM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg">📶</span>
                    <span><strong>Complimentary Wi-Fi</strong> included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg">🍽️</span>
                    <span><strong>Breakfast</strong> not included</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Footer Note */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                We kindly encourage you to review the booking and cancellation policies carefully during the reservation process.
              </p>
              <p className="text-lg font-medium text-primary">
                ✨ Make the most of your conference experience by staying at the heart of the action — comfort, convenience, and connection all in one place.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HotelPreview;
