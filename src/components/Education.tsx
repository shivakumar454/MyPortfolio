import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Aditya Engineering College",
      year: "2022-2026",
      grade: "8.2 CGPA"
    },
    {
      degree: "Intermediate (MPC)",
      institution: " PR Govt Junior College",
      year: "2020-2022",
      grade: "87.5%"
    }
  ];

  return (
    <section id="education" className="py-20 bg-[#0f172a]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Education</h2>
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-start gap-4 mb-8 bg-[#1e1b4b] p-6 rounded-lg shadow-lg"
            >
              <div className="bg-indigo-600 p-3 rounded-full">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                <p className="text-indigo-300">{edu.institution}</p>
                <div className="flex gap-4 mt-2 text-gray-300">
                  <span>{edu.year}</span>
                  <span>•</span>
                  <span>{edu.grade}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};