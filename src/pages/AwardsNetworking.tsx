import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { Separator } from "@/components/ui/separator";

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "Travel Awards (multiple available)",
    body: (
      <p>
        Travel Awards are available to support students and early-career researchers in attending
        the conference. These awards aim to promote broad participation and ensure that promising
        researchers have the opportunity to present their work, network, and engage with the global
        TERMIS community.
      </p>
    ),
  },
  {
    title: "Emerging Investigator in TERM Awards (Student Awards – multiple awards)",
    body: (
      <p>
        These awards recognize outstanding student contributions within each abstract topic area
        (multiple awards available). Awardees will receive an official certificate in recognition of
        their achievements.
      </p>
    ),
  },
  {
    title: "Future Leaders in TERM Award (Postdoc Award – multiple awards)",
    body: (
      <p>
        These awards honor exceptional postdoctoral researchers demonstrating leadership and
        innovation in their field (multiple awards available). Recipients will receive a certificate
        recognizing their contributions and future potential in TERM.
      </p>
    ),
  },
  {
    title: "Scientific Excellence Awards (5 awards)",
    body: (
      <p>
        These awards from the TERMIS AM SYIS recognize outstanding student contributions to the
        annual conference. Awards acknowledge excellence in research and presentation. Awardees will
        receive an official certificate and a monetary award.
      </p>
    ),
  },
  {
    title: "Career Development Awards (2 awards)",
    body: (
      <p>
        These awards from the TERMIS AM SYIS recognize outstanding postdoc contributions to the
        annual conference. Awards acknowledge excellence in research and presentation. Awardees will
        receive an official certificate and a monetary award.
      </p>
    ),
  },
  {
    title: "Meet the Editor",
    body: (
      <p>
        Do you want to learn how to publish well, publish a lot, and publish fast? The "Meet the
        Editor" session offers attendees a unique opportunity to interact with journal editors and
        gain insights into the publication process. Topics will range from manuscript preparation,
        to peer review expectations, and strategies for successful publishing. This session is
        especially valuable for researchers looking to enhance the impact of their work.
      </p>
    ),
  },
];

const AwardsNetworking = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Awards, Networking & Career Development Opportunities"
        description="Explore TERMIS-AM 2026 awards, networking events, and career development opportunities in New Orleans, November 15–18, 2026."
      />
      <Header />
      <PageHeader title="Awards, Networking & Career Development Opportunities" />

      <main id="main" className="container mx-auto px-4 py-12 max-w-4xl">
        <p className="text-lg text-foreground mb-10">
          TERMIS-AM 2026 in New Orleans will offer an outstanding range of awards, networking
          events, and career development opportunities designed to support participants at all
          stages of their professional journey. Don't miss on these opportunities!
        </p>

        <div className="space-y-8">
          {sections.map((s, i) => (
            <section key={s.title}>
              <h2 className="text-2xl font-bold text-primary mb-3 font-display">{s.title}</h2>
              <div className="text-lg text-foreground space-y-3">{s.body}</div>
              {i < sections.length - 1 && <Separator className="mt-8 bg-accent/30" />}
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AwardsNetworking;
