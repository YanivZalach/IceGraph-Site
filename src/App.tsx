import Footer from "./components/Footer";
import SiteHeader from "./components/SiteHeader";
import GetStartedSection from "./sections/GetStartedSection";
import HeroSection from "./sections/HeroSection";
import ProductStorySection from "./sections/ProductStorySection";
import SafetySection from "./sections/SafetySection";
import ScopeSection from "./sections/ScopeSection";
import ValueSection from "./sections/ValueSection";

const App = () => (
  <div className="site-shell">
    <SiteHeader />
    <main id="top">
      <HeroSection />
      <div className="signal-strip" aria-label="IceGraph investigation flow">
        <p>ORIENT WITH THE TIMELINE</p>
        <span aria-hidden="true">→</span>
        <p>ISOLATE THE CHANGE</p>
        <span aria-hidden="true">→</span>
        <p>DRILL INTO THE GRAPH</p>
      </div>
      <ValueSection />
      <ProductStorySection />
      <SafetySection />
      <GetStartedSection />
      <ScopeSection />
    </main>
    <Footer />
  </div>
);

export default App;
