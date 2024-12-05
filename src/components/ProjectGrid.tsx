import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <div className="grid gap-16">
      {projects.map((project) => (
        <Link
          key={project.id}
          to={`/project/${project.id}`}
          className="group relative bg-transparent"
        >
          <div className="aspect-[4/3] mb-6 overflow-hidden">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          </div>
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-light">{project.title}</h3>
              <span className="text-sm text-gray-500 whitespace-nowrap">
                {project.duration}
              </span>
            </div>
            <span className="inline-block text-sm text-gray-500">
              {project.category}
            </span>
            <p className="text-gray-600">{project.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProjectGrid;