import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InfoCards from "@/components/InfoCards";
import TimelineSection from "@/components/TimelineSection";
import SpeakersSection from "@/components/SpeakersSection";
import VenueSection from "@/components/VenueSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <InfoCards />
        <TimelineSection />
        <SpeakersSection />
        <VenueSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
