import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";

const PreviewScientificProgram = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Scientific Program"
      description="Scientific program of the TERMIS-AM 2026 Annual Conference & Exhibition."
      noindex
    />
    <Header />
    <PageHeader title="Scientific Program" />

    <main id="main">
      <div className="max-w-3xl mx-auto py-12 px-4">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
          <Button variant="purple" size="lg" asChild>
            <a href="#">Detailed Program in PDF</a>
          </Button>
          <Button variant="purple" size="lg" asChild>
            <a
              href="https://cslide.ctimeetingtech.com/termisam26/attendee/confcal"
              target="_blank"
              rel="noopener noreferrer"
            >
              Interactive Detailed Program
            </a>
          </Button>
        </div>

        <p className="text-sm italic text-muted-foreground text-center mt-12">
          Please note the program is subject to changes.
        </p>
      </div>
    </main>

    <Footer />
  </div>
);

export default PreviewScientificProgram;
