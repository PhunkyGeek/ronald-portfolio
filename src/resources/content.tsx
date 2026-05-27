import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ronald",
  lastName: "Abel-Obi",
  name: `Ronald Abel-Obi`,
  role: "AI Product Engineer",
  avatar: "/images/avatar.png",
  email: "ronaldabel1611@gmail.com",
  location: "Africa/Lagos", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "French"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to Ronald's newsletter</>,
  description: <>Weekly notes on AI product engineering, full-stack systems, and startup building.</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/PhunkyGeek",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ronald-abel-obi-a07654a5/",
    essential: true,
  },
  // {
  //   name: "Instagram",
  //   icon: "instagram",
  //   link: "https://www.instagram.com/once_ui/",
  //   essential: false,
  // },
  // {
  //   name: "Threads",
  //   icon: "threads",
  //   link: "https://www.threads.com/@once_ui",
  //   essential: true,
  // },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as an ${person.role}`,
  headline: <>AI Engineer building intelligent systems</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Ronald's</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/ai-code-assistant",
  },
  subline: (
    <>
      I build AI-powered SaaS products, RAG-driven support systems, and scalable full-stack platforms for founders and startups.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} building intelligent systems and scalable products`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am an AI product engineer who translates complex problems into polished SaaS
        products and intelligent systems. I combine full-stack engineering, cloud architecture,
        and advanced AI models to build scalable solutions with measurable business impact.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Headstarter",
        timeframe: "2024 - Present",
        role: "Software Engineering Fellow",
        achievements: [
          <>
            Built AI-powered customer support and RAG workflows with OpenAI, Gemini, and Firebase,
            improving response accuracy and support velocity.
          </>,
          <>
            Delivered production SaaS products including a flashcard learning platform and an AI
            code assistant that supported real users and product launches.
          </>,
        ],
        images: [],
      },
      {
        company: "INNKEEPER",
        timeframe: "2022 - 2024",
        role: "Full Stack Consultant & Talent Accelerator",
        achievements: [
          <>
            Conducted hands-on coding workshops covering HTML, CSS, JavaScript, React.js, Node.js,
            Python, and MongoDB for aspiring developers.
          </>,
          <>
            Mentored 20+ aspiring developers, achieving a 95% satisfaction rate and fostering a culture
            of continuous learning.
          </>,
          <>
            Developed curriculum updates aligning with industry best practices to enhance learner
            experience and skill relevance.
          </>,
        ],
        images: [],
      },
      {
        company: "GARMSPOT",
        timeframe: "2021 - 2022",
        role: "Software Engineer",
        achievements: [
          <>
            Led end-to-end mobile and web development, successfully launching two production apps
            on iOS and Android platforms.
          </>,
          <>
            Optimized backend performance, reducing application latency by 30% and improving user
            experience at scale.
          </>,
          <>
            Developed custom JavaScript frameworks, enhancing scalability, maintainability, and
            developer productivity.
          </>,
        ],
        images: [],
      },
      {
        company: "ASHAK PACIFIC LLC",
        timeframe: "2019 - 2021",
        role: "Chief Technology Officer",
        achievements: [
          <>
            Defined technology strategy and scaled infrastructure to support 50% growth in user base
            while maintaining system reliability.
          </>,
          <>
            Spearheaded cybersecurity initiatives, strengthening data protection and system reliability
            across all platforms.
          </>,
          <>
            Led web administration and web application development, improving platform efficiency by 40%
            and reducing operational overhead.
          </>,
          <>
            Successfully deployed cloud-based enterprise applications, enhancing business automation
            and operational efficiency.
          </>,
        ],
        images: [],
      },
      {
        company: "TOTAL PLC",
        timeframe: "2018 - 2019",
        role: "Assistant Web Administrator",
        achievements: [
          <>
            Managed website administration and redesign initiatives, ensuring uptime and performance
            optimization for high-traffic environments.
          </>,
          <>
            Assisted in network setup, troubleshooting, and system maintenance, reducing downtime by 20%
            and improving availability.
          </>,
          <>
            Conducted system audits to identify and resolve security vulnerabilities, protecting critical
            business infrastructure.
          </>,
          <>
            Provided end-user support and training on IT tools and best practices; co-designed the CSR
            magazine for enhanced internal communications.
          </>,
          <>
            Developed and maintained internal web applications to streamline business processes and
            improve operational efficiency.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Lagos",
        description: <>MSc Information Technology. <br /> 
        Topics: IT, Market Research, Java JDK, Data Analytics, Big Data, Python, Cyber-security.</>,
      },
      {
        name: "Africa University",
        description: <>BSc Computer Science with Honors in Economics.</>,
      },
      {
        name: "Harvard",
        description: <>CS50 AI – Advanced AI and machine learning course.</>,
      },
      {
        name: "AWS Cloud Practitioner",
        description: <>Cloud certification. AWS foundational cloud computing and services.</>,
      },
      {
        name: "Cisco",
        description: <>Python Essentials 2 (PCAP) – Python programming certification.</>,
      },
      {
        name: "University of Helsinki",
        description: <>Elements of AI – Foundational AI concepts and practical applications.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "AI Product Engineering",
        description: (
          <>
            Building intelligent SaaS workflows, retrieval systems, and support automation with
            real-world impact.
          </>
        ),
        tags: [
          {
            name: "AI",
            icon: "rocket",
          },
          {
            name: "OpenAI",
            icon: "document",
          },
          {
            name: "Gemini",
            icon: "sparkles",
          },
          {
            name: "Firebase",
            icon: "supabase",
          },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-03.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-025.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Full-Stack Development",
        description: (
          <>
            JavaScript, Java, Python, React, Next.js, Node.js, MERN stack, TypeScript, Tailwind, SQL, and
            HTML. Cloud-first architecture with Supabase and Firebase for scalable systems.
          </>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Python",
            icon: "code",
          },
          {
            name: "Java",
            icon: "code",
          },
          {
            name: "React",
            icon: "reactjs",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Node.js",
            icon: "code",
          },
          {
            name: "Tailwind",
            icon: "figma",
          },
          {
            name: "SQL",
            icon: "database",
          },
        ],
        images: [
          {
            src: "/images/projects/project-01/horizontal-6.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Mobile & Cross-Platform",
        description: (
          <>
            Native iOS development with Swift and cross-platform mobile solutions using Dart and Flutter
            for high-performance mobile experiences.
          </>
        ),
        tags: [
          {
            name: "Swift",
            icon: "code",
          },
          {
            name: "Flutter",
            icon: "code",
          },
          {
            name: "Dart",
            icon: "code",
          },
        ],
        images: [],
      },
      {
        title: "Tools & Analytics",
        description: (
          <>
            Google Analytics for data insights, Tableau for visualization, Jira for project management,
            and modern DevOps workflows.
          </>
        ),
        tags: [
          {
            name: "Google Analytics",
            icon: "analytics",
          },
          {
            name: "Tableau",
            icon: "chart",
          },
          {
            name: "Jira",
            icon: "check",
          },
        ],
        images: [],
      },
      {
        title: "Leadership & Strategy",
        description: (
          <>
            Problem solving, public speaking, strategic leadership, team collaboration, delegation,
            stakeholder management, and agile methodologies for scaling teams and products.
          </>
        ),
        tags: [
          {
            name: "Leadership",
            icon: "person",
          },
          {
            name: "Agile",
            icon: "rocket",
          },
          {
            name: "Teamwork",
            icon: "share",
          },
          {
            name: "Public Speaking",
            icon: "mic",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about AI product engineering and modern systems",
  description: `Insights on AI, full-stack product engineering, and startup technology from ${person.name}`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Product stories and technical case studies by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
