import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Subtopic {
  name: string;
}

interface MainTopic {
  title: string;
  subtopics: Subtopic[];
}

const abstractTopicsData: MainTopic[] = [
  {
    title: "Biofabrication",
    subtopics: [
      { name: "Biofabrication (general session)" },
      { name: "Biofabrication of spatial gradients and complex interfaces" },
      { name: "Biofabrication technologies for organoid engineering" },
      { name: "Emerging biofabrication technologies" },
      { name: "Machine learning, AI and intelligent biofabrication technologies" },
    ],
  },
  {
    title: "Bioreactors & Organs-on-Chips",
    subtopics: [
      { name: "Bioreactors & Organs-on-Chips (general session)" },
      { name: "Advancing MPS as new approach methods (NAMs)" },
      { name: "Biophysical modulation of tissue regeneration" },
      { name: "Challenges in clinical applications of cancer organoids" },
      { name: "Emerging advances in microphysiological platforms to study disease" },
      { name: "Emerging in vitro and microphysiological platforms to study human–microbiome interactions" },
    ],
  },
  {
    title: "Cardiovascular, Angiogenesis, Blood",
    subtopics: [
      { name: "Cardiovascular, Angiogenesis, Blood TERM (general session)" },
      { name: "Cardiovascular tissue engineering: From cells, ECM to AI-driven organoids" },
      { name: "Clinicians versus engineers: Exploring the use of stem cells to grow new vessels" },
      { name: "Functional vascularization across scales: Models, materials, and integration" },
      { name: "Lymphatic engineering and regeneration" },
    ],
  },
  {
    title: "Commercialization & Regulation",
    subtopics: [
      { name: "Early-stage entrepreneurship & commercialization in regenerative medicine and tissue engineering" },
    ],
  },
  {
    title: "Dental & Craniofacial",
    subtopics: [
      { name: "Dental & Craniofacial TERM (general session)" },
    ],
  },
  {
    title: "Imaging and Assessment",
    subtopics: [
      { name: "Imaging and Assessment for TERM (general session)" },
      { name: "Quantitative non-invasive imaging for regulatory-ready engineered tissues and human-relevant models" },
    ],
  },
  {
    title: "Musculoskeletal",
    subtopics: [
      { name: "Engineering tissue interfaces, biomolecules, and cross-talk in musculoskeletal regeneration (general session)" },
      { name: "3D printing advances in musculoskeletal tissue engineering" },
      { name: "Extracellular vesicles as nanomedicine for musculoskeletal regeneration and repair" },
      { name: "Musculoskeletal microphysiological systems and new alternative models: Development to application" },
      { name: "Precision recovery: Integrating machine learning and digital twin frameworks for orthopedic trauma and musculoskeletal regeneration" },
    ],
  },
  {
    title: "Neural & Spine",
    subtopics: [
      { name: "Strategies for regeneration of the nervous system" },
      { name: "Tissue engineering models of the nervous system" },
    ],
  },
  {
    title: "Ophthalmologic",
    subtopics: [
      { name: "Tissue engineering strategies in ophthalmology (general session)" },
    ],
  },
  {
    title: "Respiratory, Urologic & Gastrointestinal",
    subtopics: [
      { name: "Respiratory, Urologic & Gastrointestinal TERM (general session)" },
      { name: "In silico advances in airway, gastroesophageal, and urogenital regeneration" },
      { name: "Tissue engineering and regenerative medicine for upper airway restoration" },
      { name: "Tissue engineering and regenerative medicine in otolaryngology: Historical perspectives and current challenges" },
    ],
  },
  {
    title: "Scaffolds, Matrices, and Biomaterials",
    subtopics: [
      { name: "Scaffolds, Matrices, and Biomaterials in TERM (general session)" },
      { name: "Advanced Biomaterials and Regenerative Medicine" },
      { name: "Advanced biomaterials for controlled drug release and immune modulation" },
      { name: "Advances in decellularization and recellularization of complex tissues" },
      { name: "Development of stimuli-responsive implants for musculoskeletal tissue engineering" },
      { name: "Engineering dynamic microenvironments to direct cell signaling, stem cell fate, and function" },
      { name: "Engineering immunomodulatory therapies for regenerative medicine" },
    ],
  },
  {
    title: "Skin, Wound Healing, and Inflammation",
    subtopics: [
      { name: "TERM for Skin, Wound Healing, and Inflammation (general session)" },
      { name: "Biophysical and biomaterial strategies to modulate wound healing" },
    ],
  },
  {
    title: "Stem Cells & Cell Therapies & Developmental Biology and Cell Signaling",
    subtopics: [
      { name: "Stem Cells & Cell Therapies & Developmental Biology and Cell Signaling (general session)" },
      { name: "Harnessing the power of microgravity to accelerate breakthroughs in regenerative medicine" },
      { name: "microRNA-guided stem cell differentiation in regeneration and disease" },
      { name: "Stem cell signaling in tissue engineering and regenerative medicine: From in vitro to in vivo" },
    ],
  },
  {
    title: "Special Topic: Sex and Lifespan Biology in Tissue Engineering and Regenerative Medicine",
    subtopics: [
      { name: "Advancing women's health through inclusive innovation" },
      { name: "Fetal and pediatric tissue engineering and regenerative medicine" },
      { name: "Sex hormone influence on tissue engineering and regenerative medicine" },
    ],
  },
  {
    title: "Special Topic: Computer Modeling & Artificial Intelligence Applications in TERM",
    subtopics: [
      { name: "Complex data sets and AI applications in TERM" },
      { name: "Computational methods for biomaterial design" },
    ],
  },
  {
    title: "Special Topic: Nanocarriers and Novel Technologies Applications to TERM",
    subtopics: [
      { name: "Engineering the code: Advances in lipid nanoparticle-mediated CRISPR delivery for tissue regeneration" },
      { name: "Gene editing for tissue engineering and regenerative medicine" },
      { name: "Nanotechnology-driven strategies for inflammatory modulation in TERM applications" },
    ],
  },
  {
    title: "Special Topic: Extracellular Vesicles",
    subtopics: [
      { name: "CRISPR-Cas9–enabled drug delivery strategies for wound healing and tissue regeneration" },
      { name: "Extracellular vesicles for regenerative medicine, drug delivery, and cell-free therapies" },
    ],
  },
  {
    title: "Special Topics: TERMIS & The Histochemical Society",
    subtopics: [
      { name: "The extracellular matrix: Target and tool in disease and repair" },
    ],
  },
];

