import React from 'react';
import { GraduationCap, Award, Code } from 'lucide-react';

const TimelineItem = ({ icon: Icon, year, title, description }: { icon: React.ElementType; year: string; title: string; description: string }) => (
  <div className="flex gap-4 mb-8">
    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
      <Icon className="w-6 h-6 text-blue-500" />
    </div>
    <div>
      <span className="text-sm text-blue-500 font-semibold">{year}</span>
      <h3 className="text-lg font-semibold mt-1">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mt-1">{description}</p>
    </div>
  </div>
);

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="prose dark:prose-invert max-w-none mb-12">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            As a BTech student in Information Technology, I'm passionate about creating innovative solutions 
            that make a difference. My journey combines technical expertise in full-stack development with 
            creative storytelling through copywriting. When I'm not coding or writing, you'll find me exploring 
            nature or learning new languages.
          </p>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8">Journey So Far</h3>
          <div className="space-y-8">
            <TimelineItem
              icon={GraduationCap}
              year="2021"
              title="DPS Haridwar"
              description="Scored 85% in Class 12th, laying the foundation for my technical journey."
            />
            <TimelineItem
              icon={Code}
              title="Wine Quality Prediction"
              year="2022"
              description="Developed a machine learning model to predict wine quality using Python and Scikit-learn."
            />
            <TimelineItem
              icon={Award}
              year="2023"
              title="Full Stack Development"
              description="Currently mastering DSA with Java and exploring advanced Python concepts."
            />
          </div>
        </div>
      </div>
    </section>
  );
}