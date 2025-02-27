import profile from "@/assets/profile.jpg";
import profile2 from "@/assets/profile2.jpg";
import profile3 from "@/assets/profile3.jpg";
import profile4 from "@/assets/profile4.jpg";

import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TypingAnimation from "./ui/typing-animation";

const images = [profile, profile2, profile3, profile4];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [fadeCurrent, setFadeCurrent] = useState(true);
  const [fadeNext, setFadeNext] = useState(true);

  useEffect(() => {
    function updateImages() {
      setFadeCurrent(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setNextImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFadeCurrent(true);
      }, 500);

      setFadeNext(false);
      setTimeout(() => {
        setFadeNext(true);
      }, 1000);
    }

    updateImages();

    const interval = setInterval(updateImages, 10000);

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <>
      <div className="relative flex items-start justify-center bg-[#ECE8E1]">
        <div className="relative mt-10">
          <div className="absolute top-[-12px] left-[-5px] w-20 h-6 bg-[#57AD5B] rotate-[-30deg] shadow-md z-10"></div>
          <div className="absolute bottom-[-8px] right-[-6px] w-20 h-6 bg-[#57AD5B] rotate-[-60deg] shadow-md z-10"></div>
          <div className="flex flex-col sm:flex-row">
            <img
              src={images[currentImageIndex]}
              className={`bigger:max-h-[800px] laptop:max-h-[500px] xl:max-h-[700px] lg:max-h-[550px] md:max-h-[450px] sm:max-h-[400px] max-sm:max-h-[400px] rounded-xl border-4 border-[#ECE8E1] shadow-lg transform rotate-3 transition-opacity duration-500 ${fadeCurrent ? "opacity-100" : "opacity-0"}`}
              alt="Profile background"
            />
            <img
              src={images[nextImageIndex]}
              className={`bigger:max-h-[800px] xl:max-h-[700px] laptop:max-h-[500px] lg:max-h-[550px] md:max-h-[450px] sm:max-h-[400px] max-sm:hidden rounded-xl border-4 border-[#ECE8E1] shadow-lg transform rotate-3 transition-opacity duration-500 ${fadeNext ? "opacity-100" : "opacity-0"}`}
              alt="Profile background"
            />
          </div>
          <div className="absolute md:bottom-8 bottom-2 right-6 text-center left-10">
            <p className="font-chivo text-white font-semibold">
              <TypingAnimation
                className="text-md lg:text-2xl md:text-lg max-sm:text-sm"
                text="I'm dz.dev Discover projects, skills, and new ideas as I share my
                journey as a passionate Software Engineer. Let's build
                something amazing together!"
                duration={40}
              />
            </p>
            <div className="flex justify-center items-center flex-row space-x-4 mt-4 mb-2 mr-10">
              <Link
                to="/projects"
                className="bg-[#57AD5B] text-white font-chivo font-semibold px-4 py-2 rounded-lg hover:bg-[#4A8C4E] transition-colors duration-300 text-sm"
              >
                Projects
              </Link>
              <a
                href="https://github.com/Dz-devz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-[30px] h-[30px] hover:bg-gray-400 transition-colors duration-300 rounded-full" />
              </a>
              <a
                href="https://www.linkedin.com/in/darwinbjordan/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-[30px] h-[30px] hover:bg-gray-400 transition-colors duration-300 rounded-md" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
