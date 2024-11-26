import React from 'react';
import { motion } from 'framer-motion';
import { FaLocationArrow } from "react-icons/fa6";
import { CodeIcon, BrainCircuit } from "lucide-react";
import { FaRocket } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const HeroBackground = () => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="absolute inset-0 overflow-hidden"
  >
    {/* Futuristic Grid Background */}
    <div className="absolute inset-0 bg-gradient-to-br">
      <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none"></div>
    </div>

    {/* Animated Floating Shapes - Adjusted for better mobile visibility */}
    <motion.div 
      className="absolute top-1/4 left-1/4 w-12 h-12 sm:w-20 sm:h-20 bg-blue-500/20 rounded-full blur-xl"
      animate={{
        scale: [1, 1.3, 1],
        rotate: [0, 360],
        x: [-30, 30, -30],
        y: [0, 20, 0],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        repeatType: "loop"
      }}
    />
    <motion.div 
      className="absolute bottom-1/4 right-1/4 w-10 h-10 sm:w-16 sm:h-16 bg-purple-500/20 rounded-full blur-xl"
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, -360],
        x: [30, -30, 30],
        y: [0, 20, 0],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        repeatType: "loop"
      }}
    />
  </motion.div>
);

const TechStack = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1, duration: 0.8 }}
    className="flex flex-wrap items-center justify-center space-x-2 sm:space-x-4 mt-6 sm:mt-8"
  >
    <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full mb-2">
      <CodeIcon className="mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5 text-blue-300" />
      <span className="text-xs sm:text-sm text-blue-100">Next.js</span>
    </div>
    <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full mb-2">
      <BrainCircuit className="mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5 text-green-300" />
      <span className="text-xs sm:text-sm text-green-100">React</span>
    </div>
    <div className="flex items-center bg-white/10 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full mb-2">
      <FaRocket className="mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5 text-blue-800" />
      <span className="text-xs sm:text-sm text-purple-100">TypeScript</span>
    </div>
  </motion.div>
);

const Hero = () => {
  return (
    <div 
      id="home" 
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-4"
    >
      {/* Futuristic Background */}
      <HeroBackground />

      {/* Hero Content */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl w-full mt-20 sm:px-4"
      >
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="uppercase tracking-widest text-[10px] sm:text-xs text-center text-blue-100 mb-4"
        >
          Dynamic Web Magic with Next.js
        </motion.p>

        <TextGenerateEffect
          words="Crafting Engaging Web Solutions That Leave a Lasting Impression"
          className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4 sm:mb-6"
        />

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-center text-base sm:text-xl md:text-2xl text-blue-100 mb-6 sm:mb-8"
        >
          Hi! I&apos;m Punit, a Next.js Developer crafting immersive digital experiences
        </motion.p>

        {/* Tech Stack */}
        <TechStack />

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex justify-center mt-6 sm:mt-10"
        >
          <a href="#about">
            <MagicButton
              title="Explore My Journey"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;