import {
  mobile,
  backend,
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
  expressjs,
  hp,
  ec,
  github,
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
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "docker",
    icon: docker,
  },
  {
    name: "expressjs",
    icon: expressjs,
  },
];

const socialMedias = [
  {
    icon: github,
    link: "https://github.com/4shaham",
  },
  {
    icon: "data:image/png;base64,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",
    link: "https://www.linkedin.com/in/muhammedshahamv",
  },
  {
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxx9NbK-Og_S-81A5yAXdtseaMCFh8skWCYQ&s",
    link: "https://www.instagram.com/shaham_salam/",
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Hospital Managment",
    description:
      "Built a hospital management system enabling secure appointment bookings, Stripe payments, real-time chat with doctors, e-prescription access, and online consultations to streamline patient care.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "typeScript",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "Clean Archetecture",
        color: "pink-text-gradient",
      },
    ],
    image: hp,
    source_code_link: "https://github.com/4shaham/Meddical-Client.git",
    source_live_link: "https://meddical.shaham.website",
  },
  {
    name: "E-Commerce",
    description:
      "E-commerce web application built from scratch, featuring a complete shopping experience with a cart, checkout, referral offers, coupon codes, and special discounts. The platform integrates secure payments through Razorpay, making it easy for users to browse, shop, and save on their purchases.",
    tags: [
      {
        name:"ejs",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "mvcArchetecture",
        color: "orange-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
    ],
    image: ec,
    source_code_link: "https://github.com/4shaham/GOCART.git",
    source_live_link: "https://gocart-hn3h.onrender.com/",
  },
  {
    name: "URL Shortner",
    description:
      "A simple yet powerful URL shortener built with Next.js. This tool takes long URLs and converts them into compact, easily shareable links, making it perfect for streamlining communication and improving link management across platforms.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nest.js",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
    source_live_link: "",
  },
  {
    name: "Olx clone",
    description:
     "An OLX clone built with React and Firebase, providing a practical introduction to building dynamic web applications. This project demonstrates key concepts in React, such as state management and component-based architecture, while integrating Firebase for real-time database management, user authentication, and data storage.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
    source_live_link: "",
  },
  {
    name: "Netflix clone",
    description:
      "A beginner-friendly Netflix clone built with React, designed as an introductory project to help learn React fundamentals. This project covers essential concepts like component structure, state management, and API integration, offering a hands-on experience with building a responsive and interactive streaming platform interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/4shaham/Meddical-Client.git",
    source_live_link: "https://meddical.shaham.website",
  },
  {
    name: "Task Managment",
    description:
     "A dynamic task management platform with a calendar-based UI, allowing managers to assign tasks seamlessly to their employees. This tool provides an organized, visually intuitive interface for tracking and managing assignments, ensuring efficient workflow and enhanced productivity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/4shaham/Meddical-Client.git",
    source_live_link: "https://meddical.shaham.website",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socialMedias,
};
