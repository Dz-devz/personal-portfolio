import background from "@/assets/profilehome.jpg";
import TypingAnimation from "./ui/typing-animation";

export default function Home() {
  return (
    <>
      <div className="relative flex items-start justify-center h-screen bg-[#ECE8E1]">
        <div className="relative">
          <div className="absolute top-[-12px] left-[-5px] w-20 h-6 bg-[#57AD5B] rotate-[-30deg] shadow-md z-10"></div>
          <div className="absolute bottom-[-8px] right-[-6px] w-20 h-6 bg-[#57AD5B] z-10 rotate-[-60deg] shadow-md"></div>

          <img
            src={background}
            className="w-full max-w-[1000px] h-auto rounded-xl border-4 border-[#ECE8E1] shadow-lg transform rotate-3"
            alt="Profile background"
          />
          <div className="absolute md:bottom-20 bottom-2 right-6 text-center left-10">
            <p className="font-chivo text-white font-semibold">
              <TypingAnimation
                className="text-md lg:text-4xl md:text-2xl"
                text="I'm dz.dev Discover projects, skills, and new ideas as I share my
              journey as a passionate Full Stack Developer. Let's build
              something amazing together!"
                duration={40}
              />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
