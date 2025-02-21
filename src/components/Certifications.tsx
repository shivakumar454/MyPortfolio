import React from 'react';
import { motion } from 'framer-motion';
import { AlignCenterVertical as Certificate, ExternalLink } from 'lucide-react';

export const Certifications = () => {
  const certifications = [
    {
      title: "JavaScript_Essentials_1",
      issuer: "Cisco",
      date: "2024",
      link: "https://www.credly.com/badges/bf7396cd-9de4-486b-a510-03827cbe574e/public_url"
    },
    {
      title: "JavaScript_Essentials_2",
      issuer: "Cisco",
      date: "2024",
      link: "https://www.credly.com/badges/0836e2ca-89af-4096-8c48-64673f2b97e1/public_url"
    },
    {
      title: "CCNAv7: Introduction to Networks",
      issuer: "Cisco",
      date: "2024",
      link: "https://drive.google.com/file/d/1AWn36bbYBxp9kFNKYZECKCrROcNK9LBh/view?usp=drive_link"
    },
    {
      title: "Database Management System Part - 1",
      issuer: "Infosys-Springboard",
      date: "2024",
      link: "https://drive.google.com/file/d/1ASxCdgbq3GGlS-qU9ICPfBCmS0rOB1RL/view?usp=sharing"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-[#0f172a]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Certifications</h2>
        <div className="max-w-3xl mx-auto grid gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#1e1b4b] p-6 rounded-lg shadow-lg flex items-center gap-4"
            >
              <div className="bg-indigo-600 p-3 rounded-full">
                <Certificate className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                <p className="text-indigo-300">{cert.issuer}</p>
                <p className="text-gray-400">{cert.date}</p>
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};