import { createFileRoute } from '@tanstack/react-router';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import blogthumbnail from "@/assets/thumbnail.png"
import pokemonthumbnail from "@/assets/pokemonthumbnail.png"

const thumbnails = [
  {
    id: 1,
    title: "Full Stack App",
    desc: "DevThoughts",
    thumbnail: blogthumbnail,
  },
  {
    id: 2,
    title: "API App",
    desc: "Pokemon Dex",
    thumbnail: pokemonthumbnail,
  }
]

export const Route = createFileRoute("/projects")({
  component: Projects,
});

export default function Projects() {
  return (
<div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-4">Projects</h1>
      <TooltipProvider>
        {thumbnails.map((thumbnail) => (
    <>
      <Card className='mb-4'>
        <Tooltip>
          <TooltipTrigger>
            <div className="relative flex" key={thumbnail.id}>
              <div className='flex flex-col items-center justify-center'>
                <CardTitle className='text-xl md:text-2xl lg:text-3xl'>{thumbnail.title}</CardTitle>
                <CardDescription>{thumbnail.desc}</CardDescription>
              </div>
              <CardContent className='flex items-center justify-center p-4'>
                <img
                src={thumbnail.thumbnail}
                alt="Thumbnail"
                className="w-[300px] h-[300px] rounded shadow-lg transition-transform transform group-hover:scale-105" />
              </CardContent>
            </div>
          </TooltipTrigger>
          <TooltipContent>
              <img
                src={thumbnail.thumbnail}
                alt="Thumbnail"
                className="w-[750px] h-[450px] rounded shadow-lg transition-transform transform group-hover:scale-105" />
            </TooltipContent>
        </Tooltip>
      </Card>
    </>
      ))}
      </TooltipProvider>
  </div>
  );
}
