# Threadline Website Design-System Reference

Last updated: 20 July 2026

This reference documents the shared visual rules used across the Home, How It Works, and Pricing pages. It describes the current implementation rather than introducing a separate styling layer.

## Sources of truth

- Design tokens: `src/design-system/tokens.css`
- Design-system components: `src/design-system/components.jsx`
- Shared website components: `src/components/site-chrome.jsx` and `src/components/website-sections.jsx`
- Website composition and responsive rules: `src/styles.css`
- Automated hardcode guard: `npm run design:audit`

Use tokens and shared components before adding a new value, selector, or one-off component.

## Core colors

| Role | Token | Usage |
| --- | --- | --- |
| Primary green | `var(--primary)` | Section labels, step titles, selected emphasis, green headings |
| Heading green | `var(--heading)` | Fraunces display headings and primary editorial copy |
| Body grey | `var(--text-secondary)` | Supporting paragraphs, notes, list copy, secondary controls |
| Surface | `var(--surface)` | White cards and panels |
| Light green surface | `var(--primary-light)` | Included cards, support panels, soft hover states |

Do not use primary green for ordinary body copy. Use it for headings, labels, step titles, and deliberate emphasis.

## Typography

### Display headings

- Family: `var(--serif)` (Fraunces)
- Weight: `300`
- Variation: `'SOFT' 0, 'WONK' 1`
- Color: `var(--heading)` unless a highlighted phrase uses `var(--primary)`
- Tracking and size are section-specific because the Figma compositions use different display scales.

### Shared step-title style

Use this style for short titles such as:

- “Tell us about your child”
- “Evidence across your child’s life.”
- “Your report brings together”
- “One record. Owned by your family. Shared when you choose.”

| Viewport | Size | Line height |
| --- | --- | --- |
| Desktop and tablet | `20px` | `30px` |
| Mobile, up to 620px | `18px` | `27px` |

Additional properties:

- Family: `var(--sans)`
- Weight: `400`
- Color: `var(--primary)`
- Margin: `0`

The shared pull-out class is `how-v2-pullout`. Use `how-v2-pullout--body` when the same typography should use body grey instead of green.

### Body copy

- Family: `var(--sans)`
- Size: `16.5px`
- Line height: `24px`
- Color: `var(--text-secondary)`

This scale is shared by explanatory copy, evidence details, FAQ answers, pricing notes, and supporting report text.

## Spacing tokens

| Token | Value | Common use |
| --- | --- | --- |
| `--ds-space-2` | `8px` | Small text inset and compact separation |
| `--ds-space-4` | `16px` | Compact stack gap |
| `--ds-space-5` | `20px` | List-item rhythm |
| `--ds-space-6` | `24px` | Content-list indentation and minimum note separation |
| `--ds-space-10` | `40px` | Major internal gap |
| `--ds-space-12` | `48px` | Mobile section spacing and desktop card inset |
| `--ds-space-16` | `64px` | Tablet spacing |
| `--ds-space-20` | `80px` | Large section rhythm |
| `--ds-space-24` | `96px` | Desktop card padding and major spacing |

Prefer tokens over raw pixel values. Combine tokens with `calc()` only when the required value is not present in the scale.

## Content lists

All active content lists use native `<ul>` and `<li>` semantics.

- Marker: native `disc`
- Marker size: `1.25em`
- Indentation: `var(--ds-space-6)`
- Standard item gap: `var(--ds-space-5)` where a stacked rhythm is required
- Text: shared body-copy styling

The standardized selectors cover:

- Homepage report contents
- Homepage pricing inclusions
- How It Works evidence sources
- Pricing-page inclusions

Do not draw bullets with text characters or pseudo-elements when the content is a semantic list.

## Hero copy panels

Hero copy panels retain their existing fixed or minimum heights. Padding is contained by global `box-sizing: border-box`.

| Viewport | Top and sides | Bottom |
| --- | --- | --- |
| Desktop | `var(--ds-space-12)` | `var(--ds-space-24)` |
| Tablet, up to 900px | `var(--ds-space-10)` | `var(--ds-space-16)` |
| Mobile, up to 620px | `calc(var(--ds-space-6) + var(--ds-space-1))` | `var(--ds-space-12)` |

Hero descriptions receive `var(--ds-space-2)` of left padding. This inset applies to the description only, not headings or CTA groups.

## Pricing notes

The note beginning “No subscription. No hidden fees or taxes.” uses the same top-spacing scale on Home and Pricing:

| Viewport | Top spacing |
| --- | --- |
| Desktop | `var(--ds-space-24)` |
| Tablet, up to 900px | `var(--ds-space-16)` |
| Mobile, up to 620px | `var(--ds-space-12)` |

The note uses body-grey typography and remains visually separate from the final included item.

## FAQ-to-section rhythm

The Pricing FAQ uses a larger desktop bottom inset before the affordability section:

- Desktop: `calc(var(--ds-space-20) * 2)`
- Tablet: `var(--ds-space-12)`
- Mobile: `var(--ds-space-10)`

Responsive values intentionally reduce the gap while preserving clear section separation.

## Buttons and CTAs

Use the shared `Button` component from `src/design-system/components.jsx`.

For existing outlined website actions:

```jsx
<Button unstyled className="home-v2-outline-button" href="/#contact">
  Contact us
</Button>
```

Inside Pricing, place outlined actions within `pricing-page-actions` so they inherit the established 54px height, padding, border, text color, radius, and hover state.

Use `SiteCta` for the primary filled action. Do not recreate primary or outline button styling in a page-specific class.

## Card geometry

- Desktop organic radius: `160px`
- Responsive organic radius: `64px`
- Standard control radius: `var(--ds-radius-md)`

Keep opposing organic corners intentional. Do not round every corner uniformly unless the source design calls for it.

## Shared components

Prefer these components before creating page-specific equivalents:

- `SiteNavigation`
- `SiteFooter`
- `SiteCta`
- `Button`
- `IconButton`
- `Input`
- `Select`
- `Textarea`
- `FormField`
- `HeroSection`
- `SectionHeading`
- `SectionLabel`
- `DisclosureList`
- `FaqSection`
- `SampleReportButton`

## Implementation checklist

Before adding or changing a style:

1. Check for an existing token.
2. Check for a shared component or selector with the same intent.
3. Use semantic HTML, especially for headings, lists, links, and buttons.
4. Preserve the desktop composition and its responsive overrides together.
5. Keep ordinary body copy grey and reserve primary green for hierarchy or emphasis.
6. Verify Home, How It Works, and Pricing when changing a shared selector.
7. Avoid one-off pixel values unless they come directly from the approved design geometry.
