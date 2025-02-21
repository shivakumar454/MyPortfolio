import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    name: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS", "TypeScript"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"]
  },
  {
    name: "Tools & Others",
    skills: ["Git", "VS Code", "Postman", "Thunderclient"]
  }
];

const cloudCategory = {
  name: "Cloud & Deployment",
  skills: ["Vercel", "Firebase"]
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#0f172a]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Technical Skills
        </h2>

        {/* Grid for Frontend, Backend, and Tools */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
              className="bg-[#1e1b4b] p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-6 text-white text-center">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                    className="px-4 py-2 bg-indigo-900/50 text-indigo-300 rounded-full text-sm font-medium hover:bg-indigo-800/50 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cloud & Deployment - Centered Below Backend */}
        <div className="mt-8 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-[#1e1b4b] p-6 rounded-lg shadow-lg w-full md:w-1/3"
          >
            <h3 className="text-xl font-semibold mb-6 text-white text-center">
              {cloudCategory.name}
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {cloudCategory.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skillIndex}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                  className="px-4 py-2 bg-indigo-900/50 text-indigo-300 rounded-full text-sm font-medium hover:bg-indigo-800/50 transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
