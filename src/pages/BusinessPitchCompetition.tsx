import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

const SUBMIT_URL = "https://forms.gle/QDX4Ev968LbCsSDJ9";

const presentationPoints = [
  "The problem or unmet need being addressed",
  "The proposed solution or technology",
  "Regulatory Pathway (if applicable)",
  "Competitive landscape",
  "Market opportunity and commercialization strategy",
  "Development timeline and major milestones",
  "Team and relevant expertise",
];

const eligibilityRequirements = [
  "The proposed product or technology must be relevant to the tissue engineering and regenerative medicine community. Eligible concepts may include therapeutics, diagnostics, research tools, enabling technologies, or services.",
  "Applicants must not have received $100,000 or more in dilutive funding to support the proposed product, technology, or business. Non-dilutive funding sources—including, but not limited to, government grants—are permitted and do not count toward this limit.",
  "Applicants must be members in good standing with TERMIS-Americas (TERMIS-AM) at the time of application submission and remain in good standing through the TERMIS-AM 2026 Annual Meeting in order to be eligible for application review and finalist selection.",
  "If selected as a finalist, applicants must agree to attend the TERMIS-AM 2026 meeting in person and participate in the live Business Pitch Competition event.",
];

const importantDates = [
  "The TERMIS-AM 2026 Business Pitch Competition will take place during the TERMIS-AM Annual Meeting in New Orleans, Louisiana, November 15–18, 2026 (exact date and time to be announced). Finalists must be physically present to compete.",
  "Completed applications and all supporting materials must be submitted through the official submission form no later than July 31, 2026.",
  "The TERMIS-AM 2026 Industry Committee will review all submissions and notify the five selected finalists by September 1, 2026.",
  "Following finalist notification, selected teams will be paired with entrepreneurial coaches to schedule one or more virtual coaching sessions in advance of the competition.",
  "Applicants not selected as finalists may request feedback on their submission from members of the TERMIS-AM Industry Committee.",
];

const SubmitButton = () => (
  <div className="text-center my-10">
    <Button
      asChild
      size="lg"
      className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      <a href={SUBMIT_URL} target="_blank" rel="noopener noreferrer">
        Click Here to Submit
      </a>
    </Button>
  </div>
);

const BusinessPitchCompetition = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Business Pitch Competition"
        description="Apply to the TERMIS-AM 2026 Business Pitch Competition. Submit your tissue engineering or regenerative medicine innovation by August 14, 2026."
      />
      <Header />
      <PageHeader title="Business Pitch Competition" />

      <main id="main" className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Deadline Alert */}
        <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 flex items-center gap-3 mb-8">
          <AlertCircle className="h-5 w-5 text-accent shrink-0" />
          <p className="text-foreground/90 font-medium">
            The deadline for submissions is{" "}
            <Badge variant="default" className="ml-1 bg-accent text-white text-sm">
              August 14, 2026
            </Badge>
          </p>
        </div>

        <div className="text-lg text-foreground space-y-4 mb-6">
          <p>Do you have an innovative tissue engineering or regenerative medicine technology that you want to commercialize?</p>
          <p>Are you interested in learning more about technology translation, entrepreneurship, and product development?</p>
          <p>Do you want the opportunity to showcase your innovation to leaders in academia, industry, and investment?</p>
          <p>
            If so, we invite you to apply to the <strong>TERMIS-Americas (TERMIS-AM) 2026 Business Pitch Competition (BPC)</strong> by submitting your application until August 14, 2026.
          </p>
        </div>

        <SubmitButton />

        <div className="text-lg text-foreground space-y-4">
          <p>The TERMIS-AM Business Pitch Competition is designed to support and highlight emerging innovators across the tissue engineering and regenerative medicine community. We strongly encourage applications from students, postdoctoral fellows, faculty, clinicians, entrepreneurs, and early-stage companies interested in advancing transformative technologies toward clinical and commercial impact.</p>
          <p>This exciting competition provides participants with the opportunity to pitch their tissue engineering or regenerative medicine product, technology, or business concept to the broader TERMIS community and a distinguished panel of judges with extensive experience in investment, entrepreneurship, and technology commercialization.</p>
          <p>
            Up to <strong>five finalists</strong> will be selected to compete live during the TERMIS-AM 2026 Annual Meeting in New Orleans, Louisiana. Following the presentations, judges will select <strong>first-, second-, and third-place winners</strong>, who will receive <strong>monetary awards</strong> of $2,000, $1,000, and $500, respectively.
          </p>
          <p>
            In addition to the judge-selected awards, conference attendees will vote to recognize an "<strong>Audience Favorite</strong>," which will receive a <strong>$500 monetary prize</strong>.
          </p>
          <p>Beyond the competition itself, finalists will have the opportunity to virtually engage with entrepreneurial coaches from the TERMIS-AM Industry Committee prior to the meeting. These coaches will provide guidance on pitch structure, presentation content, and communication strategy to help participants refine and strengthen their presentations.</p>
          <p>Importantly, all applicants to the TERMIS-AM 2026 Business Pitch Competition—regardless of finalist selection status—will have the opportunity to request feedback from members of the TERMIS-AM Industry Committee regarding their application and commercialization approach.</p>
        </div>

        <h2 className="text-xl font-bold text-primary mt-10 mb-4">Finalist Pitch Presentation Format & Timing</h2>
        <div className="text-lg text-foreground space-y-4 mb-4">
          <p>Each finalist will deliver a 5-minute pitch presenting their product, technology, and/or business opportunity to the judging panel and TERMIS audience.</p>
          <p>At minimum, presentations should address the following:</p>
        </div>
        <ul className="list-disc ml-8 space-y-2 mb-6 font-medium text-foreground">
          {presentationPoints.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        <p className="text-lg text-foreground">Each presentation will be followed by up to 5 minutes of questions from the judging panel.</p>

        <h2 className="text-xl font-bold text-primary mt-10 mb-4">Eligibility Requirements</h2>
        <ul className="list-disc ml-8 space-y-2 text-lg text-foreground">
          {eligibilityRequirements.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>

        <h2 className="text-xl font-bold text-primary mt-10 mb-4">Important Confidentiality Notice</h2>
        <p className="text-lg text-foreground">
          Please do not disclose confidential or proprietary information in either the application materials or the live presentation. All submitted and presented information should be suitable for public disclosure.
        </p>

        <h2 className="text-xl font-bold text-primary mt-10 mb-4">Important Dates & Events</h2>
        <ul className="list-disc ml-8 space-y-2 text-lg text-foreground">
          {importantDates.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>

        <SubmitButton />
      </main>

      <Footer />
    </div>
  );
};

export default BusinessPitchCompetition;
