'use client';

import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { useAccessibleModal } from '../hooks/useAccessibleModal.js';
import { IconButton } from './components.jsx';
import { CloseIcon } from './icons.jsx';
import { Heading, Stack, Text } from './primitives.jsx';

export function ModalFrame({
  backdropClassName = 'ds-modal-backdrop',
  children,
  className = 'ds-modal ds-modal-surface',
  closeOnBackdrop = true,
  descriptionId,
  dialogRef: providedDialogRef,
  initialFocusRef,
  isOpen,
  onClose,
  onKeyDown,
  titleId,
  triggerRef,
}) {
  const internalDialogRef = useRef(null);
  const dialogRef = providedDialogRef || internalDialogRef;

  useAccessibleModal({
    dialogRef,
    initialFocusRef,
    isOpen,
    onClose,
    onKeyDown,
    triggerRef,
  });

  if (!isOpen || typeof document === 'undefined') return null;

  return createPortal(
    <div
      className={backdropClassName}
      data-modal-backdrop
      onMouseDown={(event) => {
        if (closeOnBackdrop && event.target === event.currentTarget) onClose();
      }}
    >
      <section
        ref={dialogRef}
        className={className}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        tabIndex={-1}
      >
        {children}
      </section>
    </div>,
    document.body,
  );
}

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

  return (
    <ModalFrame
      descriptionId={descriptionId}
      dialogRef={dialogRef}
      initialFocusRef={closeButtonRef}
      isOpen={isOpen}
      onClose={onClose}
      titleId={titleId}
      triggerRef={triggerRef}
    >
      <IconButton
        ref={closeButtonRef}
        className="ds-modal__close"
        label={closeLabel}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>
      <Stack className="ds-modal__layout" gap={0}>
        <Stack className="ds-modal__intro" gap={2}>
          <Heading as="h2" size="display" id={titleId}>{title}</Heading>
          <Text id={descriptionId} size="lg" tone="muted">{description}</Text>
        </Stack>
        <Stack className="ds-modal__body" gap={6}>{children}</Stack>
      </Stack>
    </ModalFrame>
  );
}
