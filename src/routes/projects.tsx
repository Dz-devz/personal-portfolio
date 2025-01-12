import BelleWebsite from "@/assets/bellewebsite.gif";
import devthoughtsgif from "@/assets/devthoughtsgif.gif";
import drizzlekit from "@/assets/drizzlekit.png";
import express from "@/assets/express.png";
import honojs from "@/assets/honojs.png";
import invoiceprogif from "@/assets/invoiceprothumbnail.gif";
import javascript from "@/assets/javascript.png";
import nextjs from "@/assets/nextjs.png";
import nodejs from "@/assets/nodejs.png";
import pokemon from "@/assets/pokemon.png";
import pokemongif from "@/assets/pokemongif.gif";
import dzdevthumbnail from "@/assets/portfoliothumbnail.gif";
import prisma from "@/assets/prisma.png";
import reactjs from "@/assets/reactjs.png";
import tailwind from "@/assets/tailwind.png";
import taskapigif from "@/assets/taskapigif.gif";
import tracknstock from "@/assets/tracknstock.gif";
import typescript from "@/assets/typescript.png";
import BlurFade from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { createFileRoute, Link } from "@tanstack/react-router";
import { createPortal } from "react-dom";
import { FaGithub, FaLink } from "react-icons/fa";

const thumbnails = [
  {
    id: 1,
    title: "TrackNStock",
    desc: "Full Stack App",
    thumbnail: tracknstock,
    link: "https://tracknstock.up.railway.app/",
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
    id: 3,
    title: "Pokemon Dex",
    desc: "Pokemon API App",
    thumbnail: pokemongif,
    link: "https://nostalgic-pokedex.vercel.app/",
    github: "",
    tools: {
      javascript: javascript,
      typescript: typescript,
      nextjs: nextjs,
      tailwind: tailwind,
      pokemon: pokemon,
    },
    category: "Personal",
  },
  {
    id: 4,
    title: "Dz.dev Portfolio",
    desc: "Personal Portfolio",
    thumbnail: dzdevthumbnail,
    link: "https://dzdev.vercel.app/",
    github: "https://github.com/Dz-devz/personal-portfolio.git",
    tools: {
      javascript: javascript,
      typescript: typescript,
      reactjs: reactjs,
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
    link: "https://task-api-prod.up.railway.app",
    github: "https://github.com/Dz-devz/task-api",
    tools: {
      javascript: javascript,
      typescript: typescript,
      node: nodejs,
      hono: honojs,
      prisma: prisma,
    },
    category: "Personal",
  },
  {
    id: 7,
    title: "Belle Services",
    desc: "Services Website",
    thumbnail: BelleWebsite,
    link: "https://www.bellecastillo.com/",
    tools: {
      javascript: javascript,
      typescript: typescript,
      reactjs: reactjs,
      tailwind: tailwind,
    },
    category: "Client",
  },
];

export const Route = createFileRoute("/projects")({
  component: Projects,
});

export default function Projects() {
  return (
    <>
      <BlurFade delay={0.25} inView>
        <div className="text-2xl text-center font-chivo mb-2 font-bold">
          Projects
        </div>
      </BlurFade>
      <BlurFade delay={0.5} inView>
        <div className="text-4xl text-center font-chivo mb-2 font-bold text-[#57AD5B]">
          Apps I’ve Crafted
        </div>
      </BlurFade>
      {/* <BlurFade delay={0.75} inView>
        <h1 className="text-2xl text-center font-chivo mt-2 max-w-3xl mx-auto">
          Take a look at some of my recent projects—practical <br /> solutions
          built to refine my skills and bring useful features to life.
        </h1>
      </BlurFade> */}
      <div className="mx-auto max-w-screen-xl flex-col lg:flex-row flex-wrap px-4 py-8 lg:px-12 xl:justify-normal lg:justify-center flex gap-4">
        {thumbnails
          .filter((thumbnail) => thumbnail.category === "Personal")
          .map((thumbnail, idx) => (
            <BlurFade key={thumbnail.id} delay={1 + idx * 0.5} inView>
              <TooltipProvider>
                <Card className="relative mb-4 p-4 lg:w-96 lg:h-36 md:w-96 md:h-36 sm:w-40 sm:h-36 flex items-center justify-center">
                  <BorderBeam
                    size={80}
                    duration={12 * thumbnail.id}
                    delay={9 * thumbnail.id}
                    colorFrom="#000000"
                    colorTo="#57AD5B"
                  />
                  <Tooltip>
                    <TooltipTrigger>
                      <Link
                        to={thumbnail.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="relative font-chivo">
                          <div className="flex flex-col">
                            <CardTitle className="text-xl md:text-2xl lg:text-3xl text-[#57AD5B]">
                              {thumbnail.title}
                            </CardTitle>
                            <div className="flex flex-row gap-2">
                              <Link
                                to={thumbnail.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaGithub />
                              </Link>
                              <Link
                                to={thumbnail.link}
                                rel="noopener noreferrer"
                              >
                                <FaLink />
                              </Link>
                            </div>
                            <CardDescription className="text-muted-foreground text-sm md:text-base lg:text-lg">
                              {thumbnail.desc}
                            </CardDescription>
                            <div className="flex gap-2">
                              {Object.entries(thumbnail.tools).map(
                                ([toolName, toolIcon]) => (
                                  <img
                                    key={toolName}
                                    src={toolIcon}
                                    alt={`${toolName} icon`}
                                    className="w-6 h-6"
                                  />
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </TooltipTrigger>
                    {createPortal(
                      <TooltipContent className="z-[9999]">
                        <img
                          src={thumbnail.thumbnail}
                          alt="Thumbnail"
                          className="w-[500px] h-[350px] rounded shadow-lg"
                        />
                      </TooltipContent>,
                      document.body
                    )}
                  </Tooltip>
                </Card>
              </TooltipProvider>
            </BlurFade>
          ))}
      </div>
      <BlurFade delay={0.5} inView>
        <div className="text-4xl text-center font-chivo mb-2 font-bold text-[#57AD5B]">
          Apps I’ve Crafted For Client
        </div>
      </BlurFade>
      {/* <BlurFade delay={0.75} inView>
        <h1 className="text-2xl text-center font-chivo mt-2 max-w-3xl mx-auto">
          Take a look at some of my recent projects—practical <br /> solutions
          built to refine my skills and bring useful features to life.
        </h1>
      </BlurFade> */}
      <div className="mx-auto max-w-screen-xl flex-col lg:flex-row flex-wrap px-4 py-8 lg:px-12 xl:justify-normal lg:justify-center flex gap-4">
        {thumbnails
          .filter((thumbnail) => thumbnail.category === "Client")
          .map((thumbnail, idx) => (
            <BlurFade key={thumbnail.id} delay={1 + idx * 0.5} inView>
              <TooltipProvider>
                <Card className="relative mb-4 p-4 lg:w-96 lg:h-36 md:w-96 md:h-36 sm:w-40 sm:h-36 flex items-center justify-center">
                  <BorderBeam
                    size={80}
                    duration={12 * thumbnail.id}
                    delay={9 * thumbnail.id}
                    colorFrom="#000000"
                    colorTo="#57AD5B"
                  />
                  <Tooltip>
                    <TooltipTrigger>
                      <Link
                        to={thumbnail.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="relative font-chivo">
                          <div className="flex flex-col">
                            <CardTitle className="text-xl md:text-2xl lg:text-3xl text-[#57AD5B]">
                              {thumbnail.title}
                            </CardTitle>
                            <div className="flex flex-row gap-2">
                              <Link
                                to={thumbnail.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <FaGithub />
                              </Link>
                              <Link
                                to={thumbnail.link}
                                rel="noopener noreferrer"
                              >
                                <FaLink />
                              </Link>
                            </div>
                            <CardDescription className="text-muted-foreground text-sm md:text-base lg:text-lg">
                              {thumbnail.desc}
                            </CardDescription>
                            <div className="flex gap-2">
                              {Object.entries(thumbnail.tools).map(
                                ([toolName, toolIcon]) => (
                                  <img
                                    key={toolName}
                                    src={toolIcon}
                                    alt={`${toolName} icon`}
                                    className="w-6 h-6"
                                  />
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </TooltipTrigger>
                    {createPortal(
                      <TooltipContent className="z-[9999]">
                        <img
                          src={thumbnail.thumbnail}
                          alt="Thumbnail"
                          className="w-[500px] h-[350px] rounded shadow-lg"
                        />
                      </TooltipContent>,
                      document.body
                    )}
                  </Tooltip>
                </Card>
              </TooltipProvider>
            </BlurFade>
          ))}
      </div>
    </>
  );
}
