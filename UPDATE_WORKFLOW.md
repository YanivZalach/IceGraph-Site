# IceGraph Marketing Site Update Workflow

Use the repository skill at skills/refresh-icegraph-site whenever the marketing site must be created or synchronized with IceGraph.

Example request:

    Refresh the IceGraph marketing site from IceGraph v1.4.0.

The workflow will:

1. Fetch and inspect the requested IceGraph Git revision.
2. Identify changes visible to users.
3. Update marketing copy while keeping Timeline as the high-level story and Graph as the drill-down.
4. Regenerate affected screenshots, recordings, posters, and social metadata.
5. Update the artifact manifest with the source revision.
6. Run code and browser verification.
7. Stop with local files ready for review.

The user retains control of Git staging, commits, pushes, and deployment.

Final product screenshots and recordings use Playwright MCP. T3 preview recording is not used for site media. A video-generation provider is optional and should be requested only for narration, transitions, or footage that cannot be captured from the actual product.
