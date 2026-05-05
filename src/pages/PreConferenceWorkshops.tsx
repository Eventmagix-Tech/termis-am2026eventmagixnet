import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";

const PreConferenceWorkshops = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Pre-Conference Workshops"
        description="Explore hands-on workshops before the main TERMIS-AM 2026 conference."
      />
      <Header />

      <PageHeader title="Pre-Conference Workshops" />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-muted/50 rounded-2xl p-12 shadow-lg space-y-4">
              <p className="text-xl text-primary font-semibold">
                Coming soon, please check back shortly.
              </p>
              <p className="text-muted-foreground">
                Thank you for your patience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PreConferenceWorkshops;
