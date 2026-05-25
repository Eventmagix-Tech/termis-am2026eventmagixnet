import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { Separator } from "@/components/ui/separator";

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: "Guest Society – The Histochemical Society",
    body: (
      <>
        <p className="italic">
          Do you have that weird histology that you cannot figure out what it means? You got the
          unique opportunity to try and catch the experts of this year's guest society!
        </p>
        <p>
          We are excited to host The Histochemical Society (HCS) at this year's annual meeting. The
          HCS is promoting a dedicated session during the conference and has generously offered to
          support 10 travel awards to defray the participation cost of TERMIS AM attendees.
        </p>
        <p className="italic text-foreground/70">*Applications for all awards will open soon.</p>
      </>
    ),
  },
  {
    title: "Meet the Future Postdoc – Poster Session",
    body: (
      <>
        <p>
          Are you a PhD student looking for your next position? Are you a faculty looking to recruit
          the best future postdoc? This dedicated poster session highlights outstanding PhD students
          who are preparing to transition into postdoctoral research. It provides a platform for
          emerging researchers to showcase their work, engage with senior scientists, and explore
          future opportunities.
        </p>
        <p className="italic text-foreground/70">
          *Please note that submission to this session will open later in the summer and will follow
          a separate process from the general abstract submission.
        </p>
      </>
    ),
  },
  {
    title: "Meet the Future Faculty – Poster Session",
    body: (
      <>
        <p>
          Are you a Postdoctoral fellow looking for your first faculty position? Are you a faculty
          looking to recruit a new colleague to your department? This session is designed for
          postdoctoral researchers and early-career scientists who are preparing for independent
          academic careers. Participants will present their research vision and achievements,
          offering attendees the opportunity to connect with the next generation of faculty leaders.
        </p>
        <p className="italic text-foreground/70">
          *Please note that submission to this session will open later in the summer and will be
          managed separately from the main abstract process.
        </p>
      </>
    ),
  },
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
    title: "The Wake Forest Institute for Regenerative Medicine Young Investigator Awards (2 awards)",
    body: (
      <p>
        The WFIRM YI Awards will be presented during the TERMIS AM meeting to two (2) individuals in
        the early stages of their research careers (graduate student or post-doctoral fellow). Each
        awardee will be invited to present their conference abstract during the TERMIS-AM meeting
        and will receive an award certificate and a monetary award.
      </p>
    ),
  },
  {
    title: "Women in TERM Luncheon — Monday, November 16, 2026",
    body: (
      <p>
        The Women in TERM Luncheon is a networking and discussion event dedicated to supporting and
        promoting women in tissue engineering and regenerative medicine. The luncheon provides a
        welcoming environment for sharing experiences, fostering mentorship, and encouraging
        collaboration across all career stages. Separate registration is required.
      </p>
    ),
  },
  {
    title: "Meet the Mentor Lunch (SYIS Event) — Tuesday, November 17, 2026",
    body: (
      <p>
        As the signature SYIS event at TERMIS conferences, the Student-Meet-Mentor Luncheon provides
        students and young investigators the opportunity to enjoy a seated lunch with senior faculty
        and scientists working in the fields of tissue engineering and regenerative medicine.
        Mentors will include session chairs, TERMIS faculty members, and local industry leaders.
        Registration for a ticket during the conference sign-up is required to attend.
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

      <main className="container mx-auto px-4 py-12 max-w-4xl">
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
