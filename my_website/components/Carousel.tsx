'use client'

import { useState } from 'react'
import Image from 'next/image'

type CarouselProps = {
  images: { src: string; title: string; description: string; date: string }[]
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isExpanded, setIsExpanded] = useState(false)
  const [expandedImage, setExpandedImage] = useState<{
    src: string
    title: string
    description: string
    date: string
  } | null>(null)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const handleExpand = (image: {
    src: string
    title: string
    description: string
    date: string
  }) => {
    setExpandedImage(image)
    setIsExpanded(true)
  }

  const handleClose = () => {
    setIsExpanded(false)
    setExpandedImage(null)
  }

  return (
    <>
      <div className="relative mx-auto w-full max-w-4xl">
        <div className="flex overflow-hidden">
          {images.slice(currentIndex, currentIndex + 3).map((image, index) => (
            <button
              key={index}
              className="w-1/3 flex-shrink-0 cursor-pointer p-2"
              onClick={() => handleExpand(image)}
            >
              <Image
                src={image.src}
                alt={`${image.title}`}
                className="mb-4 h-full max-h-[70vh] w-auto max-w-full"
                width={400}
                height={1000}
                layout="intrinsic"
              />
            </button>
          ))}
        </div>
        <button
          className="absolute left-0 top-1/2 -ml-20 -translate-y-1/2 transform rounded-md bg-comprimary-700 px-4 py-2 text-white hover:bg-comprimary-900 dark:bg-comprimary-700 dark:hover:bg-comprimary-500"
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className="absolute right-0 top-1/2 -mr-20 -translate-y-1/2 transform rounded-md bg-comprimary-700 px-4 py-2 text-white hover:bg-comprimary-900 dark:bg-comprimary-700 dark:hover:bg-comprimary-500"
          onClick={handleNext}
        >
          Next
        </button>

        {isExpanded && expandedImage && (
          <button
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
            onClick={handleClose}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                handleClose()
              }
            }}
          >
            <button
              className="relative mx-auto w-3/4 max-w-2xl bg-slate-200 p-4 dark:bg-slate-700"
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  handleClose()
                }
              }}
            >
              <button
                className="absolute left-2 top-2 rounded-md bg-primary-500 px-2 py-1 text-white"
                onClick={handleClose}
              >
                X
              </button>
              <div className="flex max-h-[75vh] items-center justify-center">
                <Image
                  src={expandedImage.src}
                  alt={`Expanded ${expandedImage.title}`}
                  className="mb-4 h-full max-h-[70vh] w-auto max-w-full"
                  width={400}
                  height={1000}
                  layout="intrinsic"
                />
              </div>
              <div className="mb-4 flex justify-between">
                <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-200">
                  {expandedImage.title}
                </h2>
                <p className="text-slate-700 dark:text-slate-200">{expandedImage.date}</p>
              </div>

              <p className="text-slate-700 dark:text-slate-200">{expandedImage.description}</p>
            </button>
          </button>
        )}
      </div>
    </>
  )
}

export default Carousel
