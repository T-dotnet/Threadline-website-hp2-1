'use client';

import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useAccessibleModal } from '../hooks/useAccessibleModal.js';
import { Button } from './components.jsx';
import { CloseIcon } from './icons.jsx';
import { Heading, Stack, Text } from './primitives.jsx';

export function Modal({
  children,
  closeLabel = 'Close dialog',
  description,
  descriptionId,
  isOpen,
  onClose,
  title,
  titleId,
  triggerRef,
}) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useAccessibleModal({
    dialogRef,
    initialFocusRef: closeButtonRef,
    isOpen,
    onClose,
    triggerRef,
  });

  if (!isOpen || typeof document === 'undefined') return null;

  return createPortal(
    <div
      className="ds-modal-backdrop"
      data-modal-backdrop
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        ref={dialogRef}
        className="ds-modal ds-modal-surface"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        tabIndex={-1}
      >
        <Button
          ref={closeButtonRef}
          className="ds-modal__close"
          variant="secondary"
          type="button"
          onClick={onClose}
          aria-label={closeLabel}
        >
          <CloseIcon />
        </Button>
        <Stack className="ds-modal__layout" gap={0}>
          <Stack className="ds-modal__intro" gap={2}>
            <Heading as="h2" size="display" id={titleId}>{title}</Heading>
            <Text id={descriptionId} size="lg" tone="muted">{description}</Text>
          </Stack>
          <Stack className="ds-modal__body" gap={6}>{children}</Stack>
        </Stack>
      </section>
    </div>,
    document.body,
  );
}
