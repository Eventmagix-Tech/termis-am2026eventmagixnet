import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";
import { AlertTriangle, FileText, Plane, ExternalLink, Mail } from "lucide-react";

const usefulLinks = [
  {
    label: "Immigration and Checkpoints Authority",
    url: "https://www.ica.gov.sg/",
  },
  {
    label: "U.S. Embassies, Consulates & Diplomatic Missions",
    url: "https://www.usembassy.gov/",
  },
  {
    label: "Immigration Visas Info – Visa Resources",
    url: "https://travel.state.gov/content/travel/en/us-visas.html",
  },
  {
    label: "How to Enter the United States",
    url: "https://www.cbp.gov/travel/international-visitors",
  },
  {
    label: "U.S. Department of State Business Visa Center",
    url: "https://travel.state.gov/content/travel/en/us-visas/business.html",
  },
  {
    label: "Visa Appointment and Processing Wait Times",
    url: "https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/wait-times.html",
  },
  {
    label: "National Academies International Visitors Office (IVO)",
    url: "https://www.nationalacademies.org/international-visitors-office",
  },
];

const VisaInformation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <PageHeader
          title="Visa Information"
          subtitle="Be sure to read through our visa guidance to ensure that your visit to New Orleans is easy, organized, and stress-free."
          tag="⚜ Travel Requirements ⚜"
        />

        {/* Important Notice */}
        <section className="py-8 bg-gold/10 border-b border-gold/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-md border-l-4 border-gold">
                <AlertTriangle className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-3">IMPORTANT</h2>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    We encourage foreign participants to apply for their visas as early as possible, and recommend they do so <strong>at least three to six months before the Conference</strong>. Some consulates may have backlogs in scheduling visa interviews. Therefore, applicants should first consult the{" "}
                    <a 
                      href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/wait-times.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:underline font-medium"
                    >
                      U.S. Department of State's visa appointment and processing wait times website
                    </a>.
                  </p>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Further information on business visas can be found at the{" "}
                    <a 
                      href="https://travel.state.gov/content/travel/en/us-visas/business.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:underline font-medium"
                    >
                      U.S. Department of State Business Visa Center website
                    </a>{" "}
                    and the{" "}
                    <a 
                      href="https://www.nationalacademies.org/international-visitors-office" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:underline font-medium"
                    >
                      IVO website
                    </a>{" "}
                    – the National Academies International Visitors Office (IVO). The International Visitors Office assists international students, scholars, and other travelers who are coming to the United States for scientific purposes.
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    If you are experiencing significant visa delays, please{" "}
                    <a 
                      href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/visas-news-archive/provide-feedback-on-your-experience.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:underline font-medium"
                    >
                      fill out the visa survey here
                    </a>. This will bring your case to the attention of the U.S. Department of State.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-10">
              
              {/* Visa Processes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-muted/50 rounded-xl p-6 md:p-8 shadow-lg border border-accent/10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">Visa Processes and Customs</h2>
                    <div className="text-foreground/80 leading-relaxed space-y-4">
                      <p>
                        Visa regulations depend on your nationality and country of origin. We suggest you contact your local U.S. Embassy or Consulate for full and official instructions on the specific visa regulations and application procedure that apply to you.
                      </p>
                      <p className="font-medium text-foreground">
                        It is the responsibility of the participant to obtain a visa if required.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Procedures for Entering */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-muted/50 rounded-xl p-6 md:p-8 shadow-lg border border-accent/10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Plane className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">Procedures for Entering the United States</h2>
                    <div className="text-foreground/80 leading-relaxed space-y-4">
                      <p>
                        When you arrive in the United States, you must show valid travel documents as part of the entry process. The documents you need and whether your passport needs to be valid for six months after your travel dates depend on the country you are arriving from and your citizenship or status.
                      </p>
                      <p>
                        You may need a visa when coming to or traveling through the United States. Review what other documents you need to enter the U.S. Also, find information on how to apply for an immigrant visa.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Visa Invitation Letter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-muted/50 rounded-xl p-6 md:p-8 shadow-lg border border-accent/10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">Visa Invitation Letter</h2>
                    <div className="text-foreground/80 leading-relaxed space-y-4">
                      <p>
                        An invitation letter is available to registered participants. Your Registration ID and email are required to receive an invitation letter.
                      </p>
                      <p className="font-medium text-foreground">
                        You can find the link to the visa letter portal in your registration confirmation.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Useful Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 md:p-8 shadow-lg border border-accent/10"
              >
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-6">Useful Links</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {usefulLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-card rounded-lg hover:bg-accent/5 transition-colors group"
                    >
                      <ExternalLink className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground/80 group-hover:text-accent transition-colors text-sm font-medium">
                        {link.label}
                      </span>
                    </a>
                  ))}
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

export default VisaInformation;
