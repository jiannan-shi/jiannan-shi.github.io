import React from "react";

interface ProjectCardProps {
  title: string;
  duration: string;
  category: string;
  description: string;
  imageUrl?: string;
  links?: Array<{ url: string; label: string }>;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  duration,
  category,
  description,
  imageUrl,
  links = [],
}) => {
  return (
    <article className="group relative bg-transparent">
      {imageUrl && (
        <div className="aspect-[4/3] mb-6 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-light">{title}</h3>
          <span className="text-sm text-gray-500 whitespace-nowrap">
            {duration}
          </span>
        </div>
        <span className="inline-block text-sm text-gray-500">{category}</span>
        <p className="text-gray-600">{description}</p>
        {links.length > 0 && (
          <div className="flex flex-wrap gap-4 pt-2">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm link-hover"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
