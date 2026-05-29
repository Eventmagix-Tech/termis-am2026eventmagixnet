import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const speakers = [
  {
    name: "Prof. Gary C. An",
    image:
      "https://airdrive.eventsair.com/eventsairwesteuprod/production-kenes-public/56cc435eb3d0428298131612d3cb7d87",
    affiliation:
      "University of Vermont Larner",
  },
  {
    name: "Prof. Jason A. Burdick",
    image:
      "https://airdrive.eventsair.com/eventsairwesteuprod/production-kenes-public/8be3417038ff49e78f2c013c0ef5c0de",
    affiliation: "University of Colorado Boulder",
  },
  {
    name: "Prof. Christopher E. Mason",
    image:
      "https://airdrive.eventsair.com/eventsairwesteuprod/production-kenes-public/69e254bad3454525a843f9164e0b344c",
    affiliation: "Weill Cornell Medicine",
  },
  {
    name: "Prof. Shayn Peirce-Cottler",
    image:
      "https://airdrive.eventsair.com/eventsairwesteuprod/production-kenes-public/4a0ef0dad87e43e4b92f8e72241c4cfe",
    affiliation: "University of Virginia",
  },
  {
    name: "Prof. Maryam Tabrizian",
    image:
      "https://airdrive.eventsair.com/eventsairwesteuprod/production-kenes-public/77d16666123c42f8ba09b3e0a74d8a15",
    affiliation: "McGill University, Canada",
  },
  {
    name: "Dr. Mary C. Walsh",
    image:
      "https://airdrive.eventsair.com/eventsairwesteuprod/production-kenes-public/393e1a09018046e98900d470931c702c",
    affiliation: "Maidstone Consulting Group, LLC",
  },
];

const PlenarySpeakersSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-medium text-sm tracking-wider uppercase">
            <span aria-hidden="true">⚜</span> Featured Voices <span aria-hidden="true">⚜</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-2">
            View our exciting lineup of Plenary Speakers
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {speakers.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center text-center"
            >
              <img
                src={s.image}
                alt={s.name}
                loading="lazy"
                className="rounded-full h-28 w-28 md:h-32 md:w-32 object-cover border-4 border-accent/30 mb-3"
              />
              <h3 className="text-sm font-bold text-white leading-tight">
                {s.name}
              </h3>
              <p className="text-xs text-white/70 mt-1">
                {s.affiliation}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link to="/plenary-speakers">View All Plenary Speakers →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlenarySpeakersSection;
