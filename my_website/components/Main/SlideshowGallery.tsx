'use client'

import React, { useState, useEffect } from 'react';

interface SlideshowGalleryProps {
  images: string[];
}

const SlideshowGallery: React.FC<SlideshowGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(() => {
    const storedIndex = localStorage.getItem('galleryCurrentIndex');
    return storedIndex ? parseInt(storedIndex, 10) : 0;
  });

  const nextImage = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % images.length;
      localStorage.setItem('galleryCurrentIndex', newIndex.toString());
      return newIndex;
    });
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + images.length) % images.length;
      localStorage.setItem('galleryCurrentIndex', newIndex.toString());
      return newIndex;
    });
  };

  useEffect(() => {
    return () => {
      localStorage.removeItem('galleryCurrentIndex');
    };
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto mb-20">
      <img src={images[currentIndex]} alt={`Certification ${currentIndex + 1}`} className="w-full h-auto" />
      <button onClick={prevImage} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-slate-500 dark:bg-gray-800 text-white p-2 -ml-20">Prev</button>
      <button onClick={nextImage} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-slate-500 dark:bg-gray-800 text-white p-2 -mr-20">Next</button>
      <p className='absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-slate-500 dark:bg-gray-800 text-white p-2 -mb-14'>{currentIndex + 1 + '/' + images.length}</p>
    </div>
  );
};

export default SlideshowGallery;
