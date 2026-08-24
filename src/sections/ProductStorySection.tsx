import ProductImage from "../components/ProductImage";

const ProductStorySection = () => (
  <section className="section product-story-section" id="product">
    <div className="section-heading centered-heading">
      <p className="section-kicker">FROM HISTORY TO UNDERSTANDING</p>
      <h2>See the pattern before you chase the details.</h2>
      <p>
        Start with timing and operation diffs across commits. Investigate the
        change in context, then open a node in Graph when you need the full
        metadata path.
      </p>
    </div>

    <article className="story-stage story-stage-primary">
      <div className="story-copy">
        <span className="stage-number">01</span>
        <p className="section-kicker">TIMELINE · VISUALIZE</p>
        <h3>Understand the table through time.</h3>
        <p>
          Read every commit as part of a sequence. See the timing, operation
          type, and state between neighboring nodes to understand how the table
          evolved.
        </p>
      </div>
      <div className="media-frame media-frame-large">
        <ProductImage
          alt="IceGraph Timeline showing table operations from initial state through writes and metadata changes"
          filename="timeline-hero.webp"
        />
      </div>
    </article>

    <article className="timeline-investigation">
      <div className="investigation-copy">
        <span className="stage-number">02</span>
        <p className="section-kicker">TIMELINE · INVESTIGATE</p>
        <h3>Find the change worth understanding.</h3>
        <p>
          You do not need to know the problem first. Follow the history, compare
          adjacent points, and let the Timeline show you where to look closer.
        </p>
      </div>
      <ol className="investigation-steps">
        <li>
          <span>01</span>
          <strong>Compare the timing</strong>
          <p>
            Compare when commits happened and how activity changed over time.
          </p>
        </li>
        <li>
          <span>02</span>
          <strong>Read the operation</strong>
          <p>Recognize writes, metadata changes, and rewrite operations.</p>
        </li>
        <li>
          <span>03</span>
          <strong>Inspect the diff</strong>
          <p>
            Compare neighboring nodes to understand what changed between them.
          </p>
        </li>
      </ol>
    </article>

    <div className="drill-connector" aria-hidden="true">
      <span>A NODE NEEDS MORE CONTEXT?</span>
      <i /> <span>OPEN IT IN GRAPH</span>
    </div>

    <article className="story-stage story-stage-secondary">
      <div className="media-frame graph-media-frame">
        <ProductImage
          alt="IceGraph Graph showing snapshots, metadata, manifests, and files as connected nodes"
          filename="graph-drilldown.webp"
        />
      </div>
      <div className="story-copy">
        <span className="stage-number">03</span>
        <p className="section-kicker">GRAPH · DRILL-DOWN</p>
        <h3>What is underneath that moment?</h3>
        <p>
          Follow the selected snapshot through metadata files, manifest lists,
          manifests, data files, and delete files. See the structure SQL cannot
          show you.
        </p>
      </div>
    </article>

    <div className="supporting-views">
      <article>
        <div className="media-frame compact-media-frame">
          <ProductImage
            alt="IceGraph Metadata view showing table schema and configuration"
            filename="metadata-view.webp"
          />
        </div>
        <p className="section-kicker">METADATA</p>
        <h3>What is the table configured to be?</h3>
      </article>
      <article>
        <div className="media-frame compact-media-frame">
          <ProductImage
            alt="IceGraph File Tree showing partition folders and data files"
            filename="file-tree-view.webp"
          />
        </div>
        <p className="section-kicker">FILE TREE</p>
        <h3>Where do the partitions and files live?</h3>
      </article>
    </div>
  </section>
);

export default ProductStorySection;
