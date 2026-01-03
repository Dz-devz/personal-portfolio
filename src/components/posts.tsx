"use client";

import axios from "axios";
import BlurFade from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const Route = createFileRoute("/posts")({
  component: Posts,
});

interface Post {
  id: number;
  category: string;
  title: string;
  description: string;
  body: string;
  visibility: string;
  isApproved: boolean;
  link?: string; // Optional, if you have a live link
  github?: string; // Optional
  thumbnail?: string; // Optional image
  tools?: Record<string, string>; // Optional tools with icons
}

export function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get<Post[]>("/api/all-posts");
        setPosts(res.data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section id="posts">
      <BlurFade delay={0.25} inView>
        <div className="text-xl sm:text-2xl md:text-3xl text-center font-chivo mb-2 font-bold">
          DevThoughts Posts
        </div>
      </BlurFade>

      <BlurFade delay={0.5} inView>
        <div className="text-2xl sm:text-3xl md:text-4xl text-center font-chivo mb-4 md:mb-6 font-bold text-[#57AD5B]">
          Have something to share?{" "}
          <a
            href="https://devthoughtsnote.vercel.app/create-post"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Post it here
          </a>
        </div>
      </BlurFade>

      {loading ? (
        <div className="text-center mt-8">Loading posts...</div>
      ) : (
        <div className="mx-auto max-w-screen-xl flex-col lg:flex-row flex-wrap px-4 py-8 lg:px-12 xl:justify-normal lg:justify-center flex gap-4">
          {posts
            .filter((post) => post.visibility === "public")
            .map((post, idx) => (
              <BlurFade key={post.id} delay={1 + idx * 0.5} inView>
                <TooltipProvider>
                  <Card className="relative mb-4 p-4 lg:w-96 lg:h-40 md:w-96 md:h-40 sm:w-40 sm:h-36 flex items-center justify-center">
                    <BorderBeam
                      size={80}
                      colorFrom="#000000"
                      colorTo="#57AD5B"
                    />
                    <Tooltip>
                      <TooltipTrigger>
                        <div className="relative font-chivo cursor-pointer">
                          <div className="flex flex-col">
                            <CardTitle className="text-xl md:text-2xl lg:text-3xl text-[#57AD5B]">
                              {post.title}
                            </CardTitle>
                            <CardDescription className="text-muted-foreground text-sm md:text-base lg:text-lg">
                              {post.description}
                            </CardDescription>
                          </div>
                        </div>
                      </TooltipTrigger>
                      {post.thumbnail &&
                        createPortal(
                          <TooltipContent className="z-[9999]">
                            <img
                              src={post.thumbnail}
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
      )}
    </section>
  );
}
