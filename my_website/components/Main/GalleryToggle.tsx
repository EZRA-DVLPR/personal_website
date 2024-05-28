'use client'

import React, { useState, useEffect } from 'react';

const images = [
  '/static/profprofile/cert1.jpg',
  '/static/profprofile/cert2.jpg',
  '/static/profprofile/cert3.jpg',
  '/static/profprofile/cert4.jpg',
  '/static/profprofile/cert5.jpg',
  '/static/profprofile/cert6.jpg',
  '/static/profprofile/cert7.jpg',
  '/static/profprofile/cert8.jpg',
  '/static/profprofile/cert9.jpg',
  '/static/profprofile/cert10.jpg',
];

const GalleryToggle = () => {
  const [isGalleryVisible, setIsGalleryVisible] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedVisibility = localStorage.getItem('galleryVisibility');
      return storedVisibility ? JSON.parse(storedVisibility) : false;
    } else {
      return false;
    }
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('galleryVisibility', JSON.stringify(isGalleryVisible));
    }
  }, [isGalleryVisible]);

  return (
    <div className="text-center my-4">
      <button
        onClick={() => setIsGalleryVisible(!isGalleryVisible)}
        className="bg-blue-500 text-white hover:bg-cyan-500 dark:bg-blue-700 dark:hover:bg-cyan-500 py-2 px-4 rounded mb-10">
        {isGalleryVisible ? 'Hide Certifications' : 'Show Certifications'}
      </button>
    </div>
  );
};

export default GalleryToggle;