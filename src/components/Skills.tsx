import React from 'react';
import { Code, PenTool, Database, GitBranch } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

const SkillBar = ({ name, level }: Skill) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium">{name}</span>
      <span className="text-sm text-gray-500">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div
        className="bg-blue-500 h-2.5 rounded-full"
        style={{ width: `${level}%` }}
      />
    </div>
  </div>
);

export function Skills() {
  const technicalSkills: Skill[] = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'Java', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Spring Boot', level: 70 },
  ];

  const creativeSkills: Skill[] = [
    { name: 'Copywriting', level: 85 },
    { name: 'Content Strategy', level: 80 },
    { name: 'Technical Writing', level: 75 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Code className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-semibold">Technical Skills</h3>
            </div>
            {technicalSkills.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </div>
          
          <div>
            <div className="flex items-center gap-2 mb-6">
              <PenTool className="w-6 h-6 text-blue-500" />
              <h3 className="text-xl font-semibold">Creative Skills</h3>
            </div>
            {creativeSkills.map((skill, index) => (
              <SkillBar key={index} {...skill} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6">Currently Learning</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <Database className="w-6 h-6 text-blue-500 mb-4" />
              <h4 className="font-semibold mb-2">Advanced Java DSA</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Mastering data structures and algorithms for better problem-solving.
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <GitBranch className="w-6 h-6 text-blue-500 mb-4" />
              <h4 className="font-semibold mb-2">Python for Data Science</h4>
              <p className="text-gray-600 dark:text-gray-300">
                Exploring data analysis and machine learning concepts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}