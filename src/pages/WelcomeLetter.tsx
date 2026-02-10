import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

const WelcomeLetter = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20 md:pt-24">
        {/* Hero Section - Consistent with Contact Us */}
        <section className="bg-gradient-to-br from-primary via-primary/95 to-secondary py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Welcome Letter
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              A message from the TERMIS-AM 2026 Conference Co-Chairs
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
            {/* Welcome Letter - Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 bg-muted/50 rounded-lg shadow-card p-8 md:p-10 border border-accent/20"
            >
              <div className="prose prose-lg max-w-none text-foreground/90 space-y-6">
                <p className="text-xl leading-relaxed font-medium text-primary">
                  Dear Colleagues and Friends,
                </p>

                <p className="leading-relaxed">
                  It is our distinct pleasure to invite you to the Tissue Engineering and Regenerative Medicine International Society - Americas 2026 (TERMIS-AM 2026) Conference and 20th Anniversary Celebration of TERMIS in the vibrant city of New Orleans, Louisiana.
                </p>

                <p className="leading-relaxed">
                  This year holds special significance. As we mark two decades of leadership in tissue engineering and regenerative medicine since the founding of TERMIS in 2006, we celebrate our collective achievements and look boldly to the future under the conference slogan: <span className="font-serif italic text-accent">"Bench. Chip. Clinic. Where y'at in regeneration?"</span>
                </p>

                <p className="leading-relaxed">
                  Our scientific program will spotlight three cross-cutting themes that are reshaping tissue engineering and regenerative medicine while accelerating clinical translation: <strong className="text-secondary">CRISPR and Lipid Nanoparticles</strong>, <strong className="text-secondary">Organ-on-Chip Models</strong>, and <strong className="text-secondary">Artificial Intelligence</strong>.
                </p>

                <p className="leading-relaxed">
                  Through plenary lectures, symposia, workshops, and interactive sessions, we will explore how these technologies are driving breakthroughs across our field—from stem cell engineering to biofabrication, from immunomodulation to clinical translation.
                </p>

                <p className="leading-relaxed">
                  TERMIS-AM 2026 will also provide unique opportunities for networking, mentorship, and career development. Our Young Investigator and Trainee Program will connect early-career scientists with field leaders, while dedicated sessions for industry professionals and clinicians will foster translational partnerships.
                </p>

                <p className="leading-relaxed">
                  And what better setting than New Orleans? Known for its rich cultural heritage, world-renowned cuisine, and legendary hospitality, the Crescent City promises an unforgettable experience both inside and outside the conference halls. From the historic French Quarter to the lively music scene, New Orleans embodies the spirit of innovation and celebration that defines TERMIS.
                </p>

                <p className="leading-relaxed">
                  We look forward to welcoming you to New Orleans in November 2026. Together, let's celebrate 20 years of transformative science and chart the next chapter of tissue engineering and regenerative medicine.
                </p>

                <p className="leading-relaxed font-medium text-primary mt-8">
                  Warmest regards,
                </p>

                <div className="mt-4 space-y-1">
                  <p className="font-semibold text-foreground">Riccardo Gottardi, PhD, Nicole Li-Jessen, PhD & Walter Lee Murfee III, PhD</p>
                  <p className="text-sm text-muted-foreground">TERMIS-AM 2026 Conference Co-Chairs</p>
                </div>
              </div>

              {/* Decorative fleur-de-lis divider */}
              <div className="flex items-center justify-center mt-10 gap-4">
                <div className="h-px w-16 bg-accent/40" />
                <span className="text-accent text-2xl">⚜</span>
                <div className="h-px w-16 bg-accent/40" />
              </div>
            </motion.div>

            {/* Conference Co-Chairs - Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="lg:col-span-1"
            >
              <div className="bg-muted/50 rounded-lg shadow-card p-6 md:p-8 border border-accent/20 sticky top-24">
                <h3 className="text-xl font-serif font-bold text-primary text-center mb-6">
                  Conference Co-Chairs
                </h3>

                <div className="space-y-4">
                  {coChairs.map((chair, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-4 p-3 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-accent/10"
                    >
                      <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-accent/30 flex-shrink-0 overflow-hidden">
                        <img
                          src={chair.photo}
                          alt={chair.name}
                          className={`w-full h-full object-cover ${chair.photoPosition}`}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base font-serif font-semibold text-primary">
                          {chair.name}
                        </h4>
                        {chair.subtitle && (
                          <p className="text-xs text-foreground/60 mt-1 leading-snug">
                            {chair.subtitle}
                          </p>
                        )}
                        {chair.institution && (
                          <p className="text-xs text-foreground/60 mt-0.5 leading-snug">
                            {chair.institution}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative fleur-de-lis divider */}
                <div className="flex items-center justify-center mt-6 gap-4">
                  <div className="h-px w-12 bg-accent/40" />
                  <span className="text-accent text-xl">⚜</span>
                  <div className="h-px w-12 bg-accent/40" />
                </div>
              </div>
            </motion.div>
          </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WelcomeLetter;
