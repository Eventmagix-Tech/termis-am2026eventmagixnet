import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";

const AbstractTopics = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Abstract Topics"
        description="Abstract topics for the TERMIS-AM 2026 conference. Coming soon."
      />
      <Header />
      <PageHeader title="Abstract Topics" />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <p className="text-center text-lg text-muted-foreground">
            Coming soon, please check back shortly.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AbstractTopics;
