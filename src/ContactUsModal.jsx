'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  Button,
  FormField,
  IconButton,
  Input,
  Select,
  Textarea,
} from './design-system/components.jsx';
import { Heading, Text } from './design-system/primitives.jsx';
import { SiteAction } from './components/site-actions.jsx';
import { useAccessibleModal } from './hooks/useAccessibleModal.js';
import styles from './ContactUsModal.module.css';

export default function ContactUsButton({
  className = '',
  children = 'Contact us',
  onSubmit,
  appearance = 'link',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');
  const triggerRef = useRef(null);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const confirmationHeadingRef = useRef(null);

  const closeModal = useCallback(() => setIsOpen(false), []);

  useAccessibleModal({
    dialogRef,
    initialFocusRef: closeButtonRef,
    isOpen,
    onClose: closeModal,
    triggerRef,
  });

  const openModal = () => {
    const parentMenu = triggerRef.current?.closest('details');
    setIsSubmitted(false);
    setSubmissionStatus('');
    setIsOpen(true);
    window.requestAnimationFrame(() => parentMenu?.removeAttribute('open'));
  };

  useEffect(() => {
    if (!isSubmitted) return undefined;
    const focusFrame = window.requestAnimationFrame(() => confirmationHeadingRef.current?.focus());
    return () => window.cancelAnimationFrame(focusFrame);
  }, [isSubmitted]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!onSubmit) {
      setIsSubmitted(true);
      return;
    }

    setSubmissionStatus('Sending…');

    try {
      await onSubmit(Object.fromEntries(new FormData(event.currentTarget)));
      event.currentTarget.reset();
      setIsSubmitted(true);
    } catch {
      setSubmissionStatus('We could not send your message. Please try again.');
    }
  };

  const modal = isOpen ? (
    <div className={styles.backdrop} data-modal-backdrop>
      <section
        ref={dialogRef}
        className={`${styles.dialog}${isSubmitted ? ` ${styles.dialogConfirmation}` : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        tabIndex={-1}
      >
        {isSubmitted ? (
          <>
            <div className={styles.confirmationContent}>
              <div className={styles.confirmationCopy}>
                <Heading ref={confirmationHeadingRef} as="h2" size="display" className={styles.title} id="contact-modal-title" tabIndex={-1}>Thanks,<br />we&apos;ve received your<br />message.</Heading>
              <Text size="lg" tone="muted" className={styles.bodyCopy}>We will reply as soon as we can.</Text>
              </div>
              <div className={styles.confirmationAction}>
                <Button className={styles.actionButton} onClick={closeModal}>Close</Button>
              </div>
            </div>
            <div className={styles.confirmationArt} aria-hidden="true">
              <Image
                src="/contact-confirmation-watercolour.png"
                fill
                alt=""
                sizes="(max-width: 900px) calc(100vw - 48px), 700px"
              />
            </div>
          </>
        ) : (
          <>
            <IconButton
              ref={closeButtonRef}
              className={styles.closeButton}
              label="Close contact form"
              onClick={closeModal}
            >
              <Image src="/contact-close.svg" width={20} height={20} alt="" />
            </IconButton>

            <div className={styles.intro}>
              <Heading as="h2" size="display" className={styles.title} id="contact-modal-title">We&apos;re here to listen to your story.</Heading>
              <Text size="lg" tone="muted" className={styles.bodyCopy}>Whether you have questions about the assessment package or just want to learn more about our process, our team is here to support you.</Text>
            </div>

            <div className={styles.formColumn}>
              <form className={styles.form} onSubmit={handleSubmit}>
                <FormField htmlFor="contact-name" label="Full Name">
                  <Input id="contact-name" className={styles.formControl} name="name" type="text" autoComplete="name" placeholder="Jane Cooper" required />
                </FormField>

                <FormField htmlFor="contact-email" label="Email Address">
                  <Input id="contact-email" className={styles.formControl} name="email" type="email" autoComplete="email" placeholder="jane@example.com" required />
                </FormField>

                <FormField htmlFor="contact-topic" label="I am contacting you about">
                  <Select id="contact-topic" className={`${styles.formControl} ${styles.selectControl}`} name="topic" defaultValue="" required>
                    <option value="" disabled>Select a topic</option>
                    <option value="getting-started">Getting started with Threadline</option>
                    <option value="assessment-preparation">Assessment preparation</option>
                    <option value="account-or-purchase">My account or an existing purchase</option>
                    <option value="technical-support">Technical support</option>
                    <option value="clinician-enquiry">Clinician enquiry</option>
                    <option value="partnerships">Partnerships</option>
                    <option value="media">Media</option>
                    <option value="something-else">Something else</option>
                  </Select>
                </FormField>

                <FormField htmlFor="contact-message" label="How can we help?">
                  <Textarea id="contact-message" className={`${styles.formControl} ${styles.messageControl}`} name="message" placeholder="Tell us a bit about your child's journey..." required />
                </FormField>

                <div className={styles.submitRow}>
                  <Button className={styles.actionButton} type="submit">Send Message</Button>
                </div>
                {submissionStatus ? (
                  <Text size="sm" tone="muted" className={styles.status} aria-live="polite">{submissionStatus}</Text>
                ) : null}
              </form>
            </div>
          </>
        )}
      </section>
    </div>
  ) : null;

  return (
    <>
      <SiteAction
        ref={triggerRef}
        appearance={appearance}
        className={`${appearance === 'link' ? styles.trigger : ''} ${className}`.trim()}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={openModal}
      >
        {children}
      </SiteAction>
      {isOpen && typeof document !== 'undefined' ? createPortal(modal, document.body) : null}
    </>
  );
}
