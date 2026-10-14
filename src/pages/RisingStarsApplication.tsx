import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import RisingStarsProfiles, { DocumentText } from "@/components/RisingStarsProfiles";
import { risingStarsIntro } from "@/data/risingStars";

const RisingStarsApplication = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Rising Stars of TERMIS-AM 2026"
      description="Meet the Rising Stars of TERMIS-AM 2026: early-career independent investigators advancing tissue engineering and regenerative medicine."
    />
    <Header />
    <PageHeader title="Rising Stars of TERMIS-AM 2026" />
    <main id="main" className="container mx-auto px-4 py-12 md:py-16 max-w-6xl">
      <div className="max-w-4xl mx-auto text-lg text-foreground leading-relaxed space-y-4 mb-12">
        {risingStarsIntro.map((runs, index) => <p key={index}><DocumentText runs={runs} /></p>)}
      </div>
      <RisingStarsProfiles />
    </main>
    <Footer />
  </div>
);

export default RisingStarsApplication;
