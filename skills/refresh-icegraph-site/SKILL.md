---
name: refresh-icegraph-site
description: Synchronize the IceGraph marketing site with a specific IceGraph Git ref, including product copy, real screenshots, short recordings, metadata, and release-ready verification. Use when building the first site version or preparing the marketing site after IceGraph changes. Do not use for changes confined to the IceGraph application repository.
---

# Refresh IceGraph Site

Update this marketing site from a concrete IceGraph source revision while preserving product truth and the Timeline-first story.

## Required inputs

Use the user-provided IceGraph tag, branch, or commit. If none is provided, resolve the current remote default-branch commit and report the exact commit before changing files.

Read [references/update-flow.md](references/update-flow.md) for every refresh. Read [references/media-spec.md](references/media-spec.md) when product visuals may be missing, stale, or affected by the upstream changes.

## Core decisions

- Timeline is the orientation layer. It answers what happened and when.
- Graph is the drill-down layer. It answers what metadata objects and files caused or resulted from the selected operation.
- Write plain-language meaning first and precise Iceberg terminology second.
- Serve both production debugging and learning without labeling visitors by seniority.
- Use only real IceGraph UI captures. Never fabricate a product screen.
- Record product walkthroughs with Playwright MCP. Do not use T3 preview recording for final site media.
- Treat a product claim as stale until verified against the selected Git revision or its published documentation.

## Authorization boundaries

- Fetching and inspecting upstream Git source is read-only with respect to the upstream repository.
- Ask before installing dependencies or connecting a paid video-generation service.
- Ask immediately before any external publication or deployment.
- Never stage, commit, push, reset, or rewrite Git history.
- Stop after producing verified local artifacts and a clear handoff report.

## Completion report

State the source revision, changed copy, regenerated media, checks performed, remaining capability gaps, and files ready for the user to review and push.
