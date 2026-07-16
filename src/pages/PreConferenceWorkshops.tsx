import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import kammAsset from "@/assets/workshops/kamm.jpg.asset.json";
import weissAsset from "@/assets/workshops/weiss.jpg.asset.json";
import ramanAsset from "@/assets/workshops/raman.jpg.asset.json";
import smirnovaAsset from "@/assets/workshops/smirnova.jpg.asset.json";
import kleinstreuerAsset from "@/assets/workshops/kleinstreuer.jpg.asset.json";

const speakers = [
  {
    name: "Roger Kamm, PhD",
    affiliation: "Massachusetts Institute of Technology (MIT)",
    image: kammAsset.url,
    bio: [
      "Roger Kamm, PhD is the Cecil and Ida Green Distinguished Professor of Biological and Mechanical Engineering at the Massachusetts Institute of Technology. An internationally recognized leader in biomechanics, bioengineering, and microphysiological systems, his research focuses on developing microfluidic and engineered tissue platforms to model human physiology and disease.",
      "Over the past 15 years, Kamm's laboratory has pioneered vascularized 3D tissue models for studying cancer, metastasis, vascular biology and Alzheimer's disease. His work has led to numerous industry collaborations and the co-founding of AIM Biotech, a company focused on microfluidic systems for 3D cell culture.",
      "Kamm currently directs an NCI-funded U54 Center on Metastatic Cancer and is a member of both the National Academy of Engineering and the National Academy of Medicine. He has received numerous honors, including the ASME Lissner Medal, the Huiskes Medal, and the inaugural ASME Nerem Medal for mentoring and education.",
    ],
  },
  {
    name: "Ron Weiss, PhD",
    affiliation: "Massachusetts Institute of Technology (MIT)",
    image: weissAsset.url,
    bio: [
      "Ron Weiss, PhD, is the Underwood Prescott Professor of Biological Engineering and of Electrical Engineering and Computer Science at the Massachusetts Institute of Technology, and is the Director of the Synthetic Biology Center at MIT. Professor Weiss is one of the pioneers of synthetic biology. He has been engaged in synthetic biology research since 1996 when he was a graduate student at MIT. After completion of his PhD, Weiss joined the faculty at Princeton University, and then returned to MIT in 2009.",
      "The research pursued by Weiss since those early days has placed him in a worldwide position of leadership in the field, as evidenced both by publications from his lab as well as a variety of awards and other forms of recognition. The Weiss lab published seminal papers in synthetic biology focused on synthesis of gene networks engineered to perform in vivo analog and digital logic computation and programming cell aggregates to coordinate tasks using engineered cell-cell communication. Several of these manuscripts were featured in a Nature special collection of a select number of synthetic biology papers reflecting on the first 10 years of synthetic biology. The lab focuses both on foundational research, e.g. creating general methods to improve our ability to engineering biological systems, as well as pursuing specific health related applications such as cancer immunotherapy and programmable organoids where synthetic biology provides unique capabilities.",
    ],
  },
  {
    name: "Ritu Raman, PhD",
    affiliation: "Massachusetts Institute of Technology (MIT)",
    image: ramanAsset.url,
    bio: [
      "Ritu Raman, PhD is the Eugene Bell Career Development Associate Professor of Mechanical Engineering at MIT. Ritu's neuromuscular tissue engineering research has received several recognitions including the Presidential Early Career Award for Scientists and Engineers (PECASE), the National Science Foundation CAREER Award, the Army Research Office Early Career Award, and the Office of Naval Research Young Investigator Award, as well as Rising Star Junior Faculty Awards from the Biomedical Engineering Society and the American Society of Mechanical Engineers. She has been named a National Academy of Engineering (NAE) Grainger Frontiers of Engineering Fellow and National Academy of Sciences (NAS) Kavli Frontiers of Science Fellow, and is the author of the MIT Press book Biofabrication.",
    ],
  },
  {
    name: "Lena Smirnova, PhD",
    affiliation: "Johns Hopkins University",
    image: smirnovaAsset.url,
    bio: [
      "Lena Smirnova, PhD is an assistant professor at the Center of Alternatives to Animal Testing, Johns Hopkins University, where she is leading a program on microphysiological systems. She has joint appointments at Johns Hopkins School of Engineering and Georgetown University. Her research focuses on the development of NAMs for developmental neurotoxicity testing and understanding gene-environment interactions in autism. Dr. Smirnova is a co-organizer of a series of conferences on Microphysiological Systems (MPS) and co-founder of the International MPS Society, where she served as a founding president and currently is a past-president.",
    ],
  },
  {
    name: "Nicole C. Kleinstreuer, PhD",
    affiliation:
      "National Institutes of Health (NIH), Division of Program Coordination, Planning, and Strategic Initiatives (DPCPSI)",
    image: kleinstreuerAsset.url,
    bio: [
      "Nicole C. Kleinstreuer, PhD, is the NIH Deputy Director for Program Coordination, Planning, and Strategic Initiatives, where she leads the Division of Program Coordination, Planning, and Strategic Initiatives in the NIH Office of the Director, overseeing trans-NIH research programs and strategic policy initiatives. She is internationally recognized for advancing innovative, human-relevant research strategies that strengthen public health protection. Previously, she served as Director of NICEATM at NIEHS, Executive Director of ICCVAM, and US National Co-Coordinator for the OECD Test Guidelines Programme, leading interagency and international efforts to advance new approach methodologies, reduce animal testing, and integrate computational modeling and AI into regulatory science. Her research spans translational bioinformatics, predictive modeling, systems toxicology, and quantitative risk assessment, and she has authored more than 150 peer-reviewed publications. Dr. Kleinstreuer has received numerous honors, including the Society of Toxicology Achievement Award and the Enhancement of Animal Welfare Award, along with multiple NIH and NIEHS Merit Awards. She holds degrees in biomedical engineering, applied mathematics, and bioengineering, maintains adjunct faculty appointments at Yale University and UNC Chapel Hill, and is deeply committed to mentorship and scientific innovation with real-world impact.",
    ],
  },
];

