import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import abstractsPdf from "@/assets/TERMIS-AM-Abstract-2026.pdf.asset.json";

const AbstractsPdfRedirect = () => {
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

export default AbstractsPdfRedirect;
