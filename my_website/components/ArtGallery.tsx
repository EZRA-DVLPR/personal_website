'use client';

import { useState } from 'react';

type GalleryProps = {
  images: { src: string, title: string, description: string, date: string }[];
};

const ArtGallery: React.FC<GalleryProps> = ({ images }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedImage, setExpandedImage] = useState<{ src: string, title: string, description: string, date: string } | null>(null);

  const handleExpand = (image: { src: string, title: string, description: string, date: string }) => {
    setExpandedImage(image);
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
    setExpandedImage(null);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((image, index) => (
          <div key={index} className="w-[45%]">
            <img 
              src={image.src} 
              alt={`Image ${index + 1}`} 
              className="w-full h-auto cursor-pointer" 
              onClick={() => handleExpand(image)} 
            />
          </div>
        ))}
      </div>

      {isExpanded && expandedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={handleClose}>
          <div className="relative bg-slate-200 dark:bg-slate-700 p-4 w-3/4 max-w-2xl mx-auto" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-2 left-2 bg-primary-500 text-white px-2 py-1 rounded-md"
              onClick={handleClose}
            >
              X
            </button>
            <div className="flex justify-center items-center max-h-[75vh]">
              <img src={expandedImage.src} alt="Expanded" className="max-w-full max-h-[70vh] mb-4"/>
            </div>
            <div className='flex justify-between mb-4'>
              <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-200">{expandedImage.title}</h2>
              <p className="text-slate-700 dark:text-slate-200">{expandedImage.date}</p>
            </div>
            <p className='text-slate-700 dark:text-slate-200'>{expandedImage.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ArtGallery;
