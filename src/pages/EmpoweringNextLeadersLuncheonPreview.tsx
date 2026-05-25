import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";

const EmpoweringNextLeadersLuncheonPreview = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Empowering Next Leaders in TERM Luncheon (Preview)"
        description="Preview of the Empowering Next Leaders in TERM Luncheon at TERMIS-AM 2026."
        noindex
      />
      <Header />
      <PageHeader title="Empowering Next Leaders in TERM Luncheon" />

      <section className="max-w-4xl mx-auto py-8 px-4">
        <span className="inline-block bg-muted text-muted-foreground font-semibold px-4 py-2 rounded-md mb-8">
          Pre–Registration Required. Ticketed Session.
        </span>

        <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-2">
          20 Years of Women Shaping TERM: Celebrating the Past and Designing the Future
        </h2>

        <div className="text-lg text-foreground space-y-4 mb-8">
          <p>As TERMIS marks its 20th Anniversary, this year's luncheon honors the remarkable legacy of women in tissue engineering and regenerative medicine.</p>
          <p>Together, we will celebrate the progress that has shaped the field and look ahead to the opportunities that will define the next two decades.</p>
          <p>This year's program highlights the contributions of women across every stage of TERM's evolution, from foundational discoveries to transformative therapies with real-world impact.</p>
          <p>Leaders in academic research and entrepreneurship will share their pathways to innovation, recognizing key milestones and inspiring new ideas.</p>
          <p>This gathering offers a unique opportunity to connect, learn, and envision the future: one driven by collaboration, discovery, and scientific inquiry to accelerate meaningful breakthroughs that benefit all.</p>
        </div>

        <p className="font-semibold text-primary mt-8 pt-4 border-t">
          Luncheon organizers: Karina Nakayama; Koyal Garg; Tracy Criswell; Gabriella Lindberg
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default EmpoweringNextLeadersLuncheonPreview;
