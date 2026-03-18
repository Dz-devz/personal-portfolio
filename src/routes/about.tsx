import atomichabits from "@/assets/atomichabits.png";
import masteryouremotion from "@/assets/masteryouremotion.png";

import OnePage from "@/components/one-page";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useContext } from "react";
import { DefaultContext } from "./__root";
import { certs, experiences, testimonials } from "@/constants/data";

export const Route = createFileRoute("/about")({
  component: About,
});

export function About() {
  const isDefault = useContext(DefaultContext);

  return (
    <>
      {isDefault ? (
        <div className="px-4 sm:px-6 md:px-8">
          {/* Header */}
          <BlurFade delay={0.25} inView>
            <div className="text-center text-2xl font-bold font-chivo">
              <span>About Me</span>
            </div>
          </BlurFade>

          <BlurFade delay={0.5} inView>
            <div className="text-center text-3xl sm:text-4xl font-bold font-chivo mt-4 text-[#57AD5B]">
              <span>A Path Through My Domain</span>
            </div>
          </BlurFade>

          {/* Quote */}
          <div className="relative flex items-center justify-center font-chivo mt-16 mb-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 5 }}
              className="text-center text-xl sm:text-2xl font-bold max-w-[800px] p-4"
            >
              <span className="text-primary">
                "Mistake Means Progress" — dz.dev, reflecting on my journey.
              </span>
            </motion.div>
          </div>

          {/* Experience */}
          <BlurFade delay={1} inView>
            <div className="w-full max-w-[800px] mx-auto mt-14">
              <p className="text-xs font-medium tracking-widest uppercase text-neutral-400 mb-8 font-chivo">
                Work Experience
              </p>
              <div className="border-l border-neutral-300 pl-4 sm:pl-6 flex flex-col gap-4">
                {experiences.map((exp, i) => (
                  <div
                    key={i}
                    className="relative bg-card border border-neutral-200 rounded-xl px-4 sm:px-6 py-5 hover:border-neutral-300 transition-colors"
                  >
                    <span className="absolute -left-[1.125rem] sm:-left-[1.625rem] top-6 w-2 h-2 rounded-full bg-neutral-300 border-2 border-white" />

                    {/* Title row — stacks on mobile */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-1">
                      <div>
                        <p className="font-chivo font-medium text-[15px] text-black">
                          {exp.title}
                        </p>
                        <p className="text-sm text-neutral-500 mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                      <span
                        className={`self-start text-[11px] font-medium px-3 py-1 rounded-full shrink-0 ${exp.badgeStyle}`}
                      >
                        {exp.badge}
                      </span>
                    </div>

                    <p className="text-xs text-neutral-400 mb-3 font-chivo">
                      {exp.period}
                    </p>

                    <ul className="flex flex-col gap-1.5">
                      {exp.bullets.map((b, j) => (
                        <li
                          key={j}
                          className="text-[13px] text-neutral-600 leading-relaxed pl-4 relative"
                        >
                          <span className="absolute left-0 top-[9px] w-1 h-1 rounded-full bg-neutral-300" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-neutral-100">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] text-neutral-400 bg-neutral-50 border border-neutral-200 rounded px-2 py-0.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>

          {/* Testimonials — single unified layout, grid on md+ */}
          <BlurFade delay={1.2} inView>
            <h2 className="text-2xl mt-16 text-center mb-6 font-chivo">
              Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1200px] mx-auto mb-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-[#ECE8E1] w-full font-chivo">
                  <div className="flex flex-col items-center p-4 sm:p-6">
                    <Avatar className="mt-2 w-14 h-14">
                      <AvatarImage
                        src={testimonial.src}
                        alt={testimonial.alt}
                      />
                      <AvatarFallback>{testimonial.fallback}</AvatarFallback>
                    </Avatar>
                    <p className="text-center font-semibold mt-2 text-sm">
                      {testimonial.name}
                    </p>
                    <div className="mt-1 text-base">⭐⭐⭐⭐⭐</div>
                    <p className="text-sm text-neutral-600 text-center mt-3 px-2 leading-relaxed">
                      {testimonial.desc}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </BlurFade>

          {/* Certificates */}
          <BlurFade delay={1.4} inView>
            <div className="text-2xl font-bold mb-8 text-center font-chivo mt-14">
              Certificates
            </div>
            <Carousel className="w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] mx-auto">
              <CarouselContent>
                {certs.map((cert, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="bg-[#ECE8E1]">
                        <CardContent className="flex aspect-square items-center justify-center p-4 sm:p-6">
                          <img
                            src={cert.src}
                            alt={cert.alt}
                            className="max-w-full h-auto rounded-xl"
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
          </BlurFade>

          {/* Books */}
          <BlurFade delay={1} inView>
            <div className="w-full max-w-[500px] mx-auto mt-14">
              <Card className="bg-[#ECE8E1]">
                <CardHeader className="font-chivo text-center">
                  <CardTitle className="text-2xl">My Book Journey</CardTitle>
                  <CardDescription className="text-md">
                    Explore the Reading Voyage that has influenced my
                    perspectives and molded my ideas.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </BlurFade>

          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-6 mt-10 mb-20 px-4">
            <a
              href="https://devthoughtsnote.vercel.app/posts/6"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[400px] lg:max-w-[380px]"
            >
              <BlurFade delay={1.3} inView>
                <Card className="w-full border border-black bg-[#ECE8E1] overflow-hidden hover:shadow-md transition-shadow">
                  <CardHeader className="font-chivo text-center">
                    <CardTitle className="leading-snug">
                      Master Your Emotions
                      <br />
                      <span className="font-normal text-base">
                        Author: Thibaut Meurisse
                      </span>
                    </CardTitle>
                    <CardDescription>
                      Discover and comprehend your emotions through this
                      insightful book, allowing for deeper reflection and
                      personal growth.
                    </CardDescription>
                    <CardContent className="flex flex-col items-center justify-center pt-4 px-0">
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
              className="w-full max-w-[400px] lg:max-w-[380px]"
            >
              <BlurFade delay={1.6} inView>
                <Card className="w-full border border-black bg-[#ECE8E1] overflow-hidden hover:shadow-md transition-shadow">
                  <CardHeader className="font-chivo text-center">
                    <CardTitle className="leading-snug">
                      Atomic Habits
                      <br />
                      <span className="font-normal text-base">
                        Author: James Clear
                      </span>
                    </CardTitle>
                    <CardDescription>
                      Uncover how small, consistent habits can transform your
                      life through proven systems and strategies.
                    </CardDescription>
                    <CardContent className="flex flex-col items-center justify-center pt-4 px-0">
                      <img
                        src={atomichabits}
                        alt="Atomic Habits by: James Clear"
                        className="max-w-full h-auto"
                      />
                    </CardContent>
                  </CardHeader>
                </Card>
              </BlurFade>
            </a>
          </div>
        </div>
      ) : (
        <OnePage />
      )}
    </>
  );
}
