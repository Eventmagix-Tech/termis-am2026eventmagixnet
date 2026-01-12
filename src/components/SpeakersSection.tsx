import { motion } from "framer-motion";

const speakers = [
  {
    name: "Dr. Sarah Mitchell",
    title: "Stanford University",
    specialty: "Stem Cell Biology",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Prof. James Chen",
    title: "MIT",
    specialty: "Bioengineering",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Dr. Maria Rodriguez",
    title: "Harvard Medical School",
    specialty: "Regenerative Medicine",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Prof. David Thompson",
    title: "Johns Hopkins",
    specialty: "Biomaterials",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Dr. Emily Park",
    title: "UC San Diego",
    specialty: "Organ-on-Chip",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Prof. Michael Brown",
    title: "Duke University",
    specialty: "Clinical Translation",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&crop=face",
  },
];

const SpeakersSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-medium text-sm tracking-wider uppercase">
            ⚜ Featured Speakers ⚜
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
            Plenary Keynotes
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            World-renowned experts shaping the future of tissue engineering and regenerative medicine
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              {/* Avatar with gold border */}
              <div className="relative inline-block mb-4">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-accent shadow-gold group-hover:shadow-gold-lg transition-shadow duration-300">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-accent/30 scale-110 group-hover:scale-125 group-hover:border-accent/50 transition-all duration-500" />
              </div>

              <h3 className="text-xl font-serif font-semibold text-foreground">
                {speaker.name}
              </h3>
              <p className="text-accent font-medium text-sm mt-1">
                {speaker.title}
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                {speaker.specialty}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            More speakers to be announced soon
          </p>
          <a
            href="#program"
            className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
          >
            View Full Program
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SpeakersSection;
