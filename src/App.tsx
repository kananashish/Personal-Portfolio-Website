import React from 'react';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Hero />
      <Highlights />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;