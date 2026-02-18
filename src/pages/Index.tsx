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
  const [open, setOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Merhaba Dünya</DialogTitle>
            <DialogDescription>
              Hoş geldiniz!
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
