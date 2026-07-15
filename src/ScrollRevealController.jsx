'use client';

import { useEffect } from 'react';

const REVEAL_SELECTOR = '[data-scroll-reveal]';

export default function ScrollRevealController() {
  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(document.querySelectorAll(REVEAL_SELECTOR));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || targets.length === 0) return undefined;

    const initialViewportLimit = window.innerHeight * 0.92;

    targets.forEach((target) => {
      const bounds = target.getBoundingClientRect();
      if (bounds.top < initialViewportLimit && bounds.bottom > 0) {
        target.classList.add('is-visible');
      }
    });

    root.classList.add('scroll-reveal-ready');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px',
    });

    targets.forEach((target) => {
      if (!target.classList.contains('is-visible')) observer.observe(target);
    });

    return () => {
      observer.disconnect();
      root.classList.remove('scroll-reveal-ready');
    };
  }, []);

  return null;
}
