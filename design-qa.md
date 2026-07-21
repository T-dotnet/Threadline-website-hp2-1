# Design QA — Informed Preparation

## Comparison target

- Source visual truth: `/Users/danielenicoletti/Documents/Threadline hp2-1/design-qa-source-guideline.png`
- Figma source: `Hp v2 - 1A`, node `26:1246` (`Guideline Section`), inside the supplied `26:543` homepage frame
- Implementation screenshot: `/Users/danielenicoletti/Documents/Threadline hp2-1/design-qa-implementation-guideline.png`
- Combined comparison: `/Users/danielenicoletti/Documents/Threadline hp2-1/design-qa-guideline-comparison.png`
- Viewport: 1710 × 900 CSS pixels
- Compared region: 1450 × 700 CSS pixels
- State: default desktop state

## Full-view comparison evidence

The combined comparison places the Figma source above the browser-rendered implementation at the same 1450 × 700 crop. Composition, content order, section height, centered column position, heading wrapping, link placement, and two-column copy layout align with the source.

Measured browser geometry:

- Section: 1450 × 700
- Inner column: 513.09 × 414.20
- Inner layout: vertical flex, 64px gap
- Copy grid: 240.54px / 240.55px columns, 32px gap
- Top-right radius: 160px

## Focused region evidence

The section itself is the focused comparison region and is rendered at full source resolution, so a second crop was not needed. Typography and copy remain readable in the combined artifact.

## Required fidelity surfaces

- Fonts and typography: passed. Fraunces Light renders at 40px, weight 300, normal line height, and -0.5px tracking. Funnel Sans sizing, weights, line heights, wrapping, and hierarchy match the source.
- Spacing and layout rhythm: passed. The centered 513px column, 64px major gap, 32px copy-column gap, section height, and radius match the Figma geometry.
- Colors and visual tokens: passed. Heading, accent, muted copy, and canvas colors resolve through the existing design-system tokens and visually match the source.
- Image quality and asset fidelity: not applicable. This section contains no image assets or icons.
- Copy and content: passed. Kicker, heading, guideline link, and both supporting paragraphs match the Figma source.

## Responsive and interaction checks

- 390 × 844 viewport: section width 358px; content width 310px; single copy column; 48px major gap.
- Horizontal overflow: none (`document width = viewport width = 390px`).
- Guideline link: unique, points to `https://adhdguideline.aadpa.com.au/`, and opens in a new tab.
- Browser console errors: none.

## Findings

No actionable P0, P1, or P2 differences remain.

## Comparison history

- Pass 1: no actionable P0/P1/P2 differences were found in the source-versus-browser comparison, so no post-comparison fix loop was required.

## Follow-up polish

No P3 follow-up is required for this section.

final result: passed

---

# Design QA — Resources Page

## Comparison target

- Source page: `https://threadline-nav-5-4a.vercel.app/resources`
- Source visual truth: `/Users/danielenicoletti/Documents/Threadline hp2-1/reference-captures/source-desktop-top.png` and `/Users/danielenicoletti/Documents/Threadline hp2-1/reference-captures/source-mobile-top.png`
- Implementation screenshots: `/Users/danielenicoletti/Documents/Threadline hp2-1/reference-captures/implementation-desktop-top.png` and `/Users/danielenicoletti/Documents/Threadline hp2-1/reference-captures/implementation-mobile-top-final.png`
- Desktop viewport: 1440 × 1000 CSS pixels
- Mobile viewport: 390 × 844 CSS pixels
- State: default `/resources` route, with separate captured search, category-filter, navigation, guide-grid, and locker states

## Full-view comparison evidence

- Desktop top: `/Users/danielenicoletti/Documents/Threadline hp2-1/reference-captures/comparison-desktop-top.png`
- Mobile top: `/Users/danielenicoletti/Documents/Threadline hp2-1/reference-captures/comparison-mobile-top.png`
- Desktop guides: `/Users/danielenicoletti/Documents/Threadline hp2-1/reference-captures/comparison-desktop-guides.png`
- Mobile guide cards: `/Users/danielenicoletti/Documents/Threadline hp2-1/reference-captures/comparison-mobile-cards.png`
- Mobile locker, final icon pass: `/Users/danielenicoletti/Documents/Threadline hp2-1/reference-captures/comparison-mobile-locker-final.png`

The source and browser-rendered implementation were compared at matching desktop and mobile viewport sizes. The implementation preserves the source's content hierarchy, featured-guide composition, two-column desktop guide grid, single-column mobile stack, topic shortcuts, and watercolor activity locker while using the public site's existing navigation, footer, and design tokens.

## Required fidelity surfaces

