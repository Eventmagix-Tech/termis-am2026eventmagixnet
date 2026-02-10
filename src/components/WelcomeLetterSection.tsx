import { motion } from "framer-motion";
import cochairGottardi from "@/assets/cochair-gottardi.jpg";
import cochairMurfee from "@/assets/cochair-murfee.jpg";
import cochairLiJessen from "@/assets/cochair-3.jpg";

const coChairs = [
  {
    name: "Riccardo Gottardi, PhD",
    title: "Conference Co-Chair",
    subtitle: "Assistant Professor, Department of Pediatrics, Division of Pulmonary Medicine\nDepartment of Bioengineering",
    institution: "University of Pennsylvania\nChildren's Hospital of Philadelphia",
    photo: cochairGottardi,
    photoPosition: "object-center",
  },
  {
    name: "Nicole Li-Jessen, PhD",
    title: "Conference Co-Chair",
    subtitle: "Associate Professor, Departments of Biomedical Engineering, Otolaryngology, Communication Sciences and Disorders",
    institution: "Canada Research Chair in Personalized Medicine of Upper Airway Health and Diseases\nMcGill University, Canada",
    photo: cochairLiJessen,
    photoPosition: "object-[30%_20%]",
  },
  {
    name: "Walter Lee Murfee III, PhD",
    title: "Conference Co-Chair",
    subtitle: "Professor & Senior Associate Chair for Undergraduate Studies\nJ. Crayton Pruitt Family Department of Biomedical Engineering",
    institution: "University of Florida",
    photo: cochairMurfee,
    photoPosition: "object-top",
  },
];

const WelcomeLetterSection = () => {
  return (
    <section id="welcome" className="py-20 px-4 bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-medium text-sm tracking-wider uppercase">
            ⚜ Welcome Message ⚜
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mt-2">
            Welcome Letter
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Welcome Letter - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg shadow-card p-8 md:p-10 border border-accent/20"
          >
            <div className="prose prose-lg max-w-none text-foreground/90 space-y-5">
              <p className="text-lg leading-relaxed font-medium">
                Dear Colleagues and Friends,
              </p>

              <p className="leading-relaxed text-sm md:text-base">
                It is our distinct pleasure to invite you to the Tissue Engineering and Regenerative Medicine International Society - Americas 2026 (TERMIS-AM 2026) Conference and 20th Anniversary Celebration of TERMIS in the vibrant city of New Orleans, Louisiana.
              </p>

              <p className="leading-relaxed text-sm md:text-base">
                This year holds special significance. As we mark two decades of leadership in tissue engineering and regenerative medicine since the founding of TERMIS in 2006, we celebrate our collective achievements and look boldly to the future under the conference slogan: <span className="font-serif italic text-accent">"Bench. Chip. Clinic. Where y'at in regeneration?"</span>
              </p>

              <p className="leading-relaxed text-sm md:text-base">
                Our scientific program will spotlight three cross-cutting themes that are reshaping tissue engineering and regenerative medicine while accelerating clinical translation: <strong className="text-secondary">CRISPR and Lipid Nanoparticles</strong>, <strong className="text-secondary">Organ-on-Chip Models</strong>, and <strong className="text-secondary">Artificial Intelligence</strong>.
              </p>
            </div>

            {/* Read More Button */}
            <div className="mt-6">
              <a
                href="/welcome-letter"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-medium rounded-lg hover:bg-accent/90 transition-colors duration-200"
              >
                Read More
                <span>→</span>
              </a>
            </div>

            {/* Decorative fleur-de-lis divider */}
            <div className="flex items-center justify-center mt-6 gap-4">
              <div className="h-px w-16 bg-accent/40" />
              <span className="text-accent text-2xl">⚜</span>
              <div className="h-px w-16 bg-accent/40" />
            </div>
          </motion.div>

          {/* Conference Co-Chairs - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-lg shadow-card p-8 md:p-10 border border-accent/20"
          >
            <h3 className="text-2xl font-serif font-bold text-primary text-center mb-8">
              Conference Co-Chairs
            </h3>

            <div className="space-y-6">
              {coChairs.map((chair, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-accent/10"
                >
                  {/* Photo placeholder */}
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/10 border-2 border-accent/30 flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <img 
                      src={chair.photo} 
                      alt={chair.name}
                      className={`w-full h-full object-cover ${chair.photoPosition}`}
                    />
                  </div>
                  
                  {/* Info */}
                  <div>
                    <h4 className="text-lg font-serif font-semibold text-primary">
                      {chair.name}
                    </h4>
                    {chair.subtitle && (
                      <p className="text-xs text-foreground/60 mt-1 leading-snug">
                        {chair.subtitle}
                      </p>
                    )}
                    {chair.institution && (
                      <p className="text-xs text-foreground/60 mt-0.5 leading-snug whitespace-pre-line">
                        {chair.institution}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative fleur-de-lis divider */}
            <div className="flex items-center justify-center mt-8 gap-4">
              <div className="h-px w-16 bg-accent/40" />
              <span className="text-accent text-2xl">⚜</span>
              <div className="h-px w-16 bg-accent/40" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeLetterSection;