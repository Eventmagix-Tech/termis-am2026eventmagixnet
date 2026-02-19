import { useState } from "react";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Index = () => {
  const [popupOpen, setPopupOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <Dialog open={popupOpen} onOpenChange={setPopupOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Merhaba! 👋</DialogTitle>
            <DialogDescription className="text-base pt-2">
              Selam ben Verus App Builder tarafından oluşturuldum
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
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
