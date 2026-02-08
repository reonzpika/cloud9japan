import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export default function EventBanner() {
  const [isVisible, setIsVisible] = useState(true);

  // Check if banner was previously closed (stored in localStorage)
  useEffect(() => {
    const bannerClosed = localStorage.getItem("horseMesse2025BannerClosed");
    const closedTime = bannerClosed ? parseInt(bannerClosed, 10) : 0;
    const now = Date.now();
    const twentyFourHours = 24 * 60 * 60 * 1000;

    // Show banner again after 24 hours
    if (now - closedTime < twentyFourHours) {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("horseMesse2025BannerClosed", Date.now().toString());
  };

  const scrollToHorseMesse = () => {
    const element = document.getElementById("horse-messe-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="relative bg-primary text-primary-foreground">
      <div className="container py-3 md:py-4">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={scrollToHorseMesse}
            className="flex-1 text-left hover:opacity-90 transition-opacity"
          >
            <p className="text-sm md:text-base font-medium">
              【Horse Messe 2025出展】2月[DATE]、JRA馬事公苑でお会いしましょう | ブース：[BOOTH NUMBER]
            </p>
          </button>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="h-8 w-8 shrink-0 hover:bg-primary-foreground/20"
            aria-label="閉じる"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
