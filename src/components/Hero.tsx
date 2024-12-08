import React from 'react';
import { ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          Hi, I'm Ashish Kanan
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
          Full-Stack Developer & Copywriting Enthusiast
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
          >
            Let's Connect
          </button>
        </div>
        <div className="flex justify-center gap-6 mb-12">
          <a href="https://github.com/kananashish" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/ashishkanan" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://x.com/kanan_ashish" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400">
            <Twitter className="w-6 h-6" />
          </a>
        </div>
        <ChevronDown className="w-6 h-6 mx-auto animate-bounce text-gray-400" />
      </div>
    </div>
  );
}