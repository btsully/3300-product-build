import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";

const CONSENT_KEY = "cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Cookie consent"
      aria-describedby="cookie-banner-desc"
      className="fixed bottom-20 md:bottom-0 left-0 right-0 z-50 bg-background border-t border-border shadow-xl px-4 py-4"
    >
      <div className="max-w-screen-md mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Cookie className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" />
        <p id="cookie-banner-desc" className="text-sm text-foreground flex-1 leading-relaxed">
          Grocery Helper uses browser local storage to save your budget, grocery list, and trip history
          on your device. No personal data is sent to any server. Read our{" "}
          <Link
            href="/cookie-policy"
            className="text-primary underline underline-offset-4 hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
          >
            Cookie Policy
          </Link>{" "}
          for details.
        </p>
        <Button
          onClick={handleAccept}
          size="sm"
          className="w-full sm:w-auto flex-shrink-0"
        >
          Accept &amp; Close
        </Button>
      </div>
    </div>
  );
}
