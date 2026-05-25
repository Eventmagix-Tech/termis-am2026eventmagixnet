import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { AlertCircle, ExternalLink } from "lucide-react";

const APPLICATION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfi9cGZtuyQWDwWJK0jr7TA-5ZDtXZ8l3xCqRIatztW6BNnOg/viewform?usp=sharing&ouid=115998241389793612369";

const NihR13TravelAwards = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="NIH R13 Travel Awards 2026"
        description="Apply for NIH R13 Travel Awards for the TERMIS-AM 2026 Conference. Deadline: July 1, 2026."
      />
      <Header />
      <PageHeader title="NIH R13 Travel Awards 2026" />

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-lg text-foreground space-y-5">
          <p>
            We would like to invite you to submit your application for consideration to receive a
            limited number of travel awards provided by NIH covering the registration fees for
            students and young investigators of the TERMIS-AM 2026 Conference. The travel awards are
            available to outstanding applicants who are currently undergraduates, graduate students
            or young investigators (to include postdoctoral fellows and young professionals who are
            within 5 years of their terminal degree and do not hold a faculty, academic staff, or
            group leader appointment at a university/research institute or in industry).
          </p>
          <p>There is a limited number of faculty travel awards, as well.</p>
          <p>
            Individuals must have an accepted oral or poster presentation for the TERMIS-AM 2026
            Conference.
          </p>
        </div>

        <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 flex items-start gap-3 mt-8">
          <AlertCircle className="h-5 w-5 text-accent shrink-0 mt-1" />
          <p className="text-foreground font-semibold">
            The deadline to submit the application form for consideration of receiving the funds to
            support travel to the TERMIS-AM 2026 Conference is{" "}
            <span className="underline">July 1, 2026</span>.
          </p>
        </div>

        <div className="text-center my-10">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <a href={APPLICATION_URL} target="_blank" rel="noopener noreferrer">
              Application Form
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NihR13TravelAwards;
