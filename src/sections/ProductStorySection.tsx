import ProductImage from "../components/ProductImage";

const ProductStorySection = () => (
  <section className="section product-story-section" id="product">
    <div className="section-heading centered-heading">
      <p className="section-kicker">FROM HISTORY TO UNDERSTANDING</p>
      <h2>See the pattern before you chase the details.</h2>
      <p>
        Follow how the table got here, commit by commit. Then see what it holds
        right now, partition by partition.
      </p>
    </div>

    <article className="story-stage story-stage-primary">
      <div className="story-copy">
        <span className="stage-number">01</span>
        <p className="section-kicker">TIMELINE · VISUALIZE</p>
        <h3>Understand the table through time.</h3>
        <p>
          Read events in the selected range, newest first: writes, overwrites,
          schema changes, branch changes, and statistics updates. Row counts,
          branch chips, and branch lanes show how the table evolved on main and
          on its branches.
        </p>
      </div>
      <div className="media-frame media-frame-large">
        <ProductImage
          alt="IceGraph Timeline listing table events with row counts and branch lanes, with a data overwrite selected and its details panel open"
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
          You do not need to know the problem first. Follow the history, open
          any event, and let the Timeline show you where to look closer.
        </p>
      </div>
      <ol className="investigation-steps">
        <li>
          <span>01</span>
          <strong>Filter the history</strong>
          <p>Narrow the list to writes or metadata events, or to one branch.</p>
        </li>
        <li>
          <span>02</span>
          <strong>Read the impact</strong>
          <p>
            See rows added and removed, and what a schema or branch change did.
          </p>
        </li>
        <li>
          <span>03</span>
          <strong>Open the details</strong>
          <p>
            Check change counts, the table state, and the raw metadata diff.
          </p>
        </li>
      </ol>
    </article>

    <div className="drill-connector" aria-hidden="true">
      <span>AN EVENT NEEDS MORE CONTEXT?</span>
      <i /> <span>OPEN IT IN GRAPH</span>
    </div>

    <article className="story-stage story-stage-secondary">
      <div className="media-frame graph-media-frame">
        <ProductImage
          alt="IceGraph Graph tracing one snapshot from its metadata files through manifests to data files, with a red link marking a deleted file entry"
          filename="graph-drilldown.webp"
        />
      </div>
      <div className="story-copy">
        <span className="stage-number">03</span>
        <p className="section-kicker">GRAPH · HISTORY</p>
        <h3>How did the table get here?</h3>
        <ol className="workflow-steps">
          <li>Select an event in the Timeline.</li>
          <li>Open it in Graph.</li>
          <li>
            Follow its snapshot through manifest lists and manifests to the data
            and delete files it added or removed.
          </li>
        </ol>
        <p className="stage-note">
          Explains a change down to the files, across the snapshot range you
          loaded. See the structure SQL cannot show you.
        </p>
      </div>
    </article>

    <div className="drill-connector" aria-hidden="true">
      <span>NEED THE CURRENT STATE?</span>
      <i /> <span>OPEN A PARTITION</span>
    </div>

    <article className="story-stage story-stage-primary">
      <div className="story-copy">
        <span className="stage-number">04</span>
        <p className="section-kicker">GRAPH · CURRENT STATE</p>
        <h3>What is in this partition right now?</h3>
        <ol className="workflow-steps">
          <li>Pick a partition.</li>
          <li>Keep the latest version, or choose an earlier one.</li>
          <li>See every file that makes up that partition today.</li>
          <li>Check its size, and column statistics.</li>
        </ol>
      </div>
      <div className="media-frame media-frame-large partition-media-frame">
        <ProductImage
          alt="IceGraph Partition Files graph for one partition at the latest snapshot, from the snapshot's manifest list through its manifests to the partition's data files"
          filename="partition-files-view.webp"
        />
      </div>
    </article>

    <article className="story-stage story-stage-primary assistant-stage">
      <div className="story-copy">
        <span className="stage-number">05</span>
        <p className="section-kicker">ASK AI · OPTIONAL</p>
        <h3>An assistant that knows your table.</h3>
        <p>
          Ask AI opens next to the view you are working in and answers from that
          table&apos;s metadata: snapshots, manifests, files, statistics, and
          issues. Context chips decide what it sees. It explains and suggests,
          and never changes the table.
        </p>
      </div>
      <div className="media-frame media-frame-large assistant-media-frame">
        <ProductImage
          alt="IceGraph Ask AI window open over the Timeline, with suggested questions and context chips for choosing which table metadata to send"
          filename="ai-assistant-view.webp"
        />
      </div>
    </article>

    <div className="supporting-views">
      <article>
        <div className="media-frame compact-media-frame crop-frame crop-metadata">
          <ProductImage
            alt="IceGraph Metadata view showing the table schema, partitioning, and write sort order"
            filename="metadata-view.webp"
          />
        </div>
        <p className="section-kicker">METADATA</p>
        <h3>What is the table configured to be?</h3>
        <p>
          See the schema, partition spec, and table properties from the newest
          metadata file in the selected range.
        </p>
      </article>
      <article>
        <div className="media-frame compact-media-frame crop-frame crop-file-tree">
          <ProductImage
            alt="IceGraph File Tree with a partition selected and its statistics panel showing file sizes, row and delete counts, and per-column metrics"
            filename="file-tree-view.webp"
          />
        </div>
        <p className="section-kicker">FILE TREE · STATISTICS</p>
        <h3>How much data does each partition hold?</h3>
        <p>
          Select a partition or file to see its sizes, row and delete counts,
          and per-column metrics like null percentages and bounds. They come
          from statistics Iceberg already keeps, so there is nothing to compute.
        </p>
      </article>
    </div>
  </section>
);

export default ProductStorySection;
