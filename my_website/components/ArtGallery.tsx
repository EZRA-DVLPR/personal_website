'use client'

import { useState } from 'react'
import Image from 'next/image'

type GalleryProps = {
  images: { src: string; title: string; description: string; date: string }[]
}

const ArtGallery: React.FC<GalleryProps> = ({ images }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [expandedImage, setExpandedImage] = useState<{
    src: string
    title: string
    description: string
    date: string
  } | null>(null)

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
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            className="w-[45%] cursor-pointer"
            onClick={() => handleExpand(image)}
          >
            <Image
              src={image.src}
              alt={`${image.title}`}
              className="h-auto w-full"
              width={500}
              height={300}
              layout="responsive"
              objectFit="cover"
            />
          </button>
        ))}
      </div>

      {isExpanded && expandedImage && (
        <button
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleClose}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              handleClose()
            }
          }}
          tabIndex={0}
        >
          <button
            className="relative mx-auto w-3/4 max-w-2xl bg-slate-200 p-4 dark:bg-slate-700"
            onClick={(e) => e.stopPropagation()}
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
                alt="Expanded"
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
    </>
  )
}

export default ArtGallery
