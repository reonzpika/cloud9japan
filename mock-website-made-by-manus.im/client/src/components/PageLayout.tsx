import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import EventBanner from "./EventBanner";

interface PageLayoutProps {
  children: ReactNode;
  showEventBanner?: boolean;
}

export default function PageLayout({ children, showEventBanner = true }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {showEventBanner && <EventBanner />}
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
