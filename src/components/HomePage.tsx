import Home from "@/imports/Home/index";
import ServicesSection from "./ServicesSection";
import ArticlesSection from "./ArticlesSection";

export default function HomePage() {
  return (
    <div className="home-page-wrapper relative" style={{ width: "1440px", height: "8071px" }}>
      <div data-home-import style={{ width: "100%", height: "100%" }}>
        <Home />
      </div>
      <div style={{ position: "absolute", top: "3407px", left: 0, width: "100%", zIndex: 1 }}>
        <ServicesSection />
      </div>
      <div style={{ position: "absolute", top: "5080px", left: 0, width: "100%", zIndex: 1 }}>
        <ArticlesSection />
      </div>
    </div>
  );
}
