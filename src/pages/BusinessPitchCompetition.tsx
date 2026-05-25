import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

const BusinessPitchCompetition = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Business Pitch Competition"
        description="Submit your concept for the TERMIS-AM 2026 Business Pitch Competition. Pitch your innovative ideas in tissue engineering and regenerative medicine to expert judges."
      />
      <Header />
      <PageHeader title="Business Pitch Competition" />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Deadline Alert */}
        <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 flex items-center gap-3 mb-8">
          <AlertCircle className="h-5 w-5 text-accent shrink-0" />
          <p className="text-foreground/90 font-medium">
            The deadline for submissions is{" "}
            <Badge variant="default" className="ml-1 bg-accent text-white text-sm">
              July 31, 2026
            </Badge>
          </p>
        </div>

        {/* Body */}
        <div className="text-lg text-foreground space-y-4 mb-6">
          <p>Do you have an innovative tissue engineering or regenerative medicine technology that you want to commercialize?</p>
          <p>Are you interested in learning more about technology translation, entrepreneurship, and product development?</p>
          <p>Do you want the opportunity to showcase your innovation to leaders in academia, industry, and investment?</p>
          <p>If so, we invite you to apply to the TERMIS-Americas (TERMIS-AM) 2026 Business Pitch Competition (BPC) by submitting your application until July 31, 2026.</p>
        </div>

        {/* CTA */}
        <div className="text-center my-10">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Click Here to Submit
          </Button>
        </div>

        <div className="text-lg text-foreground space-y-4">
          <p>The TERMIS-AM Business Pitch Competition is designed to support and highlight emerging innovators across the tissue engineering and regenerative medicine community. We strongly encourage applications from students, postdoctoral fellows, faculty, clinicians, entrepreneurs, and early-stage companies interested in advancing transformative technologies toward clinical and commercial impact.</p>
          <p>This exciting competition provides participants with the opportunity to pitch their tissue engineering or regenerative medicine product, technology, or business concept to the broader TERMIS community and a distinguished panel of judges with extensive experience in investment, entrepreneurship, and technology commercialization.</p>
          <p>Up to five finalists will be selected to compete live during the TERMIS-AM 2026 Annual Meeting in New Orleans, Louisiana. Following the presentations, judges will select first-, second-, and third-place winners, who will receive monetary awards of $2,000, $1,000, and $500, respectively.</p>
          <p>In addition to the judge-selected awards, conference attendees will vote to recognize an "Audience Favorite," which will receive a $500 monetary prize.</p>
          <p>Beyond the competition itself, finalists will have the opportunity to virtually engage with entrepreneurial coaches from the TERMIS-AM Industry Committee prior to the meeting. These coaches will provide guidance on pitch structure, presentation content, and communication strategy to help participants refine and strengthen their presentations.</p>
          <p>Importantly, all applicants to the TERMIS-AM 2026 Business Pitch Competition—regardless of finalist selection status—will have the opportunity to request feedback from members of the TERMIS-AM Industry Committee regarding their application and commercialization approach.</p>
        </div>

        <h3 className="text-xl font-bold text-primary mt-8 mb-4">Finalist Pitch Presentation Format & Timing</h3>

        <div className="text-lg text-foreground space-y-4">
          <p>Each finalist will deliver a 5-minute pitch presenting their product, technology, and/or business opportunity to the judging panel and TERMIS audience.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessPitchCompetition;
