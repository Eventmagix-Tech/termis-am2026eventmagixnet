import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Mail } from "lucide-react";

const SupportOpportunities = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <PageHeader
          title="Support Opportunities"
          subtitle="Partner with TERMIS-AM 2026 and showcase your organization"
        />

        {/* Contact Content */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-foreground/80 mb-8">
                For any enquiries regarding TERMIS-AM 2026 Sponsorship & Exhibition opportunities, please contact:
              </p>
              
              <div className="bg-muted/50 rounded-xl p-8 shadow-lg border border-accent/10">
                <h2 className="text-2xl font-bold text-primary mb-2">
                  Mr. Jason Alexander
                </h2>
                <p className="text-foreground/70 mb-6">
                  TERMIS-AM 2026 Organizing Secretariat, Industry Liaison & Sales Associate
                </p>
                <a 
                  href="mailto:jalexander@kenes.com"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium text-lg"
                >
                  <Mail className="h-5 w-5" />
                  jalexander@kenes.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SupportOpportunities;
