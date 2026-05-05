import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import cookMyositeLogo from "@/assets/sponsors/cook-myosite.png";
import gelomicsLogo from "@/assets/sponsors/gelomics.png";
import acsLogo from "@/assets/sponsors/acs-publications.png";
import perimedLogo from "@/assets/sponsors/perimed.png";

interface Sponsor {
  name: string;
  href: string;
  logo: string;
}

const bronzeSponsors: Sponsor[] = [
  { name: "Cook Myosite", href: "https://www.cookmyosite.com", logo: cookMyositeLogo },
  { name: "Gelomics", href: "https://gelomics.com", logo: gelomicsLogo },
];

const sponsorsExhibitors: Sponsor[] = [
  { name: "Perimed", href: "https://www.perimed-instruments.com", logo: perimedLogo },
];

const syisAwardSupporters: Sponsor[] = [
  { name: "ACS Publications", href: "https://pubs.acs.org", logo: acsLogo },
];

interface SponsorGridProps {
  sponsors: Sponsor[];
  logoHeightClass?: string;
  gridClass?: string;
}

const SponsorGrid = ({
  sponsors,
  logoHeightClass = "h-24",
  gridClass = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
}: SponsorGridProps) => (
  <div className={`grid ${gridClass} gap-8 place-items-center justify-items-center`}>
    {sponsors.map((s) => (
      <a
        key={s.name}
        href={s.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={s.name}
        className="bg-white border border-accent/20 rounded-xl shadow-sm p-6 flex items-center justify-center hover:scale-105 hover:shadow-md transition-transform duration-300 w-full max-w-sm"
      >
        <img
          src={s.logo}
          alt={`${s.name} logo`}
          className={`${logoHeightClass} w-auto object-contain mx-auto`}
          loading="lazy"
        />
      </a>
    ))}
  </div>
);

const ConfirmedSponsors = () => (
  <div className="min-h-screen bg-background">
    <SEOHead
      title="Confirmed Sponsors"
      description="View the confirmed sponsors and exhibitors supporting TERMIS-AM 2026 in New Orleans."
    />
    <Header />
    <PageHeader title="Confirmed Sponsors" />

    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl space-y-20">
        <div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary text-center mb-10">
            Bronze Sponsors
          </h2>
          <SponsorGrid
            sponsors={bronzeSponsors}
            logoHeightClass="h-40"
            gridClass="grid-cols-1 md:grid-cols-2"
          />
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary text-center mb-10">
            Sponsors &amp; Exhibitors
          </h2>
          <SponsorGrid sponsors={sponsorsExhibitors} />
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary text-center mb-10">
            SYIS Award Supporters
          </h2>
          <SponsorGrid sponsors={syisAwardSupporters} />
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default ConfirmedSponsors;
