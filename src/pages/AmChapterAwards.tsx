import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import { amChapterAwardees } from "@/data/amChapterAwardees";

const AmChapterAwards = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="AM Chapter Awards"
        description="Meet the 2026 TERMIS-AM Chapter Awardees honored at TERMIS-AM 2026 in New Orleans, November 15–18, 2026."
      />
      <Header />
      <PageHeader title="AM Chapter Awards" />

      <main id="main" className="container mx-auto max-w-5xl py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10">
          Meet the 2026 TERMIS-AM Awardees
        </h2>
        <div className="space-y-8">
          {amChapterAwardees.map((a) => (
            <article
              key={a.name}
              className="bg-background rounded-xl shadow-card border border-accent/20 p-6 md:p-8 grid md:grid-cols-[200px_1fr] gap-6 items-center"
            >
              <img
                src={a.photo}
                alt={`Portrait of ${a.name}`}
                loading="lazy"
                className="w-44 h-44 md:w-48 md:h-48 rounded-full object-cover mx-auto border-4 border-accent/30"
                style={{ objectPosition: a.position ?? "center 20%" }}
              />
              <div className="text-center md:text-left">
                <p className="text-gold-text font-semibold text-sm tracking-wider uppercase mb-1">{a.award}</p>
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">{a.name}</h3>
                <p className="text-foreground leading-relaxed">{a.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AmChapterAwards;
