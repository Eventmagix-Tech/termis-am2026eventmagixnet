import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

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

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6 text-foreground leading-relaxed">
            <p className="text-lg font-medium text-primary">
              Do you have an innovative idea for a product in tissue engineering or regenerative medicine?
            </p>

            <p>
              We invite you to submit your concept for a chance to be selected for the TERMIS-AM 2026 Business Pitch Competition, taking place during the TERMIS-AM 2026 Meeting in New Orleans.
            </p>

            <p>
              Selected applicants will benefit from guidance and mentorship from members of the TERMIS-AM 2026 Industry Committee, who will provide valuable feedback, strategic insights, and support to help refine your idea and strengthen your pitch.
            </p>

            <p>
              We welcome submissions across a wide range of areas relevant to tissue engineering and regenerative medicine, including—but not limited to:
            </p>

            <ul className="space-y-2 pl-2">
              {submissionAreas.map((area) => (
                <li key={area} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>

            <p>
              Even if you feel your idea is still in its early stages, we strongly encourage you to apply. The TERMIS Industry Committee is committed to supporting innovation at all levels and will provide constructive feedback to help advance your concept.
            </p>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
              <p className="font-semibold text-primary">
                Five finalists will be selected and invited to present their ideas live at the TERMIS-AM 2026 Meeting. Finalists will pitch to a distinguished panel of judges with expertise in entrepreneurship, investment, and technology commercialization.
              </p>
            </div>

            <p>
              We look forward to your innovative ideas and to supporting the next generation of leaders in regenerative medicine.
            </p>

            <Alert className="border-accent bg-accent/5 mt-8">
              <Info className="h-5 w-5 text-accent" />
              <AlertDescription className="text-sm leading-relaxed">
                <p className="font-medium mb-1">The application website will be available in the near future.</p>
                <p>Please keep an eye out for upcoming emails with additional details, including submission guidelines and key deadlines.</p>
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessPitchCompetition;
