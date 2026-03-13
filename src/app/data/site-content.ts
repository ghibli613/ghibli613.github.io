export interface ProjectItem {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  tags: string[];
  publishedOn: string;
  details: string[];
  repoUrl?: string;
}

export interface PublicationItem {
  slug: string;
  title: string;
  venue: string;
  year: number;
  publishedOn: string;
  note: string;
  image?: string;
  imageAlt?: string;
  details: string[];
  paperUrl?: string;
  paperSource?: 'arXiv' | 'IEEE' | 'Publisher';
  repoUrl?: string;
}

export interface ExperienceItem {
  slug: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  summary: string;
  image?: string;
  imageAlt?: string;
  highlights: string[];
}

export const featuredProjects: ProjectItem[] = [
  {
    slug: 'seam-carving-cuda',
    title: 'Seam Carving with CUDA',
    subtitle: 'GPU-accelerated content-aware image resizing.',
    summary: 'Implemented seam carving on CUDA to speed up content-aware image resizing compared to CPU-based methods.',
    image: 'assets/images/project-dashboard.svg',
    imageAlt: 'GPU image processing project illustration',
    tags: ['CUDA', 'Computer Vision', 'Image Processing'],
    publishedOn: '2021',
    details: [
      'Implemented seam identification and removal with CUDA kernels for higher throughput on large images.',
      'Benchmarked performance against CPU baselines and observed notable acceleration for resizing tasks.'
    ],
    repoUrl: 'https://github.com/ghibli613/Seamcarving'
  },
  {
    slug: 'rag-ai-chatbot-economy-news',
    title: 'RAG AI Chatbot for Economy News',
    subtitle: 'Retrieval-augmented assistant for realtime economic updates.',
    summary: 'Built a chatbot that integrates retrieval with language models to summarize and answer questions about economy news.',
    image: 'assets/images/project-case-study.svg',
    imageAlt: 'RAG and data retrieval system illustration',
    tags: ['RAG', 'LLM', 'Information Retrieval'],
    publishedOn: '2025',
    details: [
      'Integrated retrieval across multiple sources, including news APIs and structured data feeds.',
      'Designed the answer pipeline to improve factual grounding for market and policy updates.'
    ],
    repoUrl: 'https://github.com/Halsey77/LLM'
  },
  {
    slug: 'image-processing-ml-entries',
    title: 'Image Processing and ML Entry Projects',
    subtitle: 'Foundational experiments across vision and generative modeling.',
    summary: 'Completed multiple foundational projects including image processing pipelines, GAN digit generation, and Vision Transformer exploration.',
    image: 'assets/images/project-cms.svg',
    imageAlt: 'Machine learning experimentation project illustration',
    tags: ['GAN', 'ViT', 'Computer Vision'],
    publishedOn: '2022',
    details: [
      'Implemented core image processing operations including filtering, edge detection, and feature extraction.',
      'Built MNIST digit generation experiments with GANs and tested ViT models in Colab-based workflows.',
      'Notebook links from CV were preserved for reproducibility and sharing.'
    ]
  }
];

export const publications: PublicationItem[] = [
  {
    slug: 'scene-graph-generation-image-understanding',
    title: 'Scene Graph Generation for Image Understanding',
    venue: 'arXiv preprint track',
    year: 2025,
    publishedOn: '2025',
    note: 'Publication-focused writeup of scene graph generation methods and experiments for image understanding.',
    image: 'assets/images/publication-visual-narratives.svg',
    imageAlt: 'Scene graph generation research illustration',
    details: [
      'Formalized the task setup, evaluation criteria, and model improvements for scene graph generation.',
      'Documented compatibility updates and reproducibility notes for current deep learning stacks.',
      'Prepared publication-oriented narrative with methodology, experiments, and limitations.'
    ],
    paperUrl: 'https://arxiv.org/search/?query=scene+graph+generation+image+understanding&searchtype=all',
    paperSource: 'arXiv',
    repoUrl: 'https://github.com/ghibli613/SceneGraphBenchmark'
  },
  {
    slug: 'graph-generation-anomalous-detection',
    title: 'Graph Generation for Anomalous Detection',
    venue: 'IEEE-style manuscript track',
    year: 2025,
    publishedOn: '2025',
    note: 'Publication-oriented study of anomalous behavior detection in video using generated scene graphs.',
    image: 'assets/images/publication-data-storytelling.svg',
    imageAlt: 'Anomalous behavior graph research illustration',
    details: [
      'Used a graph-generation backbone to model and detect anomalous behavior from scene graphs.',
      'Reported current limitations and outlined improvement directions including transfer learning and tuning.',
      'Structured findings toward a paper submission format with clear future work statements.'
    ],
    paperUrl: 'https://ieeexplore.ieee.org/search/searchresult.jsp?queryText=graph%20generation%20anomalous%20detection',
    paperSource: 'IEEE',
    repoUrl: 'https://github.com/Halsey77/usggen'
  }
];

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
    highlights: [
      'Used third-party security tooling to monitor and triage cloud vulnerabilities.',
      'Built reconnaissance scripts to support threat discovery and analysis.',
      'Studied modern attack techniques and practical defensive workflows.'
    ]
  }
];

export function findProjectBySlug(slug: string): ProjectItem | undefined {
  return featuredProjects.find((project) => project.slug === slug);
}

export function findPublicationBySlug(slug: string): PublicationItem | undefined {
  return publications.find((publication) => publication.slug === slug);
}

export function findExperienceBySlug(slug: string): ExperienceItem | undefined {
  return experiences.find((experience) => experience.slug === slug);
}
