import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SEOHead from "@/components/SEOHead";
import cookMyositeLogo from "@/assets/sponsors/cook-myosite.png";
import gelomicsLogo from "@/assets/sponsors/gelomics.png";
import acsLogo from "@/assets/sponsors/acs-publications.png";
import perimedLogo from "@/assets/sponsors/perimed.png";
import jpmLogo from "@/assets/sponsors/jpm.png";
import ssrLogo from "@/assets/sponsors/ssr.png";
import scienceAdvancesLogo from "@/assets/sponsors/science-advances.png";
import scienceTranslationalMedicineLogo from "@/assets/sponsors/science-translational-medicine.png";
import biomaterialsResearchLogo from "@/assets/sponsors/biomaterials-research.png";

interface Sponsor {
  name: string;
  href: string;
  logo: string;
}

const bronzeSponsors: Sponsor[] = [
  { name: "Cook Myosite", href: "https://www.cookmyosite.com", logo: cookMyositeLogo },
  { name: "Gelomics", href: "https://gelomics.com", logo: gelomicsLogo },
  { name: "Sustainable Swine Resources", href: "https://ssr-solutions.com", logo: ssrLogo },
];

const sponsorsExhibitors: Sponsor[] = [
  { name: "Perimed", href: "https://www.perimed-instruments.com", logo: perimedLogo },
  { name: "Science Advances", href: "https://bit.ly/4tLbok4", logo: scienceAdvancesLogo },
  { name: "Biomaterials Research", href: "https://spj.science.org/journal/bmr", logo: biomaterialsResearchLogo },
];

const syisAwardSupporters: Sponsor[] = [
  { name: "ACS Publications", href: "https://pubs.acs.org", logo: acsLogo },
  { name: "Journal of Personalized Medicine", href: "https://www.mdpi.com/journal/jpm", logo: jpmLogo },
  { name: "Science Translational Medicine", href: "https://bit.ly/4uSe1BM", logo: scienceTranslationalMedicineLogo },
];

interface SponsorGridProps {
  sponsors: Sponsor[];
  logoHeightClass?: string;
  itemWidthClass?: string;
}

const SponsorGrid = ({
  sponsors,
  logoHeightClass = "h-24",
  itemWidthClass = "w-full sm:w-[260px] md:w-[220px]",
}: SponsorGridProps) => (
  <div className="mx-auto max-w-4xl flex flex-wrap justify-center gap-8">
    {sponsors.map((s) => (
      <a
        key={s.name}
        href={s.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={s.name}
        className={`${itemWidthClass} bg-white border border-accent/20 rounded-xl shadow-sm p-6 flex items-center justify-center hover:scale-105 hover:shadow-md transition-transform duration-300`}
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
            itemWidthClass="w-full sm:w-[360px]"
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
