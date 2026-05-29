import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import hcsLogo from "@/assets/histochemical-society-logo.png";

const APPLICATION_URL = "https://form.jotform.com/261406652832153";

const HcsTravelAwards = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="HCS Travel Awards 2026"
        description="The Histochemical Society (HCS) travel award program for TERMIS-AM 2026."
      />
      <Header />
      <PageHeader title="HCS Travel Awards" />

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="grid md:grid-cols-[260px_1fr] gap-8 items-start">
          <div className="flex justify-center md:justify-start">
            <img
              src={hcsLogo}
              alt="The Histochemical Society"
              className="w-full max-w-[240px] h-auto"
            />
          </div>
          <div className="text-lg text-foreground space-y-5">
            <p>
              The Histochemical Society (HCS) travel award program seeks to recognize applicants
              that explore novel in situ tissue imaging and analytic techniques, including, but not
              limited to immunohistochemistry/immunofluorescence and in situ hybridization, or
              those that strongly incorporate these techniques. Demonstrating use of such
              techniques is required to be eligible for the award. Travel award applications
              require a resume/CV and a recommendation letter. If an abstract has been submitted
              to the event, the travel award applicant should include the abstract with the award
              application as well.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Submission Requirements (All in ONE PDF File)
          </h2>
          <p className="text-foreground mb-4">
            For HCS travel awards we request the following in ONE PDF file:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-foreground">
            <li>CV</li>
            <li>
              Letter of application (why you are attending the event, why a travel award would
              help)
            </li>
            <li>
              Recommendation Letter (which should include a statement of institutional support)
            </li>
            <li>
              Please also include the abstract you submitted for the TERMIS-AM 2026 Conference (if
              applicable)
            </li>
            <li>
              Confirm that you plan to attend the 2026 TERMIS-AM Conference (may include your
              registration confirmation).
            </li>
          </ol>
        </div>

        <p className="text-center font-bold text-foreground mt-12">
          Deadline to submit your application is July 1, 2026.
        </p>

        <div className="text-center my-8">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <a href={APPLICATION_URL} target="_blank" rel="noopener noreferrer">
              Go to submission page
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HcsTravelAwards;
