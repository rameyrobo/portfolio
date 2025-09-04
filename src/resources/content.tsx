import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text, Icon } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ramey",
  lastName: "Robles",
  name: `Ramey Robles`,
  role: "Fullstack Developer",
  avatar: "/images/avatar.jpg",
  email: "rameyrobo@gmail.com",
  location: "US/Pacific", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/rameyrobo",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ramey-robles/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Turning concepts into code, one project at a time</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">
          <Icon name="allSeeingEye" size={30} style={{ fontSize: 30, width: 30, height: 30 }} />
        </strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/video-first-commerce-that-still-flies",
  },
  subline: (
    <>
      I'm Ramey, a web developer based in Los Angeles, CA.
<br /> I craft digital experiences for clients <br />and experiment with my own projects after hours.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/ramey-robles-w0higq",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Full-stack developer with 12+ years of experience building scalable 
        applications, specializing in backend systems, JavaScript frameworks, 
        and WordPress development. Expertise in designing eCommerce ecosystems, 
        custom plugins, automation workflows, and media-heavy web apps with a focus 
        on performance, accessibility, and maintainability.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "The Paper Brain",
        timeframe: "August 2013 - Present",
        role: "Primary Developer",
        achievements: [
          <>
            Engineered dynamic media and eCommerce platform featuring immersive video players, upload workflows, and subscription-based product models.
             </>,
          <>
            Developed scalable JavaScript framework solutions integrating React, Next.js, Tailwind CSS, and Node.js for modular and performant builds.
             </>,
          <>
            Built custom WordPress plugins and backend integrations with MailerLite, Gravity Forms, and WooCommerce.
             </>,
          <>
            Optimized databases, automated cron jobs, and implemented infrastructure monitoring to ensure stability and uptime.
             </>,
          <>
            Delivered performance-first builds with adaptive images, lazy loading, deferred assets, and cross-browser video handling.
             </>,
          <>
            Designed and managed server configurations across diverse hosting environments, ensuring scalability and uptime.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/mudderfuger/mudderfuger-landing.png",
            alt: "Mudderfuger landing page",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/mudderfuger/mudderfuger-pagespeed.png",
            alt: "Mudderfuger pagespeed",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/burgershewrote/burger-she-wrote.png",
            alt: "Burger She Wrote mockup",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "DYODE",
        timeframe: "June 2021 - November 2022",
        role: "Front-end Developer",
        achievements: [
          <>
            Built Product Detail Pages (PDPs) and Collections Pages leveraging metafields and conditional logic for dynamic merchandising.
            </>,
          <>
            Migrated Shopify 1.0 sites to 2.0, improving site performance and enabling modern features.
            </>,
          <>
            Developed reusable UI components in React for scalable development.
            </>,
          <>
            Collaborated with cross-functional teams to deliver responsive, accessible, and high-performing storefronts.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/nicks.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Brand Buddha",
        timeframe: "November 2018 - June 2021",
        role: "Director of Technology",
        achievements: [
          <>
            Led technical direction and managed full project lifecycles for client web platforms.
          </>,
          <>
            Architected and deployed custom WordPress and WooCommerce sites with scalable PHP/MySQL backends.
          </>,
          <>
            Oversaw roadmap planning, feature prioritization, QA, and deployment pipelines.
          </>,
          <>
            Trained teams on web standards, digital asset management, and security best practices.
          </>,
          <>
            Implemented automation workflows with Zapier and IFTTT for marketing and sales efficiency.
          </>,
          <>
           Integrated Salesforce and Hubspot for client automation workflows and lead generation.
           </>,
        ],
        images: [
        ],
      },
      {
        company: "All In Orbit",
        timeframe: "August 2011 - August 2013",
        role: "Digital Creative Director",
        achievements: [
           <>
           Designed and developed SEO-optimized WordPress sites and marketing funnels.
           </>,
           <>
           Managed organic and PPC campaigns, improving visibility and conversions.
           </>,
           <>
           Produced multimedia assets (video, audio, design) to support client campaigns.
           </>,
           <>
           Delivered training and consultation on content creation, analytics, and automation tools.
           </>,
           ],
        images: [
        ],
      },
    ],
  },
  
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "University of California Riverside",
        description: <>Media and Cultural Studies</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "JavaScript Development",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "TypeScript",
            icon: "typescript",
          },
          {
            name: "React",
            icon: "react",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Vue.js",
            icon: "vue"
          },
          {
            name: "Node.js",
            icon: "nodejs",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [

        ],
      }, 
      {
        title: "WordPress Development",
        description: (
          <>WordPress development and custom plugin development since 2010.</>
        ),
        tags: [
          {
            name: "WordPress",
            icon: "wordpress",
          },
          {
            name: "PHP",
            icon: "php",
          },
          {
            name: "MySQL",
            icon: "mysql",
          },
          {
            name: "MariaDB",
            icon: "mariadb",
          },
          {
            name: "GraphQL",
            icon: "graphql",
          },
          {
            name: "Divi",
            icon: "divi",
          },
          {
            name: "Elementor",
            icon: "elementor",
          },
          {
            name: "WP Plugins",
            icon: "plugin"
          },
          {
            name: "ACF",
            icon: "acf"
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      }, 
      {
        title: "eCommerce Development",
        description: (
          <>Years of experience building eCommerce platforms on any category of web hosting.</>
        ),
        tags: [
          {
            name: "Snipcart",
            icon: "snipcart",
          },
          {
            name: "Shopify",
            icon: "shopify",
          },
          {
            name: "WooCommerce",
            icon: "woo",
          },
          {
            name: "Magento",
            icon: "magento",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      }, 
      {
        title: "Automation Tools",
        description: (
          <>Making client's lives easier.</>
        ),
        tags: [
          {
            name: "Zapier",
            icon: "zapier",
          },
          {
            name: "IFTTT",
            icon: "ifttt",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      }, 
      {
        title: "CRM & Marketing Platforms",
        description: (
          <>Integrating CRM and marketing platforms for seamless workflows.</>
        ),
        tags: [
          {
            name: "HubSpot",
            icon: "hubspot",
          },
          {
            name: "Salesforce",
            icon: "salesforce",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
        ],
      }, 
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
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
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
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