const agenda = [
  {
    time: "1:00 – 1:20 PM",
    title: "Welcome, Introduction, and The Evolution of In Vitro Living Systems",
    speakers: [
      "Magdalena Kasendra, PhD, Center for Stem Cell and Organoid Medicine (CuSTOM) at Cincinnati Children's Hospital",
      "Elizabeth Crist, PhD, InSphero",
      "Roger Kamm, PhD, Massachusetts Institute of Technology (MIT)",
    ],
  },
  {
    time: "1:20 – 1:45 PM",
    title: "Programming Life: Synthetic Biology in Tissue Engineering",
    speakers: ["Ron Weiss, PhD, Massachusetts Institute of Technology (MIT)"],
  },
  {
    time: "1:45 – 2:10 PM",
    title: "Biobots and Living Machines: Engineering Functional Output",
    speakers: ["Ritu Raman, PhD, Massachusetts Institute of Technology (MIT)"],
  },
  {
    time: "2:10 – 2:35 PM",
    title: "Organoid Intelligence and Computational Integration",
    speakers: ["Lena Smirnova, PhD, Johns Hopkins University"],
  },
  {
    time: "2:35 – 2:45 PM",
    title: "Coffee Break",
    speakers: [],
  },
  {
    time: "2:45 – 3:10 PM",
    title: "The Promise of NAMs: Policy, Funding, and the Regulatory Landscape",
    speakers: [
      "Nicole C. Kleinstreuer, PhD, National Institutes of Health (NIH), Division of Program Coordination, Planning, and Strategic Initiatives (DPCPSI)",
    ],
  },
  {
    time: "3:10 – 3:55 PM",
    title:
      "Panel Discussion: Accelerating Translation, Validation, and Regulatory Readiness of MPS and M-CELS Technologies",
    speakers: ["Panelists: Roger Kamm, Lena Smirnova, Nicole Kleinstreuer"],
  },
  {
    time: "3:55 – 4:00 PM",
    title: "Closing Remarks",
    speakers: [],
  },
];

