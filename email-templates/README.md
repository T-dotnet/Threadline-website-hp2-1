# Threadline EDM template

`threadline-edm-template.html` is a reusable marketing-email template. It uses a 600px, table-based layout with mobile stacking so it can be pasted into an ESP that supports HTML templates (for example, Customer.io, HubSpot, Klaviyo, or Mailchimp).

## Filled examples

- `examples/resource-roundup.html` is a family-resource digest with a hero image and two article cards.
- `examples/welcome-to-threadline.html` is a welcome email with a compact visual panel instead of a full hero.
- `examples/welcome-quiet-editorial.html` is an image-led editorial welcome with a featured resource.
- `examples/welcome-guided-pathway.html` is a structured three-step welcome with a family hero image.
- `examples/welcome-personal-note.html` is a warm letter-style welcome with one recommended guide.

All examples retain the required `{{unsubscribe_url}}` and `{{company_postal_address}}` fields. Replace them with valid sending-platform values before use.

The examples use local image paths so they render when opened directly from this repository. Before pasting one into an email platform, replace every local image path with the corresponding absolute HTTPS asset URL.

Replace every `{{placeholder}}` with your platform's merge-tag syntax. All image and destination URLs must be absolute HTTPS URLs; email clients cannot use the site's relative `/public` paths.

Key optional blocks are marked directly in the template:

- Remove the complete hero-image `<tr>` when there is no hero. Use useful, brief `hero_image_alt` text; use an empty alt value only for a decorative image.
- Remove the primary CTA table when no action is needed.
- Remove unused secondary or tertiary heading-and-paragraph pairs.
- Duplicate, replace, or remove resource columns as needed. Keep resource links descriptive in the surrounding context.
- Resource cards can include `resource_1_image_url` / `resource_2_image_url` and corresponding alternative text. Remove the marked image row for a text-only card.

For marketing sends, retain a working unsubscribe link, sender postal address, and the appropriate legal copy. The footer's unsubscribe link can be removed only for truly transactional email where your sending rules allow it.

Before sending, test the final ESP-rendered version in Gmail, Apple Mail, Outlook desktop, Outlook web, and a narrow mobile view. Confirm every link, image alternative text, preheader, dark-mode rendering, and merge tag.
