# Marketing Site Development Guide

The repository-root AGENTS.md applies to all work. Read PHILOSOPHY.md before modifying frontend code.

## Scope

This frontend is a single-page marketing site for IceGraph. It sends visitors to the live demo, GitHub repository, documentation, Docker Hub, PyPI package, and roadmap. It must not grow into a second IceGraph application or a duplicate documentation site.

## Required page flow

1. Hero: a direct product definition, the problem in one line, demo and GitHub calls to action, and a dominant real product visual.
2. Problem: concise recognition of why snapshots, manifests, delete files, and table evolution are hard to inspect manually.
3. Product views: Timeline first as the high-level history, Graph second as its drill-down, then Metadata and File Tree as supporting context. Each view is led by a real visual and one question it answers.
4. Production safety: read-only behavior and the recommendation to use a read-only Spark Connect identity.
5. Get started: a one-click-copy Docker command and a path to Python client and CLI documentation.
6. Scope: Spark Connect only and Iceberg table format version 2.
7. Footer: demo, GitHub, docs, Docker Hub, PyPI, and roadmap links.

## Product operation to communicate

IceGraph connects to Spark Connect, reads an Iceberg table's metadata for a selected snapshot range, and presents that information through four views:

- Timeline: high-level table changes and operations in commit order.
- Graph: a drill-down from a selected Timeline operation into snapshots, manifests, data files, delete files, and branches.
- Metadata: current schema, partition specification, and properties.
- File Tree: partitions and files in a hierarchy.

It never writes data or metadata. Scripted access is available through icegraph-client.

Keep this explanation at the product level. Do not include API routes, polling jobs, internal modules, React state management, or backend implementation details.

## Content sources

Verify claims and commands against:

- https://github.com/YanivZalach/IceGraph
- https://github.com/YanivZalach/IceGraph/blob/master/README.md
- https://yanivzalach.github.io/IceGraph/docs
- https://github.com/YanivZalach/IceGraph/issues/121

Canonical links are listed in the repository-root AGENTS.md.

## Visual assets

- Use captures from the real IceGraph demo or application.
- Optimize images for the size at which they render.
- Give each product image meaningful alternative text describing the view and its purpose.
- Frame captures as application panels, not raw floating screenshots.
- Do not use stock photography, generic 3D shapes, or invented product interfaces.
- Decorative motion must use CSS where practical and stop under prefers-reduced-motion.

## Testing checklist

Run:

    npm run format
    npm run lint
    npm run typecheck
    npm run build

Then verify:

- Hero meaning and calls to action are visible without scrolling on a representative desktop viewport.
- Mobile content remains readable and product visuals use deliberate crops or alternate layouts.
- Every interactive element is keyboard reachable and has a visible focus state.
- Copy buttons work and provide an accessible confirmation.
- Outbound links resolve to the intended product destination.
- Images have meaningful alternative text and explicit dimensions.
- Reduced-motion mode removes nonessential movement.
- The production build works under the configured GitHub Pages base path.
- Social title, description, preview image, canonical URL, and structured data are present.
