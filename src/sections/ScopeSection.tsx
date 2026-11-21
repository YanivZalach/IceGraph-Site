import { LIVE_DEMO_URL } from "../shared/product";

const ScopeSection = () => (
  <section className="section scope-section">
    <div>
      <p className="section-kicker">OPINIONATED ON PURPOSE</p>
      <h2>Built for a focused job.</h2>
      <p>
        Made for production tables at large scale. IceGraph reads table
        metadata, not the rows in your data files, so it stays practical on very
        large tables.
      </p>
    </div>
    <div className="scope-specs">
      <article>
        <span>CONNECTION</span>
        <strong>Spark Connect</strong>
      </article>
      <article>
        <span>TABLE FORMAT</span>
        <strong>Iceberg v1, v2, v3</strong>
      </article>
      <article>
        <span>ACCESS MODE</span>
        <strong>Read-only</strong>
      </article>
    </div>
    <a className="button button-primary" href={LIVE_DEMO_URL}>
      See it on a real table ↗
    </a>
  </section>
);

export default ScopeSection;
