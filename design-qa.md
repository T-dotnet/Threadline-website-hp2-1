# Design QA — Assessment Ready process artwork

## Source visual truth

- Figma file: `Hp v2 1A`, homepage node `26:543`.
- Isolated Evidence Workspace Card: node `28:1326` at 920 × 600.
- Figma reference capture: `/tmp/threadline-process-figma.png`.
- User reference screenshot: `/Users/danielenicoletti/Desktop/Screenshot 2026-07-16 at 6.14.57 pm.png`.

## Rendered implementation

- Local URL: `http://127.0.0.1:4174/`.
- Desktop viewport: 1838 × 932.
- Desktop process capture: `/tmp/threadline-process-fixed-desktop.png`.
- Exact-size comparison: `/tmp/threadline-process-comparison.png` (Figma on the left, implementation on the right).
- Mobile capture: `/tmp/threadline-process-fixed-mobile.jpg` at 390 × 844.

## Findings and fixes

1. The process artwork previously used a single page 2 Clinical overview image, which did not match the supplied design.
2. Replaced it with the exact page 6 Cross-source view asset behind the exact page 9 child-perspective asset.
3. Matched the Figma layer order, paper sizes, 32px radii, dual shadows, offsets, parent clipping and watercolour crop.
4. Added proportional positioning below 1100px so the two-page composition scales without horizontal overflow.

## Runtime checks

- Production build completed successfully.
- Browser console contained only the expected development-mode HMR and React DevTools informational messages; no warnings or errors.
- Desktop artwork renders at the exact 920 × 600 Figma node size.
- At 390px, document width equals viewport width and the layered artwork retains the designed overlap.

## Final comparison

- The rear sheet is page 6, `Cross-source view`.
- The front sheet is page 9, `The child's own perspective`.
- Background crop, visible page areas, rounded corners, shadows and clipping match the isolated Figma reference.
- The existing steps card remains unchanged and aligned beside the corrected artwork.
- No actionable P0, P1 or P2 issues remain in the requested section.

final result: passed

---

# Design QA — Tablet navigation CTA placement

## Source visual truth

- User reference screenshot: `/var/folders/ct/7pv083t966b53bs7gkyw568r0000gn/T/codex-clipboard-844eb5f3-140e-434a-b376-ec4ed870e96a.png`.
- The source records the incorrect tablet state; the requested correction is to place the `Get started` CTA immediately beside the Menu control.

## Rendered implementation

- Local URL: `http://127.0.0.1:4174/`.
- Viewport: 1117 × 987.
- State: homepage, top of page, Menu closed.
- Implementation capture: `/private/tmp/threadline-tablet-nav-after.png`.
- Full-view comparison: `/private/tmp/threadline-tablet-nav-comparison.png` (source on the left, corrected implementation on the right).
- Focused header comparison: `/private/tmp/threadline-tablet-nav-focused-comparison.png`.

## Comparison history

1. P2: at the tablet breakpoint, `space-between` distributed the logo, CTA and Menu across the full header; the CTA sat 302px away from Menu.
2. Changed the 901–1250px navigation row to use start alignment and an automatic left margin on the CTA.
3. Post-fix evidence measures a 16px CTA-to-Menu gap, matching the existing navigation gap token, with no horizontal overflow.

## Fidelity surfaces

- Fonts and typography: the existing Funnel Sans navigation type, sizes, weights and labels are unchanged.
- Spacing and layout rhythm: only tablet horizontal distribution changed; logo position and control dimensions remain unchanged.
- Colors and visual tokens: existing green CTA, white Menu control, borders and background remain unchanged.
- Image quality and assets: the Threadline logo and hero artwork remain the original supplied assets with unchanged crop and rendering.
- Copy and content: `Get started` and `Menu` remain unchanged.

## Runtime and interaction checks

- Production build completed successfully and `git diff --check` passed.
- Menu opens at 1117px and exposes the expected navigation links.
- Browser console has no relevant warnings or errors.
- At 1440px the full navigation links remain visible and Menu remains hidden.
- At 768px the compact Menu remains visible, the header CTA remains hidden, and there is no horizontal overflow.

## Final comparison

- The requested CTA now sits directly beside Menu at tablet widths.
- No actionable P0, P1 or P2 issues remain in the requested header state.

final result: passed

---

# Design QA — Assessment Preparation price card

## Source visual truth

- User reference screenshot: `/Users/danielenicoletti/Desktop/Screenshot 2026-07-16 at 6.24.40 pm.png`.
- Focused comparison target: the right-hand `ASSESSMENT PREPARATION` card.

## Rendered implementation

- Local URL: `http://localhost:4174/#pricing`.
- Desktop capture: `/tmp/threadline-assessment-preparation-desktop.png` at 2048 × 902.
- Full-view comparison: `/tmp/threadline-assessment-preparation-comparison.png`.
- Focused card comparison: `/tmp/threadline-assessment-preparation-focused-comparison.png`.
- Mobile layout check: 390 × 844.

## Comparison history

