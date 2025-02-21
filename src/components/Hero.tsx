import React from 'react';
import Typewriter from 'typewriter-effect';
import { Github, Linkedin, Mail, FileDown } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center">
      <div className="parallax-bg" />
      <div className="container mx-auto px-6 py-12 flex flex-col-reverse lg:flex-row items-center gap-12 relative z-10">
        <div className="flex-1 pl-8 lg:pl-16">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">
            Hi, I'm Shiva Kumar
          </h2>
          <div className="text-xl lg:text-2xl text-indigo-200 mb-6">
            <Typewriter
              options={{
                strings: [
                  'Full Stack Developer',
                  'Web developer',
                  'Tech Enthusiastic'
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="text-gray-200 mb-8 max-w-2xl">
            "I specialize in building scalable web solutions with modern technologies.
             I'm passionate about crafting impactful applications that address real-world challenges."
          </p>
          <div className="flex gap-4">
            <a 
              href="/Shiva Resume.pdf" 
              download 
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors"
            >
              <FileDown size={20} />
              Download Resume
            </a>
            <a href="https://github.com/shivakumar454" className="p-2 text-gray-200 hover:text-indigo-300 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/shiva4554/" className="p-2 text-gray-200 hover:text-indigo-300 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:shivakumar.penukonda414@gmail.com" className="p-2 text-gray-200 hover:text-indigo-300 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img 
            src='https://i.postimg.cc/vmw6gs8W/shiva-pic.jpg'
            alt="Profile"   
            className="rounded-full w-64 h-64 lg:w-96 lg:h-96 object-cover shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};