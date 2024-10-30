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
            className="w-[1000px] h-[800px] rounded-xl border-4 border-[#ECE8E1] shadow-lg transform rotate-3"
          />
          <div className="absolute bottom-20 right-6 text-center left-10">
            <p className="font-chivo text-white font-semibold">
              <TypingAnimation
                className="text-4xl"
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
