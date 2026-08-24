import {
  DOCS_URL,
  DOCKER_HUB_URL,
  GITHUB_URL,
  LIVE_DEMO_URL,
  PYPI_URL,
  ROADMAP_URL,
} from "../shared/product";
import BrandLogo from "./BrandLogo";

const footerLinks = [
  ["Live demo", LIVE_DEMO_URL],
  ["GitHub", GITHUB_URL],
  ["Docs", DOCS_URL],
  ["Docker Hub", DOCKER_HUB_URL],
  ["PyPI", PYPI_URL],
  ["Roadmap", ROADMAP_URL],
] as const;

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <a className="wordmark" href="#top">
        <BrandLogo />
        <span>IceGraph</span>
      </a>
      <nav className="footer-links" aria-label="Product links">
        {footerLinks.map(([label, url]) => (
          <a href={url} key={label}>
            {label}
          </a>
        ))}
      </nav>
      <p>Read-only Apache Iceberg visibility.</p>
    </div>
  </footer>
);

export default Footer;
