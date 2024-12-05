import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface Media {
  type: 'image' | 'video' | 'audio';
  url: string;
  caption?: string;
}

interface MediaGalleryProps {
  media: Media[];
}

const MediaGallery: React.FC<MediaGalleryProps> = ({ media }) => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % media.length);
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + media.length) % media.length);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {media.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            {item.type === 'image' ? (
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.url}
                  alt={item.caption || ''}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ) : item.type === 'video' ? (
              <div className="aspect-video">
                <video
                  src={item.url}
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center">
                <audio src={item.url} controls className="w-full px-4" />
              </div>
            )}
            {item.caption && (
              <p className="mt-2 text-sm text-gray-500">{item.caption}</p>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative w-full h-full flex items-center justify-center"
            >
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 p-2 text-white/70 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 p-2 text-white/70 hover:text-white"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 p-2 text-white/70 hover:text-white"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="max-w-4xl max-h-[90vh] px-4">
                {media[lightboxIndex].type === 'image' ? (
                  <img
                    src={media[lightboxIndex].url}
                    alt={media[lightboxIndex].caption || ''}
                    className="max-w-full max-h-[90vh] object-contain"
                  />
                ) : media[lightboxIndex].type === 'video' ? (
                  <video
                    src={media[lightboxIndex].url}
                    controls
                    className="max-w-full max-h-[90vh]"
                  />
                ) : (
                  <audio
                    src={media[lightboxIndex].url}
                    controls
                    className="w-full max-w-md"
                  />
                )}
                {media[lightboxIndex].caption && (
                  <p className="mt-4 text-center text-white/70">
                    {media[lightboxIndex].caption}
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MediaGallery;