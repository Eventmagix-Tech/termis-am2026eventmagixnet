import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";

const topics = [
  "Biofabrication",
  "Bioreactors & Organs-on-Chips",
  "Cardiovascular/Angiogenesis/Blood",
  "Commercialization & Regulation",
  "Dental & Craniofacial",
  "Imaging and Assessment",
  "Musculoskeletal",
  "Neural & Spine",
  "Ophthalmologic",
  "Respiratory, Urologic & Gastrointestinal",
  "Scaffolds, Matrices, and Biomaterials",
  "Skin, Wound Healing, and Inflammation",
  "Stem Cells & Cell Therapies",
  "Special Topics",
  "Sex and Lifespan Biology in Tissue Engineering and Regenerative Medicine",
  "Computer Modeling & Artificial Intelligence Applications in TERM",
  "Nanocarriers and Novel Technologies Applications to TERM",
  "Extracellular Vesicles",
  "TERMIS & The Histochemical Society; The extracellular matrix: Target and tool in disease and repair",
];

const LateBreakingAbstractTopics = () => (
  <div className="min-h-screen bg-background">
    <SEOHead title="Late Breaking Abstract Topics" description="Full list of late breaking abstract topics for TERMIS-AM 2026." />
    <Header />
    <PageHeader title="Late Breaking Abstract Topics" />
    <main id="main" className="max-w-4xl mx-auto py-8 px-4">
      <ul className="list-disc ml-6 space-y-2 text-lg text-foreground">
        {topics.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <div className="flex justify-center mt-10">
        <Button variant="gold" size="lg" asChild>
          <Link to="/late-breaking-abstract-submission">Go to Late Breaking Abstract Submission</Link>
        </Button>
      </div>
    </main>
    <Footer />
  </div>
);

export default LateBreakingAbstractTopics;
