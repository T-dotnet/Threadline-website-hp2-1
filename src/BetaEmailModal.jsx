'use client';

import { useCallback, useRef, useState } from 'react';
import { Button, FormField, FormStatus, Input } from './design-system/components.jsx';
import { Modal } from './design-system/modal.jsx';
import { SiteCta } from './components/site-chrome.jsx';
import { Cluster, Stack } from './design-system/primitives.jsx';

export default function BetaEmailModal({ children, intent = 'updates' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const triggerRef = useRef(null);
  const isRegistration = intent === 'registration';
  const title = isRegistration ? 'Register your interest' : 'Stay informed';
  const description = isRegistration
    ? "We're inviting a small number of Australian families to participate in the Threadline beta. Leave your email and we'll let you know about the next step."
    : 'Receive evidence-based guides, new resources and occasional updates about Threadline.';

  const closeModal = useCallback(() => setIsOpen(false), []);

  function openModal() {
    setIsSubmitted(false);
    setIsOpen(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <>
      <SiteCta
        ref={triggerRef}
        href={null}
        label={children}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        onClick={openModal}
      />
      <Modal
        description={description}
        descriptionId="beta-email-description"
        descriptionSize="body"
        bodyTone="surface"
        closeVariant="standard"
        isOpen={isOpen}
        onClose={closeModal}
        title={title}
        titleId="beta-email-title"
        triggerRef={triggerRef}
      >
        {isSubmitted ? (
          <Stack gap={6}>
            <FormStatus>Thanks — we&apos;ll be in touch.</FormStatus>
            <Button onClick={closeModal}>Close</Button>
          </Stack>
        ) : (
          <Stack as="form" gap={6} onSubmit={handleSubmit}>
            <FormField htmlFor="beta-email" label="Email address">
              <Input id="beta-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
            </FormField>
            <Cluster>
              <SiteCta
                context="modal"
                href={null}
                label={isRegistration ? 'Register your interest' : 'Keep me informed'}
                type="submit"
              />
            </Cluster>
          </Stack>
        )}
      </Modal>
    </>
  );
}
