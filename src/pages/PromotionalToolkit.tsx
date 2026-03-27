import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Download, Image, Monitor, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import posterVertical from "@/assets/poster-vertical-thumb.jpg";
import posterHorizontal from "@/assets/poster-horizontal-thumb.jpg";

// Web banner thumbnails
import banner300x100 from "@/assets/banner-300x100.jpg";
import banner300x250 from "@/assets/banner-300x250.jpg";
import banner600x100 from "@/assets/banner-600x100.jpg";
import banner640x150 from "@/assets/banner-640x150.jpg";
import banner650x650 from "@/assets/banner-650x650.jpg";
import banner728x90 from "@/assets/banner-728x90.jpg";
import banner900x90 from "@/assets/banner-900x90.jpg";
import banner1170x200 from "@/assets/banner-1170x200.jpg";
import banner1200x445 from "@/assets/banner-1200x445.jpg";
import banner1600x900 from "@/assets/banner-1600x900.jpg";
import banner1920x450 from "@/assets/banner-1920x450.jpg";
import banner2000x445 from "@/assets/banner-2000x445.jpg";

const toolkitItems = [
  {
    title: "Conference Poster – Vertical",
    description: "Portrait format poster ideal for printing and display boards.",
    thumbnail: posterVertical,
    downloadUrl: "/downloads/TERMIS-AM-2026-Poster-Vertical.jpg",
    dimensions: "Portrait / A3",
  },
  {
    title: "Conference Poster – Horizontal",
    description: "Landscape format poster perfect for presentations, email signatures and social media.",
    thumbnail: posterHorizontal,
    downloadUrl: "/downloads/TERMIS-AM-2026-Poster-Horizontal.jpg",
    dimensions: "1920 × 1080",
  },
];

const webBanners = [
  { thumbnail: banner300x100, dimensions: "300 × 100", fileName: "TERMIS-AM_2026_banner_-_300x100_px.jpg" },
  { thumbnail: banner300x250, dimensions: "300 × 250", fileName: "TERMIS-AM_2026_banner_-_300x250_px.jpg" },
  { thumbnail: banner600x100, dimensions: "600 × 100", fileName: "TERMIS-AM_2026_banner_-_600x100_px.jpg" },
  { thumbnail: banner640x150, dimensions: "640 × 150", fileName: "TERMIS-AM_2026_banner_-_640x150_px.jpg" },
  { thumbnail: banner650x650, dimensions: "650 × 650", fileName: "TERMIS-AM_2026_banner_-_650x650_px.jpg" },
  { thumbnail: banner728x90, dimensions: "728 × 90", fileName: "TERMIS-AM_2026_banner_-_728x90_px.jpg" },
  { thumbnail: banner900x90, dimensions: "900 × 90", fileName: "TERMIS-AM_2026_banner_-_900x90_px.jpg" },
  { thumbnail: banner1170x200, dimensions: "1170 × 200", fileName: "TERMIS-AM_2026_banner_-_1170x200_px.jpg" },
  { thumbnail: banner1200x445, dimensions: "1200 × 445", fileName: "TERMIS-AM_2026_banner_-_1200x445_px.jpg" },
  { thumbnail: banner1600x900, dimensions: "1600 × 900", fileName: "TERMIS-AM_2026_banner_-_1600x900_px.jpg" },
  { thumbnail: banner1920x450, dimensions: "1920 × 450", fileName: "TERMIS-AM_2026_banner_-_1920x450_px.jpg" },
  { thumbnail: banner2000x445, dimensions: "2000 × 445", fileName: "TERMIS-AM_2026_banner_-_2000x445_px.jpg" },
];

const PromotionalToolkit = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Promotional Toolkit" description="Download posters, banners, and promotional materials for TERMIS-AM 2026." />
      <Header />

      <PageHeader
        title="Promotional Toolkit"
        subtitle="Download official TERMIS-AM 2026 materials to help promote the conference."
      />

      {/* Intro Text */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-foreground text-lg leading-relaxed mb-4">
              We invite you to use the official branding materials below to promote TERMIS-AM 2026 within your own professional network. Here's the promotional toolkit, which includes the official logo, banners, presentation slides, and flyer.
            </p>
            <p className="text-muted-foreground">
              For materials with different dimensions and specifications, please contact Gizem Unsalan at{" "}
              <a href="mailto:gunsalan@kenes.com" className="text-accent hover:underline font-medium">
                gunsalan@kenes.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Conference Posters */}
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
                  <div className="relative overflow-hidden bg-muted">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-64 object-contain bg-white/50 p-2 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
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

      {/* Web Banners */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Monitor className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold text-primary">Web Banners</h2>
            </div>
            <p className="text-muted-foreground mb-8">
              Ready-to-use banners in various sizes for websites, email signatures, and online promotions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webBanners.map((banner) => (
                <div
                  key={banner.fileName}
                  className="bg-background rounded-2xl overflow-hidden shadow-lg group"
                >
                  <div className="relative overflow-hidden bg-muted">
                    <img
                      src={banner.thumbnail}
                      alt={`TERMIS-AM 2026 Banner – ${banner.dimensions}`}
                      className="w-full h-40 object-contain bg-white/50 p-2 transition-transform duration-300 group-hover:scale-105"
                    />
                    <span className="absolute top-2 right-2 bg-primary/80 text-primary-foreground text-xs font-mono px-2 py-1 rounded">
                      {banner.dimensions}
                    </span>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <p className="text-sm font-medium text-foreground">{banner.dimensions} px</p>
                    <Button variant="gold" size="sm" asChild>
                      <a href={`/downloads/${banner.fileName}`} download>
                        <Download className="w-4 h-4 mr-1" />
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

      {/* Presentation Template */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <FileDown className="w-6 h-6 text-accent" />
              <h2 className="text-2xl font-bold text-primary">Presentation Template</h2>
            </div>

            <div className="bg-muted/50 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0 w-20 h-20 rounded-xl bg-accent/10 flex items-center justify-center">
                <FileDown className="w-10 h-10 text-accent" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-lg font-bold text-primary mb-1">TERMIS-AM 2026 PowerPoint Template</h3>
                <p className="text-muted-foreground text-sm mb-1">
                  Official branded PowerPoint template for your conference presentations and talks.
                </p>
                <p className="text-xs text-muted-foreground/70">Format: .pptx</p>
              </div>
              <Button variant="gold" asChild>
                <a href="/downloads/TERMIS-AM_2026_PPT.pptx" download>
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PromotionalToolkit;
