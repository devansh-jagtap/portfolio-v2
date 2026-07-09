import React from 'react';
import { Project, Experience, Social, SkillCategory, BlogPost, PlaygroundItem } from './types';

export const EMAIL = "devanshjagtap2@gmail.com";
export const PHONE = "+91 9755952227";

export const SOCIALS: Social[] = [
  { name: "GitHub", link: "https://github.com/devansh-jagtap", label: "@devansh-jagtap" },
  { name: "LinkedIn", link: "https://www.linkedin.com/in/devansh-jagtap/", label: "Devansh Jagtap" },
  { name: "Twitter", link: "https://x.com/devansh_jagtap", label: "@devanshjagtap" },
  { name: "Email", link: `mailto:${EMAIL}`, label: EMAIL },
];

export const EXPERIENCE: Experience[] = [
  {
    company: "ROI Makers",
    role: "Freelance Frontend Developer & Website Creator",
    date: "Oct 2025 – Present",
    location: "Indore, India",
    description: [
      "Designed and developed the agency’s public website using Next.js and deployed it on Vercel.",
      "Built responsive layouts for Projects, Approach, About, Career, Blog, and Contact sections ensuring consistent brand experience.",
      "Integrated client assets, messaging, and links to social profiles for seamless agency representation online.",
      "Improved site performance, SEO fundamentals, and mobile responsiveness for better visibility and engagement."
    ]
  }
];
export const PROJECTS: Project[] = [
  {
    slug: "keydrop",
    title: "KeyDrop Secrets Management CLI Tool",
    description:
      "Turn your entire .env file into one secure deployable key with a full-stack CLI + API + SDK platform.",
    longDescription:
      "KeyDrop is a full-stack secrets management platform built to help developers securely manage and deploy environment variables across teams and projects. It combines a Node.js CLI, runtime SDK, backend API, and web dashboard with encrypted secret handling and browser-based authentication flow similar to npm and GitHub CLI.",
    techStack: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JWT",
      "AES-256-GCM"
    ],
    imageUrl:"/keydrops/keydrops.png",
    demoUrl: "https://keydrops.tech",
    codeUrl: "https://github.com/devansh-jagtap/keydrop",
    featured: true,
    category: "Developer Tools",
    ctaText: "View Project",
    ctaLink: "https://keydrops.tech",
    features: [
      "2 npm packages published",
      "4 API endpoints for auth flow",
      "AES-256-GCM encryption",
      "JWT auth with 24h expiry",
      "3 part monorepo architecture",
      "Full stack CLI + API + SDK + Website"
    ],
    highlights: [
      "Built browser-based CLI login flow with token polling and handshake lifecycle",
      "Shipped production deployments on Render (API) and Vercel (website)",
      "Added team collaboration, one-time key reveal, and key recovery workflows"
    ],
    challenges: [
      "Handling ESM/CJS compatibility for SDK usage across Node.js and Next.js",
      "Integrating Prisma 7 with Neon serverless Postgres configuration"
    ]
  },
   {
    slug: "appliquo",
    title: "Appliquo AI - Job Application ",
    description:
      "A modern job application and tracking platform for organizing job searches efficiently.",
    longDescription:
      "Appliquo is a web application designed to help users manage and track their job applications in one place. The platform focuses on usability and clarity, allowing users to record application details, statuses, and notes while maintaining a clean and intuitive interface.",
    techStack: ["React.js", "Javascript", "Tailwind CSS"],
    imageUrl: "/appliquo.png",
    demoUrl: "https://appliquo.vercel.app/",
    codeUrl: "https://github.com/devansh-jagtap/Appliquo",
    featured: true,
    category: "Productivity",
    ctaText: "View Project",
    ctaLink: "",
    features: [
      "Track job applications and statuses",
      "Clean and minimal dashboard interface",
      "Organized view for applications and notes"
    ],
    highlights: [
      "Focused on solving a real personal productivity problem",
      "Designed with scalability for future features"
    ],
    challenges: [
      "Designing a simple yet flexible data structure for applications",
      "Balancing minimal UI with useful functionality"
    ]
  },
  {
  slug: "lumen",
  title: "Lumen AI Workspace",
  description:
    "A multi-assistant AI workspace that provides specialized AI assistants, model routing, streaming conversations, and persistent chat sessions across multiple LLM providers.",
  longDescription:
    "Lumen is a modern AI workspace built with Next.js that brings multiple specialized AI assistants into a single application. Users can switch between dedicated assistants for coding, education, content creation, productivity, image generation, and video workflows while selecting from free and premium language models. The platform supports real-time streaming responses, multi-provider model routing, persistent local chat history, and a clean, responsive interface designed for everyday AI productivity.",
  techStack: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "Vercel AI SDK",
    "AI SDK React",
    "Google Gemini",
    "Groq",
    "OpenRouter",
    "Cerebras",
    "NVIDIA AI",
    "shadcn/ui"
  ],
  imageUrl: "/lumen.png",
  demoUrl: "",
  codeUrl: "",
  featured: true,
  category: "AI Platform",
  ctaText: "Explore Project",
  ctaLink: "",
  features: [
    "Multiple specialized AI assistants",
    "Real-time streaming AI responses",
    "Provider and model switching",
    "Support for free and premium LLMs",
    "Persistent local chat history",
    "Modern responsive chat interface",
    "AI SDK powered streaming",
    "Extensible assistant architecture"
  ],
  highlights: [
    "Unified multiple AI providers behind a single conversational interface",
    "Implemented provider routing across Google, Groq, OpenRouter, Cerebras, and NVIDIA AI",
    "Built reusable assistant workflows with streaming responses and session persistence"
  ],
  challenges: [
    "Managing multiple AI providers through a unified abstraction layer",
    "Maintaining consistent streaming behavior across different LLM APIs",
    "Designing a scalable architecture for adding new assistants and models"
  ]
},
  {
  slug: "opencontributers",
  title: "OpenContributers",
  description:
    "An open-source habit-building platform that delivers curated GitHub issues to developers daily, making consistent open source contributions simple and sustainable.",
  longDescription:
    "OpenContributers is a full-stack developer platform designed to help developers build a consistent open-source contribution habit. Users authenticate with GitHub, subscribe to repositories they care about, and receive personalized daily emails containing actionable GitHub issues. The platform automates repository synchronization, issue tracking, email delivery, and background job processing using a scalable queue architecture with Redis and BullMQ.",
  techStack: [
    "Next.js 16",
    "TypeScript",
    "PostgreSQL",
    "Prisma",
    "NextAuth.js",
    "Redis",
    "BullMQ",
    "Upstash",
    "Neon",
    "Resend",
    "Tailwind CSS",
    "GitHub API",
    "Vercel"
  ],
  imageUrl: "/opencontributer.png",
  demoUrl: "https://opencontributers.vercel.app",
  codeUrl: "https://github.com/devansh-jagtap/openContributers",
  featured: true,
  category: "Developer Tools",
  ctaText: "View Project",
  ctaLink: "https://opencontributers.vercel.app",
  features: [
    "GitHub OAuth authentication with NextAuth.js",
    "Subscribe to repositories and receive personalized issue recommendations",
    "Automated GitHub issue synchronization every 6 hours",
    "Timezone-aware daily email digests",
    "Redis + BullMQ background job processing",
    "Email verification workflow before digest delivery",
    "Scalable PostgreSQL database with Prisma ORM",
    "Production-ready deployment across Vercel and dedicated worker services"
  ],
  highlights: [
    "Designed a scalable architecture separating the web application from long-running background workers",
    "Integrated GitHub API, Redis, BullMQ, Prisma, Neon PostgreSQL, and Resend into a production-ready workflow",
    "Implemented automated scheduling, email delivery, and queue-based processing for reliable daily notifications"
  ],
  challenges: [
    "Building reliable background workers outside Vercel's serverless environment",
    "Managing timezone-aware scheduling for global users",
    "Keeping GitHub issue data synchronized efficiently while minimizing API usage",
    "Designing fault-tolerant queue processing with retry mechanisms"
  ]
},
{
  slug: "rag-next",
  title: "rag-next AI Knowledge Workspace",
  description:
    "An AI-powered knowledge workspace that transforms PDFs, books, research papers, and documentation into an interactive AI mentor using Retrieval-Augmented Generation (RAG).",
  longDescription:
    "rag_next is a full-stack AI knowledge platform that enables users to upload documents and interact with them through grounded, context-aware conversations. The application goes beyond traditional 'Chat with PDF' tools by supporting multi-document workspaces, persistent conversations, semantic search, query rewriting, and intelligent retrieval. Built on a modern RAG architecture, it extracts text, generates embeddings, stores vectors in Pinecone, retrieves relevant context, and produces citation-backed responses using large language models. The long-term vision is to evolve into an AI-powered learning, research, and productivity workspace capable of teaching concepts, generating quizzes, comparing research papers, creating study plans, and assisting with interview preparation.",
  techStack: [
    "Next.js 16",
    "TypeScript",
    "Python",
    "Prisma",
    "PostgreSQL",
    "Pinecone",
    "Google Gemini",
    "Vercel AI SDK",
    "PDF Processing",
    "Vector Embeddings",
    "Tailwind CSS"
  ],
  imageUrl: "/projects/rag_next.png",
  demoUrl: "",
  codeUrl: "",
  featured: true,
  category: "AI Platform",
  ctaText: "Explore Project",
  ctaLink: "",
  features: [
    "Upload and manage multiple PDF documents",
    "Semantic document chunking and vector embedding generation",
    "Multi-document Retrieval-Augmented Generation (RAG)",
    "Query rewriting for improved retrieval accuracy",
    "Conversation-aware follow-up questions",
    "Persistent workspaces with chat history",
    "Automatic chat title generation",
    "Citation-backed AI responses with source references",
    "Document management with upload and deletion support",
    "Scalable Pinecone vector database integration"
  ],
  highlights: [
    "Built a production-style end-to-end RAG pipeline from document ingestion to grounded AI responses",
    "Implemented multi-document semantic retrieval with persistent AI workspaces",
    "Designed the platform around an AI Knowledge Workspace vision instead of a traditional 'Chat with PDF' application",
    "Engineered an extensible architecture for future learning, research, and tutoring capabilities"
  ],
  challenges: [
    "Designing efficient document chunking strategies while preserving semantic meaning",
    "Balancing retrieval accuracy with LLM context window limitations",
    "Managing multi-document indexing and workspace organization",
    "Maintaining conversation context while generating grounded, citation-backed responses"
  ]
},
  {
    slug: "roi-makers-website",
    title: "ROI Makers Website",
    description:
      "Official website for a performance marketing agency focused on growth and ROI-driven solutions.",
    longDescription:
      "Designed and developed the public-facing website for ROI Makers, a performance marketing agency. The project focused on creating a clean, modern, and responsive web presence that clearly communicates the agency’s services, approach, and brand identity. The site was built with performance, SEO fundamentals, and maintainability in mind.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    imageUrl: "/roi_makers.png",
    demoUrl: "https://roi-makers.vercel.app/",
    codeUrl:"https://github.com/devansh-jagtap/roi-makers",
    featured: true,
    category: "Client Work",
    ctaText: "View Live Site",
    ctaLink: "https://roi-makers.vercel.app/",
    features: [
      "Responsive marketing website with modern UI",
      "Dedicated sections for services, projects, careers, and contact",
      "SEO-friendly structure and metadata",
      "Optimized for mobile and desktop devices"
    ],
    highlights: [
      "Built and deployed a real client website used for business presence",
      "Focused on clarity, branding, and performance",
      "Production-ready Next.js deployment on Vercel"
    ],
    challenges: [
      "Translating business requirements into a clean technical structure",
      "Ensuring consistent design across multiple content sections"
    ]
  },
  {
  slug: "quid-invoice-generator",
  title: "Quid Invoice Generator",
  description:
    "A modern full-stack SaaS application for creating, managing, and exporting professional invoices with secure authentication and PDF generation.",
  longDescription:
    "Quid Invoice Generator is a production-style invoicing platform built with Next.js App Router and Prisma. Users can securely authenticate using Google OAuth, create professional invoices, manage them through a personalized dashboard, preview invoices before saving, and export them as high-quality PDF documents. The application follows a modular feature-based architecture with reusable UI components, secure API routes, and a PostgreSQL-backed database.",
  techStack: [
    "Next.js 14",
    "TypeScript",
    "Prisma",
    "PostgreSQL",
    "NextAuth.js",
    "Tailwind CSS",
    "shadcn/ui",
    "jsPDF",
    "html-to-image",
    "Lucide React"
  ],
  imageUrl: "/quid.png",
  demoUrl: "https://quid-dev.vercel.app/",
  codeUrl: "",
  featured: true,
  category: "SaaS",
  ctaText: "View Project",
  ctaLink: "",
  features: [
    "Google OAuth authentication with NextAuth.js",
    "Create, edit, and manage invoices",
    "Dynamic invoice pages with unique URLs",
    "Professional invoice preview before export",
    "PDF generation using jsPDF",
    "Dashboard for managing invoices",
    "PostgreSQL database with Prisma ORM",
    "Responsive modern UI built with Tailwind CSS and shadcn/ui"
  ],
  highlights: [
    "Built a complete CRUD-based SaaS application using Next.js App Router",
    "Implemented secure authentication and database-backed invoice management",
    "Designed a scalable feature-based architecture for maintainability and future expansion"
  ],
  challenges: [
    "Generating pixel-perfect PDF invoices from HTML layouts",
    "Managing authentication and protected routes with NextAuth.js",
    "Designing reusable invoice components while maintaining consistent layouts"
  ]
},
 {
  slug: "select-to-speak",
  title: "Select to Speak",
  description:
    "A privacy-first Chrome extension that reads selected text aloud using a fully offline local text-to-speech engine powered by Piper TTS.",
  longDescription:
    "Select to Speak is a Chrome extension that transforms any selected text on a webpage into natural-sounding speech without relying on cloud APIs or internet connectivity after setup. The extension communicates with a local FastAPI server running Piper TTS, enabling fast, private, and low-latency speech synthesis while ensuring that no user data ever leaves the device.",
  techStack: [
    "JavaScript",
    "Chrome Extension API",
    "Python",
    "FastAPI",
    "Piper TTS",
    "Uvicorn",
    "HTML",
    "CSS"
  ],
  imageUrl: "/projects/select-to-speak.png",
  demoUrl: "",
  codeUrl: "",
  featured: true,
  category: "Developer Tools",
  ctaText: "View Project",
  ctaLink: "",
  features: [
    "Offline text-to-speech using Piper TTS",
    "Floating toolbar for selected webpage text",
    "Speak, pause, resume, and stop controls",
    "FastAPI backend for local audio synthesis",
    "Works completely offline after initial setup",
    "Cross-platform support for Windows, macOS, and Linux",
    "No external APIs or subscriptions required",
    "Privacy-first architecture with local processing"
  ],
  highlights: [
    "Built a Chrome extension integrated with a local AI inference server",
    "Implemented fully offline speech synthesis with zero cloud dependency",
    "Designed a lightweight architecture that prioritizes user privacy and low latency"
  ],
  challenges: [
    "Connecting browser extension APIs with a local FastAPI service",
    "Streaming synthesized audio with minimal playback delay",
    "Managing local model downloads and cross-platform compatibility"
  ]
},
  {
    slug: "lyricstype",
    title: "LyricsType",
    description:
      "A typing practice application using song lyrics for an engaging learning experience.",
    longDescription:
      "LyricsType transforms typing practice into a more engaging experience by allowing users to type along with song lyrics. The goal of the project was to combine learning with entertainment while maintaining a smooth and responsive user interface.",
    techStack: ["Next.js", "JavaScript", "Tailwind CSS"],
    imageUrl: "/projects/lyricstype.png",
    featured: true,
    category: "Learning & Fun",
    ctaText: "Explore",
    codeUrl:"https://github.com/devansh-jagtap/lyricstype",
    demoUrl:"https://lyricstype-five.vercel.app/",
    ctaLink: "",
    features: [
      "Typing practice using song lyrics",
      "Real-time typing feedback",
      "Minimal and distraction-free interface"
    ],
    highlights: [
      "Creative approach to making typing practice enjoyable",
      "Real-time interaction handling in the UI"
    ],
    challenges: [
      "Handling real-time input updates smoothly",
      "Maintaining accuracy and speed calculations"
    ]
  },
  {
    slug: "hackwave-site",
    title: "HackWave Website",
    description:
      "Landing page and event website for a hackathon initiative.",
    longDescription:
      "HackWave is a static event website created to promote a hackathon. The project focused on clear communication, strong visuals, and fast load times to effectively attract participants and convey event details.",
    techStack: ["Next.js", "Tailwind CSS"],
    imageUrl: "/projects/hackwave.png",
    featured: false,
    category: "Event & Community",
    ctaText: "View Project",
    ctaLink: "",
    demoUrl:"https://hackwave-site.vercel.app/",
    codeUrl:"https://github.com/devansh-jagtap/hackwave-site/",
    features: [
      "Event landing page with clear call-to-actions",
      "Responsive and visually engaging layout",
      "Fast-loading static pages"
    ],
    highlights: [
      "Built for community and event promotion",
      "Emphasis on simplicity and performance"
    ],
    challenges: [
      "Designing an engaging layout with limited content",
      "Ensuring fast performance on all devices"
    ]
  },
  {
    slug: "sorting-algorithms-visualizer",
    title: "Sorting Algorithm Visualizer",
    description:
      "A visual tool to understand how different sorting algorithms work step by step.",
    longDescription:
      "This project visualizes popular sorting algorithms to help learners understand how data moves and changes during execution. It was built as an educational tool with a focus on clarity, animations, and ease of experimentation.",
    techStack: ["JavaScript", "HTML", "CSS"],
    imageUrl: "/projects/sorting.png",
    featured: false,
    category: "Education",
    codeUrl:"https://github.com/devansh-jagtap/Sorting_algorithm",
    demoUrl:"https://sorting-algorithm-sigma.vercel.app/",
    ctaText: "View Project",
    ctaLink: "https://github.com/devansh-jagtap/Sorting_algorithm",
    features: [
      "Visualization of multiple sorting algorithms",
      "Step-by-step animations",
      "Interactive controls for speed and input size"
    ],
    highlights: [
      "Strong focus on learning and visualization",
      "Improved understanding of algorithm behavior"
    ],
    challenges: [
      "Synchronizing animations with algorithm logic",
      "Keeping UI responsive during animations"
    ]
  },
  {
    slug: "public-readme-maker",
    title: "README Maker",
    description:
      "A simple tool to generate clean and structured README files for GitHub projects.",
    longDescription:
      "Public README Maker helps developers quickly generate well-structured README files by filling in essential project details. The goal was to reduce friction in documentation and encourage better open-source practices.",
    techStack: ["Next.js", "Tailwind CSS"],
    imageUrl: "/projects/readme-maker.png",
    featured: false,
    category: "Developer Tools",
    ctaText: "View Project",
    ctaLink: "",
    demoUrl:"https://readme-maker-nine.vercel.app/",
    codeUrl:"https://github.com/devansh-jagtap/Readme_maker",
    features: [
      "Form-based README generation",
      "Predefined sections for clarity and consistency",
      "Copy-ready Markdown output"
    ],
    highlights: [
      "Focus on developer productivity",
      "Encourages better documentation habits"
    ],
    challenges: [
      "Designing a flexible README structure",
      "Balancing simplicity with customization"
    ]
  }
];


