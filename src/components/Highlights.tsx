import React from 'react';
import { Code2, PenTool, Mountain } from 'lucide-react';

const HighlightCard = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => (
  <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
    <Icon className="w-12 h-12 mb-4 text-blue-500" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

export function Highlights() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <HighlightCard
            icon={Code2}
            title="Development"
            description="Building user-friendly and responsive solutions with modern technologies."
          />
          <HighlightCard
            icon={PenTool}
            title="Copywriting"
            description="Transforming ideas into persuasive narratives that engage and convert."
          />
          <HighlightCard
            icon={Mountain}
            title="Interests"
            description="Exploring the outdoors, learning languages, and nature photography."
          />
        </div>
      </div>
    </section>
  );
}