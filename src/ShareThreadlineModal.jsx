'use client';

import { useCallback, useRef, useState } from 'react';
import {
  FormField,
  FormRow,
  FormStatus,
  Input,
  LabeledDivider,
} from './design-system/components.jsx';
import { Modal } from './design-system/modal.jsx';
import { SiteAction } from './components/site-actions.jsx';

const DEFAULT_SHARE_PATH = '/#pricing';

export default function ShareThreadlineButton({
  children = 'Share Threadline',
  className = '',
  sharePath = DEFAULT_SHARE_PATH,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState(DEFAULT_SHARE_PATH);
  const [status, setStatus] = useState('');
  const triggerRef = useRef(null);

  const closeModal = useCallback(() => setIsOpen(false), []);

  const openModal = () => {
    setShareUrl(new URL(sharePath, window.location.origin).href);
    setStatus('');
    setIsOpen(true);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setStatus('Link copied');
    } catch {
      setStatus('Copy unavailable. Select the link and copy it manually.');
    }
  };

  const openEmail = (event) => {
    event.preventDefault();

    const recipient = String(new FormData(event.currentTarget).get('email') || '').trim();
    const subject = encodeURIComponent('Threadline assessment preparation');
    const body = encodeURIComponent(`I thought Threadline might help you prepare for an assessment. You can learn more here:\n\n${shareUrl}`);

    setStatus('Opening your email app…');
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  const modal = (
    <Modal
      closeLabel="Close Share Threadline"
      description="Send families a link to Threadline so they can decide if it suits them."
      descriptionId="share-threadline-description"
      isOpen={isOpen}
      onClose={closeModal}
      title="Share Threadline"
      titleId="share-threadline-title"
      triggerRef={triggerRef}
    >
      <FormField htmlFor="share-threadline-link" label="Share link">
        <FormRow>
          <Input id="share-threadline-link" value={shareUrl} readOnly onFocus={(event) => event.currentTarget.select()} />
          <SiteAction appearance="secondary" context="modal" type="button" onClick={copyLink}>Copy link</SiteAction>
        </FormRow>
      </FormField>

      <LabeledDivider />

      <form onSubmit={openEmail}>
        <FormField
          hint="Opens your email app with a ready-to-send message."
          htmlFor="share-threadline-email"
          label="Family email address"
        >
          <FormRow>
            <Input
              id="share-threadline-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="family@example.com"
              required
            />
            <SiteAction appearance="primary" context="modal" type="submit">Open email</SiteAction>
          </FormRow>
        </FormField>
      </form>

      <FormStatus>{status}</FormStatus>
    </Modal>
  );

  return (
    <>
      <SiteAction
        ref={triggerRef}
        appearance="primary"
        className={className}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={openModal}
      >
        {children}
      </SiteAction>
      {modal}
    </>
  );
}
