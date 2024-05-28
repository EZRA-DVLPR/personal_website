'use client'

import { useState } from 'react';

type CarouselProps = {
  images: { src: string, title: string, description: string, date: string }[];
};

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedImage, setExpandedImage] = useState<{ src: string, title: string, description: string, date: string } | null>(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

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
    <div className='flex flex-col items-center'>
        <h1 className="text-6xl font-bold text-center mb-8 mt-4">Image Gallery</h1>
        <p className='text-lg'>Click on an Image for more Information!</p>
    </div>
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="flex overflow-hidden">
        {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
          <div key={index} className="flex-shrink-0 w-1/3 p-2">
            <img 
              src={image.src} 
              alt={`Image ${index + 1}`} 
              className="w-full h-auto cursor-pointer" 
              onClick={() => handleExpand(image)} 
            />
          </div>
        ))}
      </div>
      <button 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white bg-comprimary-700 hover:bg-comprimary-900 dark:bg-comprimary-700 dark:hover:bg-comprimary-500 px-4 py-2 -ml-20 rounded-md"
        onClick={handlePrev}
      >
        Prev
      </button>
      <button 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white bg-comprimary-700 hover:bg-comprimary-900 dark:bg-comprimary-700 dark:hover:bg-comprimary-500 px-4 py-2 -mr-20 rounded-md"
        onClick={handleNext}
      >
        Next
      </button>

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
              <img src={expandedImage.src} alt="Expanded" className="max-w-full max-h-[75vh] mb-4"/>
            </div>
            <div className='flex justify-between mb-4'>
            <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-200">{expandedImage.title}</h2>
            <p className="text-slate-700 dark:text-slate-200">{expandedImage.date}</p>
            </div>
            
            <p className='text-slate-700 dark:text-slate-200'>{expandedImage.description}</p>
            
          </div>
        </div>
      )}
    </div>
    </>
    
  );
};

export default Carousel;
