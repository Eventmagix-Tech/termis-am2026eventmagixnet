import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const STORAGE_KEY = "termis_registration_popup_hidden";

const RegistrationPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    const isHidden = localStorage.getItem(STORAGE_KEY) === "true";
    if (!isHidden) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    if (dontShowAgain) {
      localStorage.setItem(STORAGE_KEY, "true");
    }
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />
          
          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md"
          >
            <div className="relative bg-background border border-border rounded-2xl shadow-2xl p-8 text-center">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Content */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-primary">
                    Registration Open
                  </h2>
                  <p className="text-muted-foreground">
                    Join us at TERMIS 2026 World Congress in New Orleans
                  </p>
                </div>

                <Link to="/registration-information">
                  <Button 
                    variant="gold" 
                    size="lg" 
                    className="w-full text-lg"
                    onClick={handleClose}
                  >
                    Register Now
                  </Button>
                </Link>

                {/* Don't show again */}
                <div className="flex items-center justify-center gap-2 pt-2 border-t border-border">
                  <Checkbox
                    id="dontShowAgain"
                    checked={dontShowAgain}
                    onCheckedChange={(checked) => setDontShowAgain(checked === true)}
                  />
                  <label
                    htmlFor="dontShowAgain"
                    className="text-xs text-muted-foreground cursor-pointer"
                  >
                    Don't show again
                  </label>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default RegistrationPopup;
