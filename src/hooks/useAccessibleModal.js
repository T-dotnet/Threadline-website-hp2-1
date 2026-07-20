'use client';

import { useEffect } from 'react';

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'iframe',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

function getFocusableElements(container) {
  if (!container) return [];

  return Array.from(container.querySelectorAll(FOCUSABLE_SELECTOR)).filter((element) => (
    !element.closest('[hidden]') && element.getClientRects().length > 0
  ));
}

export function useAccessibleModal({
  dialogRef,
  initialFocusRef,
  isOpen,
  onClose,
  onKeyDown,
  triggerRef,
}) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const dialog = dialogRef.current;
    const portalRoot = dialog?.closest('[data-modal-backdrop]');
    const backgroundElements = portalRoot
      ? Array.from(document.body.children).filter((element) => element !== portalRoot)
      : [];
    const previousInertStates = backgroundElements.map((element) => [element, element.inert]);
    const previousOverflow = document.body.style.overflow;

    backgroundElements.forEach((element) => {
      element.inert = true;
    });
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === 'Tab') {
        const focusableElements = getFocusableElements(dialog);
        const firstElement = focusableElements[0];
        const lastElement = focusableElements.at(-1);

        if (!firstElement || !lastElement) {
          event.preventDefault();
          dialog?.focus();
          return;
        }

        if (!dialog?.contains(document.activeElement)) {
          event.preventDefault();
          firstElement.focus();
          return;
        }

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
          return;
        }

        if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
          return;
        }
      }

      onKeyDown?.(event);
    };

    const handleFocusIn = (event) => {
      if (dialog && !dialog.contains(event.target)) {
        getFocusableElements(dialog)[0]?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocusIn);
    const focusFrame = window.requestAnimationFrame(() => {
      const focusTarget = initialFocusRef?.current || getFocusableElements(dialog)[0] || dialog;
      focusTarget?.focus();
    });

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusIn);
      previousInertStates.forEach(([element, wasInert]) => {
        element.inert = wasInert;
      });
      triggerRef.current?.focus();
    };
  }, [dialogRef, initialFocusRef, isOpen, onClose, onKeyDown, triggerRef]);
}