const PreviewAbstractTopics = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Abstract Topics"
        description="Explore the 18 main abstract topics and subtopics for the TERMIS-AM 2026 conference."
        noindex
      />
      <Header />
      <PageHeader title="Abstract Topics" />

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Introduction */}
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-10">
            There are 18 main abstract topics, each of which includes several subtopics to which
            abstracts may be submitted. These subtopics also represent potentially planned sessions
            within the scientific program of TERMIS AM 2026. Click on an abstract subtopic to view
            the description of the corresponding planned session.
          </p>

          {/* Level 1 Accordion - Main Topics */}
          <Accordion type="multiple" className="space-y-3">
            {abstractTopicsData.map((topic, topicIndex) => (
              <AccordionItem
                key={topicIndex}
                value={`topic-${topicIndex}`}
                className="border border-border rounded-lg overflow-hidden bg-card shadow-sm"
              >
                <AccordionTrigger className="px-5 py-4 text-left text-base md:text-lg font-semibold text-primary hover:no-underline hover:bg-muted/50 transition-colors [&[data-state=open]]:bg-muted/30">
                  <span className="pr-4">
                    {topicIndex + 1}. {topic.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-4 pt-2">
                  {/* Level 2 Accordion - Subtopics */}
                  <Accordion type="multiple" className="space-y-2">
                    {topic.subtopics.map((subtopic, subIndex) => (
                      <AccordionItem
                        key={subIndex}
                        value={`subtopic-${topicIndex}-${subIndex}`}
                        className="border border-border/60 rounded-md overflow-hidden bg-background"
                      >
                        <AccordionTrigger className="px-4 py-3 text-left text-sm md:text-base font-medium text-foreground hover:no-underline hover:bg-muted/40 transition-colors">
                          <span className="pr-4">{subtopic.name}</span>
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-3 pt-1">
                          {/* Level 3 - Description placeholder */}
                          <p className="text-sm text-muted-foreground italic">
                            Coming soon
                          </p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PreviewAbstractTopics;
