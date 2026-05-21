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
    topic: "AI in Tissue Engineering and Regenerative Medicine",
  },
  {
    name: "Prof. Jason A. Burdick",
    image:
      "https://airdrive.eventsair.com/eventsairwesteuprod/production-kenes-public/8be3417038ff49e78f2c013c0ef5c0de",
    affiliations:
      "Bowman Endowed Professor / BioFrontiers Institute / Department of Chemical and Biological Engineering / University of Colorado Boulder",
    topic: "Advances in Biofabrication for Tissue Modeling and Repair",
  },
  {
    name: "Prof. Christopher E. Mason",
    image:
      "https://airdrive.eventsair.com/eventsairwesteuprod/production-kenes-public/69e254bad3454525a843f9164e0b344c",
    affiliations:
      "WorldQuant Professor of Genomics and Computational Biomedicine / Department of Systems and Computational Biomedicine / Weill Cornell Medicine / Director of the Initiative for Quantitative Prediction / Co-Director of the Trivedi Institute of Space and Global Biomedicine",
    topic:
      "Biotechnology and Bioengineering to Enable Space Exploration and Precision Medicine",
  },
  {
    name: "Prof. Shayn Peirce-Cottler",
    image:
      "https://airdrive.eventsair.com/eventsairwesteuprod/production-kenes-public/4a0ef0dad87e43e4b92f8e72241c4cfe",
    affiliations:
      "Harrison Distinguished Professor and Chair of Biomedical Engineering / University of Virginia",
    topic: "AI in Tissue Engineering and Regenerative Medicine",
  },
  {
    name: "Prof. Maryam Tabrizian",
    image:
      "https://airdrive.eventsair.com/eventsairwesteuprod/production-kenes-public/77d16666123c42f8ba09b3e0a74d8a15",
    affiliations:
      "James McGill Professor / Departments of Biomedical Engineering and Dental Medicine and Oral Health Sciences / McGill University, Canada",
    topic:
      "Multifunctional Biomaterials and Nanomedicine for Targeted Regenerative Therapies",
  },
  {
    name: "Dr. Mary C. Walsh",
    image:
      "https://airdrive.eventsair.com/eventsairwesteuprod/production-kenes-public/393e1a09018046e98900d470931c702c",
    affiliations: "Maidstone Consulting Group, LLC",
    topic: "AI in Tissue Engineering and Regenerative Medicine",
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
                <h3 className="text-xl font-bold text-primary text-center mb-1">
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
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selected?.name}</DialogTitle>
          </DialogHeader>
          <p className="text-foreground">
            Biography details for {selected?.name} will be updated soon.
          </p>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default PlenarySpeakers;
