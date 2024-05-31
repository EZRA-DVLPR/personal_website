'use client'

import GalleryToggle from './GalleryToggle'
import ResumeSection from './Resume'

const ProfProfile = () => {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Certifications</h1>
        <GalleryToggle />
        <ResumeSection />
      </div>
    </>
  )
}

export default ProfProfile
