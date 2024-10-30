import atomichabits from "@/assets/atomichabits.png";
import masteryouremotion from "@/assets/masteryouremotion.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
      <div className="w-[500px] mx-auto mt-12">
        <Card className="bg-[#ECE8E1]">
          <CardHeader className="font-chivo text-center">
            <CardTitle className="text-2xl">My Book Journey</CardTitle>
            <CardDescription className="text-md">
              Explore the Reading Voyage that has influenced my perspectives and
              molded my ideas.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="flex flex-row items-center justify-center">
        <a
          href="https://devthoughtsnote.vercel.app/posts/6"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto cursor-pointer"
        >
          <Card className="max-w-[500px] mt-10 w-full h-auto  border-[1px] bg-[#ECE8E1] border-black mb-20 overflow-hidden">
            <CardHeader className="font-chivo text-center">
              <CardTitle className="leading-2">
                Master Your Emotions <br /> Author:
                <span> Thibaut Meurisse </span>
              </CardTitle>
              <CardDescription>
                Discover and comprehend your emotions through this insightful
                book, allowing for deeper reflection and personal growth.
              </CardDescription>
              <CardContent className="flex flex-row items-center justify-center space-x-2">
                <img
                  src={masteryouremotion}
                  alt="Master Your Emotion by: Thibaut Meurisse"
                  className="max-w-[500px] h-auto"
                />
              </CardContent>
            </CardHeader>
          </Card>
        </a>
        <a
          href="https://devthoughtsnote.vercel.app/posts/7"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto cursor-pointer"
        >
          <Card className="max-w-[500px] mt-10 w-full h-auto mx-auto border-[1px] bg-[#ECE8E1] border-black mb-20 overflow-hidden">
            <CardHeader className="font-chivo text-center">
              <CardTitle className="leading-2">
                Atomic Habits <br /> Author:
                <span> James Clear </span>
              </CardTitle>
              <CardDescription>
                Uncover how small, consistent habits can transform your life
                through proven systems and strategies.
              </CardDescription>
              <CardContent className="flex flex-row items-center justify-center space-x-2">
                <img
                  src={atomichabits}
                  alt="Atomic Habits by: James Clear"
                  className="max-w-[500px] h-auto"
                />
              </CardContent>
            </CardHeader>
          </Card>
        </a>
      </div>
    </>
  );
}
