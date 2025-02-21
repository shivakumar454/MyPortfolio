import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Server } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-[#1a1c2a] dark:bg-[#1a1c2a]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-[#2d1b3d] dark:bg-[#2d1b3d] rounded-lg shadow-lg"
          >
            <Code2 className="w-12 h-12 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Frontend Development</h3>
            <p className="text-gray-300">
              Expertise in React.js and modern CSS frameworks like Tailwind. 
              Building responsive and accessible web applications.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-[#2d1b3d] dark:bg-[#2d1b3d] rounded-lg shadow-lg"
          >
            <Server className="w-12 h-12 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Backend Development</h3>
            <p className="text-gray-300">
              Strong foundation in Node.js and Express.js. 
              Creating scalable APIs and microservices architecture.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-[#2d1b3d] dark:bg-[#2d1b3d] rounded-lg shadow-lg"
          >
            <Database className="w-12 h-12 text-indigo-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-white">Database Management</h3>
            <p className="text-gray-300">
              Experience with MongoDB. 
              Optimizing database performance and data modeling.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};