import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InfoCards from "@/components/InfoCards";
import WelcomeLetterSection from "@/components/WelcomeLetterSection";
import TimelineSection from "@/components/TimelineSection";
import SpeakersSection from "@/components/SpeakersSection";
import VenueSection from "@/components/VenueSection";
import CTASection from "@/components/CTASection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <InfoCards />
        <WelcomeLetterSection />
        <TimelineSection />
        <SpeakersSection />
        <VenueSection />
        <CTASection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
