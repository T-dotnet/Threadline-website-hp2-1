# Design QA — How It Works typography refresh

## Source visual truth

- Figma file: `Threadline Health — Website Design 1`
- Frame: `HP - How it works` (`3252:15700`)
- Comparison section: `3252:15728` (1450 × 1040)
- FAQ section: `3252:16062` (1450 × 880)
- Source captures: `/tmp/how-figma-comparison.png` and `/tmp/how-figma-faq.png`

## Implemented typography

- Comparison-card titles: Funnel Sans Regular, 24px, normal line height.
- Comparison-card item copy: Funnel Sans Regular, 20px, normal line height.
- FAQ heading: Fraunces Light, 64px / 67.58px, -1.69px tracking, `SOFT 0` and `WONK 1`.
- The FAQ heading already matched the updated Figma definition, so it was preserved.

## Visual comparison evidence

- Figma and implementation were inspected together at 1450px desktop width.
- Side-by-side comparison section: `/tmp/how-qa-comparison.png`
- Side-by-side FAQ section: `/tmp/how-qa-faq.png`
- The card body copy now matches the updated scale and rhythm in Figma.
- The FAQ heading retains the matching Fraunces display treatment and two-line wrap.
- Mobile verification at 390 × 844 reports no horizontal overflow.

## Runtime and interaction checks

- Local URL: `http://127.0.0.1:3001/how-it-works`
- Verified `/` → `How it works` navigation.
- Verified the first FAQ item collapses from its open default state.
- Browser console error count: 0.
- Production build completed successfully and statically generated `/how-it-works`.
- `git diff --check` completed without whitespace errors.

## Remaining findings

- No actionable P0, P1, or P2 typography differences remain in the requested areas.

passed
