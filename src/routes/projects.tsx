import drizzlekit from "@/assets/drizzlekit.png";
import javascript from "@/assets/javascript.png";
import nextjs from "@/assets/nextjs.png";
import pokemon from "@/assets/pokemon.png";
import pokemonthumbnail from "@/assets/pokemonthumbnail.png";
import portfoliothumbnail from "@/assets/portfoliothumbnail.png";
import prisma from "@/assets/prisma.png";
import reactjs from "@/assets/reactjs.png";
import tailwind from "@/assets/tailwind.png";
import blogthumbnail from "@/assets/thumbnail.png";
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

const thumbnails = [
  {
    id: 1,
    title: "Full Stack App",
    desc: "TrackNStock - (Deployment On Going)",
    thumbnail: "",
    link: "",
    tools: {
      javascript: javascript,
      typescript: typescript,
      nextjs: reactjs,
      prisma: drizzlekit,
      tailwind: tailwind,
    },
  },
  {
    id: 2,
    title: "Full Stack App",
    desc: "DevThoughts",
    thumbnail: blogthumbnail,
    link: "https://devthoughtsnote.vercel.app/",
    tools: {
      javascript: javascript,
      typescript: typescript,
      nextjs: nextjs,
      prisma: prisma,
      tailwind: tailwind,
    },
  },
  {
    id: 3,
    title: "Pokemon API App",
    desc: "Pokemon Dex",
    thumbnail: pokemonthumbnail,
    link: "https://nostalgic-pokedex.vercel.app/",
    tools: {
      javascript: javascript,
      typescript: typescript,
      nextjs: nextjs,
      tailwind: tailwind,
      pokemon: pokemon,
    },
  },
  {
    id: 4,
    title: "Dz.dev Portfolio",
    desc: "Personal Portfolio",
    thumbnail: portfoliothumbnail,
    link: "https://dzdev.vercel.app/",
    tools: {
      javascript: javascript,
      typescript: typescript,
      reactjs: reactjs,
      tailwind: tailwind,
    },
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
        {thumbnails.map((thumbnail, idx) => (
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
                  <TooltipContent>
                    <img
                      src={thumbnail.thumbnail}
                      alt="Thumbnail"
                      className="w-[500px] h-[350px] rounded shadow-lg transition-transform transform group-hover:scale-105"
                    />
                  </TooltipContent>
                </Tooltip>
              </Card>
            </TooltipProvider>
          </BlurFade>
        ))}
      </div>
    </>
  );
}
