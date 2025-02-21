import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Award, BookOpen, AlignCenterVertical as Certificate, Briefcase, Code, Mail } from 'lucide-react';

export const SideNav = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'education', icon: BookOpen, label: 'Education' },
    { id: 'experience', icon: Briefcase, label: 'Experience' },
    { id: 'achievements', icon: Award, label: 'Achievements' },
    { id: 'certifications', icon: Certificate, label: 'Certifications' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'contact', icon: Mail, label: 'Contact' }
  ];

  return (
    <motion.div 
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50"
    >
      <div className="bg-[#1e1b4b] p-3 rounded-r-lg shadow-xl">
        {navItems.map(({ id, icon: Icon, label }) => (
          <motion.a
            key={id}
            href={`#${id}`}
            whileHover={{ scale: 1.1, x: 5 }}
            className={`flex items-center gap-3 p-3 rounded-lg mb-2 transition-colors relative group
              ${activeSection === id ? 'text-indigo-400' : 'text-gray-400 hover:text-indigo-300'}`}
            onClick={() => setActiveSection(id)}
          >
            <Icon size={20} />
            <span className="absolute left-full ml-2 px-2 py-1 bg-[#1e1b4b] rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {label}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};