import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";

const EmailLink = () => (
  <a href="mailto:terimisamsyis@gmail.com" className="text-primary font-semibold hover:underline">
    terimisamsyis@gmail.com
  </a>
);

const FormLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gold-text font-semibold underline hover:no-underline"
  >
    {children}
  </a>
);

const SyisPositionsAwards = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="SYIS Positions & Awards"
        description="Students and Young Investigators Section positions and awards at TERMIS-AM 2026."
      />
      <Header />
      <PageHeader title="SYIS Positions & Awards" />

      <main id="main">

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 border-b pb-2">
              SYIS Positions Available
            </h2>

            <div className="bg-card text-card-foreground shadow-sm rounded-xl p-6 mb-6 border border-border">
              <h3 className="text-xl font-semibold text-primary mb-2">SYIS Session Co-Chairs</h3>
              <p className="text-foreground/80 leading-relaxed mb-3">
                As a Session Co-chair, you will moderate scientific sessions alongside senior faculty.
                This program provides a unique opportunity for SYIS attendees to build their experience
                in moderating scientific sessions and network with faculty members involved in TERMIS.
              </p>
              <p className="text-foreground/85 italic">Sign-up will be available soon.</p>
            </div>

            <h2 className="text-2xl font-bold text-primary mt-8 mb-4 border-b pb-2">SYIS Awards</h2>

            <div className="bg-card text-card-foreground shadow-sm rounded-xl p-6 mb-6 border border-border">
              <h3 className="text-xl font-semibold text-primary mb-2">
                SYIS Career Development Award for TERMIS-AM Members from Latin America
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-3">
                The SYIS Career Development Award will be granted to two students or young investigators
                working in Latin American countries who have demonstrated outstanding scientific
                achievements. Each award will provide a certificate and travel stipend of $500 towards
                the TERMIS-AM conference.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-3">
                Eligible applicants may apply by <FormLink href="https://forms.gle/nWDqBe5PscLwzJaA7">filling out this form</FormLink> and
                submitting your CV, graphical and written abstract. The deadline to apply is{" "}
                <span className="font-semibold">August 18, 2026</span>.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-3">
                Thank you to <span className="font-semibold">Science Translational Medicine / AAAS</span>{" "}
                for their generous support of this award.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-3">
                Questions can be directed towards <EmailLink />.
              </p>
              <h4 className="font-semibold text-primary mt-4 mb-2">Eligibility</h4>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li>
                  Candidates must be students or young investigators (&lt; 5 years from terminal degree
                  completion) currently working in Mexico, the Caribbean, Central America, or South
                  America.
                </li>
                <li>
                  Students or young investigators working in Canada or the United States are not
                  eligible for this award.
                </li>
                <li>
                  Candidates must have an abstract accepted to TERMIS-AM. Candidates submitting
                  late-breaking abstracts are eligible, but they must provide proof of their submission
                  before applying to this award.
                </li>
                <li>Attendance at the meeting is required to obtain the award.</li>
              </ul>
            </div>

            <div className="bg-card text-card-foreground shadow-sm rounded-xl p-6 mb-6 border border-border">
              <h3 className="text-xl font-semibold text-primary mb-2">
                SYIS Scientific Excellence Award
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-3">
                This award recognizes the scientific excellence of students and young investigators
                working in the fields of tissue engineering and regenerative medicine. SYIS will invite
                the presenting authors whose abstracts score within the top 10% to submit a graphical
                abstract of their work and their CV.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-3">
                Eligible applicants may apply by <FormLink href="https://forms.gle/CfZZVMsjzJbVLgh6A">filling out this form</FormLink> and
                submitting your CV, graphical and written abstract. The deadline to apply is{" "}
                <span className="font-semibold">August 18, 2026</span>. Awards will be granted to 5
                applicants, who will receive a certificate and $200 travel stipend.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-3">
                Thank you to our sponsor <span className="font-semibold">ACS Publications</span> for
                their generous support of this award.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-3">
                Questions can be directed towards <EmailLink />.
              </p>
              <h4 className="font-semibold text-primary mt-4 mb-2">Eligibility</h4>
              <ul className="list-disc ml-6 space-y-2 text-foreground/80">
                <li>
                  Applicants must be students or young investigators at the time of their application
                  (&lt; 5 years from terminal degree).
                </li>
                <li>
                  Individuals who hold an appointment as faculty, academic staff, or group leader in a
                  university/research institute or in industry are not eligible for this award.
                </li>
                <li>
                  Candidates must be the presenting author of a submitted TERMIS abstract. Late-breaking
                  abstract submissions are not eligible.
                </li>
                <li>Attendance at the meeting is required to obtain the award.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      </main>

      <Footer />
    </div>
  );
};

export default SyisPositionsAwards;
