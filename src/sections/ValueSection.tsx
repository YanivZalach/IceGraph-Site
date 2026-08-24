const ValueSection = () => (
  <section className="section value-section" id="why">
    <div className="section-heading split-heading">
      <div>
        <p className="section-kicker">THE PROBLEM</p>
        <h2>Your table has a history. SQL only shows the result.</h2>
      </div>
      <p>
        When a table state looks wrong, the answer is usually buried across
        snapshots, metadata files, manifests, and rewrite operations. IceGraph
        reconnects those pieces.
      </p>
    </div>
    <div className="value-grid">
      <article className="value-card value-card-expert">
        <p className="card-index">01 / DEBUG</p>
        <h3>Find the operation that changed everything.</h3>
        <p>
          Trace suspicious table state to a commit, inspect the rewrite, and
          follow its files.
        </p>
        <ul>
          <li>Commit-by-commit lineage</li>
          <li>Branch-aware history</li>
          <li>Snapshot and file drill-down</li>
        </ul>
      </article>
      <article className="value-card value-card-learn">
        <p className="card-index">02 / UNDERSTAND</p>
        <h3>Build the mental model before the incident.</h3>
        <p>
          See how Iceberg concepts connect, safely and visually, without
          decoding raw JSON.
        </p>
        <ul>
          <li>High-level Timeline first</li>
          <li>Visual metadata relationships</li>
          <li>Read-only exploration</li>
        </ul>
      </article>
    </div>
  </section>
);

export default ValueSection;
