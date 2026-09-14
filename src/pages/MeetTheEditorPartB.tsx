import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { ExternalLink } from "lucide-react";

const SIGNUP_URL = "https://forms.gle/MuDbNhVhWk7wUprJ7";

const MeetTheEditorPartB = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Meet the Editor: Tissue Engineering Part B: Reviews"
        description="Meet Editor-in-Chief Katja Schenke-Layland during the coffee break on November 16 at TERMIS-AM 2026 to discuss the scope of Tissue Engineering Part B: Reviews, manuscript preparation and submission, and what makes a review article impactful."
      />
      <Header />
      <PageHeader title="Meet the Editor: Tissue Engineering Part B: Reviews" />

      <main id="main" className="max-w-4xl mx-auto py-12 px-4 text-lg text-foreground space-y-6">
        <p>
          Join us for an interactive discussion on publishing high-impact review articles in Tissue Engineering
          Part B: Reviews, a peer-reviewed journal focused on tissue engineering, regenerative medicine, and the
          repair and regeneration of tissues and organs. The journal serves as an influential publication for
          cutting-edge reviews that bridge engineering and life sciences, helping to define current trends and
          future directions in the field. Please stop by to discuss with Editor-in-Chief, Katja Schenke-Layland,
          the journal&rsquo;s scope, how to prepare and submit manuscripts, and what makes a review article
          impactful.
        </p>
        <p>
          The meet up will take place during the TERMIS-AM 2026 conference in New Orleans on November 16th during
          the coffee break.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href={SIGNUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary text-primary-foreground font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1"
          >
            Sign Up - Tissue Engineering, Part B
            <ExternalLink className="ml-2 h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MeetTheEditorPartB;
