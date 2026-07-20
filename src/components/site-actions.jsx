import { Button } from '../design-system/components.jsx';
import { cx } from '../design-system/primitives.jsx';

const SITE_ACTIONS = {
  primary: { variant: 'primary', className: 'cta' },
  secondary: { variant: 'secondary', className: 'site-secondary-action' },
  link: { variant: 'quiet', className: '' },
};

const SITE_ACTION_CONTEXTS = {
  modal: 'ds-modal-action',
};

export function SiteAction({ appearance = 'primary', className, context, ...props }) {
  const action = SITE_ACTIONS[appearance] || SITE_ACTIONS.primary;

  return (
    <Button
      variant={action.variant}
      className={cx(action.className, SITE_ACTION_CONTEXTS[context], className)}
      {...props}
    />
  );
}
