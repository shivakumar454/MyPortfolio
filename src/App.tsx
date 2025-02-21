import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { CustomCursor } from './components/CustomCursor';
import { SideNav } from './components/SideNav';
import { ScrollSection } from './components/ScrollSection';

function App() {
  

  return (
    <div className="min-h-screen bg-[#0f172a] dark:bg-[#0f172a] transition-colors duration-200">
      <div className="parallax-bg" />
      <CustomCursor />
      
      <SideNav />
      <Hero />
      <ScrollSection>
        <About />
      </ScrollSection>
      <ScrollSection>
        <Education />
      </ScrollSection>
      <ScrollSection>
        <Experience />
      </ScrollSection>
      <ScrollSection>
        <Achievements />
      </ScrollSection>
      <ScrollSection>
        <Certifications />
      </ScrollSection>
      <ScrollSection>
        <Projects />
      </ScrollSection>
      <ScrollSection>
        <Skills />
      </ScrollSection>
      <ScrollSection>
        <Contact />
      </ScrollSection>
    </div>
  );
}

export default App;