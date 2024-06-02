'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

interface SlideshowGalleryProps {
  images: string[]
}

const SlideshowGallery: React.FC<SlideshowGalleryProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(() => {
    const storedIndex = localStorage.getItem('galleryCurrentIndex')
    return storedIndex ? parseInt(storedIndex, 10) : 0
  })

  const nextImage = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % images.length
      localStorage.setItem('galleryCurrentIndex', newIndex.toString())
      return newIndex
    })
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + images.length) % images.length
      localStorage.setItem('galleryCurrentIndex', newIndex.toString())
      return newIndex
    })
  }

  useEffect(() => {
    return () => {
      localStorage.removeItem('galleryCurrentIndex')
    }
  }, [])

  return (
    <div className="relative mx-auto mb-20 w-full max-w-xl">
      <Image
        src={images[currentIndex]}
        alt={`Certification ${currentIndex + 1}`}
        className="h-auto w-full"
        width={500}
        height={300}
      />
      <div className="flex justify-around">
        <button
          onClick={prevImage}
          className="absolute left-0 transform rounded-md bg-comprimary-700 p-2 text-white hover:bg-comprimary-900 dark:bg-comprimary-700 dark:hover:bg-comprimary-500 lg:top-1/2 lg:-ml-20 lg:-translate-y-1/2"
        >
          Prev
        </button>
        <button
          onClick={nextImage}
          className="absolute right-0 transform rounded-md bg-comprimary-700 p-2 text-white hover:bg-comprimary-900 dark:bg-comprimary-700 dark:hover:bg-comprimary-500 lg:top-1/2 lg:-mr-20 lg:-translate-y-1/2"
        >
          Next
        </button>
      </div>
      <p className="absolute bottom-0 left-1/2 -mb-14 -translate-x-1/2 transform rounded-md bg-slate-500 p-2 text-zinc-200 dark:bg-gray-800">
        {currentIndex + 1 + '/' + images.length}
      </p>
      {currentIndex === 10 ? (
        <div className="mt-2">
          <a href="https://www.youtube.com/watch?v=rIrNIzy6U_g">Click here to watch the video</a>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default SlideshowGallery
