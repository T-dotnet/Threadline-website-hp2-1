const PUBLICATION_NOTE = 'The final approved document content will be published here from Threadline’s Policy & Document Content Pack.';

export const TOP_LEVEL_DOCUMENTS = {
  privacy: {
    title: 'Privacy Policy',
    description: 'How Threadline collects, uses, stores, shares and protects personal information.',
    owner: 'Privacy Officer',
    sections: [{ heading: 'About this policy', paragraphs: [PUBLICATION_NOTE] }],
  },
  terms: {
    title: 'Terms of Service',
    description: 'The terms that apply when families use Threadline.',
    owner: 'Managing Director',
    sections: [{ heading: 'About these terms', paragraphs: [PUBLICATION_NOTE] }],
  },
  'clinical-information': {
    title: 'Clinical Information and Product Boundaries',
    description: 'What Threadline is for, what it does not do, and its regulatory position.',
    owner: 'Managing Director',
    sections: [
      {
        heading: 'Supporting assessment, not replacing it',
        paragraphs: [
          'Threadline helps families collect and organise information, structures information for clinical review, supports sharing with healthcare professionals and identifies where information came from.',
          'Threadline does not diagnose, screen for or predict ADHD, recommend treatment, replace clinical judgement, guarantee that the available information is sufficient for diagnosis, or provide emergency or crisis services.',
          'A qualified healthcare professional remains responsible for interpreting the information, determining whether anything further is required and making all diagnostic and treatment decisions.',
        ],
      },
    ],
  },
  refunds: {
    title: 'Refund Policy',
    description: 'When a refund may be available and how to request one.',
    owner: 'Customer Support',
    sections: [{ heading: 'About this policy', paragraphs: [PUBLICATION_NOTE] }],
  },
  cookies: {
    title: 'Cookie Policy',
    description: 'How cookies and similar technologies are used on the website.',
    owner: 'Privacy Officer',
    sections: [{ heading: 'About this policy', paragraphs: [PUBLICATION_NOTE] }],
  },
  complaints: {
    title: 'Complaints & Feedback Policy',
    description: 'How families and clinicians can provide feedback or raise a concern.',
    owner: 'Customer Support',
    sections: [
      {
        heading: 'Contact us',
        paragraphs: [
          'Contact support@threadline.com.au using the subject line “Privacy complaint” or “General support”, as appropriate.',
          'We aim to acknowledge privacy complaints within 5 business days and to respond within 30 days.',
        ],
      },
    ],
  },
  'urgent-help': {
    title: 'Urgent Help',
    description: 'Threadline is not an emergency or crisis service and cannot provide urgent clinical support.',
    owner: 'Customer Support',
    sections: [
      {
        heading: 'If you need urgent help',
        paragraphs: [
          'If you have concerns about your child’s health or safety, contact your child’s clinician or seek appropriate medical care.',
          'Do not wait for a response from Threadline when your child needs immediate help.',
        ],
      },
      {
        heading: 'General support',
        paragraphs: [
          'For non-urgent questions about Threadline, contact support@threadline.com.au using the subject line “General support”.',
          'Please avoid including personal or health information in your first message unless a Threadline team member asks you to provide it through an appropriate channel.',
        ],
      },
    ],
  },
};

export const TRUST_DOCUMENTS = {
  'privacy-impact-assessment': {
    title: 'Privacy Impact Assessment - Public Summary',
    description: 'A plain-English summary of the privacy risks assessed and how they are managed.',
    owner: 'Privacy Officer',
    version: '1.0',
    effectiveDate: 'On publication',
    lastReviewed: 'On publication',
    nextReview: '12 months after publication',
    introduction: 'Threadline conducted a Privacy Impact Assessment (PIA) to understand how personal and health information moves through its service, identify privacy risks and determine how those risks are managed. This is a public summary. The full internal assessment, which contains detailed architecture and risk information, is kept confidential.',
    sections: [
      {
        heading: '1. Scope',
        paragraphs: [
          'The assessment considered how personal and health information, including information about children, is collected, used, stored, shared, retained and deleted across the Threadline service, from account creation through to sharing an Assessment Package with a healthcare professional.',
        ],
      },
      {
        heading: '2. Information considered',
        paragraphs: ['Account and contact information; health and sensitive information provided to prepare an Assessment Package; information contributed by invited third parties such as teachers; payment and transaction information; and technical, security and usage information.'],
      },
      {
        heading: '3. Information flows',
        paragraphs: ['Information is collected from families and invited contributors, organised into an Assessment Package, stored using approved service providers, shared with a healthcare professional at the family’s direction, and retained or deleted according to defined periods.'],
      },
      {
        heading: '4. Methodology',
        paragraphs: ['The assessment mapped these information flows against the Australian Privacy Principles, identified privacy risks, and determined the controls needed to manage them.'],
      },
      {
        heading: '5. Principal privacy risks identified',
        items: [
          'Handling of children’s and other sensitive information',
          'Consent and authority to provide a child’s information',
          'Sharing with healthcare professionals and with service providers',
          'Overseas handling by some service providers',
          'Retention and secure deletion',
          'Unauthorised access or a data breach',
        ],
      },
      {
        heading: '6. Controls in place',
        paragraphs: ['In response to these risks, Threadline applies consent processes, access controls, encryption in transit and at rest, assessment of service providers, defined retention and deletion rules, security monitoring, and incident response and breach notification procedures. Children’s information is handled through an adult account with child-appropriate practices.'],
      },
      {
        heading: '7. Residual risks',
        paragraphs: ['Some service providers may process information overseas, and the service relies on families and contributors to provide accurate information. These risks are managed through provider assessment, contractual protections and clear guidance to families, but cannot be fully eliminated.'],
      },
      {
        heading: '8. Review',
        paragraphs: ['The responsible owner is the Threadline privacy function. This assessment is reviewed 12 months after publication, or sooner if the service or its information handling materially changes.'],
      },
    ],
  },
  'service-providers': {
    title: 'Service Provider Register',
    description: 'The technology providers that help us deliver and operate Threadline.',
    owner: 'Privacy Officer',
    sections: [
      {
        heading: 'About this register',
        paragraphs: [
          'This register explains which providers may process personal information, what service each provider performs, what categories of information may be involved, and where information may be processed or stored.',
          PUBLICATION_NOTE,
        ],
      },
    ],
  },
  'security-reporting': {
    title: 'Responsible Disclosure Policy',
    description: 'How to report a suspected security vulnerability or concern.',
    owner: 'Security Lead',
    sections: [
      {
        heading: 'Report a security concern',
        paragraphs: [
          'Contact support@threadline.com.au using the subject line “Security report”.',
          'Please do not include personal or health information in an initial security report.',
        ],
      },
    ],
  },
};

export function getTopLevelDocument(slug) {
  return TOP_LEVEL_DOCUMENTS[slug];
}

export function getTrustDocument(slug) {
  return TRUST_DOCUMENTS[slug];
}