export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "C++",
      "SQL",
    ],
  },
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Shadcn/UI",
      "Framer Motion",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "REST APIs",
      "Authentication",
    ],
  },
  {
    category: "Databases",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Pinecone",
      "MySQL"
    ],
  },
  {
    category: "AI Engineering",
    skills: [
      "OpenAI",
      "Gemini",
      "RAG",
      "Embeddings",
      "Vector Search",
      "Prompt Engineering",
      "AI SDK",
    ],
  },
  {
    category: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Postman",
      "GCP",
    ],
  },
];

export const EDUCATION = {
  institution: "Chameli Devi Group of Institutions (CDGI)",
  degree: "B.Tech in Computer science Engineering",
  location: "Indore, India",
  duration: "Aug. 2022 – July 2026"
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Why Most Side Projects Die Quietly",
    slug: "why-side-projects-die",
    date: "Jan 06, 2026",
    readTime: "4 min",
    tags: ["Engineering", "Growth"],
    excerpt:
      "Side projects rarely fail loudly. Most fade away due to unrealistic expectations and loss of momentum.",
    content: (
      <>
        <p>
          Most side projects do not fail because of bad ideas or poor code. They
          fail quietly, abandoned halfway through development when motivation
          fades and expectations collide with reality.
        </p>
        <p>
          We often start side projects with the mindset of building a startup.
          We think about users, scale, polish, and perfection before we have
          solved a single real problem. This pressure transforms curiosity into
          obligation, and the project slowly becomes a burden.
        </p>
        <p>
          A side project is not a company. It is a learning instrument. Its value
          lies in the skills developed, not the number of users acquired.
          Finishing something small teaches far more than endlessly iterating on
          something grand.
        </p>
        <p>
          Progress creates momentum. Momentum sustains interest. The projects
          that survive are the ones allowed to be imperfect and incomplete.
        </p>
      </>
    ),
  },
  {
    id: "2",
    title: "The Illusion of the Perfect Tech Stack",
    slug: "illusion-of-perfect-tech-stack",
    date: "Jan 02, 2026",
    readTime: "5 min",
    tags: ["Software", "Architecture"],
    excerpt:
      "No combination of frameworks can compensate for unclear thinking and weak fundamentals.",
    content: (
      <>
        <p>
          Choosing a tech stack often feels like a defining decision. Developers
          debate frameworks, runtimes, and databases as if the right selection
          will guarantee success. In reality, most products succeed despite
          their stack, not because of it.
        </p>
        <p>
          Complexity accumulates silently. Every new dependency introduces
          upgrade paths, edge cases, and mental overhead. The cost is rarely paid
          upfront, but it compounds over time.
        </p>
        <p>
          The best technology is the one you understand deeply. Familiar tools
          reduce friction, accelerate debugging, and allow you to focus on
          solving real problems instead of fighting abstractions.
        </p>
        <p>
          A strong product can survive an average stack. A weak product cannot
          be saved by a perfect one.
        </p>
      </>
    ),
  },
  {
    id: "3",
    title: "What Writing Code Alone Will Never Teach You",
    slug: "what-code-alone-wont-teach",
    date: "Dec 22, 2025",
    readTime: "4 min",
    tags: ["Engineering", "Perspective"],
    excerpt:
      "Programming teaches syntax and logic. Engineering teaches judgment, restraint, and decision-making.",
    content: (
      <>
        <p>
          Learning to write code teaches you how to make things work. It does not
          teach you when something should exist, or whether it should exist at
          all.
        </p>
        <p>
          Real engineering is the art of tradeoffs. Choosing simplicity over
          cleverness. Deciding what not to build. Understanding that every
          abstraction hides a cost.
        </p>
        <p>
          These lessons emerge only after maintaining systems, fixing bugs you
          did not create, and explaining decisions to others. They cannot be
          learned from tutorials alone.
        </p>
        <p>
          Code is the medium. Judgment is the skill. Experience is what turns one
          into the other.
        </p>
      </>
    ),
  },
];


