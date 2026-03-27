import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://am2026.termis.org";
const SITE_NAME = "TERMIS-AM 2026 Annual Conference & Exhibition";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

interface SEOHeadProps {
  title: string;
  description: string;
  noindex?: boolean;
}

const SEOHead = ({ title, description, noindex }: SEOHeadProps) => {
  const location = useLocation();
  const canonicalUrl = `${SITE_URL}${location.pathname}`;
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      {noindex && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
};

export default SEOHead;
