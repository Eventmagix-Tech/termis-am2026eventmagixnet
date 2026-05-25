import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

const submissionAreas = [
  "Medical devices",
  "Therapeutics",
  "Biotools and instrumentation",
  "Diagnostics",
  "Services",
  "Workforce development and training solutions",
];

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

        <div className="text-lg text-foreground space-y-4 mb-6">
          <p>Do you have an innovative idea for a product in tissue engineering or regenerative medicine?</p>
          <p>
            We invite you to submit your concept for a chance to be selected for the{" "}
            <strong>TERMIS-AM 2026 Business Pitch Competition</strong>, taking place during the TERMIS-AM 2026 Meeting in New Orleans.
          </p>
          <p>
            Selected applicants will benefit from guidance and mentorship from members of the TERMIS-AM 2026 Industry Committee, who will provide valuable feedback, strategic insights, and support to help refine your idea and strengthen your pitch.
          </p>
          <p>
            We welcome submissions across a wide range of areas relevant to tissue engineering and regenerative medicine, including—but not limited to:
          </p>
        </div>

        <ul className="list-disc ml-8 space-y-2 mb-6 font-medium text-foreground">
          {submissionAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>

        <div className="text-lg text-foreground space-y-4">
          <p>
            Even if you feel your idea is still in its early stages, we strongly encourage you to apply. The TERMIS Industry Committee is committed to supporting innovation at all levels and will provide constructive feedback to help advance your concept.
          </p>
          <p>
            <strong>Five finalists</strong> will be selected and invited to present their ideas live at the TERMIS-AM 2026 Meeting. Finalists will pitch to a distinguished panel of judges with expertise in entrepreneurship, investment, and technology commercialization.
          </p>
          <p>
            The application website will be available in the near future. Please keep an eye out for upcoming emails with additional details, including submission guidelines and key deadlines.
          </p>
          <p>
            We look forward to your innovative ideas and to supporting the next generation of leaders in regenerative medicine.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Click Here to Submit
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BusinessPitchCompetition;