// export const PLAYGROUND_ITEMS: PlaygroundItem[] = [
//   {
//     id: "1",
//     title: "Neon Cyberpunk City",
//     description: "A 3D interactive city built with Three.js and React Three Fiber.",
//     imageUrl: "/mock/1.jpg",
//     demoUrl: "https://example.com/cyberpunk",
//     techStack: ["Three.js", "R3F", "GLSL"],
//     longDescription: "An immersive exploration of a futuristic cityscape, rendered in real-time using WebGL. This experiment pushes the boundaries of browser-based 3D graphics, featuring dynamic lighting, procedural generation, and post-processing effects that create a dense, atmospheric environment.",
//     videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
//     images: ["/mock/2.jpg", "/mock/3.jpg", "/mock/4.jpg"]
//   },
//   {
//     id: "2",
//     title: "Liquid Distortion Slider",
//     description: "WebGL based image slider with liquid distortion effects using OGL.",
//     imageUrl: "/mock/5.jpg",
//     demoUrl: "https://example.com/liquid",
//     techStack: ["OGL", "GSAP", "WebGL"],
//     longDescription: "A study in fluid dynamics and image manipulation. This slider uses custom shaders to create a liquid-like distortion effect during transitions, giving the interface a tactile, organic feel that responds to user interaction.",
//     images: ["/mock/6.jpg", "/mock/7.jpg", "/mock/8.jpg"]
//   },
//   {
//     id: "3",
//     title: "Kinetic Typography",
//     description: "Interactive typography experiments using variable fonts and matter.js.",
//     imageUrl: "/mock/3.jpg",
//     demoUrl: "https://example.com/typography",
//     techStack: ["Matter.js", "Canvas", "GSAP"],
//     longDescription: "Breaking the grid with physics-based typography. This experiment combines variable fonts with a 2D physics engine to create text that falls, collides, and reacts to gravity and mouse inputs, turning reading into a playful experience.",
//     images: ["/mock/1.jpg", "/mock/2.jpg", "/mock/4.jpg"]
//   },
//   {
//     id: "4",
//     title: "Particle Morphing",
//     description: "GPU accelerated particle system that morphs between 3D models.",
//     imageUrl: "/mock/7.jpg",
//     demoUrl: "https://example.com/particles",
//     techStack: ["Three.js", "GPGPU", "Shaders"],
//     longDescription: "A performance-focused particle system capable of rendering thousands of points. The particles seamlessly morph between different 3D shapes, driven by GPGPU computations for smooth, high-frame-rate animations.",
//     images: ["/mock/5.jpg", "/mock/6.jpg", "/mock/8.jpg"]
//   }
//   ,
//   {
//     id: "5",
//     title: "Abstract Data Viz",
//     description: "Generative art and data visualization using D3.js and Canvas.",
//     imageUrl: "/mock/2.jpg",
//     demoUrl: "https://example.com/dataviz",
//     techStack: ["D3.js", "Canvas", "Math"],
//     longDescription: "Transforming raw data into visual poetry. This experiment explores the intersection of mathematics and art, using algorithms to generate complex, organic patterns from structured datasets.",
//     images: ["/mock/1.jpg", "/mock/3.jpg", "/mock/5.jpg"]
//   },
//   {
//     id: "6",
//     title: "AR Product Viewer",
//     description: "WebXR based product viewer with real-time lighting estimation.",
//     imageUrl: "/mock/4.jpg",
//     demoUrl: "https://example.com/ar",
//     techStack: ["WebXR", "Three.js", "React"],
//     longDescription: "Bridging the digital and physical worlds. This WebXR experiment allows users to place virtual objects in their real-world environment, featuring realistic lighting and shadow estimation for true immersion.",
//     images: ["/mock/6.jpg", "/mock/7.jpg", "/mock/8.jpg"]
//   }
// ];
