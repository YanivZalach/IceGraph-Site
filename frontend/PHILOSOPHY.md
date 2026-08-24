# Marketing Frontend Philosophy

Guiding principle: make a technical visitor understand IceGraph quickly, with the product itself doing most of the persuasion.

## Platform

- Vite single-page static frontend.
- React with strict TypeScript.
- Plain CSS for styling.
- Chrome and Edge 100 or newer, Firefox 100 or newer, and Safari 15.4 or newer. Treat newer visual APIs as progressive enhancements.
- No server rendering, backend, authentication, or persistent state.

## Dependencies

Keep the dependency set minimal. Do not add routing, query, state, animation, analytics, form, icon, or UI-library packages unless a concrete requirement is approved. Small helpers belong in local source files.

## TypeScript

- Never use any.
- Use unknown and narrow external values.
- Never use enum.
- Assertions are prohibited except as const.
- Use interface for object shapes and type for unions or derived types.
- Exported functions, component props, and other boundaries have explicit types.
- Use precise names. Booleans begin with is, has, should, or can.

## React

- Arrow functions only.
- One component per file, with a default export matching the filename.
- Components stay under 200 lines.
- Do not use memo, useMemo, or useCallback.
- UseEffect is only for synchronization with a non-React system and must be justified first.
- Pass intent-named callbacks such as onCopy, not state setters.
- Prefer semantic HTML and native browser behavior.

## Structure

Use a shallow feature structure suitable for one marketing page:

    src/
      components/
      sections/
      shared/
      assets/

A component used once stays near its section. Move it to shared only when two or more sections use it. Avoid barrel files and path aliases.

## Styling

- Plain CSS only. Keep site styles in `src/index.css`.
- No CSS-in-JS or inline style attributes.
- Typography establishes hierarchy. Keep the number of competing text scales small.
- Use a dark, high-contrast developer-tool aesthetic related to the IceGraph app.
- Repeated visual patterns become components, not exported class-name constants.
- Use deliberate responsive layouts rather than shrinking desktop content until it fits.

## Motion

- Motion must clarify hierarchy or make the product feel active.
- Prefer transforms and opacity implemented in CSS.
- Do not add an animation library for decorative effects.
- Respect prefers-reduced-motion and preserve all meaning without motion.
- Avoid effects that delay rendering or compete with reading.

## Accessibility

- Use landmarks, headings in order, native links, and native buttons.
- Every control must work by keyboard and show a visible focus state.
- Maintain WCAG AA contrast.
- Product images need descriptive alternative text. Decorative images use empty alternative text.
- Copy interactions expose confirmation to assistive technology.
- Do not convey information through color alone.

## Product visuals

Use actual IceGraph views. A capture may be cropped, framed, and optimized, but its interface and data must not be fabricated. Include explicit image dimensions to reduce layout shift. Load below-the-fold media lazily.

## SEO and sharing

- Use one clear H1 that says IceGraph and Apache Iceberg.
- Write an accurate title and description for technical search intent.
- Provide a canonical URL, Open Graph tags, social preview image, favicon, and relevant JSON-LD.
- Keep important product explanation in HTML text, not only in images.
- Use descriptive link text.
- Do not keyword-stuff IceGraph or Apache Iceberg.

## Performance

- The hero copy and calls to action render before large media.
- Optimize still images and prefer modern formats where useful.
- Avoid autoplay video in the critical rendering path.
- Prevent layout shift with stable dimensions.
- Ship no JavaScript that does not support a visible interaction or purposeful enhancement.

## Comments

Avoid comments that restate the code. A necessary why-comment must include an issue number or URL.

## Verification

Formatting, linting, strict type checking, and production builds must pass. Verify desktop and mobile layouts in a browser, keyboard navigation, focus visibility, reduced motion, copy behavior, link destinations, image loading, metadata, and the GitHub Pages base path.
