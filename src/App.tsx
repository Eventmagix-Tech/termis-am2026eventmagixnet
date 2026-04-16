import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WelcomeLetter from "./pages/WelcomeLetter";
import ContactUs from "./pages/ContactUs";
import DetailedProgram from "./pages/DetailedProgram";
import GeneralInformation from "./pages/GeneralInformation";
import VisaInformation from "./pages/VisaInformation";
import ExploreNewOrleans from "./pages/ExploreNewOrleans";
import KeyDates from "./pages/KeyDates";
import Committees from "./pages/Committees";
import ProgramAtAGlance from "./pages/ProgramAtAGlance";
import PreConferenceWorkshops from "./pages/PreConferenceWorkshops";
import PlenaryKeynoteSpeakers from "./pages/PlenaryKeynoteSpeakers";
import RegistrationInformation from "./pages/RegistrationInformation";
import HotelAccommodation from "./pages/HotelAccommodation";
import SupportOpportunities from "./pages/SupportOpportunities";
import ConfirmedSponsors from "./pages/ConfirmedSponsors";
import PromotionalToolkit from "./pages/PromotionalToolkit";
import SessionWorkshopSubmission from "./pages/SessionWorkshopSubmission";
import CallForAbstracts from "./pages/CallForAbstracts";
import BusinessPitchCompetition from "./pages/BusinessPitchCompetition";
import AbstractTopics from "./pages/AbstractTopics";
import PreviewAbstractTopics from "./pages/PreviewAbstractTopics";
import ComingSoon from "./pages/ComingSoon";
import CallForAbstractsPlaceholder from "./pages/CallForAbstractsPlaceholder";
import RegistrationPreview from "./pages/RegistrationPreview";
import HotelPreview from "./pages/HotelPreview";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/welcome-letter" element={<WelcomeLetter />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/detailed-program" element={<DetailedProgram />} />
          <Route path="/general-information" element={<GeneralInformation />} />
          <Route path="/visa-information" element={<VisaInformation />} />
          <Route path="/explore-new-orleans" element={<ExploreNewOrleans />} />
          <Route path="/key-dates" element={<KeyDates />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="/program-at-a-glance" element={<ProgramAtAGlance />} />
          <Route path="/pre-conference-workshops" element={<PreConferenceWorkshops />} />
          <Route path="/plenary-keynote-speakers" element={<PlenaryKeynoteSpeakers />} />
          <Route path="/registration-information" element={<RegistrationInformation />} />
          <Route path="/hotel-accommodation" element={<HotelAccommodation />} />
          <Route path="/support-opportunities" element={<SupportOpportunities />} />
          <Route path="/confirmed-sponsors" element={<ConfirmedSponsors />} />
          <Route path="/promotional-toolkit" element={<PromotionalToolkit />} />
          <Route path="/session-workshop-submission" element={<SessionWorkshopSubmission />} />
          <Route path="/business-pitch-competition" element={<BusinessPitchCompetition />} />
          <Route path="/abstract-topics" element={<PreviewAbstractTopics />} />
          <Route path="/call-for-abstracts" element={<CallForAbstracts />} />
          <Route path="/preview-abstracts-review-2026" element={<CallForAbstracts />} />
          <Route path="/preview-registration-2026-v1" element={<RegistrationPreview />} />
          <Route path="/preview-hotel-2026-v1" element={<HotelPreview />} />
          <Route path="/preview-abstract-topics" element={<PreviewAbstractTopics />} />
          <Route path="/students-young-investigators" element={<ComingSoon title="Students & Young Investigators" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
