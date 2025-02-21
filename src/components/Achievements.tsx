import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award } from 'lucide-react';

export const Achievements = () => {
  const achievements = [
      {
        title: "Ideathon Finalist",
        description: "Selected as a finalist in the Urban Sustainability Ideathon for an innovative web-based prototype.",
        icon: Trophy
      },
      {
        title: "Best Innovation Award",
        description: "Recognized for developing a sustainability-focused web application using the MERN stack.",
        icon: Star
      },
      {
        title: "Tech Enthusiast",
        description: "Awarded for outstanding contribution in web development and AI-integrated solutions.",
        icon: Award
      }
    ]
    

  return (
    <section id="achievements" className="py-20 bg-[#0f172a]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-[#1e1b4b] p-6 rounded-lg shadow-lg text-center"
              >
                <div className="bg-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{achievement.title}</h3>
                <p className="text-gray-300">{achievement.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};