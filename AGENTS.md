# AGENTS.md

Guidance for coding agents working on the IceGraph marketing site.

## Before any work

- Do not start coding immediately. First clarify material unknowns, present a plan, and wait for approval.
- For bugs, explain the root cause before proposing or applying a fix.
- Keep changes minimal and limited to the requested marketing-site behavior.
- Never add a dependency without approval. Explain its purpose, benefit, and maintenance cost first.
- Read frontend/DEVELOPMENT.md and frontend/PHILOSOPHY.md before modifying site code.
- Use skills/refresh-icegraph-site before the first release and whenever the site is synchronized with a new IceGraph revision.

## Git safety

- Read-only Git commands such as git status, git diff, git log, and git show are allowed.
- Never run git add, git commit, git push, git reset, git checkout, or any command that changes repository history or staging. Those actions are reserved for the user.

## Site purpose

This repository is the public marketing front door for IceGraph. It is not the IceGraph application and it is not its documentation site.

The page must help a first-time visitor understand, within the first screen:

1. IceGraph is an interactive, read-only debugger and visualizer for Apache Iceberg table metadata.
2. Iceberg state is difficult to reason about from SQL alone.
3. IceGraph makes table structure and evolution visible through a graph, timeline, metadata view, and file tree.
4. The next step is to try the live demo or run IceGraph against the visitor's own tables.

The audience is data and platform engineers who use Apache Iceberg, plus engineers learning Iceberg internals. Use specific technical language and avoid unsupported marketing claims.

Present the Timeline as the primary orientation view. It explains what happened and when. Present the Graph as the drill-down from a selected Timeline operation. It explains the underlying snapshots, manifests, data files, and delete files.

## How IceGraph operates

- IceGraph connects to an existing Spark Connect server.
- A user selects an Iceberg table and a snapshot range.
- IceGraph reads the table's metadata and renders it without changing data or metadata.
- The Graph view shows the metadata hierarchy from snapshots through manifests to data and delete files, including table branches.
- The Timeline shows how the table changed commit by commit and identifies operations such as rewrites.
- The Metadata view shows the current schema, partition specification, and table properties.
- The File Tree groups partitions and files in a familiar hierarchy.
- The Python client and CLI provide scripted access to tables, snapshots, and graph data.
- IceGraph supports Spark Connect and Iceberg table format version 2.
- Production deployments should use a read-only Spark Connect identity.

Do not copy internal backend architecture, API polling details, implementation class names, or application state management into marketing content. Verify product claims against the canonical IceGraph repository on GitHub.

## Canonical public links

- Live demo: https://yanivzalach.github.io/IceGraph/
- GitHub: https://github.com/YanivZalach/IceGraph
- Docs: https://yanivzalach.github.io/IceGraph/docs
- Docker Hub: https://hub.docker.com/r/yanivzalach/icegraph
- Roadmap: https://github.com/users/YanivZalach/projects/3
- PyPI: https://pypi.org/project/icegraph-client/

## Quick-start facts

The primary Docker command is:

    docker run -e SPARK_REMOTE=sc://<spark-connect-ip>:15002 -p 5050:5050 yanivzalach/icegraph:latest

Do not invent commands, compatibility claims, links, product views, or table capabilities. Check the canonical GitHub repository and live docs when facts may have changed.

## Quality requirements

- The live demo must be reachable from the hero and footer.
- Use real product visuals, not generic illustrations or stock imagery.
- Preserve a dark, high-contrast developer-tool aesthetic that feels related to the application.
- Support mobile layouts, keyboard navigation, meaningful image alternative text, sufficient contrast, and reduced-motion preferences.
- Keep the initial load fast. Product captures must not block the first meaningful render.
- Include accurate title, description, canonical URL, Open Graph metadata, social preview imagery, and relevant structured data.
- Deployment must work from the repository's GitHub Pages base path without hardcoded root-relative asset URLs.

## Before presenting work

Run all configured checks and fix violations without disabling rules:

    npm run format
    npm run lint
    npm run typecheck
    npm run build

Also inspect the page at representative desktop and mobile widths and verify keyboard access, outbound links, copy buttons, reduced motion, and visible focus states.
