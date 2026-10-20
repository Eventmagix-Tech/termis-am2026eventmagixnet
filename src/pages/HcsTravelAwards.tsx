import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import hcsLogo from "@/assets/histochemical-society-logo.png";
import caymanMatson from "@/assets/hcs-winners/cayman-matson.jpeg.asset.json";
import danaRagbirsingh from "@/assets/hcs-winners/dana-ragbirsingh.png.asset.json";
import elenaWenger from "@/assets/hcs-winners/elena-wenger.jpg.asset.json";
import malvikaSinghal from "@/assets/hcs-winners/malvika-singhal.jpg.asset.json";
import mayaKasteleiner from "@/assets/hcs-winners/maya-kasteleiner.jpg.asset.json";
import pariaBaninoe from "@/assets/hcs-winners/paria-baninoe.jpg.asset.json";
import raynaSchoenberger from "@/assets/hcs-winners/rayna-schoenberger.png.asset.json";
import ruthHarper from "@/assets/hcs-winners/ruth-harper.jpeg.asset.json";
import thanhNguyen from "@/assets/hcs-winners/thanh-nguyen.png.asset.json";

const HCS_TRAVEL_AWARD_RECIPIENTS: { name: string; photo: string; position?: string }[] = [
  { name: "Cayman Matson", photo: caymanMatson.url },
  { name: "Dana Ragbirsingh", photo: danaRagbirsingh.url, position: "center 15%" },
  { name: "Elena Wenger", photo: elenaWenger.url },
  { name: "Malvika Singhal", photo: malvikaSinghal.url },
  { name: "Maya Kasteleiner", photo: mayaKasteleiner.url, position: "center 15%" },
  { name: "Paria Baninoe", photo: pariaBaninoe.url },
  { name: "Rayna Schoenberger", photo: raynaSchoenberger.url },
  { name: "Ruth Harper", photo: ruthHarper.url, position: "center 12%" },
  { name: "Thanh Nguyen", photo: thanhNguyen.url, position: "center 20%" },
];

const HcsTravelAwards = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="HCS Travel Awards 2026"
        description="The Histochemical Society (HCS) travel award program for TERMIS-AM 2026."
      />
      <Header />
      <PageHeader title="HCS Travel Awards" />

      <main id="main" className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="grid md:grid-cols-[260px_1fr] gap-8 items-start">
          <div className="flex justify-center md:justify-start">
            <img
              src={hcsLogo}
              alt="The Histochemical Society"
              className="w-full max-w-[240px] h-auto"
            />
          </div>
          <div className="text-lg text-foreground space-y-5">
            <p>
              The Histochemical Society (HCS) travel award program seeks to recognize applicants
              that explore novel in situ tissue imaging and analytic techniques, including, but not
              limited to immunohistochemistry/immunofluorescence and in situ hybridization, or
              those that strongly incorporate these techniques. Demonstrating use of such
              techniques is required to be eligible for the award. Travel award applications
              require a resume/CV and a recommendation letter. If an abstract has been submitted
              to the event, the travel award applicant should include the abstract with the award
              application as well.
            </p>
          </div>
        </div>

        <section className="mt-14" aria-labelledby="hcs-travel-award-recipients">
          <h2
            id="hcs-travel-award-recipients"
            className="text-2xl md:text-3xl font-bold text-primary text-center mb-10"
          >
            HCS Travel Award Recipients
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {HCS_TRAVEL_AWARD_RECIPIENTS.map((recipient) => (
              <div
                key={recipient.name}
                className="bg-white rounded-xl shadow-card border border-accent/10 overflow-hidden text-center"
              >
                <img
                  src={recipient.photo}
                  alt={`Portrait of ${recipient.name}`}
                  className="w-full aspect-square object-cover"
                  style={recipient.position ? { objectPosition: recipient.position } : undefined}
                  loading="lazy"
                />
                <p className="font-semibold text-foreground py-4 px-2">{recipient.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HcsTravelAwards;
