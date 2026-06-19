import { useEffect } from "react";

const Nevai = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://nevai-concierge-git-main-umut-s-verus-projects.vercel.app/embed.js";
    script.setAttribute("data-key", "emb_7ry08dufk3");
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">
          NEVAi Congress Assistant
        </h1>
        <p className="text-muted-foreground">
          Internal testing page for the AI Congress Assistant widget. The chat interface should appear on this page.
        </p>
      </div>
    </div>
  );
};

export default Nevai;
