import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InfoCards from "@/components/InfoCards";
import WelcomeLetterSection from "@/components/WelcomeLetterSection";
import CongressPosterSection from "@/components/CongressPosterSection";
import KeyDatesSection from "@/components/KeyDatesSection";
import TimelineSection from "@/components/TimelineSection";
import VenueSection from "@/components/VenueSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Helmet } from "react-helmet-async";

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "TERMIS-AM 2026",
  "description": "Tissue Engineering and Regenerative Medicine International Society – Americas Conference 2026",
  "image": "https://am2026.termis.org/og-image.jpg",
  "url": "https://am2026.termis.org",
  "startDate": "2026-11-15",
  "endDate": "2026-11-18",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled",
  "location": {
    "@type": "Place",
    "name": "Hilton New Orleans Riverside",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New Orleans",
      "addressRegion": "LA",
      "addressCountry": "US"
    }
  },
  "organizer": {
    "@type": "Organization",
    "name": "TERMIS Americas",
    "url": "https://termis.org"
  }
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="TERMIS-AM 2026 Annual Conference & Exhibition"
        description="Join TERMIS Americas 2026, Nov 15-18 in New Orleans. The premier tissue engineering and regenerative medicine conference. Bench. Chip. Clinic."
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(eventJsonLd)}</script>
      </Helmet>
      <Header />
      <main>
        <HeroSection />
        <KeyDatesSection />
        <WelcomeLetterSection />
        <CongressPosterSection />
        <InfoCards />
        {/* <TimelineSection /> */}
        {/* <VenueSection /> */}
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
