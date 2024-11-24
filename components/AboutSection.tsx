import React from 'react';
import Image from 'next/image';
import MagicButton from './MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';

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
  projectsCompleted = 5,
  bio = "Hello, I'm Punit, a motivated full-stack developer specializing in the MERN stack. With a passion for crafting exceptional web experiences. In the past six months, I've immersed myself in the world of web development, eagerly soaking up knowledge and honing my skills. Driven by curiosity and fueled by continuous learning, I embrace challenges with enthusiasm and dedication. My goal is simple: to deliver innovative solutions that exceed expectations and inspire others.",
  skills = [
    { name: "MongoDB", percentage: 95 },
    { name: "Express.js", percentage: 90 },
    { name: "React.js", percentage: 90 },
    { name: "Node.js", percentage: 85 },
    { name: "Next.js", percentage: 80 },
    { name: "TypeScript", percentage: 80 }
  ],
  photoUrl = "/punitt.svg"  // Make sure this matches your actual file name
}) => {
  return (
    <div id="about" className="min-h-screen text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="flex items-center space-x-6">
              <div className="relative w-64 h-64 overflow-hidden rounded-lg border-4 border-gray-800">
                <Image
                  src={photoUrl}
                  alt={`${name}'s profile photo`}
                  width={256}
                  height={256}
                  className="object-cover w-full h-full"
                  priority
                  unoptimized
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">{name}</h2>
                <p className="text-gray-400">Address: {location}</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div
                        className="h-full bg-white-200 rounded-full"
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="boun space-y-8 ml-8 md:mt-24">
            <h1 className="text-4xl font-bold mb-4">About Me</h1>
            <p className="text-white leading-relaxed">{bio}</p>

            <div className="space-y-4 mt-4">
              <div className="flex gap-x-8">
                <span className="font-semibold min-w-24">Profile:</span>
                <span className="text-gray-300">{profile}</span>
              </div>
              <div className="flex gap-x-8">
                <span className="font-semibold min-w-24">Language:</span>
                <span className="text-gray-300">{languages.join(", ")}</span>
              </div>
            </div>

            <div className="space-y-4 mt-6">
              <div className="flex items-center gap-2">
                <span className="text-white-200 text-2xl font-bold">{projectsCompleted}</span>
                <span className="text-xl">+ Projects completed</span>
              </div>

              <a href="https://www.linkedin.com/in/flywithpunit/">
            <MagicButton
              title="Linkedin"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
