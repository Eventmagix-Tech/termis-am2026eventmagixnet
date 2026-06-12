import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";

const days = [
  {
    day: "Day 1: Monday, November 16th",
    events: [
      {
        title: "SYIS Networking Event (8:00 - 9:00 pm)",
        description:
          "The SYIS networking event is a social gathering and evening of fun for students and young investigators at the conference. There will be a welcome reception with drinks provided during the event. Registration for a ticket during the conference sign-up is required to attend.",
      },
    ],
  },
  {
    day: "Day 2: Tuesday, November 17th",
    events: [
      {
        title: "SYIS Student Meet Mentor Lunch (12:00 pm - 1:30 pm)",
        description:
          "As the signature SYIS event at TERMIS conferences, the Student-Meet-Mentor Luncheon provides students and young investigators the opportunity to enjoy lunch and chat with senior faculty and scientists working in the fields of tissue engineering and regenerative medicine. Mentors will include session chairs, TERMIS faculty members, and local industry leaders. Registration for a ticket during the conference sign-up is required to attend.",
      },
    ],
  },
  {
    day: "Day 3: Wednesday, November 18th",
    events: [
      {
        title: "SYIS Career Panel Discussion (TBD)",
        description:
          "The Career Panel discussion will include young professionals representing careers in both academic and non-academic TERM sectors, such as industry, government, publishing, or biomedical start-ups. In addition to a moderated discussion, the panel will include a Q&A portion where attendees may ask panelists about their career paths and experiences.",
      },
      {
        title: "Meet the Editors Session (TBD)",
        description:
          "The Meet the Editors session will include an opportunity to network with editors representing high impact academic journals in the area of tissue engineering and regenerative medicine. In addition to a moderated discussion, the attendees may ask editors about publishing requirements. RSVP during conference sign-up to attend.",
      },
    ],
  },
];

const SyisConferenceActivities = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="2026 SYIS-AM Conference Activities"
        description="Students and Young Investigators Section activities at TERMIS-AM 2026."
      />
      <Header />
      <PageHeader title="2026 SYIS-AM Conference Activities" />

      <main id="main">

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-lg max-w-4xl mx-auto space-y-4 text-foreground/90">
            <p>
              Are you currently a student, recent graduate, or postdoctoral fellow? If so, we invite you to participate in our Students and Young Investigators Section (SYIS) activities at the conference!
            </p>
            <p>
              The descriptions for each activity are listed below, and an RSVP form will be posted soon.
            </p>
            <p>
              Additionally, follow us on{" "}
              <a
                href="https://x.com/SyisTermis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-text font-semibold hover:underline"
              >
                X
              </a>{" "}
              and{" "}
              <a
                href="https://bsky.app/profile/syistermis.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-text font-semibold hover:underline"
              >
                BlueSky
              </a>{" "}
              for conference updates! Stop by our booth during the poster sessions to meet our SYIS Council members and learn about our initiatives! We will also help answer any questions regarding the SYIS conference events and leadership opportunities for students and young investigators in TERMIS.
            </p>
          </div>

          <div className="max-w-4xl mx-auto mt-12">
            {days.map((d) => (
              <div key={d.day}>
                <h2 className="text-2xl font-bold text-primary mt-8 mb-4 border-b pb-2">
                  {d.day}
                </h2>
                <div className="grid gap-6 md:grid-cols-1">
                  {d.events.map((e) => (
                    <div
                      key={e.title}
                      className="bg-card shadow-sm rounded-xl p-6 border border-border"
                    >
                      <h3 className="text-xl font-semibold text-primary mb-2">
                        {e.title}
                      </h3>
                      <p className="text-foreground/80 leading-relaxed">
                        {e.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      </main>

      <Footer />
    </div>
  );
};

export default SyisConferenceActivities;
