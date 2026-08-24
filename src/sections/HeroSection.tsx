import type { PointerEvent } from "react";

import ProductImage from "../components/ProductImage";
import {
  GITHUB_URL,
  LIVE_DEMO_URL,
  getProductMediaUrl,
} from "../shared/product";

const handleProductPointerMove = (
  event: PointerEvent<HTMLDivElement>,
): void => {
  const canTilt =
    event.pointerType === "mouse" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!canTilt) {
    return;
  }

  const bounds = event.currentTarget.getBoundingClientRect();
  const horizontalPosition =
    ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
  const verticalPosition =
    ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;

  event.currentTarget.style.setProperty(
    "--cursor-rotate-x",
    `${String(0.75 - verticalPosition * 1.25)}deg`,
  );
  event.currentTarget.style.setProperty(
    "--cursor-rotate-y",
    `${String(-2 + horizontalPosition * 1.75)}deg`,
  );
};

const handleProductPointerLeave = (
  event: PointerEvent<HTMLDivElement>,
): void => {
  event.currentTarget.style.removeProperty("--cursor-rotate-x");
  event.currentTarget.style.removeProperty("--cursor-rotate-y");
};

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-glow hero-glow-left" />
    <div className="hero-glow hero-glow-right" />
    <div className="hero-copy">
      <p className="eyebrow">
        <span /> APACHE ICEBERG, MADE VISIBLE
      </p>
      <h1>
        See how your Iceberg table <em>became what it is.</em>
      </h1>
      <p className="hero-description">
        Start with the table timeline. Find the commit that matters. Then drill
        into snapshots, manifests, data files, and delete files without changing
        a single byte.
      </p>
      <div className="hero-actions">
        <a className="button button-primary" href={LIVE_DEMO_URL}>
          Explore the live demo <span aria-hidden="true">↗</span>
        </a>
        <a className="button button-secondary" href={GITHUB_URL}>
          View on GitHub
        </a>
      </div>
      <div className="trust-row" aria-label="Product capabilities">
        <span>
          <i className="status-dot" /> Read-only by design
        </span>
        <span>Open source</span>
        <span>Spark Connect</span>
      </div>
    </div>
    <div className="hero-visual">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div
        className="product-window hero-product-window"
        onPointerMove={handleProductPointerMove}
        onPointerLeave={handleProductPointerLeave}
      >
        <div className="window-bar">
          <span className="window-dot" />
          <span className="window-dot" />
          <span className="window-dot" />
          <span className="window-label">default.events</span>
          <span className="live-indicator">ICEGRAPH</span>
        </div>
        <video
          className="walkthrough-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={getProductMediaUrl("timeline-hero.webp")}
          aria-label="IceGraph walkthrough from Timeline into Graph"
        >
          <source
            src={getProductMediaUrl("product-walkthrough.mp4")}
            type="video/mp4"
          />
        </video>
        <div className="walkthrough-poster">
          <ProductImage
            alt="IceGraph Timeline showing Iceberg table operations in chronological order"
            filename="timeline-hero.webp"
            isPriority
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
