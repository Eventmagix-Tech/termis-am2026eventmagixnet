import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { Users } from "lucide-react";

const programCoChairs = [
  "Riccardo Gottardi, PhD",
  "Nicole Li-Jessen, PhD",
  "Walter Lee Murfee III, PhD",
];

const twigChairs = [
  { name: "Liqun Ning", role: "Biofabrication TWIGs Co-Chair" },
  { name: "Tomas Gonzalez-Fernandez", role: "Biofabrication TWIGs Co-Chair" },
  { name: "Pedro Costa", role: "Bioreactors & Organs-on-Chips TWIGs Chair" },
  { name: "Feng Zhao", role: "Cardiovascular / Angiogenesis / Blood TWIGs Chair" },
  { name: "Lisa Larkin", role: "Commercialization & Regulation (operates via the Industry Committee) TWIGs Chair" },
  { name: "Adam Jakus", role: "Commercialization & Regulation (operates via the Industry Committee) TWIGs Chair" },
  { name: "Fatima Syed", role: "Dental & Craniofacial TWIGs Chair" },
  { name: "Mrignayani Kotecha", role: "Imaging and Assessment TWIGs Chair" },
  { name: "Karina Nakayama", role: "Musculoskeletal TWIGs Chair" },
  { name: "Jessica Butts", role: "Neural & Spine TWIGs Chair" },
  { name: "Budd A. Tucker", role: "Ophthalmologic TWIGs Co-Chair" },
  { name: "Riccardo Gottardi", role: "Respiratory, Urologic & Gastrointestinal TWIGs Co-Chair" },
  { name: "Basak Uygun", role: "Respiratory, Urologic & Gastrointestinal TWIGs Co-Chair" },
  { name: "Golnaz Karoubi", role: "Scaffolds, Matrices, and Biomaterials TWIGs Chair" },
  { name: "Erbil Abaci", role: "Skin, Wound Healing, and Inflammation TWIGs Chair" },
  { name: "Helena Zomer", role: "Skin, Wound Healing, and Inflammation TWIGs Chair" },
  { name: "Nasim Annabi", role: "Stem Cells & Cell Therapies & Developmental Biology and Cell Signaling TWIGs Chair" },
];

const Committees = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Committees"
        description="Meet the Scientific Advisory Committee, Program Co-Chairs and TWIG Chairs of TERMIS-AM 2026."
      />
      <Header />

      <PageHeader
        title="Committees"
        tag="Committees"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Scientific Advisory Committee */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-primary">
                Scientific Advisory Committee
              </h2>
            </div>
          </div>


          {/* Program Co-Chairs */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-primary">
                Conference Program Co-Chairs
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {programCoChairs.map((name) => (
                <div
                  key={name}
                  className="bg-muted/50 border-l-4 border-l-accent rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <p className="font-semibold text-primary">{name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* TWIG Co-Chairs */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-primary">
                TWIG Co-Chairs
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {twigChairs.map((c, i) => (
                <div
                  key={`${c.name}-${i}`}
                  className="bg-card border border-border rounded-lg p-5 shadow-sm hover:shadow-md hover:border-accent/40 transition-all"
                >
                  <p className="font-semibold text-primary">{c.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{c.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Committees;
