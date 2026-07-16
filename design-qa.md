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
