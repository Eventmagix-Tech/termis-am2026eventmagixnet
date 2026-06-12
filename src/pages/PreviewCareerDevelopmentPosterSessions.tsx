import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { ExternalLink } from "lucide-react";

const PreviewCareerDevelopmentPosterSessions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageHeader title="Career Development Poster Sessions" />

      <main id="main">
        <section className="max-w-4xl mx-auto py-8 px-4">
          <p className="text-foreground mb-4">
            The Career Development Poster Sessions provide a unique opportunity for emerging researchers to showcase their work, expand their professional network, and connect with potential mentors, collaborators, and future employers.
          </p>
          <p className="text-foreground mb-4">
            These sessions are designed to support trainees and early-career scientists as they transition to the next stage of their academic careers.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-6 mb-4">Why Participate?</h2>
          <ul className="list-disc ml-6 space-y-2 mb-8 text-foreground">
            <li>Showcase your research to an international audience of experts and leaders in the field.</li>
            <li>Expand your professional network and engage in meaningful career-focused discussions.</li>
            <li>Connect with potential mentors, collaborators, and future employers.</li>
            <li>Increase the visibility of your research and future career goals.</li>
            <li>Learn about career pathways and opportunities within academia and research.</li>
            <li>Gain valuable feedback on your scientific work and future research plans.</li>
          </ul>

          {/* Card 1 */}
          <div className="bg-card text-card-foreground shadow-sm rounded-xl p-6 mb-8 border border-border">
            <h3 className="text-xl font-bold text-primary">Meet the Future Postdoc Candidates – Poster Session</h3>
            <p className="font-semibold text-muted-foreground mb-3">Post-Doctoral Fellow Match Poster Session</p>
            <span className="inline-block bg-accent/15 text-accent font-semibold px-3 py-1 rounded-full text-sm mb-4">
              Sunday, November 15 | 6:30 PM – 8:30 PM
            </span>
            <p className="mb-3">The Meet the Future Postdoc Candidates Poster Session offers an opportunity to showcase posters for senior graduate students and other trainees planning to apply for a postdoctoral fellowship position in the upcoming year.</p>
            <p className="mb-3">The special session provides an opportunity for future postdoctoral candidates to showcase their past, present, and future research plans. This is a great opportunity for faculty, T32 directors/members, and others looking for postdoctoral fellows, to facilitate the identification of strong candidates for postdoctoral fellowship positions.</p>
            <p className="mb-4">Postdoc candidates will present a poster based on their research performed to date.</p>

            <h4 className="font-bold text-primary mb-2">Who Should Participate?</h4>
            <ul className="list-disc ml-6 mb-4 space-y-1">
              <li>Senior PhD students</li>
              <li>Graduate students approaching completion of their degree</li>
              <li>Trainees planning to apply for postdoctoral positions within the next year</li>
            </ul>

            <a href="#" className="inline-flex items-center gap-1.5 text-primary underline-offset-4 hover:underline font-medium">
              <ExternalLink size={16} />
              Register to showcase a poster in this session
            </a>
            <p className="font-bold mt-2">Registration Deadline: September 18</p>
          </div>

          {/* Card 2 */}
          <div className="bg-card text-card-foreground shadow-sm rounded-xl p-6 mb-8 border border-border">
            <h3 className="text-xl font-bold text-primary">Meet the Future Faculty Candidates – Poster Session</h3>
            <p className="font-semibold text-muted-foreground mb-3">Faculty Match Poster Session</p>
            <span className="inline-block bg-accent/15 text-accent font-semibold px-3 py-1 rounded-full text-sm mb-4">
              Monday, November 16 | 6:35 PM – 8:00 PM
            </span>
            <p className="mb-3">The Meet the Future Faculty Candidates Poster Session showcases senior post-docs currently applying for their first independent faculty position.</p>
            <p className="mb-4">This special session aims to: 1) provide an opportunity for future faculty members to present the goals of their proposed independent research program by showcasing their past, present, and future research; and 2) to provide an effective means for Department Chairs, search committee chairs/members and senior faculty to identify strong candidates. This session benefits not only the participating senior trainees and recruiting faculty, but also more junior trainees by providing them with an opportunity to observe the process of transitioning from trainee to faculty.</p>

            <h4 className="font-bold text-primary mb-2">Who Should Participate?</h4>
            <ul className="list-disc ml-6 mb-4 space-y-1">
              <li>Senior postdoctoral researchers</li>
              <li>Researchers actively preparing faculty applications</li>
              <li>Early-career scientists seeking independent academic positions</li>
            </ul>

            <a href="#" className="text-primary underline-offset-4 hover:underline font-medium">
              Register to showcase a poster in this session
            </a>
            <p className="font-bold mt-2">Registration Deadline: September 18</p>
          </div>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4 border-b pb-2">Important Information</h2>
          <p className="mb-4">Participants accepted into either Career Development Poster Session will receive additional information regarding poster dimensions, presentation guidelines, and display instructions closer to the meeting.</p>
          <p className="mb-4">For the Meet the Future Faculty Candidates Poster Session, candidate profiles submitted during registration may be made available to interested department leaders and search committee members to facilitate networking and recruitment opportunities.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PreviewCareerDevelopmentPosterSessions;
