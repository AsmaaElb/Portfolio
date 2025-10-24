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
  tesla,
  shopify,
  carrent,
  starbucks,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import segula from "../assets/company/segula.png";
import ibnt from "../assets/company/ibnt.png";
import em from "../assets/company/em.jpg";
import n8n from "../assets/tech/n8n.png";
import cplus from "../assets/tech/cplus.png";
import flask from "../assets/tech/flask.jpg";
import flutter from "../assets/tech/flutter.png";
import java from "../assets/tech/java.png";
import laravel from "../assets/tech/laravel.png";
import next from "../assets/tech/next.png";
import segulatechnos from "../assets/segulatechnos.png";
import qz from "../assets/qz.png";
import n8n_pro from "../assets/n8n_pro.png";
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
    title: "AI Developer",
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
    name: "Nextjs",
    icon: next,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "n8n",
    icon: n8n,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "C++",
    icon: cplus,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Java",
    icon: java,
  }
];

const experiences = [
 {
  title: "AI Full-Stack Developer",
  company_name: "Segula Technologies",
  icon: segula,
  iconBg: "#E6DEDD",
  date: "February 2025 - August 2025",
  points: [
    "Developed an AI Assistant for regulatory analysis and detection of non-conformities.",
    "Designed a chatbot interface with dynamic Q&A, conformity detection, translation, scoring, and error feedback.",
    "Built an interactive frontend using Next.js 13 (App Router), React, TypeScript, TailwindCSS, and ShadCN UI.",
    "Implemented a Retrieval-Augmented Generation (RAG) pipeline using LangChain, Ollama, and FAISS."
  ],
},

  {
    title: "AI Application Developer",
    company_name: "Ibn Tofail University",
    icon: ibnt,
    iconBg: "#ffffff",
    date: "July 2024 - August 2024",
    points: [
     "Developing an AI-based quiz application.",
     " Designed and developed an AI-powered quiz application integrated with Moodle using  Next.js 13, TailwindCSS, OpenAI API, and NextAuth.",
     "Implemented an OpenAI API to dynamically generate questions based on defined topics.",
     "Optimized user experience by displaying generated quizzes and building an export module for Aiken and XML formats for teachers."
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "Emerging Business Factory",
    icon: em,
    iconBg: "#000000",
    date: "July 2023 - August 2023",
    points: [
      "Development of an E-commerce Website.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
 
];

 const testimonials = [];


const projects = [
 
  {
  name: "QuizApp_IA",
  description:
    "Interactive web application that allows users to generate and play AI-powered custom quizzes, track scores, and receive performance insights.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "openai",
      color: "green-text-gradient",
    },
    {
      name: "tailwindcss",
      color: "pink-text-gradient",
    },
  ],
  image: qz,  // Replace with your actual image variable or import
  source_code_link: "https://github.com/AsmaaElb/QuizApp_IA",
}
,
{
  name: "Assistant IA (n8n)",
  description:
    "An automation assistant built with n8n that connects Telegram, Gmail, OpenAI, and Google Calendar to handle messages, emails, scheduling, and AI-powered responses.",
  tags: [
    {
      name: "n8n",
      color: "blue-text-gradient",
    },
    {
      name: "openai",
      color: "green-text-gradient",
    },
    {
      name: "telegram",
      color: "pink-text-gradient",
    },
  ],
  image: n8n_pro,  // replace with your actual image/asset reference
  source_code_link: "https://github.com/AsmaaElb/assistant-ia-n8n",
}
,
{
  name: "AI Regulatory Assistant",
  description:
    "An intelligent assistant that leverages AI to analyze regulatory documents, identify compliance requirements, and detect potential non-conformities. It also includes a chatbot dedicated to compliance, allowing users to ask questions and receive accurate, context-aware answers in real time. Designed to streamline conformity assessments and support decision-making in regulated industries.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "Next.js",
      color: "green-text-gradient",
    },
    {
      name: "tailwind",
      color: "pink-text-gradient",
    },
    {
      name: "RAGs",
      color: "purple-text-gradient",
    },
    {
      name: "Langchain",
      color: "orange-text-gradient",
    },
  ],
  image: segulatechnos, // ton image/logo spécifique
  source_code_link: "", // à remplacer par ton repo
}
,
  
];

export { services, technologies, experiences, testimonials, projects };
