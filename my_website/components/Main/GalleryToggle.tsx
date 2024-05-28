'use client';

import React, { useState, useEffect } from 'react';
import SlideshowGallery from './SlideshowGallery';

const images = [
  '/static/profprofile/DCcert1.jpg',
  '/static/profprofile/DCcert2.jpg',
  '/static/profprofile/DCcert3.jpg',
  '/static/profprofile/DCcert4.jpg',
  '/static/profprofile/DCcert5.jpg',
  '/static/profprofile/DCcert6.jpg',
  '/static/profprofile/DCcert7.jpg',
  '/static/profprofile/DCcert8.jpg',
  '/static/profprofile/DCcert9.jpg',
  '/static/profprofile/DCcert10.jpg',
  '/static/profprofile/docker_cert.png',
];

const GalleryToggle = () => {
  const [isGalleryVisible, setIsGalleryVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedVisibility = localStorage.getItem('galleryVisibility');
      if (storedVisibility) {
        setIsGalleryVisible(JSON.parse(storedVisibility));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('galleryVisibility', JSON.stringify(isGalleryVisible));
    }
  }, [isGalleryVisible]);

  return (
    <div className="text-center my-4">
      <button
        onClick={() => setIsGalleryVisible(!isGalleryVisible)}
        className="bg-blue-500 text-white hover:bg-blue-800 dark:bg-blue-700 dark:hover:bg-blue-500 py-2 px-4 rounded mb-10">
        {isGalleryVisible ? 'Hide Certifications' : 'Show Certifications'}
      </button>
      {isGalleryVisible ? <SlideshowGallery images={images}/> : ''}
    </div>
  );
};

export default GalleryToggle;
