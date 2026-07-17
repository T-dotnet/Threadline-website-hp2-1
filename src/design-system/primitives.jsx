export function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function Container({ as: Tag = 'div', size = 'default', className, children, ...props }) {
  return (
    <Tag className={cx('ds-container', size !== 'default' && `ds-container--${size}`, className)} {...props}>
      {children}
    </Tag>
  );
}

export function Section({ as: Tag = 'section', compact = false, className, children, ...props }) {
  return (
    <Tag className={cx('ds-section', compact && 'ds-section--compact', className)} {...props}>
      {children}
    </Tag>
  );
}

export function Stack({ as: Tag = 'div', gap = 6, className, children, ...props }) {
  return (
    <Tag className={cx('ds-stack', `ds-stack--${gap}`, className)} {...props}>
      {children}
    </Tag>
  );
}

export function Cluster({ as: Tag = 'div', align = 'start', className, children, ...props }) {
  return (
    <Tag className={cx('ds-cluster', align !== 'start' && `ds-cluster--${align}`, className)} {...props}>
      {children}
    </Tag>
  );
}

export function Grid({ as: Tag = 'div', columns = 3, className, children, style, ...props }) {
  return (
    <Tag
      className={cx('ds-grid', className)}
      style={{ '--ds-grid-columns': columns, ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function Surface({ as: Tag = 'div', tone = 'default', bordered = false, raised = false, padded = false, className, children, ...props }) {
  return (
    <Tag
      className={cx(
        'ds-surface',
        tone !== 'default' && `ds-surface--${tone}`,
        bordered && 'ds-surface--bordered',
        raised && 'ds-surface--raised',
        padded && 'ds-surface--padded',
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

export function Heading({ as: Tag = 'h2', size = 'section', className, children, ...props }) {
  return (
    <Tag className={cx('ds-heading', `ds-heading--${size}`, className)} {...props}>
      {children}
    </Tag>
  );
}

export function Text({ as: Tag = 'p', size = 'md', tone = 'default', className, children, ...props }) {
  return (
    <Tag className={cx('ds-text', `ds-text--${size}`, tone !== 'default' && `ds-text--${tone}`, className)} {...props}>
      {children}
    </Tag>
  );
}

export function Eyebrow({ as: Tag = 'p', className, children, ...props }) {
  return <Tag className={cx('ds-eyebrow', className)} {...props}>{children}</Tag>;
}

export function Divider({ className, ...props }) {
  return <hr className={cx('ds-divider', className)} {...props} />;
}

export function VisuallyHidden({ as: Tag = 'span', className, children, ...props }) {
  return <Tag className={cx('ds-visually-hidden', className)} {...props}>{children}</Tag>;
}
