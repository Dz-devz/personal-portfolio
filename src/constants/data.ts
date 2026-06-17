import belleWebsite from "@/assets/bellewebsite.gif";
import berukeycapsThumbnail from "@/assets/berukeycapsThumbnail.gif";
import DockerKub from "@/assets/Certificates/dockerandkubernetes.jpg";
import GitCert from "@/assets/Certificates/GitCert.jpg";
import UiUx from "@/assets/Certificates/uiux.jpg";
import WebDev2022 from "@/assets/Certificates/webdev2022.jpg";
import WebDev2024 from "@/assets/Certificates/webdev2024.jpg";
import devthoughtsgif from "@/assets/devthoughtsgif.gif";
import drizzlekit from "@/assets/drizzlekit.png";
import dztaskthumbnail from "@/assets/dztaskthumbnail.gif";
import expo from "@/assets/expo.png";
import paithumbnail from "@/assets/paithumbnail.gif";
import express from "@/assets/express.png";
import fieldservice from "@/assets/fieldservice.gif";
import honojs from "@/assets/honojs.png";
import invoiceprogif from "@/assets/invoiceprothumbnail.gif";
import jabuoieathumbnail from "@/assets/jabuoieathumbnail.gif";
import javascript from "@/assets/javascript.png";
import nextjs from "@/assets/nextjs.png";
import nodejs from "@/assets/nodejs.png";
import paymongoapithumbnail from "@/assets/paymongoapithumbnail.gif";
import paymongologo from "@/assets/paymongologo.png";
import paymongothumbnail from "@/assets/paymongothumbnail.gif";
import postgresql from "@/assets/postgresql.png";
import prisma from "@/assets/prisma.png";
import reactjs from "@/assets/reactjs.png";
import swagger from "@/assets/swagger.png";
import tailwind from "@/assets/tailwind.png";
import taskapigif from "@/assets/taskapigif.gif";
import romero from "@/assets/Testimonial/adam.jpg";
import jabuoiea from "@/assets/Testimonial/jabuoiea.png";
import belle from "@/assets/Testimonial/profile.jpg";
import tolstich from "@/assets/Testimonial/tolstich.png";
import tolstichThumbnail from "@/assets/tolstichstudioThumbnail.gif";
import tracknstock from "@/assets/tracknstock.gif";
import typescript from "@/assets/typescript.png";

export const testimonials = [
  {
    name: "Belle",
    src: belle,
    fallback: "BC",
    desc: "I absolutely love my website! Darwin exceeded my expectations and went above and beyond on the project. He fulfilled all of my requests perfectly. The entire process was smooth, thanks to his excellent communication skills. I’m thrilled with the final result and couldn’t be happier with the experience!",
    alt: "Belle Profile and Testimonial",
  },
  {
    name: "Romero",
    src: romero,
    fallback: "AR",
    desc: "I’m honestly so happy with my website! Darwin didn’t just meet my expectations. He listened to every idea I had and somehow made them even better. The whole process felt super easy because he kept me in the loop and was always quick to respond. I’m beyond thrilled with how everything turned out. It’s exactly what I wanted, and working with him was such a great experience!",
  },
  {
    name: "Nina",
    src: jabuoiea,
    fallback: "NS",
    desc: "Darwin did a wonderful job and has always been a great help with my website. He is very professional and considerate. He doesn't only listens to my requests but he also brings them to life and exceeds my expectations. He always thinks outside of the box yet he finds better approach to effectively deliver what I envisioned. I would love to work with him again: I really love and recommend his work. Great job! <3",
  },
  {
    name: "Chris",
    src: tolstich,
    fallback: "CT",
    desc: "I was impressed by how quickly Darwin worked while maintaining a high level of quality. Even though he had to build the website in a language that was not familiar to him, everything was implemented cleanly and without noticeable errors. His ideas for the website were well thought out, and his explanations were clear and easy to understand. Communication remained smooth throughout the process, even though we were not working in our native language. I would definitely work with him again on future projects.",
  },
];

export const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "hono",
  "framer",
  "nextdotjs",
  "prisma",
  "postgresql",
  "vercel",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "figma",
  "bun",
  "canva",
  "prisma",
  "drizzle",
  "hono",
  "mysql",
  "postman",
  "spring",
  "tailwindcss",
  "bootstrap",
  "sass",
  "docker",
];

export const certs = [
  { src: DockerKub, alt: "Docker and Kubernetes 2025 Certificate" },
  { src: WebDev2024, alt: "Web Development 2024 Certificate" },
  { src: GitCert, alt: "Git Certificate" },
  { src: WebDev2022, alt: "Web Development 2022 Certificate" },
  { src: UiUx, alt: "UI/UX Certificate" },
];

