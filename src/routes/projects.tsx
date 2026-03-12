import OnePage from "@/components/one-page";
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
import { useContext } from "react";
import { createPortal } from "react-dom";
import { FaGithub, FaLink } from "react-icons/fa";
import { DefaultContext } from "./__root";
import { thumbnails } from "@/constants/data";

export const Route = createFileRoute("/projects")({
  component: Projects,
});

export default function Projects() {
  const isDefault = useContext(DefaultContext);
  return (
    <>
      {isDefault ? (
        <>
          <BlurFade delay={0.25} inView>
            <div className="text-2xl text-center font-chivo mb-2 font-bold">
              Projects
            </div>
          </BlurFade>
          <BlurFade delay={0.5} inView>
            <div className="text-4xl text-center font-chivo mb-2 font-bold text-[#57AD5B]">
              Apps I’ve Crafted For Client
            </div>
          </BlurFade>
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
          <BlurFade delay={0.5} inView>
            <div className="text-4xl text-center font-chivo mb-2 font-bold text-[#57AD5B]">
              Mobile Apps I’ve Crafted
            </div>
          </BlurFade>
          <div className="mx-auto max-w-screen-xl flex-col lg:flex-row flex-wrap px-4 py-8 lg:px-12 xl:justify-normal lg:justify-center flex gap-4">
            {thumbnails
              .filter((thumbnail) => thumbnail.category === "Mobile App")
              .map((thumbnail, idx) => (
                <BlurFade key={thumbnail.id} delay={1 + idx * 0.25}>
                  <TooltipProvider>
                    <Card className="relative mb-4 p-4 lg:w-96 lg:h-40 md:w-96 md:h-40 sm:w-40 sm:h-36 flex items-center justify-center">
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
                              className={`rounded shadow-lg ${
                                thumbnail.title.includes("Field")
                                  ? "w-[300px] h-[450px]"
                                  : "w-[450px] h-[450px]"
                              }`}
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
              Apps I’ve Crafted
            </div>
          </BlurFade>
          <div className="mx-auto max-w-screen-xl flex-col lg:flex-row flex-wrap px-4 py-8 lg:px-12 xl:justify-normal lg:justify-center flex gap-4">
            {thumbnails
              .filter((thumbnail) => thumbnail.category === "Personal")
              .map((thumbnail, idx) => (
                <BlurFade key={thumbnail.id} delay={1 + idx * 0.25}>
                  <TooltipProvider>
                    <Card className="relative mb-4 p-4 lg:w-96 lg:h-40 md:w-96 md:h-40 sm:w-40 sm:h-36 flex items-center justify-center">
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
      ) : (
        <OnePage />
      )}
    </>
  );
}
