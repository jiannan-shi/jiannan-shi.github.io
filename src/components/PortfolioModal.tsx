import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { type PortfolioItem } from './PortfolioGrid';
import MediaGallery from './MediaGallery';

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60"
          onClick={onClose}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white p-6 md:p-8"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-900"
          >
            <X className="w-6 h-6" />
          </button>

          <article className="space-y-8">
            <header className="space-y-4">
              <h2 className="text-3xl font-light">{item.title}</h2>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <time>{item.date}</time>
                <div className="flex gap-2">
                  {item.category.map((cat, index) => (
                    <span key={index}>{cat}</span>
                  ))}
                </div>
              </div>
            </header>

            {item.content?.media && (
              <MediaGallery media={item.content.media} />
            )}

            <div className="prose prose-gray max-w-none">
              {item.content?.fullDescription || item.description}
            </div>

            {item.content?.links && (
              <div className="flex flex-wrap gap-4">
                {item.content.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-900 hover:text-black link-hover"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
            )}
          </article>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PortfolioModal;