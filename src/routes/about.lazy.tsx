import { createLazyFileRoute } from '@tanstack/react-router'
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


export const Route = createLazyFileRoute('/about')({
  component: About,
})

export function About() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "I'm a Passionate Full Stack Developer dedicated to honing my skills through continual growth and improvement With a head full of Profound ideas, I'm on a journey to turn concept and ideas into reality through code." +
        " Outside of coding, I create music to nurture my artistic side and prevent burnout.";
  
  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      setDisplayedText((prevText) => prevText + fullText[currentIndex]);
      currentIndex++;

      if (currentIndex === fullText.length) {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust typing speed (milliseconds)

    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <div className='flex item-center justify-center h-screen'>
      <div className='text-left text-2xl w-[800px]'>
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <span>{displayedText}</span>
    </motion.div>
      </div>
    </div>
  )
}