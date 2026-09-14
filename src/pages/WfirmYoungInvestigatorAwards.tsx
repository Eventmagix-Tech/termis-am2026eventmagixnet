import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import wfirmLogo from "@/assets/wfirm-logo.webp";
import shiveshAnandPortrait from "@/assets/wfirm-winners/Shivesh-Anand.webp.asset.json";
import parkerEssweinPortrait from "@/assets/wfirm-winners/Parker-Esswein-WFIRM-YI-Award-2026.webp.asset.json";

const awardWinners = [
  {
    name: "Shivesh Anand, PhD",
    institution: "Stanford University",
    presentation:
      "Dynamic Biophysical Modulation: Engineering Tissue Regeneration through Acoustical, Electrical, and Mechanical Forces",
    portrait: shiveshAnandPortrait.url,
  },
  {
    name: "Parker Esswein",
    institution: "Duke University",
    presentation:
      "Engineering Retinal Blood Vessels for Disease Modeling and Regenerative Medicine",
    portrait: parkerEssweinPortrait.url,
  },
];

const WfirmYoungInvestigatorAwards = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="WFIRM Young Investigator Awards"
        description="Wake Forest Institute for Regenerative Medicine Young Investigator Award at TERMIS-AM 2026. Application deadline: August 1, 2026."
      />
      <Header />
      <PageHeader
        title="WFIRM Young Investigator Awards"
        subtitle="Wake Forest Institute for Regenerative Medicine · TERMIS-AM 2026"
      />

      <main id="main" className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="grid md:grid-cols-[240px_1fr] gap-8 items-start">
          <div className="flex justify-center md:justify-start md:sticky md:top-24">
            <img
              src={wfirmLogo}
              alt="Wake Forest School of Medicine - Institute for Regenerative Medicine"
              className="w-full max-w-[220px] h-auto"
            />
          </div>
          <div className="text-base md:text-lg text-foreground space-y-5">
            <p>
              The Wake Forest Institute for Regenerative Medicine is committed to developing and
              disseminating novel therapies for the repair and replacement of diseased tissues and
              organs. One way to achieve this goal is to foster the careers of young investigators to
              encourage them to find solutions to problems in regenerative medicine. As part of this
              effort, the <strong>Wake Forest Institute for Regenerative Medicine Young Investigator
              Award</strong> was established in 2008 to recognize outstanding achievements by members
              of the Tissue Engineering and Regenerative Medicine International Society (TERMIS) who
              are in the early stages of a career in regenerative medicine.
            </p>
            <p>
              The <strong>Wake Forest Institute for Regenerative Medicine Young Investigator Award</strong>{" "}
              will be presented during the TERMIS AM meeting (November 15-18, 2026) to two (2)
              individuals in the early stages of their research careers (one (1) graduate student and
              one (1) post-doctoral fellow). Each awardee will be invited to present their conference
              abstract during the TERMIS-AM meeting and will receive an award certificate and a
              monetary award of $2,500 (U.S.).
            </p>
          </div>
        </div>

        <section className="mt-14" aria-labelledby="award-winners-heading">
          <h2
            id="award-winners-heading"
            className="text-3xl md:text-4xl font-bold text-primary text-center mb-8"
          >
            2026 Award Winners
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {awardWinners.map((winner) => (
              <article
                key={winner.name}
                className="overflow-hidden rounded-lg border border-border bg-card shadow-card"
              >
                <img
                  src={winner.portrait}
                  alt={`Portrait of ${winner.name}`}
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary">{winner.name}</h3>
                  <p className="mt-1 font-semibold text-secondary">{winner.institution}</p>
                  <p className="mt-5 text-foreground leading-relaxed">
                    <strong>Presentation Title:</strong> “{winner.presentation}”
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WfirmYoungInvestigatorAwards;
