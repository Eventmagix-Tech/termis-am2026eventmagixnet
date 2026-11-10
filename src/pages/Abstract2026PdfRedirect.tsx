import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import abstractsPdf from "@/assets/2026-abstract.pdf.asset.json";

const Abstract2026PdfRedirect = () => {
  useEffect(() => {
    window.location.replace(abstractsPdf.url);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <Helmet>
        <title>TERMIS-AM 2026 Abstracts</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <a href={abstractsPdf.url} className="text-primary underline">
        Open PDF
      </a>
    </main>
  );
};

export default Abstract2026PdfRedirect;
