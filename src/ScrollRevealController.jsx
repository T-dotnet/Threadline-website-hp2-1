'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const REVEAL_SELECTOR = [
  '.home-v2-guideline',
  '.home-v2-intro',
  '.home-v2-problem',
  '.home-v2-report',
  '.home-v2-process',
  '.home-v2-benefits',
  '.home-v2-pricing',
  '.home-v2-faq',
  '.home-v2-important',
  '.how-v2-evidence',
  '.how-v2-disclaimer',
  '.how-v2-final',
  '.pricing-page-offer',
  '.pricing-page-notice',
  '.pricing-page-faq',
  '.pricing-page-affordability',
].join(', ');

export default function ScrollRevealController() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(document.querySelectorAll(REVEAL_SELECTOR));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion || targets.length === 0) return undefined;

    const initialViewportLimit = window.innerHeight * 0.92;

    targets.forEach((target) => {
      target.classList.add('scroll-reveal-target');
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
      targets.forEach((target) => target.classList.remove('scroll-reveal-target', 'is-visible'));
      root.classList.remove('scroll-reveal-ready');
    };
  }, [pathname]);

  return null;
}
