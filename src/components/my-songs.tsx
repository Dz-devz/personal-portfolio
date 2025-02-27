import BlurFade from "@/components/ui/blur-fade";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const playlistLink = [
  { title: "What if?", url: "https://www.youtube.com/watch?v=Kn8BgwmVwlc" },
  {
    title: "I wish I met you first",
    url: "https://www.youtube.com/watch?v=-7EWvFcnf68",
  },
  {
    title: "Why Am I Still Still Holding You",
    url: "https://www.youtube.com/watch?v=BmaEU_1usLY",
  },
  { title: "Bother", url: "https://www.youtube.com/watch?v=ARJ-DZBfs6M" },
  {
    title: "Doubt (Ver.2)",
    url: "https://www.youtube.com/watch?v=in30sWfKBSE",
  },
  { title: "Empty voice", url: "https://www.youtube.com/watch?v=lAtM8gG5fwQ" },
  {
    title: "You are my princess",
    url: "https://www.youtube.com/watch?v=Nlf2NRix0C8",
  },
  { title: "Nightmare", url: "https://www.youtube.com/watch?v=mbUG6UvdgdM" },
];

export default function Playlist() {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="text-2xl font-bold text-center mb-4">My Songs</div>
      <div className="text-center text-4xl font-bold font-chivo text-[#57AD5B] mb-4">
        <span>My Favorite Songs that I produced</span>
      </div>
      <BlurFade delay={1} inView>
        <div className="w-full max-w-[500px] mx-auto mb-8">
          <Card className="bg-[#ECE8E1]">
            <CardHeader className="font-chivo text-center">
              <CardTitle className="text-2xl">
                DevArtisan: An Overview
              </CardTitle>
              <CardDescription className="text-md">
                I’m not just a developer, I’m also a music producer and artist,
                known by the name DzPen. Music has always been a big part of my
                journey, and I’ve created several songs that reflect my
                creativity. Here are some of my works.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </BlurFade>
      <BlurFade delay={1.5} inView>
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8">
          {playlistLink.map((video, index) => (
            <div key={index} className="mb-8">
              <h3 className="mb-4 text-xl font-semibold font-chivo 2xl:text-left xl:text-left lg:text-left md:text-left sm:text-left mobileL:text-center mobileM:text-center mobileS:text-center">
                {video.title}
              </h3>
              <iframe
                className="2xl:max-w-[400px] xl:max-w-[400px] lg:max-w-[400px] md:max-w-[400px] sm:max-w-[400px] mobileL:max-w-[350px] mobileM:max-w-[320px] mobileS:max-w-[300px] flex items-center justify-center mx-auto 2xl:max-h-[300px] xl:max-h-[300px] lg:max-h-[300px] md:max-h-[300px] sm:max-h-[300px] mobileL:max-h-[250px] mobileM:max-h-[230px] mobileS:max-h-[200px]"
                width="400"
                height="300"
                src={video.url.replace("watch?v=", "embed/")}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
      </BlurFade>
    </div>
  );
}