1. P2: the card used row-direction flex layout, so `justify-content: flex-end` pushed the pricing group toward the right instead of positioning it toward the bottom.
2. Added `flex-direction: column`, restoring the reference card axis and left alignment.
3. Kept `justify-content: flex-end` after the normalized focused comparison confirmed the reference uses bottom alignment rather than vertical centering.
4. Scoped the compact CTA label to this card so the visible button reads `Get started`, matching the reference.

## Fidelity surfaces

- Fonts and typography: existing Funnel Sans and Fraunces treatments, sizes, weights and price hierarchy are preserved.
- Spacing and layout rhythm: the price group is left aligned with the 96px card inset and bottom aligned with the matching 96px inset.
- Colors and visual tokens: existing primary green, surface white and pale green panel tokens are unchanged.
- Image quality and assets: this section contains no raster or decorative image assets; card radii and backgrounds remain unchanged.
- Copy and content: `ASSESSMENT PREPARATION`, `$395`, `once-off` and `Get started` match the supplied reference.

## Runtime and interaction checks

- Production build completed successfully.
- `git diff --check` passed.
- The `Get started` CTA navigates to `/pricing`, where `Become ADHD Assessment Ready.` renders.
- Homepage console has no relevant warnings or errors; the destination page reports one unrelated Next.js LCP image advisory.
- At 390px, document width equals viewport width and the price card remains contained at 358px wide.

## Final comparison

- The price group now follows the reference axis, alignment, compact CTA label and bottom spacing.
- No actionable P0, P1 or P2 issues remain in the requested section.

final result: passed

---

# Design QA — Sample report secondary navigation arrows

## Source visual truth

- User reference screenshot: `/var/folders/ct/7pv083t966b53bs7gkyw568r0000gn/T/codex-clipboard-5e4ff1da-db37-4f9b-acea-e79a21ad1803.png`.
- The source records the current solid-primary arrows; the requested target is the secondary outline treatment already used by Share and Download.

## Rendered implementation

- Local URL: `http://127.0.0.1:4174/`.
- Desktop viewport: 1117 × 987.
- Mobile viewport: 390 × 844.
- State: sample report open on page 8 of 16, explanation panel collapsed.
- Desktop capture: `/private/tmp/threadline-report-secondary-arrows-desktop.png`.
- Mobile capture: `/private/tmp/threadline-report-secondary-arrows-mobile.png`.
- Full-view comparison: `/private/tmp/threadline-report-secondary-arrows-comparison.png` (source on the left, updated implementation on the right).
- Focused arrow comparison: `/private/tmp/threadline-report-secondary-arrows-focused-comparison.png`.

## Comparison history

1. P2: previous and next arrows used the solid primary button treatment, giving them more visual emphasis than the report actions.
2. Moved the arrows to the existing secondary treatment: white surface, 1px heading-green border, heading-green icon and 16px radius.
3. Kept solid heading green as the hover treatment and retained the existing disabled opacity.
4. Post-fix evidence confirms both arrows share the secondary styling on desktop and mobile without changing size or position.

## Fidelity surfaces

- Fonts and typography: no text or typography changed.
- Spacing and layout rhythm: arrow dimensions, positions, radii and viewer spacing remain unchanged.
- Colors and visual tokens: arrows now use the existing surface and heading tokens from Share and Download.
- Image quality and assets: report pages, icons and all image assets remain unchanged.
- Copy and content: report title, page count, action labels and report content remain unchanged.

## Runtime and interaction checks

- Production build completed successfully and `git diff --check` passed.
- The next arrow was exercised from page 1 through page 8; the visible counter reached `Page 8 of 16`.
- Both arrows remain visible and contained at 390 × 844 with no horizontal overflow.
- Browser console has no relevant warnings or errors.

## Final comparison

- The slide arrows now read as secondary navigation controls alongside the Share and Download actions.
- No actionable P0, P1 or P2 issues remain in the requested modal state.

final result: passed

---

# Design QA — Assessment Preparation CTA size

## Source visual truth

- User reference screenshot: `/var/folders/ct/7pv083t966b53bs7gkyw568r0000gn/T/TemporaryItems/NSIRD_screencaptureui_Qwjdi7/Screenshot 2026-07-16 at 8.45.42 pm.png`.
- The source records the oversized price-card CTA; the requested target is the established homepage CTA sizing used by the hero actions.

## Intended implementation

- Local URL: `http://127.0.0.1:4174/`.
- Target dimensions: 54px minimum height, 16px × 32px padding, 15px type and 20px line height.
- Scope: `.home-v2-price-card .cta` only; shared CTA and report-modal behavior remain unchanged.

## Fidelity surfaces

- Fonts and typography: price-card CTA now uses the same 15px Funnel Sans treatment as the homepage hero CTAs.
- Spacing and layout rhythm: button height and padding now match the established 54px CTA sizing; the existing 32px price-to-button gap remains unchanged.
- Colors and visual tokens: existing heading-green background, white label, hover treatment and focus ring remain unchanged.
- Image quality and assets: this control contains no raster or decorative assets.
- Copy and content: `Get started` remains unchanged.

## Validation blocker

- The local server returned `200 OK`, but the in-app Browser rejected the post-fix reload under its URL security policy.
- A browser-rendered implementation screenshot and interaction check could not be captured in this run.
- Production build and source-level checks may pass, but they do not replace the required visual comparison.

final result: blocked
