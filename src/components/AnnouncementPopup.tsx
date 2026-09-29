import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "termis-am-2026-fraud-notice-dismissed";

const AnnouncementPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) {
        setOpen(true);
      }
    } catch {
      setOpen(true);
    }
  }, []);

  const dismiss = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // storage unavailable — popup simply won't persist dismissal
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/70 backdrop-blur-sm p-4 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="fraud-notice-title"
      onClick={dismiss}
    >
      <div
        className="relative w-full max-w-lg rounded-xl border-2 border-accent bg-card p-6 sm:p-8 shadow-gold animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close notice"
          className="absolute right-3 top-3 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-4 flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15">
            <AlertTriangle className="h-5 w-5 text-accent" aria-hidden="true" />
          </span>
          <h2
            id="fraud-notice-title"
            className="font-serif text-xl font-semibold leading-snug text-foreground"
          >
            Important Notice: Beware of Fraudulent Websites and Phishing
            Attempts
          </h2>
        </div>

        <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          <p>
            Please be aware of fraudulent websites and phishing attempts
            impersonating TERMIS-AM 2026, including unsolicited phone calls
            claiming to represent the conference or its organizers.
          </p>
          <p>
            The <strong className="text-foreground">only official</strong> way
            to{" "}
            <strong className="text-foreground">
              access the TERMIS-AM 2026 registration form
            </strong>{" "}
            is via the link provided on the{" "}
            <Link
              to="/registration-information"
              onClick={dismiss}
              className="font-semibold text-secondary underline underline-offset-2 hover:text-accent"
            >
              Registration Information Page
            </Link>
            , and the{" "}
            <strong className="text-foreground">
              only official hotel reservation form
            </strong>{" "}
            is available via the link on the{" "}
            <Link
              to="/hotel-accommodation"
              onClick={dismiss}
              className="font-semibold text-secondary underline underline-offset-2 hover:text-accent"
            >
              Hotel Accommodation Page
            </Link>
            .
          </p>
          <p>
            Please exercise caution with unsolicited calls, emails, or websites
            requesting registration, accommodation, payment, or personal
            information.
          </p>
        </div>

        <div className="mt-6 flex justify-end">
          <Button onClick={dismiss} variant="default">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementPopup;
