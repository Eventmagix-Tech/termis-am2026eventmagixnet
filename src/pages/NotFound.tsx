import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-hero-gradient">
      <div className="text-center">
        <div className="text-accent text-6xl mb-4">⚜</div>
        <h1 className="mb-4 text-6xl font-serif font-bold text-primary-foreground">404</h1>
        <p className="mb-6 text-xl text-primary-foreground/70">Oops! This page doesn't exist</p>
        <Button variant="gold" size="lg" asChild>
          <a href="/">
            <Home className="w-4 h-4 mr-2" />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
