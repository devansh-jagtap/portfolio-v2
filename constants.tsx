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
    slug: "roi-makers-website",
    title: "ROI Makers Website",
    description:
      "Official website for a performance marketing agency focused on growth and ROI-driven solutions.",
    longDescription:
      "Designed and developed the public-facing website for ROI Makers, a performance marketing agency. The project focused on creating a clean, modern, and responsive web presence that clearly communicates the agency’s services, approach, and brand identity. The site was built with performance, SEO fundamentals, and maintainability in mind.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    imageUrl: "/projects/roi-makers.png",
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
    slug: "appliquo",
    title: "Appliquo",
    description:
      "A modern job application and tracking platform for organizing job searches efficiently.",
    longDescription:
      "Appliquo is a web application designed to help users manage and track their job applications in one place. The platform focuses on usability and clarity, allowing users to record application details, statuses, and notes while maintaining a clean and intuitive interface.",
    techStack: ["React.js", "Javascript", "Tailwind CSS"],
    imageUrl: "/projects/appliquo.png",
    demoUrl: "",
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
    slug: "lyricstype",
    title: "LyricsType",
    description:
      "A typing practice application using song lyrics for an engaging learning experience.",
    longDescription:
      "LyricsType transforms typing practice into a more engaging experience by allowing users to type along with song lyrics. The goal of the project was to combine learning with entertainment while maintaining a smooth and responsive user interface.",
    techStack: ["Next.js", "JavaScript", "Tailwind CSS"],
    imageUrl: "/projects/lyricstype.png",
    featured: false,
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
    skills: ["JavaScript", "Python", "C/C++", "SQL (Postgres)", "HTML/CSS"]
  },
  {
    category: "Frameworks",
    skills: ["Next.js", "React", "Node.js", "Express.js", "Shadcn-UI"]
  },
  {
    category: "Tools & Libraries",
    skills: ["Git","Vercel", "OpenAI", "Gemini", "Tailwind CSS"]
  }
];

export const EDUCATION = {
  institution: "Chameli Devi Group of Institutions (CDGI)",
  degree: "B.Tech in Computer science Engineering",
  location: "Indore, India",
  duration: "Aug. 2022 – Expected 2026"
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
