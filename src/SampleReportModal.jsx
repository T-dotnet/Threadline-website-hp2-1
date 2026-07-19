'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const REPORT_PAGE_COUNT = 16;
const REPORT_DOWNLOAD_NAME = 'Threadline-Sample-Assessment-Evidence-Report.html';
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

const REPORT_PAGE_EXPLANATIONS = [
  {
    title: 'Clinical Assessment Profile',
    text: 'The cover identifies the child, clinician, package reference and generation date. It also makes clear that Threadline organises evidence but does not diagnose or recommend treatment.',
  },
  {
    title: 'Clinical overview',
    text: 'A quick summary of the main concern, settings represented and evidence coverage. It helps the clinician see what has been collected and what remains outstanding.',
  },
  {
    title: 'Review first',
    text: 'Flags information that may need attention before reading the detail, including response-quality notes, sleep indicators and evidence gaps.',
  },
  {
    title: 'Conners 4 profile',
    text: 'Summarises the standardised Conners 4 results across parent and teacher ratings. It makes elevated areas and cross-rater patterns easier to scan.',
  },
  {
    title: 'Conners 4 detail',
    text: 'Shows the detailed scales, scores and response information behind the profile. Sources remain separate so differences are visible.',
  },
  {
    title: 'Cross-source view',
    text: 'Brings parent, teacher and child observations together by theme without merging them into a single conclusion. It highlights agreement and differences across settings.',
  },
  {
    title: 'Child, family and developmental history',
    text: 'Organises developmental, family, medical and care history supplied for the assessment. Missing or unconfirmed details remain clearly marked.',
  },
  {
    title: 'Daily functioning',
    text: 'Describes how the child manages everyday tasks at home and school, including routines, organisation, learning and emotional regulation.',
  },
  {
    title: "The child's own perspective",
    text: 'Keeps the child’s own words and priorities visible alongside adult reports. It shows what feels difficult, helpful or important from their perspective.',
  },
  {
    title: 'Teacher perspective and school support',
    text: 'Summarises classroom observations, learning needs and supports already tried. The teacher remains clearly identified as the source.',
  },
  {
    title: 'Supporting records and previous care',
    text: 'Lists previous reports, school records and care already provided. Each item remains linked to its source and date.',
  },
  {
    title: 'Follow-up priorities and evidence gaps',
    text: 'Highlights follow-up priorities and incomplete evidence for the clinician to review. It does not make a diagnosis or decide next steps.',
  },
  {
    title: 'Clinician Assessment Outcome',
    text: 'Marks the start of a separate clinician-only worksheet section. These pages are blank and are not pre-populated by Threadline.',
  },
  {
    title: 'Outcome and clinical formulation',
    text: 'Provides space for the clinician to record assessment status, ADHD determination and clinical formulation after completing their own assessment.',
  },
  {
    title: 'Additional findings and next steps',
    text: 'Provides space to record other findings, safety follow-up and the management plan, including responsibilities and timing.',
  },
  {
    title: 'Clinician record',
    text: 'Records clinician details, completion and optional feedback on the evidence package. Any return of information remains subject to consent and governance.',
  },
];

function ArrowIcon({ direction }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d={direction === 'previous' ? 'm15 18-6-6 6-6' : 'm9 6 6 6-6 6'} />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="18" cy="5" r="2.5" />
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="19" r="2.5" />
      <path d="m8.2 10.8 7.6-4.5M8.2 13.2l7.6 4.5" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 20h14" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="m7 14 5-5 5 5" />
    </svg>
  );
}

