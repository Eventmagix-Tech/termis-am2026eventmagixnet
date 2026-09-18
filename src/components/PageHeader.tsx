import innerPageBanner from "@/assets/inner-page-banner.jpg";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  tag?: string;
  /** When false, the fixed-nav top offset is skipped (used when a band sits directly above). */
  topOffset?: boolean;
}

const PageHeader = ({ title, subtitle, tag, topOffset = true }: PageHeaderProps) => {
  return (
    <div className={topOffset ? "pt-16 md:pt-20" : undefined}>
      {/* Top Section - Banner Image */}
      <div className="w-full leading-[0]">
        <img
          src={innerPageBanner}
          alt=""
          className="w-full h-auto block"
          aria-hidden="true"
        />
      </div>

      {/* Bottom Section - Text Band */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-6 md:py-8 text-center">
          {tag && (
            <span className="text-gold font-medium text-sm tracking-wider uppercase">
              {tag}
            </span>
          )}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-1 mb-2">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
