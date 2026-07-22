export const DEFAULT_EXPLORE_LINKS = [
  ['Overview', '/'],
  ['How It Works', '/how-it-works'],
  ['Pricing', '/pricing'],
  ['For Clinician', '/clinicians'],
  ['Resources', '/resources'],
  ['About us', '/about'],
];

export const DEFAULT_FAQ_ITEMS = [
  ['Is Threadline an ADHD assessment?', 'No. Threadline prepares assessment evidence for your child’s clinician.'],
  ['What will my clinician receive?', 'A structured Assessment Evidence Report that keeps every source visible and organised.'],
  ['How long does preparation take?', 'You can begin in minutes and complete each part at your own pace.'],
  ['Will Threadline prevent additional appointments?', 'Threadline supports preparation, while your clinician determines the appointments needed for assessment.'],
  ['Who controls my child’s information?', 'You do, as part of your child’s Thread.'],
];

export const PRICING_INCLUDED_ITEMS = [
  'Guided parent information collection',
  'Teacher invitation and responses',
  'Child or young-person perspective',
  'Collection of existing reports and evidence',
  'Structured Assessment Evidence Report',
  'Sharing with your child’s clinician',
  'Support during preparation',
];

export function exploreLinksWithContact(contactHref) {
  return DEFAULT_EXPLORE_LINKS.map(([label, href]) => (
    label === 'Contact us' ? [label, contactHref] : [label, href]
  ));
}
