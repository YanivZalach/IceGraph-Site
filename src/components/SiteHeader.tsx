import { LIVE_DEMO_URL } from "../shared/product";
import BrandLogo from "./BrandLogo";

const SiteHeader = () => (
  <header className="site-header">
    <a className="wordmark" href="#top" aria-label="IceGraph home">
      <BrandLogo />
      <span>IceGraph</span>
    </a>
    <nav className="nav-links" aria-label="Primary navigation">
      <a href="#why">Why IceGraph</a>
      <a href="#product">Product</a>
      <a href="#start">Get started</a>
      <a className="nav-cta" href={LIVE_DEMO_URL}>
        Open live demo <span aria-hidden="true">↗</span>
      </a>
    </nav>
  </header>
);

export default SiteHeader;
