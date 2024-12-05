import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';
import ReactMarkdown from 'react-markdown';

const ProjectPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen pt-20">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="heading-lg">Project not found — feel free to contact Jiannan!</h1>
          <Link to="/" className="link-hover">
            Return home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-20">
      <article className="max-w-3xl mx-auto px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-900 mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="space-y-8">
          <header className="space-y-4">
            <h1 className="heading-lg">{project.title}</h1>
            <div className="flex items-center gap-4 text-gray-500">
              <span>{project.duration}</span>
              <span>•</span>
              <span>{project.category}</span>
            </div>
          </header>

          {project.imageUrl && (
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full aspect-video object-cover"
            />
          )}

          <div className="prose prose-lg max-w-none">
            {project.content && <ReactMarkdown>{project.content}</ReactMarkdown>}
          </div>

          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-4 pt-8">
              {project.links.map((link, index) => (
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
    </main>
  );
};

export default ProjectPage;