export const thumbnails = [
  {
    id: 1,
    title: "TrackNStock",
    desc: "Full Stack App",
    thumbnail: tracknstock,
    link: "https://liabilities-railway-frontend.onrender.com/",
    github: "https://github.com/Dz-devz/liabilities-inventory-app.git",
    tools: {
      javascript: javascript,
      typescript: typescript,
      nextjs: reactjs,
      drizzlekit: drizzlekit,
      tailwind: tailwind,
      node: nodejs,
      hono: honojs,
    },
    category: "Personal",
  },
  {
    id: 8,
    title: "Paymongo Payment Integration",
    desc: "Test Payment Integration",
    thumbnail: paymongothumbnail,
    link: "https://dzdev-paymongo.vercel.app/",
    github: "https://github.com/Dz-devz/paymongo-react-payment",
    tools: {
      javascript: javascript,
      typescript: typescript,
      paymongo: paymongologo,
      reactjs: reactjs,
    },
    category: "Personal",
  },
  {
    id: 9,
    title: "Paymongo Payment API",
    desc: "Test Payment API",
    thumbnail: paymongoapithumbnail,
    link: "https://paymongo-payment-api.onrender.com/api-docs/",
    github: "https://github.com/Dz-devz/paymongo-payment-api",
    tools: {
      javascript: javascript,
      paymongo: paymongologo,
      node: nodejs,
      hono: express,
      prisma: prisma,
    },
    category: "Personal",
  },
  {
    id: 2,
    title: "DevThoughts",
    desc: "Full Stack App",
    thumbnail: devthoughtsgif,
    link: "https://devthoughtsnote.vercel.app/",
    github: "https://github.com/Dz-devz/dzdev-thoughts.git",
    tools: {
      javascript: javascript,
      typescript: typescript,
      nextjs: nextjs,
      prisma: prisma,
      tailwind: tailwind,
    },
    category: "Personal",
  },
  {
    id: 5,
    title: "Invoice Pro",
    desc: "Full Stack App",
    thumbnail: invoiceprogif,
    link: "https://dzinvoicepro.vercel.app/",
    github: "https://github.com/Dz-devz/invoice-print.git",
    tools: {
      javascript: javascript,
      typescript: typescript,
      tailwind: tailwind,
      prisma: prisma,
      node: nodejs,
      express: express,
    },
    category: "Personal",
  },
  {
    id: 6,
    title: "Task Api",
    desc: "API with Swagger UI",
    thumbnail: taskapigif,
    link: "https://task-api-si4v.onrender.com/",
    github: "https://github.com/Dz-devz/task-api",
    tools: {
      javascript: javascript,
      typescript: typescript,
      node: nodejs,
      hono: honojs,
      prisma: prisma,
      swagger: swagger,
    },
    category: "Personal",
  },
  {
    id: 20,
    title: "pAI π",
    desc: "Personal AI Files Assistant (Offline) - Live on Google Play Store",
    thumbnail: paithumbnail,
    link: "https://play.google.com/store/apps/details?id=com.dz.dev.personalai",
    github: "",
    tools: {
      javascript: javascript,
      typescript: typescript,
      reactjs: reactjs,
    },
    category: "Mobile App",
  },
  {
    id: 7,
    title: "Task App",
    desc: "React Native Expo Task App",
    thumbnail: dztaskthumbnail,
    link: "",
    github: "https://github.com/Dz-devz/dz-task-expo",
    tools: {
      javascript: javascript,
      typescript: typescript,
      node: nodejs,
      hono: honojs,
      prisma: prisma,
      swagger: swagger,
      reactjs: reactjs,
    },
    category: "Mobile App",
  },
  {
    id: 3,
    title: "Field Service",
    desc: "Field Service Mobile App",
    thumbnail: fieldservice,
    link: "",
    github: "",
    tools: {
      javascript: javascript,
      typescript: typescript,
      node: nodejs,
      express: express,
      postgresql: postgresql,
      reactnative: reactjs,
      expo: expo,
    },
    category: "Mobile App",
  },
  {
    id: 10,
    title: "Belle Services",
    desc: "Services Website",
    thumbnail: belleWebsite,
    link: "https://www.bellecastillo.com/",
    tools: {
      javascript: javascript,
      typescript: typescript,
      reactjs: reactjs,
      tailwind: tailwind,
    },
    category: "Client",
  },
  {
    id: 11,
    title: "Berukeycaps Webstore",
    desc: "Keycaps Webstore",
    thumbnail: berukeycapsThumbnail,
    link: "https://berukeycaps-webstore.vercel.app/",
    tools: {
      javascript: javascript,
      typescript: typescript,
      reactjs: nextjs,
      tailwind: tailwind,
    },
    category: "Client",
  },
  {
    id: 12,
    title: "Jabuoiea Portfolio",
    desc: "Portfolio Website",
    thumbnail: jabuoieathumbnail,
    link: "https://jabuoiea.vercel.app/",
    tools: {
      javascript: javascript,
      typescript: typescript,
      reactjs: nextjs,
      tailwind: tailwind,
    },
    category: "Client",
  },
  {
    id: 13,
    title: "Tolstich Studio",
    desc: "Business Website",
    thumbnail: tolstichThumbnail,
    link: "https://tolstichstudio.vercel.app/",
    tools: {
      javascript: javascript,
      typescript: typescript,
      reactjs: nextjs,
      tailwind: tailwind,
    },
    category: "Client",
  },
];

export const experiences = [
  {
    title: "Software Engineer",
    company: "Freelance",
    period: "Jan 2025 — Present",
    badge: "Freelance",
    badgeStyle: "bg-amber-100 text-amber-800",
    tags: ["React", "REST APIs", "SEO", "E-commerce"],
  },
  {
    title: "Software Engineer",
    company: "Suzy Rent (Dormy) — Remote · Startup",
    period: "Mar 2025 — Dec 2025",
    badge: "Contractual",
    badgeStyle: "bg-blue-100 text-blue-800",
    tags: ["tRPC", "TypeScript", "Zod", "React Native", "Xendit", "eKYC"],
  },
  {
    title: "Software Engineer",
    company: "IT Resources (ITRC) — Makati City, PH",
    period: "Apr 2024 — Dec 2024",
    badge: "Full-time",
    badgeStyle: "bg-green-100 text-green-800",
    tags: ["Mobile", "API Design", "Performance"],
  },
  {
    title: "Software Engineer",
    company: "Dianoia Tech — Remote · Startup",
    period: "Jan 2024 — Apr 2024",
    badge: "Part-time",
    badgeStyle: "bg-blue-100 text-blue-800",
    tags: ["Next.js", "Accessibility", "Agile"],
  },
];
