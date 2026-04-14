import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";

const CallForAbstractsPlaceholder = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Call for Abstract"
        description="Call for Abstract for the conference. Coming soon."
      />
      <Header />
      <PageHeader title="Call for Abstract" />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-muted-foreground">
            Coming soon, please check back shortly.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CallForAbstractsPlaceholder;