export default function SampleReportButton({ className = '', children = 'View a sample report' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const [isReportReady, setIsReportReady] = useState(false);
  const [shareStatus, setShareStatus] = useState('');
  const [isExplanationOpen, setIsExplanationOpen] = useState(false);
  const triggerRef = useRef(null);
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const stageRef = useRef(null);
  const iframeRef = useRef(null);

  const closeModal = useCallback(() => setIsOpen(false), []);
  const showPreviousPage = useCallback(() => {
    setPageIndex((current) => Math.max(0, current - 1));
  }, []);
  const showNextPage = useCallback(() => {
    setPageIndex((current) => Math.min(REPORT_PAGE_COUNT - 1, current + 1));
  }, []);

  const shareReport = useCallback(async () => {
    const reportUrl = new URL('/sample-report.html', window.location.origin).href;
    const shareData = {
      title: 'Threadline Sample Assessment Evidence Report',
      text: 'View a sample Threadline Assessment Evidence Report.',
      url: reportUrl,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setShareStatus('Shared');
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(reportUrl);
        setShareStatus('Link copied');
      } else {
        setShareStatus('Sharing unavailable');
      }
    } catch (error) {
      if (error?.name !== 'AbortError') setShareStatus('Unable to share');
    }
  }, []);

  const syncReportPage = useCallback(() => {
    const iframe = iframeRef.current;
    const stage = stageRef.current;
    const reportDocument = iframe?.contentDocument;
    const pages = reportDocument ? Array.from(reportDocument.querySelectorAll('.page')) : [];

    if (!iframe || !stage || pages.length !== REPORT_PAGE_COUNT) return false;

    let viewerStyles = reportDocument.getElementById('threadline-report-viewer-styles');
    if (!viewerStyles) {
      viewerStyles = reportDocument.createElement('style');
      viewerStyles.id = 'threadline-report-viewer-styles';
      viewerStyles.textContent = `
        html, body {
          width: 100% !important;
          height: 100% !important;
          min-height: 0 !important;
          margin: 0 !important;
          overflow: hidden !important;
          background: #fff !important;
        }
        body { position: relative !important; display: block !important; }
        .report {
          position: relative !important;
          display: block !important;
          width: 100% !important;
          height: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        .page {
          width: 210mm !important;
          height: 297mm !important;
          min-height: 297mm !important;
          max-height: 297mm !important;
          margin: 0 !important;
          overflow: visible !important;
          box-shadow: none !important;
        }
      `;
      reportDocument.head.appendChild(viewerStyles);
    }

    pages.forEach((page) => {
      if (!page.dataset.viewerDisplay) {
        const pageStyles = getComputedStyle(page);
        const pageBounds = page.getBoundingClientRect();
        page.dataset.viewerDisplay = pageStyles.display === 'none' ? 'block' : pageStyles.display;
        page.dataset.viewerWidth = String(pageBounds.width);
        page.dataset.viewerHeight = String(Math.max(pageBounds.height, page.scrollHeight));
      }
      page.style.setProperty('display', 'none', 'important');
      page.style.setProperty('position', 'absolute', 'important');
      page.style.setProperty('inset', 'auto', 'important');
      page.style.setProperty('transform', 'none', 'important');
      page.style.setProperty('transform-origin', 'top left', 'important');
    });

    const activePage = pages[pageIndex];
    activePage.style.setProperty('display', activePage.dataset.viewerDisplay, 'important');
    activePage.style.setProperty('top', '0', 'important');

    const pageWidth = Number(pages[0].dataset.viewerWidth);
    const a4PageHeight = pageWidth * (297 / 210);
    const activePageHeight = Number(activePage.dataset.viewerHeight);
    const contentScale = Math.min(1, a4PageHeight / activePageHeight);
    const contentLeft = (pageWidth - pageWidth * contentScale) / 2;
    const availableWidth = Math.max(0, stage.clientWidth - 24);
    const availableHeight = Math.max(0, stage.clientHeight - 24);
    const scale = Math.min(1, availableWidth / pageWidth, availableHeight / a4PageHeight);
    const left = Math.max(12, (stage.clientWidth - pageWidth * scale) / 2);
    const top = Math.max(12, (stage.clientHeight - a4PageHeight * scale) / 2);

    activePage.style.setProperty('left', `${contentLeft}px`, 'important');
    activePage.style.setProperty('transform', `scale(${contentScale})`, 'important');

    iframe.style.width = `${pageWidth}px`;
    iframe.style.height = `${a4PageHeight}px`;
    iframe.style.left = `${left}px`;
    iframe.style.top = `${top}px`;
    iframe.style.transform = `scale(${scale})`;

    setIsReportReady(true);
    return true;
  }, [pageIndex]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const modal = modalRef.current;
    const portalRoot = modal?.closest('.sample-report-backdrop');
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
        closeModal();
        return;
      }

      if (event.key === 'Tab') {
        const focusableElements = getFocusableElements(modal);
        const firstElement = focusableElements[0];
        const lastElement = focusableElements.at(-1);

        if (!firstElement || !lastElement) {
          event.preventDefault();
          modal?.focus();
          return;
        }

        if (!modal?.contains(document.activeElement)) {
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

      if (event.key === 'ArrowLeft') showPreviousPage();
      if (event.key === 'ArrowRight') showNextPage();
    };

    const handleFocusIn = (event) => {
      if (modal && !modal.contains(event.target)) {
        getFocusableElements(modal)[0]?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', handleFocusIn);
    window.requestAnimationFrame(() => closeButtonRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', handleFocusIn);
      previousInertStates.forEach(([element, wasInert]) => {
        element.inert = wasInert;
      });
      triggerRef.current?.focus();
    };
  }, [closeModal, isOpen, showNextPage, showPreviousPage]);

  useEffect(() => {
    if (!isOpen) return undefined;

    setIsReportReady(false);
    const interval = window.setInterval(() => {
      if (syncReportPage()) window.clearInterval(interval);
    }, 100);
    const resizeObserver = new ResizeObserver(syncReportPage);
    if (stageRef.current) resizeObserver.observe(stageRef.current);

    syncReportPage();

    return () => {
      window.clearInterval(interval);
      resizeObserver.disconnect();
    };
  }, [isOpen, syncReportPage]);

  const openModal = () => {
    setPageIndex(0);
    setIsReportReady(false);
    setShareStatus('');
    setIsExplanationOpen(false);
    setIsOpen(true);
  };

  const currentExplanation = REPORT_PAGE_EXPLANATIONS[pageIndex];

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={`${className} sample-report-trigger`}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={openModal}
      >
        {children}
      </button>
      {isOpen && createPortal(
        <div className="sample-report-backdrop" onMouseDown={(event) => {
          if (event.target === event.currentTarget) closeModal();
        }}>
          <section
            ref={modalRef}
            className="sample-report-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="sample-report-title"
            tabIndex={-1}
          >
            <header className="sample-report-modal-header">
              <div>
                <h2 id="sample-report-title">Sample Assessment Evidence Report</h2>
                <p aria-live="polite">
                  Page {pageIndex + 1} of {REPORT_PAGE_COUNT}
                  {shareStatus ? <span> · {shareStatus}</span> : null}
                </p>
              </div>
              <div className="sample-report-header-actions">
                <button className="sample-report-action" type="button" onClick={shareReport} aria-label="Share sample report">
                  <ShareIcon />
                  <span className="sample-report-action-label">Share</span>
                </button>
                <a
                  className="sample-report-action"
                  href="/sample-report.html"
                  download={REPORT_DOWNLOAD_NAME}
                  aria-label="Download sample report"
                >
                  <DownloadIcon />
                  <span className="sample-report-action-label">Download</span>
                </a>
                <button ref={closeButtonRef} className="sample-report-close" type="button" onClick={closeModal} aria-label="Close sample report">
                  <CloseIcon />
                </button>
              </div>
            </header>

            <div className="sample-report-viewer">
              <button
                className="sample-report-arrow sample-report-arrow--previous"
                type="button"
                onClick={showPreviousPage}
                disabled={pageIndex === 0}
                aria-label="Previous report page"
              >
                <ArrowIcon direction="previous" />
              </button>

              <div className="sample-report-stage" ref={stageRef}>
                {!isReportReady && <p className="sample-report-loading">Loading report…</p>}
                <iframe
                  ref={iframeRef}
                  className={isReportReady ? 'is-ready' : ''}
                  src="/sample-report.html"
                  title={`Sample Assessment Evidence Report, page ${pageIndex + 1} of ${REPORT_PAGE_COUNT}`}
                  onLoad={syncReportPage}
                />
              </div>

              <button
                className="sample-report-arrow sample-report-arrow--next"
                type="button"
                onClick={showNextPage}
                disabled={pageIndex === REPORT_PAGE_COUNT - 1}
                aria-label="Next report page"
              >
                <ArrowIcon direction="next" />
              </button>
            </div>

            <aside className={`sample-report-explanation${isExplanationOpen ? ' is-open' : ''}`}>
              <button
                className="sample-report-explanation-toggle"
                type="button"
                aria-expanded={isExplanationOpen}
                aria-controls="sample-report-explanation-content"
                onClick={() => setIsExplanationOpen((current) => !current)}
              >
                <span className="sample-report-explanation-label">
                  <InfoIcon />
                  <span>About this page</span>
                </span>
                <ChevronIcon />
              </button>
              <div
                id="sample-report-explanation-content"
                className="sample-report-explanation-content"
                hidden={!isExplanationOpen}
              >
                <h3>{currentExplanation.title}</h3>
                <p>{currentExplanation.text}</p>
              </div>
            </aside>
          </section>
        </div>,
        document.body,
      )}
    </>
  );
}