const PreConferenceWorkshops = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Pre-Conference Workshop"
        description="Microphysiological and Multi-Cellular Engineered Living Systems: Scientific Frontiers and Translational Opportunities — Pre-Conference Workshop at TERMIS-AM 2026."
      />
      <Header />

      <PageHeader title="Pre-Conference Workshop" />

      <main id="main">
        {/* Overview */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Microphysiological and Multi-Cellular Engineered Living Systems: Scientific Frontiers and Translational Opportunities
              </h2>
              <div className="space-y-1 mb-6 text-muted-foreground">
                <p><span className="font-semibold text-foreground">Date:</span> Sunday, November 15, 2026</p>
                <p><span className="font-semibold text-foreground">Time:</span> 1:00 PM – 4:00 PM</p>
                <p><span className="font-semibold text-foreground">Hall:</span> HALL B (Jackson)</p>
              </div>

              <p className="text-muted-foreground mb-8">
                <span className="font-semibold text-foreground">Workshop Organizers:</span>{" "}
                The Americas Regional Chapter and the M-CELS Interest Group of the International Microphysiological Systems Society (iMPSS)
              </p>

              <h3 className="text-xl font-bold text-primary mb-4">Workshop Overview</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Microphysiological systems (MPS) and multi-cellular engineered living systems (M-CELS) are transforming our ability to model human biology with unprecedented complexity and physiological relevance. Recent advances in synthetic biology, organoid intelligence, engineered living machines, and human microphysiological systems are enabling researchers to recreate increasingly sophisticated biological functions in vitro, opening new possibilities for drug discovery, disease modeling, regenerative medicine, and human health research.
                </p>
                <p>
                  At the same time, significant challenges remain in translating these innovations into robust, reproducible, and widely adopted tools. Bridging the gap between breakthrough technologies and real-world implementation requires coordinated efforts across scientific, regulatory, and translational communities to establish validation strategies, regulatory frameworks, and practical pathways for adoption.
                </p>
                <p>
                  This workshop will bring together leaders at the forefront of scientific innovation and translation to discuss both emerging technological frontiers and the critical steps needed to accelerate their impact. Attendees will gain insights into advances in synthetic biology, biobots, organoid intelligence, and next-generation microphysiological systems, while also exploring evolving opportunities for regulatory acceptance, translational implementation, and broader deployment of New Approach Methodologies (NAMs).
                </p>
                <p>
                  Through invited presentations and a panel discussion featuring leaders from academia, government, and translational research, participants will engage in forward-looking conversations about the future of engineered living systems and the roadmap needed to transform scientific innovation into practical and impactful applications.
                </p>
              </div>

              <div className="mt-8 flex justify-center">
                <Button asChild>
                  <a
                    href="https://am2026.termis.org/registration-information"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register Here
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Speakers */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
                Workshop Speakers
              </h2>
              <div className="space-y-6">
                {speakers.map((s) => (
                  <Card key={s.name} className="overflow-hidden">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex flex-col md:flex-row gap-6">
                        <img
                          src={s.image}
                          alt={s.name}
                          className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-lg flex-shrink-0 mx-auto md:mx-0"
                        />
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-primary">{s.name}</h3>
                          <p className="text-accent font-medium mb-4">{s.affiliation}</p>
                          <div className="space-y-3 text-muted-foreground leading-relaxed text-sm md:text-base">
                            {s.bio.map((p, i) => (
                              <p key={i}>{p}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Agenda */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">
                Workshop Agenda
              </h2>
              <div className="space-y-4">
                {agenda.map((item, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-6 p-5 md:p-6 rounded-lg border border-border bg-card"
                  >
                    <div className="font-semibold text-accent whitespace-nowrap">{item.time}</div>
                    <div>
                      <p className="font-semibold text-primary">{item.title}</p>
                      {item.speakers.length > 0 && (
                        <ul className="mt-2 space-y-1 text-muted-foreground text-sm md:text-base">
                          {item.speakers.map((sp, i) => (
                            <li key={i}>{sp}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PreConferenceWorkshops;
