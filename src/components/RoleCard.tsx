import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface RoleCardProps {
  title: string;
  description: string;
  path: string;
  imageUrl: string;
}

const RoleCard: React.FC<RoleCardProps> = ({ title, description, path, imageUrl }) => {
  return (
    <Link 
      to={path}
      className="group relative overflow-hidden bg-white hover:shadow-[0_2px_16px_rgba(0,0,0,0.1)] transition-shadow duration-500"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-8 space-y-4">
        <h3 className="text-xl font-light tracking-tight text-gray-900">{title}</h3>
        <p className="text-gray-700 line-clamp-3">{description}</p>
        <div className="flex items-center gap-2 text-gray-900">
          <span className="text-sm font-medium">Learn more</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};

export default RoleCard;