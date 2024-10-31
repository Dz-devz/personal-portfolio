import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Home from "../components/home";

export const Route = createFileRoute("/")({
  component: Index,
});

const waterDropVariants = {
  drop: {
    scale: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    opacity: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0],
    transition: {
      duration: 1,
      ease: "easeOut",
      repeat: 0,
    },
  },
};

function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleTwo, setIsVisibleTwo] = useState(false);
  const [isVisibleWave, setIsVisibleWave] = useState(false);
  const [isBentoShow, setBentoShow] = useState(false);
  const [isNotVisible, setNotVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    setTimeout(() => {
      setIsVisible(false);
    }, 2000);
    setTimeout(() => {
      setIsVisibleTwo(true);
    }, 3000);
    setTimeout(() => {
      setIsVisibleTwo(false);
    }, 5000);
    setTimeout(() => {
      setIsVisibleWave(true);
    }, 6000);
    setTimeout(() => {
      setNotVisible(false);
    }, 7000);
    setTimeout(() => {
      setBentoShow(true);
    }, 7000);

    return () => clearTimeout(timeoutId);
  }, []);

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1, duration: 1 } },
  };

  return (
    <>
      <div className="bg-[#ECE8E1]">
        {isBentoShow && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={pageVariants}
          >
            <Home />
          </motion.div>
        )}
        {isNotVisible && (
          <div className="flex items-center justify-center md:mt-[15rem] mt-[10rem] px-4">
            <div
              className={`transition-opacity duration-1000 ease-in-out relative w-full h-full flex flex-col items-center justify-center`}
            >
              <div className="tracking-wider font-chivo font-semibold z-10 text-center mb-[15rem]">
                <p
                  className={`transition-opacity duration-1000 ease-in-out text-black lg:text-[54px] md:text-[40px] text-xl ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Opportunity knocks only once
                </p>
                <p
                  className={`transition-opacity duration-1000 ease-in-out text-black text-xl lg:text-[54px] md:text-[40px] ${
                    isVisibleTwo ? "opacity-100" : "opacity-0"
                  }`}
                >
                  it's now or never.
                </p>
              </div>
              {isVisibleWave && (
                <>
                  <motion.div
                    className="absolute mb-32 md:mb-42 rounded-full shadow-inner-custom-two w-[80vw] h-[80vw] md:w-[50rem] md:h-[50rem] border-8 md:border-26 border-[#ECE8E1]"
                    initial="hidden"
                    animate="drop"
                    variants={waterDropVariants}
                  />
                  <motion.div
                    className="absolute mb-32 md:mb-42 rounded-full shadow-inner-custom-two w-[68vw] h-[68vw] md:w-[42rem] md:h-[42rem] border-8 md:border-26 border-[#ECE8E1]"
                    initial="hidden"
                    animate="drop"
                    variants={waterDropVariants}
                  />
                  <motion.div
                    className="absolute mb-32 md:mb-42 rounded-full shadow-inner-custom-two w-[56vw] h-[56vw] md:w-[35rem] md:h-[35rem] border-8 md:border-26 border-[#ECE8E1]"
                    initial="hidden"
                    animate="drop"
                    variants={waterDropVariants}
                  />
                  <motion.div
                    className="absolute mb-28 md:mb-40 rounded-full shadow-inner-custom-two w-[40vw] h-[40vw] md:w-[26rem] md:h-[26rem] border-8 md:border-26 border-[#ECE8E1]"
                    initial="hidden"
                    animate="drop"
                    variants={waterDropVariants}
                  />
                  <motion.div
                    className="absolute mb-28 md:mb-40 rounded-full shadow-inner-custom-two w-[28vw] h-[28vw] md:w-[18rem] md:h-[18rem] border-8 md:border-26 border-[#ECE8E1]"
                    initial="hidden"
                    animate="drop"
                    variants={waterDropVariants}
                  />
                  <motion.div
                    className="absolute mb-28 md:mb-40 rounded-full shadow-inner-custom-two w-[15vw] h-[15vw] md:w-[10rem] md:h-[10rem] border-8 md:border-26 border-[#ECE8E1]"
                    initial="hidden"
                    animate="drop"
                    variants={waterDropVariants}
                  />
                  <motion.div
                    className="transition-opacity duration-2000 ease-in-out absolute mb-28 md:mb-40 rounded-r-[30%] rounded-t-[80%] rounded-l-[80%] shadow-inner-custom-two w-[5vw] h-[5vw] md:w-[2rem] md:h-[2rem] border-2 border-[#ECE8E1]"
                    initial="hidden"
                    animate="drop"
                    variants={waterDropVariants}
                  />
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Index;
