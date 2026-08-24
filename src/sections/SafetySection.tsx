const SafetySection = () => (
  <section className="section safety-section">
    <div className="safety-mark" aria-hidden="true">
      <span>READ</span>
      <strong>ONLY</strong>
    </div>
    <div className="safety-copy">
      <p className="section-kicker">PRODUCTION-SAFE BY DESIGN</p>
      <h2>Visibility without mutation.</h2>
      <p>
        IceGraph reads Iceberg metadata through Spark Connect. It never writes
        data, rewrites metadata, or commits table changes. Run it with a
        read-only Spark Connect identity for an infrastructure-level guarantee.
      </p>
    </div>
    <div className="safety-proof">
      <span>
        <i /> No data writes
      </span>
      <span>
        <i /> No metadata commits
      </span>
      <span>
        <i /> Read-only credentials supported
      </span>
    </div>
  </section>
);

export default SafetySection;
