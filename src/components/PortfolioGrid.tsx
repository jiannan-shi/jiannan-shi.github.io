import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioModal from './PortfolioModal';
import { Badge } from './ui/Badge';

export interface PortfolioItem {
  id: string;
  title: string;
  date: string;
  description: string;
  category: string[];
  thumbnail: string;
  badges?: string[];
  content?: {
    fullDescription: string;
    media?: {
      type: 'image' | 'video' | 'audio';
      url: string;
      caption?: string;
    }[];
    links?: {
      text: string;
      url: string;
    }[];
  };
}

interface PortfolioGridProps {
  items: PortfolioItem[];
  categories: string[];
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ items, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = selectedCategory === 'all'
    ? items
    : items.filter(item => item.category.includes(selectedCategory));

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 text-sm transition-colors ${
            selectedCategory === 'all'
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          All
        </button>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-sm transition-colors ${
              selectedCategory === category
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredItems.map(item => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {item.badges && item.badges.length > 0 && (
                  <div className="absolute top-4 left-4 flex gap-2">
                    {item.badges.map((badge, index) => (
                      <Badge key={index} variant="secondary">{badge}</Badge>
                    ))}
                  </div>
                )}
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-light">{item.title}</h3>
                  <time className="text-sm text-gray-500 whitespace-nowrap">
                    {item.date}
                  </time>
                </div>
                <p className="text-gray-600 line-clamp-2">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.category.map((cat, index) => (
                    <span
                      key={index}
                      className="text-sm text-gray-500"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Modal */}
      <PortfolioModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
};

export default PortfolioGrid;