import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";

const ExhibitionTimetable = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Exhibition Timetable"
        description="Exhibition setup, opening hours and dismantling times for TERMIS-AM 2026 in New Orleans."
      />
      <Header />

      <main id="main" className="flex-1">
        <PageHeader
          title="Exhibition Timetable"
          subtitle="Setup, opening hours and dismantling for TERMIS-AM 2026"
        />

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 border-b pb-4">
                EXHIBITION TIMETABLE
              </h2>

              <p className="text-lg mb-8">
                <strong>Setup:</strong> Sunday, November 15, 2026 / 8:00am - 12:30pm
              </p>

              <h3 className="text-xl font-bold text-primary mb-6">
                Exhibition Dates &amp; Hours:
              </h3>

              <div className="flex flex-col space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground text-lg border-b border-muted pb-1 mb-2">
                    Sunday, November 15, 2026 / 1:00pm - 8:30pm (General Opening Hours)
                  </h4>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-1 ml-4">
                    Key Times:
                  </p>
                  <p className="text-foreground ml-4">
                    6:30pm - 8:30pm (Welcome Reception &amp; Poster Session 1)
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground text-lg border-b border-muted pb-1 mb-2">
                    Monday, November 16, 2026 / 8:00am - 9:00pm (General Opening Hours)
                  </h4>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-1 ml-4">
                    Key Times:
                  </p>
                  <ul className="space-y-1 ml-4 text-foreground">
                    <li>9:30am - 10:00am (AM Coffee Break)</li>
                    <li>12:00pm - 1:30pm (Lunch Break – on your own)</li>
                    <li>4:35pm - 5:05pm (PM Coffee Break)</li>
                    <li>6:35pm - 8:00pm (Poster Session 2 &amp; Exhibitor Viewing / Reception)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground text-lg border-b border-muted pb-1 mb-2">
                    Tuesday, November 17, 2026 / 8:00am - 6:45pm (General Opening Hours)
                  </h4>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-1 ml-4">
                    Key Times:
                  </p>
                  <ul className="space-y-1 ml-4 text-foreground">
                    <li>9:30am – 10:00am (AM Coffee Break)</li>
                    <li>12:00pm – 1:30pm (Lunch Break – on your own)</li>
                    <li>3:00pm – 3:30pm (PM Coffee Break)</li>
                    <li>5:15pm – 6:45pm (Poster Session 3 &amp; Exhibitor Viewing / Reception)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground text-lg border-b border-muted pb-1 mb-2">
                    Wednesday, November 18, 2026 / 8:00am - 1:00pm (General Opening Hours)
                  </h4>
                  <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-1 ml-4">
                    Key Times:
                  </p>
                  <p className="text-foreground ml-4">
                    10:30am – 11:00am (AM Coffee Break)
                  </p>
                </div>
              </div>

              <div className="mt-8 text-lg">
                <p>
                  <strong>Dismantling:</strong> Wednesday, November 18, 2026 / 1:00pm - 5:00pm&nbsp;(larger builds dismantle should begin after 2:00pm)
                </p>
                <p className="text-muted-foreground text-base">
                </p>
              </div>

              <p className="text-sm text-muted-foreground italic mt-6">
                *Hours are subject to change
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ExhibitionTimetable;
