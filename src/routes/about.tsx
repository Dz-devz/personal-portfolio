import IconCloud from "@/components/ui/icon-cloud";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
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
  "prism",
  "drizzle",
  "hono",
  "mysql",
  "postman",
  "spring",
  "tailwind",
  "bootstrap",
  "sass",
];

export const Route = createFileRoute("/about")({
  component: About,
});

export function About() {
  const fullText =
    "I'm a Passionate Full Stack Developer dedicated to honing my skills through continual growth and improvement. With a head full of profound ideas, I'm on a journey to turn concepts and ideas into reality through code.";

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="text-center text-2xl font-bold font-chivo">
          <span>About Me</span>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 4 }}
      >
        <div className="text-center text-4xl font-bold font-chivo mt-4 text-[#57AD5B]">
          <span>A Path Through My Domain</span>
        </div>
      </motion.div>
      <div className="relative flex items-center justify-center font-chivo">
        <IconCloud iconSlugs={slugs} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
          className="absolute text-center text-2xl font-bold max-w-[800px] p-4"
        >
          <span>{fullText}</span>
        </motion.div>
      </div>
    </>
  );
}
