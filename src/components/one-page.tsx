import About from "./about";
import Hero from "./hero";
import Playlist from "./my-songs";
import OrbitingIcons from "./orbit";
import { Posts } from "./posts";
import Projects from "./project";

export default function OnePage() {
  return (
    <div>
      <Hero />
      <div className="border-2 mt-24 w-full border-b-gray-500/10" />
      <div className="mt-24">
        <About />
      </div>
      <div className="border-2 mb-16 w-full border-b-gray-500/10" />
      <Projects />
      <div className="border-2 mb-16 w-full border-b-gray-500/10" />
      <Posts />
      <div className="border-2 mt-8 mb-16 w-full border-b-gray-500/10" />
      <Playlist />
      <div className="border-2 mt-8 mb-16 w-full border-b-gray-500/10" />
      <OrbitingIcons />
    </div>
  );
}
