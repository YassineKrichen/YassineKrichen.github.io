import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  web_icon,
  game_controller,
  aheadit,
  cs,
  angular,
  mysql,
  unity,
  netcore,
  user,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web_icon,
  },
  {
    title: "Unity Game Developer",
    icon: game_controller,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: ".NET Core",
    icon: netcore,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Unity",
    icon: unity,
  },
];

const experiences = [
  {
    title: "Full Stack Web Development Intern",
    company_name: "AheadIT",
    icon: aheadit,
    iconBg: "#383E56",
    date: "January 2023 - February 2023",
    points: [
      "Developed a comprehensive full-stack website using Angular to efficiently manage company resources, streamlining internal processes and enhancing productivity.",
      "Collaborated with a cross-functional team to gather requirements, design the system architecture, and implement key features using Angular framework.",
      "Designed and implemented a secure and scalable back-end using MySQL and .NET Core (C#), ensuring optimal performance and data integrity.",
      "Implemented RESTful APIs and integrated third-party services to enhance functionality and improve overall system efficiency.",
      "Conducted thorough testing and debugging to ensure the website's stability and functionality across various devices and browsers.",
      "Worked closely with stakeholders to gather feedback and incorporate necessary improvements throughout the development process.",
      "Successfully delivered the project within the agreed timeline and received positive feedback from the company's management.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user,
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user,
  },
];

const projects = [
  {
    "name": "Resource Management",
  "description": "A full-stack web application that enables companies to manage their equipment and employees effectively, ensuring optimal resource allocation and utilization.",
  "tags": [
    {
      "name": "angular",
      "color": "orange-text-gradient"
    },
    {
      "name": "dotnet",
      "color": "blue-text-gradient"
    },
    {
      "name": "sql server",
      "color": "blue-text-gradient"
    }
  ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    "name": "Warrior's Escape",
  "description": "A thrilling 2D game where a warrior must dodge arrows and magic spells to survive and achieve freedom. Test your reflexes in this intense action-packed adventure!",
  "tags": [
    {
      "name": "unity",
      "color": "orange-text-gradient"
    },
    {
      "name": "csharp",
      "color": "blue-text-gradient"
    },
    {
      "name": "2d",
      "color": "green-text-gradient"
    }
  ],
    image: jobit,
    source_code_link: "https://github.com/",
  }
];

export { services, technologies, experiences, testimonials, projects };
