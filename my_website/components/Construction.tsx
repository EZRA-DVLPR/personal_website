import React from 'react'
import Image from 'next/image'

const Construction = () => {
  return (
    <>
      <Image
        src="/static/images/under_construction.jpg"
        alt={'Website Under Construction Image'}
        className="h-auto w-full"
        layout="responsive"
        objectFit="cover"
        width={500}
        height={300}
      />
      <p className="mt-4">
        <a href="https://www.pexels.com/photo/under-construction-signage-on-laptop-keyboard-211122/">
          Photo Credit: Photo by Fernando Arcos from Pexels
        </a>
      </p>
      <div className="mt-6 flex items-center justify-center text-4xl">
        <p>Coding in progress...</p>
      </div>
    </>
  )
}

export default Construction
