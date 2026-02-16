import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import kenesLogo from "@/assets/kenes-logo.png";
import { Mail } from "lucide-react";

const contacts = [
  {
    department: "Registration & Accommodation",
    name: "Ms. Neyir Utugen",
    email: "nutugen@kenes.com",
  },
  {
    department: "General Information",
    name: "Mr. Veysel Güzel",
    email: "vguzel@kenes.com",
  },
  {
    department: "Marketing & Cross Promotion",
    name: "Ms. Gizem Unsalan",
    email: "gunsalan@kenes.com",
  },
  {
    department: "Sponsorship & Exhibition",
    name: "Mr. Jason Alexander",
    email: "jalexander@kenes.com",
  },
  {
    department: "Scientific Information",
    name: "Ms. Mojca Rodic",
    email: "mrodic@kenes.com",
  },
];

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <PageHeader
          title="Contact Us"
          subtitle="Get in touch with the TERMIS-AM 2026 Conference Organizing Secretariat"
        />

        {/* Contact Content */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Kenes Logo and Title */}
              <div className="text-center mb-12">
                <img 
                  src={kenesLogo} 
                  alt="Kenes Group" 
                  className="h-20 md:h-[100px] mx-auto"
                />
              </div>

              {/* Contact Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contacts.map((contact) => (
                  <div 
                    key={contact.email}
                    className="bg-muted/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-accent/10"
                  >
                    <h3 className="text-lg font-semibold text-primary mb-3">
                      {contact.department}
                    </h3>
                    <p className="text-foreground/80 mb-4">
                      {contact.name}
                    </p>
                    <a 
                      href={`mailto:${contact.email}`}
                      className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
                    >
                      <Mail className="h-4 w-4" />
                      {contact.email}
                    </a>
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

export default ContactUs;
