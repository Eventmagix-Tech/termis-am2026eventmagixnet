import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Speaker {
  name: string;
  image: string;
  affiliations: string;
  topic: string;
  bio?: string;
}

const speakers: Speaker[] = [
  {
    name: "Prof. Gary C. An",
    image:
      "https://airdrive.eventsair.com/eventsairwesteuprod/production-kenes-public/56cc435eb3d0428298131612d3cb7d87",
    affiliations:
      "Green and Gold Professor of Trauma and Critical Care / Vice-Chair for Surgical Research / Department of Surgery, University of Vermont Larner",
    topic: "AI Panel in Tissue Engineering and Regenerative Medicine",
    bio: "Dr. Gary An is the Green and Gold Professor of Trauma and Critical Care and Vice-Chairman for Surgical Research in the Department of Surgery at the University of Vermont Larner College of Medicine. He is a clinically active trauma/critical care surgeon who has worked on the application of complex systems analysis, agent-based modeling and in silico trials to study sepsis, inflammation, wound healing, host-pathogen interactions and cancer since 1999. He is one of the co-founders of Translational Systems Biology, a discipline that promotes the use of multi-scale mechanistic simulation models to cross the Valley of Death of Drug Development. He asserts that the biggest bottleneck in drug development/repurposing is the inability to effectively predict the effect of a molecular manipulation of cellular behavior (e.g. a drug) demonstrated to be effective in pre-clinical studies or with existing clinical usage when it is then applied in a novel clinical context. His work consists of the development of multiscale, cell-based computer simulations and the integration of machine learning and artificial intelligence with such models to represent the individual diversity within clinical populations (e.g. populations of medical digital twins for in silico trials) and for discovery and development of robust therapeutic control modalities. More recently he has been active in defining and developing mechanism-based biomedical digital twins to further the goal of true personalized precision medicine.",
  },
  {
    name: "Prof. Jason A. Burdick",
    image:
      "https://airdrive.eventsair.com/eventsairwesteuprod/production-kenes-public/8be3417038ff49e78f2c013c0ef5c0de",
    affiliations:
      "Bowman Endowed Professor / BioFrontiers Institute / Department of Chemical and Biological Engineering / University of Colorado Boulder",
    topic: "Advances in Biofabrication for Tissue Modeling and Repair",
    bio: "Jason A. Burdick, PhD is the Bowman Endowed Professor in the BioFrontiers Institute and Department of Chemical and Biological Engineering at the University of Colorado Boulder. Dr. Burdick's research involves the design of new biomaterials that can be processed through fabrication methodologies to meet the needs of medicine, ranging from translational therapeutics to tissue models. Jason currently has over 360 peer-reviewed publications and he is on the editorial boards of Advanced Materials, Biofabrication, Advanced Healthcare Materials, Advanced NanoBiomed Research, International Journal of Bioprinting, and npj Biomedical Innovations. He has been recognized through numerous awards such as a Packard Fellowship in Science and Engineering, an American Heart Association Established Investigator Award, and the Clemson Award for Basic Science through the Society for Biomaterials. Jason has also been elected as a Member of the National Academy of Medicine, a Fellow of the National Academy of Inventors, a Fellow of the American Institute for Medical and Biological Engineering, to the International College of Fellows of Biomaterials Science and Engineering, and an International Fellow of The Canadian Academy of Engineering. He has founded several companies to translate the technology from his laboratory into clinical therapeutics.",
  },
  {
    name: "Prof. Christopher E. Mason",
    image:
      "https://airdrive.eventsair.com/eventsairwesteuprod/production-kenes-public/69e254bad3454525a843f9164e0b344c",
    affiliations:
      "WorldQuant Professor of Genomics and Computational Biomedicine / Department of Systems and Computational Biomedicine / Weill Cornell Medicine / Director of the Initiative for Quantitative Prediction / Co-Director of the Trivedi Institute of Space and Global Biomedicine",
    topic:
      "Biotechnology and Bioengineering to Enable Space Exploration and Precision Medicine",
    bio: "Dr. Christopher Mason is the WorldQuant Professor of Systems and Computational Biomedicine at Weill Cornell Medicine. He completed a dual B.S. in Genetics & Biochemistry at University of Wisconsin-Madison (2001), a Ph.D. in Genetics from Yale University (2006), Post-doctoral Fellowship in Clinical Genetics at Yale Medical School (2009) while also serving as the first Visiting Fellow of Genomics, Ethics, and Law at the Information Society Project at Yale Law School (2006-2009). In 2010, he became an Assistant Professor of Genomics, Physiology, and Biophysics at Weill Cornell Medicine, then promoted to Associate Professor in 2015, made the Director of the WorldQuant Initiative for Quantitative Prediction in 2017, and promoted to Full Professor in 2020. He also holds appointments at Tri-Institutional Program on Computational Biology and Medicine (Cornell, Memorial Sloan-Kettering Cancer Center and Rockefeller University), the Sandra and Edward Meyer Cancer Center, the Feil Family Brain and Mind Research Institute, (BMRI), and is an affiliate fellow of the Information Society Project (ISP) at Yale Law School, affiliate faculty of the Consortium for Space Genetics at Harvard Medical School, and a Core Faculty Member of New York Genome Center (NYGC). He was named as one of the \"Brilliant Ten\" Scientists by Popular Science, featured as a TEDMED speaker, and called \"The Genius of Genetics\" by 92Y. He has >400 peer-reviewed papers and scholarly works that have been featured on the covers of Nature, Science, Cell, Nature Biotechnology, Nature Microbiology, and Neuron, as well as legal briefs cited by several U.S. District Courts and the U.S. Supreme Court. He is an inventor on five patents and developed five FDA-authorized diagnostic tests, has co-founded 12 biotechnology companies, serves as an advisor to 22 others, and has also co-founded 5 non-profits.",
  },
  {
    name: "Prof. Shayn Peirce-Cottler",
    image:
      "https://airdrive.eventsair.com/eventsairwesteuprod/production-kenes-public/4a0ef0dad87e43e4b92f8e72241c4cfe",
    affiliations:
      "Harrison Distinguished Professor and Chair of Biomedical Engineering / University of Virginia",
    topic: "AI Panel in Tissue Engineering and Regenerative Medicine",
    bio: "Shayn Peirce-Cottler, Ph.D. is Harrison Distinguished Professor and Chair of Biomedical Engineering, with secondary appointments in the Department of Ophthalmology and Department of Plastic Surgery at the University of Virginia (UVA). Dr. Peirce-Cottler received Bachelor's of Science degrees in Biomedical Engineering and Engineering Mechanics from The Johns Hopkins University in 1997. She earned her Ph.D. in the Department of Biomedical Engineering at the University of Virginia in 2002. Dr. Peirce-Cottler develops computational models and combines them with wet lab experiments to study how tissues heal after injury and to develop therapies for inducing tissue regeneration. She teaches courses in cell and molecular physiology and computational systems bioengineering to undergraduate and graduate students. Dr. Peirce-Cottler has published over 150 peer reviewed papers and book chapters, and she is an inventor on three U.S. Patents. She is a fellow in both the American Institute for Medical and Biological Engineering College of Fellows (AIMBE) and the Biomedical Engineering Society (BMES). She is also Past-President of The Microcirculatory Society and the recipient of the 2024 Eugene M. Landis Award for Microvascular Research. Dr. Peirce-Cottler is a UVA School of Medicine Pinn Scholar, and in 2020 she was awarded the UVA School of Medicine's Robert H. Kader Award for Excellence in Graduate Teaching and Mentoring. Dr. Peirce-Cottler is passionate about mentoring students and early-career faculty and participating in K-12 outreach to increase students' interest and self-confidence in pursuing STEM careers.",
  },
  {
    name: "Prof. Maryam Tabrizian",
    image:
      "https://airdrive.eventsair.com/eventsairwesteuprod/production-kenes-public/77d16666123c42f8ba09b3e0a74d8a15",
    affiliations:
      "James McGill Professor / Departments of Biomedical Engineering and Dental Medicine and Oral Health Sciences / McGill University, Canada",
    topic:
      "Multifunctional Biomaterials and Nanomedicine for Targeted Regenerative Therapies",
    bio: "Maryam Tabrizian is a James McGill Professor in the Departments of Biomedical Engineering and Dental Medicine and Oral Health Sciences at McGill University. She holds a Tier I Canada Research Chair in Regenerative Medicine and Nanomedicine. Her research focuses on the development of biomimetic materials, nanomedicine, biointerfaces, and microfluidic platforms for applications in tissue regeneration, therapeutic delivery, disease modeling, and biosensing. Her interdisciplinary research integrates biomaterials engineering, nanotechnology, and cellular therapies to develop innovative strategies for regenerative and precision medicine. Professor Tabrizian has received numerous distinctions, including the FRQS Chercheur National Fellowship and the John Simon Guggenheim Memorial Foundation Fellowship. She is an elected Fellow of the Royal Society of Canada, the Canadian Academy of Health Sciences, the Canadian Academy of Engineering, and the American Institute for Medical and Biological Engineering. She has authored more than 300 peer-reviewed publications, with over 22,000 citations, reflecting the broad impact of her contributions to biomaterials, regenerative medicine, and nanomedicine.",
  },
  {
    name: "Dr. Mary C. Walsh",
    image:
      "https://airdrive.eventsair.com/eventsairwesteuprod/production-kenes-public/393e1a09018046e98900d470931c702c",
    affiliations: "Maidstone Consulting Group, LLC",
    topic: "AI Panel in Tissue Engineering and Regenerative Medicine",
    bio: "Dr. Mary Walsh is Co-Founder and Chief Scientific Investigator of Maidstone Consulting Group, LLC, and one of the most respected voices in the emerging field of research data forensics. She brings rare, cross-disciplinary expertise to the forensic analysis of scientific and biomedical research — specializing in cases of academic misconduct and false claims — and is trusted by healthcare leaders, academic institutions, and organizational deciding officials internationally.\n\nPrior to founding MCG, LLC Dr. Walsh was Chief Scientific Investigator at Harvard Medical School with the Office of Academic and Research Integrity, where she transformed ad hoc forensic workflows into a rigorous, nationally recognized programmatic approach to research data analysis. Recognizing the need for dedicated expertise across the field, she co-founded the Forensics Special Interest Group (FSIG) within the Association of Research Integrity Officers — a specialized consortium that has become a vital resource for research integrity professionals.\n\nHer work extends beyond investigation into innovation. As a Principal Investigator, Dr. Walsh has led federally funded, cross-disciplinary teams of data integrity and AI specialists in developing cutting-edge software platforms for detecting and analyzing image data duplication and manipulation. Her command of advanced forensic tools — including those developed by the federal Office for Research Integrity (HHS ORI) — places her at the forefront of a discipline with profound implications for scientific credibility and public trust.\n\nDr. Walsh holds a B.S. in Biology from Marist College and an M.S. and Ph.D. in Immunology and Microbiology from Albany Medical College. She completed her postdoctoral fellowship in Immunology and Physiology at Harvard Medical School. She is a SANS-GIAC certified forensic examiner and data acquisition specialist (GCFE, GBFA).",
  },
];

