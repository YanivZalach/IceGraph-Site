# Product Media Specification

## Source integrity

Capture a real IceGraph build from the selected Git revision. Prefer its mock-data mode for deterministic scenes. Use the public demo only when it runs the same revision. Do not use private tables, credentials, or fabricated UI.

## Browser automation

Use Playwright MCP for final product screenshots and recordings. T3 preview may help with interactive inspection, but do not use its recorder for site media. A separate Playwright installation is unnecessary when the MCP capability can complete the capture.

For the primary recording:

- Capture at 1920 by 1200 so the 16:10 product UI stays legible in the hero.
- Prefer a native Playwright recording context when its recorder is available.
- If the native recorder cannot finalize, capture Playwright screenshots at JPEG quality 95 and feed them to Chromium MediaRecorder through a 1920 by 1200 canvas.
- Use H.264 MP4 when Chromium reports support for `video/mp4;codecs=avc1.42E01E`.
- Record at a 30 fps output rate with source page frames sampled near 12 fps. Use a 16 Mbps requested video bit rate.
- Save the stable result as `public/media/product/product-walkthrough.mp4` and record the method, dimensions, duration, and codec in the manifest.

If reliable Playwright recording is unavailable, create the required still images and stop with a clear capability gap. Do not fall back to T3 recording or replace real UI with generated video. Request a video provider only for optional transitions, narration, or non-product footage.

## Baseline artifacts

Store stable public assets under public/media/product/.

- timeline-hero.webp: wide Timeline view used above the fold.
- timeline-overview.webp: Timeline with a meaningful operation selected.
- graph-drilldown.webp: Graph opened from that Timeline operation.
- metadata-view.webp: current schema, partition specification, and properties.
- file-tree-view.webp: partition and file hierarchy.
- product-walkthrough.mp4 or product-walkthrough.webm: short Timeline-to-Graph journey when recording is available.
- product-walkthrough-poster.webp: first meaningful frame for the recording.
- og.png: 1200 by 630 social preview that reflects the finished site.
- manifest.json: source revision, capture routes, viewport sizes, alternative text, captions, and artifact filenames.

## Capture direction

- Desktop product images: capture at 1440 by 900 or higher and crop intentionally.
- Mobile proof: capture representative marketing layouts, not compressed desktop product screens.
- Keep product chrome visible enough to prove the images are real.
- Select a Timeline operation whose label and effect are understandable without private context.
- Continue from that operation into Graph so the recording expresses orientation followed by investigation.
- Avoid fast cursor movement, long waits, accidental hover states, and unreadably small text.
- Keep the primary recording between 12 and 24 seconds.

## Delivery behavior

The page must remain complete when video cannot autoplay or load. Use the poster as the default visual, load video after critical content, and disable nonessential motion for reduced-motion users.
