import React from 'react';

interface TimelineEntry {
  date: string;
  title: string;
  description: string;
  category: 'journalism' | 'research' | 'social-design';
}

interface TimelineProps {
  entries: TimelineEntry[];
}

const Timeline: React.FC<TimelineProps> = ({ entries }) => {
  return (
    <div className="space-y-12">
      {entries.map((entry, index) => (
        <div key={index} className="group relative pl-8 md:pl-12">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 h-full w-[1px] bg-gray-200 group-last:h-6" />
          
          {/* Timeline dot */}
          <div className="absolute left-[-4px] top-2 h-2 w-2 bg-gray-400" />
          
          <div className="space-y-2">
            <time className="text-sm text-gray-500">{entry.date}</time>
            <h3 className="text-xl font-light text-gray-900">{entry.title}</h3>
            <p className="text-gray-700">{entry.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;