import innerPageBanner from "@/assets/inner-page-banner.jpg";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  tag?: string;
}

const PageHeader = ({ title, subtitle, tag }: PageHeaderProps) => {
  return (
    <div className="pt-16 md:pt-20">
      {/* Top Section - Banner Image */}
      <div className="w-full h-[200px] md:h-[250px] overflow-hidden">
        <img
          src={innerPageBanner}
          alt=""
          className="w-full h-full object-cover"
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
