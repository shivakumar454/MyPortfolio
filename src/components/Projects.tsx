import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Rescue Ready',
    description: 'Rescue Ready is a disaster management platform that aids emergency response and recovery. It offers real-time weather updates, emergency helpline access, past disaster records, and volunteer coordination. By integrating NWS and FEMA APIs, it enhances situational awareness and communication, ensuring quick access to critical resources for efficient disaster response. 🚑🌍',
    image: 'https://media.istockphoto.com/id/1062305448/photo/hurricane-season.jpg?s=612x612&w=0&k=20&c=mvCo41hEr7gH55hJc8YHv3SRnZJbZrsg31JhnnWS_80=',
    github: 'https://github.com/shivakumar454/disaster',
    demo: 'https://demo.com',
    tags: ['React', 'Node.js', 'MongoDB', 'Express','Javascript']
  },
  {
    title: 'MULTIIO',
    description:' A digital mall platform integrating shopping, entertainment, and customer engagement. It features live inventory updates, virtual navigation, event alerts, personalized shopping, and interactive food ordering. With loyalty programs, digital coupons, and seamless payments, it enhances the shopping experience while keeping customers informed and engaged. 🛍️🎉' ,
    image: 'https://cdn.pixabay.com/photo/2017/07/31/11/43/architecture-2557567_640.jpg',
    github: 'https://github.com/shivakumar454/proj-multiio',
    demo: 'https://proj-multiio.vercel.app/',
    tags: ['HTML', 'CSS', 'Javascript']
  },
  {
    title: 'SmartSustain:Urban Sustainability Dashboard',
    description:'SmartSustain is a real-time dashboard tracking **water, waste, traffic, air quality, and pollution** across city zones. It leverages IoT data and analytics to aid city planners and citizens in making informed decisions for a smarter, greener future. With real-time insights and predictive analytics, it enhances urban sustainability, environmental management, and policy planning. 🌍🚀',
    image: '  https://media.istockphoto.com/id/1414916304/photo/sustainable-development-goal-concept-hands-holding-global-communication-network-with.jpg?s=612x612&w=0&k=20&c=YS85pGwUdncDdbA7GvVJWZOG1-oS61eOJxYZg_znHKg=',
    github: 'https://urban-sustain.vercel.app/',
    demo: 'https://demo.com',
    tags: ['React', 'Chartjs', 'Css']
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20  bg-[#0f172a]">
      <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
                  >
                    <Github size={20} />
                    Code
                  </a>
                  <a 
                    href={project.demo}
                    className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400"
                  >
                    <ExternalLink size={20} />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};