- Fonts and typography: passed. The page intentionally uses the repository's established Fraunces and Funnel Sans tokens, per the request to retain the existing Threadline style, while preserving the reference hierarchy, scale, and wrapping behavior.
- Spacing and layout rhythm: passed. Hero width, guide spacing, card proportions, responsive grid transitions, topic rows, and locker stacking closely match the source. Mobile document width equals viewport width, with no horizontal overflow.
- Colors and visual tokens: passed. Layout styling resolves through the existing semantic color, spacing, radius, and shadow tokens. Captured source icon tones were baked into local SVG assets where external SVG `currentColor` inheritance was unavailable.
- Image quality and asset fidelity: passed. The original watercolor and guide artwork is stored locally, rendered without distortion, and not hot-linked. Source SVG artwork is reused rather than approximated.
- Copy and content: passed. Hero, featured guide, eight guide cards, categories, topic labels, and quick-activity copy match the reference.

## Responsive and interaction checks

- Desktop search for `sleep`: passed; three matching guides are shown.
- Desktop `Tools & Templates` filter: passed; three matching guides are shown.
- Desktop `School Support` topic shortcut: passed; the category is applied and the view advances to the guide section.
- Mobile search: passed; the same result logic works at 390 × 844.
- Mobile navigation layout: passed; open-state capture is stored at `/Users/danielenicoletti/Documents/Threadline hp2-1/reference-captures/implementation-mobile-navigation-open.png`.
- Horizontal overflow: none at 390 × 844.
- Browser console warnings and errors: none from the page.
- Production build: passed; `/resources` is statically prerendered.
- Design-system audit: passed.

## Findings and comparison history

- Pass 1: no actionable P0, P1, or P2 fidelity issues were found in the desktop or mobile comparisons.
- P3 polish: source SVGs that relied on inline `currentColor` initially rendered black when loaded as external images. The captured source tones were embedded into local SVG copies and the resource mappings were updated. The final mobile locker comparison confirms the corrected muted-green icons.
- Expected differences: the implementation uses the public marketing-site navigation/footer and established typography tokens rather than the authenticated demo shell. The Next.js development indicator and Codex annotation overlay visible in development tooling were excluded from fidelity assessment.

final result: passed

---

# Design QA — How It Works 2 Report Icons

## Comparison target

- Source visual truth: `/Users/danielenicoletti/Desktop/Screenshot 2026-07-20 at 7.33.04 am.png`
- Implementation screenshot: `/private/tmp/how-it-works-2-icons-much-closer.png`
- Viewport: 1117 × 987 CSS pixels
- State: `/how-it-works-2`, report panel visible, default desktop state

## Full-view comparison evidence

The source and browser-rendered implementation were opened together for direct visual comparison. The implementation follows the source's alternating four-column composition: assessment and school on the upper row, clinician and future care on the lower row. The final implementation intentionally uses a slightly tighter horizontal grouping requested after the first render.

## Focused region evidence

The four-icon report group is large and readable in both comparison images, so a separate detail crop was not required. All four supplied image assets retain their original circular crop, scale, and image quality.

## Required fidelity surfaces

- Fonts and typography: passed; the surrounding report heading and copy use the existing design-system primitives without modification.
- Spacing and layout rhythm: passed; alternating rows match the reference, with final pair-center gaps of 193px and 192px at the annotated desktop viewport using existing spacing tokens.
- Colors and visual tokens: passed; the panel, overlays, and spacing use the existing semantic color and spacing tokens.
- Image quality and asset fidelity: passed; the existing assessment, clinician, school, and future-care assets are reused without replacement or distortion.
- Copy and content: passed; no report copy was changed by the icon-placement update.

## Responsive and interaction checks

- 390 × 844 viewport: all four icons retain the staggered two-row pattern at 72px rendered size.
- Horizontal overflow: none (`document width = viewport width = 390px`).
- Sample-report button: opens the report dialog; the dialog closes successfully.
- Browser console errors: none. One unrelated Next.js LCP advisory remains.

## Findings

No actionable P0, P1, or P2 differences remain for the requested icon placement.

## Comparison history

- Pass 1: staggered placement matched the source pattern, with 332px desktop pair-center gaps.
- User refinement: requested the icons a little closer together.
- Pass 2: reduced the standard column-gap token and moved each pair inward with the standard 8px spacing token; pair-center gaps reached 315px with no overflow.
- User refinement: requested the icons closer again.
- Pass 3: moved each pair inward with the next standard spacing token; pair-center gaps reached 308px at the 1470px viewport with no overflow.
- Browser annotation refinement: the marked 1117 × 987 view showed the group still spanning too much of the panel.
- Pass 4: pulled the desktop and tablet pairs inward using the standard 40px spacing token while retaining the safer 12px token on compact mobile; final annotated-viewport gaps are 193px and 192px with no overlap or overflow.

## Follow-up polish

The icon scale remains intentionally unchanged because the request was limited to placement and the earlier size adjustment was reverted.

final result: passed
