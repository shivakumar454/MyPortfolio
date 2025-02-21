import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      role: "Web Development Intern",
      company: "Coincent",
      duration: "April 2024 - June 2024",
      description: [
        "Built responsive web applications using modern JavaScript frameworks",
        "Worked on UI/UX improvements and implemented new features",
        "Optimized website performance by implementing efficient rendering techniques and reducing load times"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Technical Hub",
      duration: "July 2024- Jan 2025",
      description: [
        "Developed and maintained web applications using React.js and Node.js",
        "Implemented responsive designs and optimized application performance",
        "Collaborated with cross-functional teams to deliver high-quality solutions"
      ]
    }
    
  ];

  return (
    <section id="experience" className="py-20 bg-[#0f172a]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-8 bg-[#1e1b4b] p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-indigo-600 p-3 rounded-full">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                  <p className="text-indigo-300">{exp.company}</p>
                  <p className="text-gray-400">{exp.duration}</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};