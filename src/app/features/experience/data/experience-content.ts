export interface ExperienceItem {
  slug: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  logoScale?: number;
  logoPosition?: string;
  logoPadding?: string;
  highlights: string[];
}

export const experiences: ExperienceItem[] = [
  {
    slug: 'associate-software-engineer-opswat',
    role: 'Associate Software Engineer',
    organization: 'OPSWAT Inc.',
    period: '03/2024 - Present',
    location: 'Hanoi, Vietnam',
    summary: 'Security and vulnerability-focused engineering with automation, knowledge graph features, and multi-platform patch workflows.',
    image: 'assets/images/OPSWAT_logo.jpg',
    imageAlt: 'OPSWAT company logo',
    logoScale: 0.76,
    logoPosition: 'center',
    logoPadding: '1.15rem',
    highlights: [
      'Crawled and analyzed CVE data to assess vulnerability impact and improve reporting quality.',
      'Built automation tools for vulnerability assessment and supported a knowledge graph feature for vulnerability management.',
      'Maintained patch management workflows and supported customers on patching and vulnerability issues.'
    ]
  },
  {
    slug: 'security-software-engineer-intern-fossil',
    role: 'Security Software Engineer Intern',
    organization: 'Fossil Group',
    period: '07/2023 - 12/2023',
    location: 'Ho Chi Minh City, Vietnam',
    summary: 'Focused on cloud vulnerability monitoring, reconnaissance tooling, and security learning in production-like environments.',
    image: 'assets/images/Fossil_Group.png',
    imageAlt: 'Fossil Group company logo',
    logoScale: 0.82,
    logoPadding: '1rem',
    highlights: [
      'Used third-party security tooling to monitor and triage cloud vulnerabilities.',
      'Built reconnaissance scripts to support threat discovery and analysis.',
      'Studied modern attack techniques and practical defensive workflows.'
    ]
  }
];

export function findExperienceBySlug(slug: string): ExperienceItem | undefined {
  return experiences.find((experience) => experience.slug === slug);
}
