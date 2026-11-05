import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { UserRound } from "lucide-react";
import { nihR13Recipients } from "@/data/nihR13Recipients";

const NihR13TravelAwards = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="NIH R13 Travel Award Recipients 2026"
        description="Meet the recipients of the NIH R13 Travel Award at the TERMIS-AM 2026 Conference."
      />
      <Header />
      <PageHeader title="NIH R13 Travel Awards 2026" />

      <main id="main" className="container mx-auto px-4 py-12 max-w-6xl">
        <p className="text-lg text-foreground text-center mb-10">
          We are happy to introduce the recipients of the NIH R13 Travel Award at TERMIS-AM 2026.
        </p>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {nihR13Recipients.map((r) => (
            <li
              key={r.name}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-sm text-center"
            >
              <div className="aspect-[4/5] bg-muted flex items-center justify-center">
                {r.photo ? (
                  <img
                    src={r.photo}
                    alt={r.name}
                    loading="lazy"
                    className="w-full h-full object-cover object-[center_20%]"
                  />
                ) : (
                  <UserRound
                    className="w-1/2 h-1/2 text-muted-foreground/50"
                    strokeWidth={1.25}
                    aria-label={`${r.name} (photo coming soon)`}
                  />
                )}
              </div>
              <div className="p-4">
                <p className="font-heading font-semibold text-foreground">{r.name}</p>
                <p className="text-sm text-muted-foreground mt-1">{r.affiliation}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
};

export default NihR13TravelAwards;
