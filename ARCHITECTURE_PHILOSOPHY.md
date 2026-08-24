# IceGraph Marketing Site Architecture Philosophy

## 1. Static by default

The marketing site is a static frontend. It has no server, database, authentication, persistent state, or dependency on a running IceGraph backend. Every additional moving part must be justified by a requirement that static HTML, CSS, and client-side React cannot meet.

## 2. Product truth over abstraction

The site explains the product but does not reproduce the product. Use real IceGraph captures and accurate descriptions of its graph, timeline, metadata, and file-tree views. Do not expose internal services, classes, APIs, or implementation details.

## 3. Fast first impression

The hero copy and primary calls to action render immediately. Large screenshots and optional motion load without blocking the first meaningful paint. Prefer optimized still images and CSS motion over video or large animation libraries.

## 4. Progressive enhancement

Core content, navigation, links, and quick-start commands remain usable without animation. Motion adds depth but never carries meaning, blocks interaction, or ignores the user's reduced-motion setting.

## 5. Accessible and portable

Use semantic HTML, visible focus states, keyboard-reachable controls, meaningful alternative text, and sufficient contrast. Build assets and links so the site works under the IceGraph-Site GitHub Pages base path.

## 6. Minimal dependencies

Use only the approved frontend foundation needed to implement the page. Do not introduce routing, server-state, client-state, form, animation, analytics, or component-library dependencies unless a concrete requirement justifies them.
