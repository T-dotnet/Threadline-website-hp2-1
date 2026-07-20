import { Button } from '../design-system/components.jsx';
import { cx } from '../design-system/primitives.jsx';

const SITE_ACTIONS = {
  primary: { variant: 'primary', className: 'cta' },
  secondary: { variant: 'secondary', className: 'site-secondary-action' },
  link: { variant: 'quiet', className: '' },
};

export function SiteAction({ appearance = 'primary', className, ...props }) {
  const action = SITE_ACTIONS[appearance] || SITE_ACTIONS.primary;

  return (
    <Button
      variant={action.variant}
      className={cx(action.className, className)}
      {...props}
    />
  );
}
