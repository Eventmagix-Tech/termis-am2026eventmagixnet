import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";

const AmChapterAwards = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="AM Chapter Awards"
        description="Learn about the AM Chapter Awards for TERMIS-AM 2026 in New Orleans, November 15–18, 2026."
      />
      <Header />
      <PageHeader title="AM Chapter Awards" />

      <main id="main" className="max-w-3xl mx-auto py-12 px-4 text-center text-lg">
        <p className="text-lg text-foreground leading-relaxed">
          To learn more about the AM Chapter Awards, please click{" "}
          <a
            href="https://termis.org/am-chapter/am-chapter-awards/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold underline underline-offset-2 hover:text-accent transition-colors"
          >
            here
          </a>
          .
        </p>

        <p className="text-lg text-foreground leading-relaxed mt-6">
          Nomination packages for the 2026 TERMIS-AM Awards Program are due:{" "}
          <span className="font-bold text-primary">June 29, 2026.</span>
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default AmChapterAwards;
