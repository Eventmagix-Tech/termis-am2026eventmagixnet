import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Download, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import posterVertical from "@/assets/poster-vertical-thumb.jpg";
import posterHorizontal from "@/assets/poster-horizontal-thumb.jpg";

const toolkitItems = [
  {
    title: "Congress Poster – Vertical",
    description: "Portrait format poster ideal for printing and display boards.",
    thumbnail: posterVertical,
    downloadUrl: "/downloads/TERMIS-AM-2026-Poster-Vertical.jpg",
    dimensions: "Portrait / A3",
  },
  {
    title: "Congress Poster – Horizontal",
    description: "Landscape format poster perfect for presentations, email signatures and social media.",
    thumbnail: posterHorizontal,
    downloadUrl: "/downloads/TERMIS-AM-2026-Poster-Horizontal.jpg",
    dimensions: "1920 × 1080",
  },
];

const PromotionalToolkit = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <PageHeader
        title="Promotional Toolkit"
        subtitle="Download official TERMIS-AM 2026 materials to help promote the conference."
      />

      {/* Toolkit Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Image className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold text-primary">Congress Posters</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {toolkitItems.map((item) => (
                <div
                  key={item.title}
                  className="bg-muted/50 rounded-2xl overflow-hidden shadow-lg group"
                >
                  {/* Thumbnail */}
                  <div className="relative overflow-hidden bg-muted">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-64 object-contain bg-white/50 p-2 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-primary mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-1">{item.description}</p>
                    <p className="text-xs text-muted-foreground/70 mb-4">
                      Format: {item.dimensions}
                    </p>
                    <Button variant="gold" asChild>
                      <a href={item.downloadUrl} download>
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PromotionalToolkit;
