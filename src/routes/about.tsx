import atomichabits from "@/assets/atomichabits.png";
import GitCert from "@/assets/Certificates/GitCert.jpg";
import UiUx from "@/assets/Certificates/UiUx.jpg";
import WebDev2022 from "@/assets/Certificates/webdev2022.jpg";
import WebDev2024 from "@/assets/Certificates/webdev2024.jpg";
import masteryouremotion from "@/assets/masteryouremotion.png";
import BlurFade from "@/components/ui/blur-fade";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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

const certs = [
  { src: WebDev2024, alt: "Web Development 2024 Certificate" },
  { src: GitCert, alt: "Git Certificate" },
  { src: WebDev2022, alt: "Web Development 2022 Certificate" },
  { src: UiUx, alt: "UI/UX Certificate" },
];

export const Route = createFileRoute("/about")({
  component: About,
});

export function About() {
  return (
    <>
      <BlurFade delay={0.25} inView>
        <div className="text-center text-2xl font-bold font-chivo">
          <span>About Me</span>
        </div>
      </BlurFade>
      <BlurFade delay={0.5} inView>
        <div className="text-center text-4xl font-bold font-chivo mt-4 text-[#57AD5B]">
          <span>A Path Through My Domain</span>
        </div>
        <div className="text-center text-4xl font-bold font-chivo mt-4 "></div>
      </BlurFade>
      <div className="relative flex items-center justify-center font-chivo">
        <IconCloud iconSlugs={slugs} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 5 }}
          className="absolute text-center text-2xl font-bold max-w-[800px] p-4"
        >
          <div>
            <span className="text-primary">
              "Mistake Means Progress" — dz.dev,{" "}
            </span>
            <div>
              <span className="text-primary">reflecting on the journey.</span>
            </div>
          </div>
        </motion.div>
      </div>
      <BlurFade delay={1} inView>
        <div className="w-full max-w-[800px] mx-auto mt-14">
          <Card className="bg-[#ECE8E1]">
            <CardHeader className="font-chivo text-left">
              <CardTitle className="text-2xl text-center">
                Introduction
              </CardTitle>
              <CardDescription className="text-md">
                I am a passionate Full Stack Developer and Software Engineer. My
                journey into this career began in high school when my teacher
                introduced us to C programming. From the moment I started
                coding, I realized this was what I wanted to do. It was an
                exciting challenge that required critical thinking and
                creativity skills I had developed through my love for chess,
                strategy games like Dota, logic puzzles, and other activities
                that test the mind.
                <br /> <br />
                For the first time in my life, I felt I had found something I
                was genuinely good at. That realization became the driving force
                behind my decision to pursue this path, and I’ve been committed
                to honing my skills and growing in this field ever since.
                <br /> <br />
                Outside of coding, I create music to nurture my artistic side
                and prevent burnout. <br /> <br />
                <ul className="list-disc list-inside">
                  <li>I'm a React/NextJS Enthusiast. 💯</li>
                  <li>A Software Engineer 👨‍💻</li>
                </ul>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </BlurFade>
      <Carousel className="w-full max-w-[600px] mx-auto mt-14">
        <div className="text-2xl font-bold mb-8 text-center">Certificates</div>
        <CarouselContent>
          {certs.map((certs, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="bg-[#ECE8E1]">
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <img
                      src={certs.src}
                      alt={certs.alt}
                      className="max-w-full h-auto"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <BlurFade delay={1} inView>
        <div className="w-full max-w-[500px] mx-auto mt-14">
          <Card className="bg-[#ECE8E1]">
            <CardHeader className="font-chivo text-center">
              <CardTitle className="text-2xl">My Book Journey</CardTitle>
              <CardDescription className="text-md">
                Explore the Reading Voyage that has influenced my perspectives
                and molded my ideas.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </BlurFade>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <a
          href="https://devthoughtsnote.vercel.app/posts/6"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto cursor-pointer"
        >
          <BlurFade delay={2} inView>
            <Card className="max-w-[350px] sm:max-w-[600px] mt-10 w-full h-auto  border-[1px] bg-[#ECE8E1] border-black mb-20 overflow-hidden">
              <CardHeader className="font-chivo text-center">
                <CardTitle className="leading-2">
                  Master Your Emotions <br /> Author:
                  <span> Thibaut Meurisse </span>
                </CardTitle>
                <CardDescription>
                  Discover and comprehend your emotions through this insightful
                  book, allowing for deeper reflection and personal growth.
                </CardDescription>
                <CardContent className="flex flex-col items-center justify-center space-x-2">
                  <img
                    src={masteryouremotion}
                    alt="Master Your Emotion by: Thibaut Meurisse"
                    className="max-w-full h-auto"
                  />
                </CardContent>
              </CardHeader>
            </Card>
          </BlurFade>
        </a>
        <a
          href="https://devthoughtsnote.vercel.app/posts/7"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto cursor-pointer"
        >
          <BlurFade delay={2} inView>
            <Card className="max-w-[350px] sm:max-w-[600px] mt-10 w-full h-auto border-[1px] bg-[#ECE8E1] border-black mb-20 overflow-hidden">
              <CardHeader className="font-chivo text-center">
                <CardTitle className="leading-2">
                  Atomic Habits <br /> Author:
                  <span> James Clear </span>
                </CardTitle>
                <CardDescription>
                  Uncover how small, consistent habits can transform your life
                  through proven systems and strategies.
                </CardDescription>
                <CardContent className="flex flex-col items-center justify-center space-x-2">
                  <img
                    src={atomichabits}
                    alt="Atomic Habits by: James Clear"
                    className="max-w-[500px] h-auto"
                  />
                </CardContent>
              </CardHeader>
            </Card>
          </BlurFade>
        </a>
      </div>
    </>
  );
}
