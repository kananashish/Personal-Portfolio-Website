import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tools: string[];
  github: string;
  demo?: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "Wine Quality Prediction",
    description: "Machine learning project using Python to predict wine quality based on various chemical properties.",
    tools: ["Python", "Scikit-learn", "Jupyter Notebook"],
    github: "https://github.com/kananashish/wine-quality",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website built with modern web technologies.",
    tools: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/kananashish/portfolio",
    demo: "https://kananashish.dev",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}