const PlenarySpeakers = () => {
  const [selected, setSelected] = useState<Speaker | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Plenary Speakers"
        description="Meet the plenary speakers of TERMIS-AM 2026 in New Orleans."
      />
      <Header />
      <PageHeader title="Plenary Speakers" />

      <main id="main">

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-end mb-6">
            <p className="text-sm italic text-muted-foreground">
              Speakers are ordered in alphabetical order by their surname.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((s) => (
              <div
                key={s.name}
                className="bg-white rounded-xl shadow-card border border-accent/10 p-6 flex flex-col"
              >
                <img
                  src={s.image}
                  alt={s.name}
                  className="rounded-full h-40 w-40 object-cover mx-auto mb-4 border-4 border-accent/30"
                  loading="lazy"
                />
                <h2 className="text-xl font-bold text-primary text-center mb-1">
                  {s.name}
                </h3>
                <p className="text-sm text-center text-foreground mb-4 whitespace-pre-line">
                  {s.affiliations}
                </p>
                <div className="text-sm text-center text-foreground mb-4 mt-auto">
                  <span className="font-semibold">Lecture Topic: </span>
                  {s.topic}
                </div>
                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelected(s)}
                  >
                    Short Bio
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selected?.name}</DialogTitle>
          </DialogHeader>
          <p className="text-foreground text-sm leading-relaxed whitespace-pre-line">
            {selected?.bio ?? `Biography details for ${selected?.name} will be updated soon.`}
          </p>
        </DialogContent>
      </Dialog>

      </main>

      <Footer />
    </div>
  );
};

export default PlenarySpeakers;
