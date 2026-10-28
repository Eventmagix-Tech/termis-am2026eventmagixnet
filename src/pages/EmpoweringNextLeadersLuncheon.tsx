import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";

const EmpoweringNextLeadersLuncheon = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Empowering Next Leaders in TERM Luncheon"
        description="Empowering Next Leaders in TERM Luncheon at TERMIS-AM 2026."
      />
      <Header />
      <PageHeader title="Empowering Next Leaders in TERM Luncheon" />

      <main id="main">

      <section className="max-w-4xl mx-auto py-8 px-4">
        <span className="inline-block bg-muted text-muted-foreground font-semibold px-4 py-2 rounded-md mb-8">
          Pre–Registration Required. Ticketed Session (50.00 USD)
        </span>

        <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-2">
          20 Years of Women Shaping TERM: Celebrating the Past and Designing the Future
        </h2>

        <div className="text-lg text-foreground space-y-4 mb-8">
          <p>As TERMIS marks its 20th Anniversary, this year's luncheon honors the remarkable legacy of women in tissue engineering and regenerative medicine.</p>
          <p>Together, we will celebrate the progress that has shaped the field and look ahead to the opportunities that will define the next two decades.</p>
          <p>This year's program highlights the contributions of women across every stage of TERM's evolution, from foundational discoveries to transformative therapies with real-world impact.</p>
          <p>A panel of leaders in academic research and entrepreneurship will share their pathways to innovation, recognizing key milestones and inspiring new ideas.</p>
          <p>This gathering offers a unique opportunity to connect, learn, and envision the future: one driven by collaboration, discovery, and scientific inquiry to accelerate meaningful breakthroughs that benefit all.</p>
        </div>

        <p className="font-semibold text-primary mt-8 pt-4 border-t">
          Luncheon organizers: Karina Nakayama; Koyal Garg; Tracy Criswell; Gabriella Lindberg
        </p>
      </section>

      <section className="max-w-4xl mx-auto pb-16 px-4">
        <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-2">
          Luncheon Program
        </h2>

        <ul className="border border-border rounded-lg overflow-hidden divide-y divide-border bg-card">
          <li className="flex flex-col sm:flex-row sm:items-start gap-2 px-5 py-4">
            <span className="font-semibold sm:w-56 shrink-0 tabular-nums">12:00 PM - 12:10 PM</span>
            <span>CAE committee introduction to a history of women in TERM</span>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-start gap-2 px-5 py-4">
            <span className="font-semibold sm:w-56 shrink-0 tabular-nums">12:10 PM - 1:00 PM</span>
            <span className="space-y-3">
              <span className="block">Speaker perspectives on their research and career journey by:</span>
              <ul className="space-y-1.5 text-foreground">
                <li className="pl-4">Molly Shoichet, University of Toronto</li>
                <li className="pl-4">Cherie Stabler, University of Florida</li>
                <li className="pl-4">Catherine Kuo, University of Maryland</li>
                <li className="pl-4">Grissel Trujillo de Santiago, Tecnológico de Monterrey</li>
                <li className="pl-4">Lexi Rindone, Johns Hopkins</li>
              </ul>
            </span>
          </li>
          <li className="flex flex-col sm:flex-row sm:items-start gap-2 px-5 py-4">
            <span className="font-semibold sm:w-56 shrink-0 tabular-nums">1:00 PM - 1:30 PM</span>
            <span>Panel discussion</span>
          </li>
        </ul>
      </section>


      </main>

      <Footer />
    </div>
  );
};

export default EmpoweringNextLeadersLuncheon;
