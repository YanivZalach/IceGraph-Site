import { LIVE_DEMO_URL } from "../shared/product";

const ScopeSection = () => (
  <section className="section scope-section">
    <div>
      <p className="section-kicker">OPINIONATED ON PURPOSE</p>
      <h2>Built for a focused job.</h2>
      <p>
        IceGraph stays simple because its scope is explicit. It connects through
        Spark Connect and officially supports Iceberg table format version 2.
      </p>
    </div>
    <div className="scope-specs">
      <article>
        <span>CONNECTION</span>
        <strong>Spark Connect</strong>
        <i>Required</i>
      </article>
      <article>
        <span>TABLE FORMAT</span>
        <strong>Iceberg v2</strong>
        <i>Official support</i>
      </article>
      <article>
        <span>ACCESS MODE</span>
        <strong>Read-only</strong>
        <i>By design</i>
      </article>
    </div>
    <a className="button button-primary" href={LIVE_DEMO_URL}>
      See it on a real table ↗
    </a>
  </section>
);

export default ScopeSection;
