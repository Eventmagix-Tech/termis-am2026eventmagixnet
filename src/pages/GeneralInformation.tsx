import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Globe, Shirt, Mail, Shield, ShieldAlert } from "lucide-react";

const sections = [
  {
    icon: Globe,
    title: "Language",
    content: "The official language of the 2026 TERMIS-AM Conference & Exhibition is English. No translations will be available during the meeting sessions.",
  },
  {
    icon: Shirt,
    title: "Clothing",
    content: "The dress code for the 2026 TERMIS-AM Conference & Exhibition is business formal or business casual for all occasions unless stated otherwise.",
  },
  {
    icon: Mail,
    title: "Invitation Letter",
    content: (
      <>
        <p className="mb-4">
          TERMIS-AM 2026 participants requiring a signed and stamped invitation letter should contact{" "}
          <strong>Ms. Neyir Seda Utugen</strong>, Registration & Accommodation Manager, at{" "}
          <a href="mailto:nutugen@kenes.com" className="text-accent hover:underline font-medium">
            nutugen@kenes.com
          </a>.
        </p>
        <p className="mb-4">
          The invitation letters can be provided for the purpose of getting your institution's approval for your leave to attend the conference or for the purpose of visa application for international participants.
        </p>
        <p className="mb-4">
          <strong>If you are a US citizen</strong> and are requesting the letter for institutional approval for your leave, please make sure to provide your full name (as printed in your passport/ID card), your organization, and full postal address.
        </p>
        <p>
          <strong>If you are an international participant</strong> and are requesting the letter for visa application, please make sure to provide your full name (as printed in your passport), passport number, issue and expiry dates of your passport, your organization, and full postal address.
        </p>
      </>
    ),
  },
  {
    icon: Shield,
    title: "Liability & Insurance",
    content: (
      <>
        <p className="mb-4">
          TERMIS-AM and the Conference Organizing Secretariat cannot accept liability for personal accidents or loss of or damage to the private property of participants. Upon registration, participants agree that neither the TERMIS-AM Leadership and Council nor the Conference Organizing Secretariat assumes any liabilities.
        </p>
        <p>
          Participants are advised to arrange their personal travel and health insurances for their trip wherever necessary.
        </p>
      </>
    ),
  },
  {
    icon: ShieldAlert,
    title: "Safety & Security",
    content: (
      <>
        <p className="mb-4">
          Bags and/or suitcases must not be left unattended at any time whether inside or outside the meeting venue and session halls. As all hotels do, we strongly recommend our participants to use their safety deposit boxes for their valuables.
        </p>
        <p>
          As with the rest of the USA, please call <strong>911</strong> in case of any emergency.
        </p>
      </>
    ),
  },
];

const GeneralInformation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary/95 to-secondary py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              General Information
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Essential information for TERMIS-AM 2026 attendees
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              {sections.map((section) => (
                <div 
                  key={section.title}
                  className="bg-muted/50 rounded-xl p-6 md:p-8 shadow-lg border border-accent/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <section.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">
                        {section.title}
                      </h2>
                      <div className="text-foreground/80 leading-relaxed">
                        {typeof section.content === "string" ? (
                          <p>{section.content}</p>
                        ) : (
                          section.content
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GeneralInformation;