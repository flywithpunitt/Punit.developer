import React from "react";
import { FaLocationArrow, FaCode, FaLanguage, FaProjectDiagram } from "react-icons/fa";

interface Skill {
  name: string;
  percentage: number;
}

interface AboutProps {
  name?: string;
  location?: string;
  profile?: string;
  languages?: string[];
  projectsCompleted?: number;
  bio?: string;
  skills?: Skill[];
  photoUrl?: string;
}

const AboutSection: React.FC<AboutProps> = ({
  name = "Punit Kumar",
  location = "Delhi, India",
  profile = "Full-Stack Developer",
  languages = ["English", "Hindi"],
  projectsCompleted = 15,
  bio = "Hello, I'm Punit, a motivated full-stack developer specializing in the MERN stack. With a passion for crafting exceptional web experiences. In the past six months, I've immersed myself in the world of web development, eagerly soaking up knowledge and honing my skills. Driven by curiosity and fueled by continuous learning, I embrace challenges with enthusiasm and dedication. My goal is simple: to deliver innovative solutions that exceed expectations and inspire others.",
  skills = [
    { name: "MongoDB", percentage: 95 },
    { name: "Express.js", percentage: 95 },
    { name: "React.js", percentage: 95 },
    { name: "Node.js", percentage: 95 },
    { name: "Next.js", percentage: 85 },
    { name: "TypeScript", percentage: 85 },
  ],
  photoUrl = "/punitt.svg",
}) => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-900 to-purple-800 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/10">
              <img
                src={photoUrl}
                alt={`${name}'s profile photo`}
                className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
              />
            </div>
          </div>
          <div className="lg:ml-8 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-400 to-purple-600 text-transparent bg-clip-text mb-4">
              {name}
            </h1>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-4">
              <span className="group relative inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-900 to-purple-800 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30">
                {profile}
              </span>
              <span className="group relative inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-700 to-purple-800 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/100">
                <FaLocationArrow className="text-indigo-500" /> {location}
              </span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-2xl">{bio}</p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                <div className="flex items-center gap-2">
                  <FaCode className="text-indigo-500 text-xl" />
                  <div>
                    <p className="text-sm text-gray-400">Tech Stack</p>
                    <p className="font-semibold text-white">MERN</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                <div className="flex items-center gap-2">
                  <FaLanguage className="text-purple-500 text-xl" />
                  <div>
                    <p className="text-sm text-gray-400">Languages</p>
                    <p className="font-semibold text-white">{languages.join(", ")}</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
                <div className="flex items-center gap-2">
                  <FaProjectDiagram className="text-indigo-500 text-xl" />
                  <div>
                    <p className="text-sm text-gray-400">Projects</p>
                    <p className="font-semibold text-white">{projectsCompleted}+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-400 to-purple-600 text-transparent bg-clip-text text-center lg:text-left">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-lg text-white">{skill.name}</span>
                  <span className="bg-indigo-900/50 text-white px-2 py-1 rounded-full text-sm">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transition-all duration-300"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LinkedIn Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://www.linkedin.com/in/flywithpunit/"
            className="group relative inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-900 to-purple-800 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30"
          >
            Connect on LinkedIn
            <FaLocationArrow className="transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;