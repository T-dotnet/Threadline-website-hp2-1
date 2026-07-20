import { Cluster, Container, Divider, Eyebrow, Heading, Stack, Text, cx } from './primitives.jsx';

export function Button({ href, variant = 'primary', size = 'md', className, children, ...props }) {
  const classes = cx('ds-button', `ds-button--${variant}`, size !== 'md' && `ds-button--${size}`, className);

  if (href) {
    return <a className={classes} href={href} {...props}>{children}</a>;
  }

  return <button className={classes} type="button" {...props}>{children}</button>;
}

export function Badge({ children, className, ...props }) {
  return <span className={cx('ds-badge', className)} {...props}>{children}</span>;
}

export function Card({ eyebrow, title, children, footer, className, ...props }) {
  return (
    <article className={cx('ds-card', className)} {...props}>
      <Stack gap={3}>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        {title ? <Heading as="h3" size="card">{title}</Heading> : null}
      </Stack>
      {typeof children === 'string' ? <Text tone="muted">{children}</Text> : children}
      {footer ? <div className="ds-card__footer">{footer}</div> : null}
    </article>
  );
}

export function Callout({ title, tone = 'info', marker = 'i', children, className, ...props }) {
  return (
    <aside className={cx('ds-callout', `ds-callout--${tone}`, className)} {...props}>
      <span className="ds-callout__mark" aria-hidden="true">{marker}</span>
      <Stack gap={2}>
        {title ? <Text as="strong">{title}</Text> : null}
        {typeof children === 'string' ? <Text size="sm" tone="muted">{children}</Text> : children}
      </Stack>
    </aside>
  );
}

export function Stat({ value, label, detail, className, ...props }) {
  return (
    <div className={cx('ds-stat', className)} {...props}>
      <span className="ds-stat__value">{value}</span>
      <Stack gap={2}>
        <Text as="strong">{label}</Text>
        {detail ? <Text size="sm" tone="muted">{detail}</Text> : null}
      </Stack>
    </div>
  );
}

export function SectionHeader({ eyebrow, title, description, action, className }) {
  return (
    <Cluster align="between" className={className}>
      <Stack gap={3}>
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <Heading>{title}</Heading>
        {description ? <Text size="lg" tone="muted">{description}</Text> : null}
      </Stack>
      {action ? <div>{action}</div> : null}
    </Cluster>
  );
}

export function TopNavigation({
  brand = 'Threadline',
  brandHref = '/',
  links = [],
  action,
  ariaLabel = 'Primary navigation',
  className,
}) {
  return (
    <header className={cx('ds-top-nav', className)}>
      <Container size="wide" className="ds-top-nav__inner">
        <a className="ds-top-nav__brand" href={brandHref}>{brand}</a>
        {links.length > 0 ? (
          <nav className="ds-top-nav__links" aria-label={ariaLabel}>
            {links.map(({ label, href }) => <a href={href} key={label}>{label}</a>)}
          </nav>
        ) : null}
        {action ? <div className="ds-top-nav__action">{action}</div> : null}
      </Container>
    </header>
  );
}

export function Footer({
  brand = 'Threadline',
  description,
  links = [],
  action,
  legal,
  ariaLabel = 'Footer navigation',
  className,
}) {
  return (
    <footer className={cx('ds-footer', className)}>
      <Container size="wide">
        <Stack gap={8}>
          <Cluster align="between">
            <Stack gap={3} className="ds-footer__identity">
              <p className="ds-footer__brand">{brand}</p>
              {description ? <Text size="sm" tone="muted">{description}</Text> : null}
            </Stack>
            {action ? <div>{action}</div> : null}
          </Cluster>
          {links.length > 0 ? (
            <nav className="ds-footer__links" aria-label={ariaLabel}>
              {links.map(({ label, href }) => <a href={href} key={label}>{label}</a>)}
            </nav>
          ) : null}
          <Divider />
          <Text size="sm" tone="muted">{legal || `© ${new Date().getFullYear()} Threadline`}</Text>
        </Stack>
      </Container>
    </footer>
  );
}
