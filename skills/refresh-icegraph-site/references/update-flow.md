# IceGraph Site Update Flow

## First build

1. Resolve and record the exact IceGraph Git revision.
2. Inspect user-facing release notes, navigation, product views, commands, supported scope, and public links.
3. Build the complete marketing story with Timeline first and Graph as the drill-down.
4. Capture the baseline product media set described in media-spec.md.
5. Write the source revision and artifact details to the media manifest.
6. Verify copy, media, metadata, accessibility, responsive layouts, and the production build.

## Recurring refresh

1. Compare the recorded source revision with the requested IceGraph revision.
2. Classify changes as product-visible, documentation-only, internal-only, or release-channel changes.
3. Update marketing copy only for verified product-visible changes.
4. Regenerate only captures whose view, navigation, content, or styling changed.
5. Always recheck the complete page because unchanged assets may become misleading in new context.
6. Update the manifest and return a local handoff. Never publish or mutate Git state.

## Product change routing

- Timeline behavior or visual change: refresh the hero poster, Timeline image, and primary recording.
- Graph behavior or visual change: refresh the drill-down image and any Graph segment in the primary recording.
- Metadata or File Tree change: refresh that view's image and supporting copy.
- Navigation or table-selection change: refresh the how-it-works recording.
- Command, compatibility, or link change: update the get-started and scope sections.
- Internal-only change: retain media and copy unless observable output changed.

## Verification gates

- Every product claim maps to the selected source revision or published documentation.
- The hero explains IceGraph before the first scroll.
- Timeline is more visually prominent than Graph.
- Graph is explicitly presented as the drill-down from a selected Timeline operation.
- The page remains understandable without video or animation.
- Videos are muted, captioned in surrounding HTML, poster-backed, and optional under reduced motion.
- Formatting, lint, strict type checking, and production build pass.
- Desktop and mobile browser checks pass.
