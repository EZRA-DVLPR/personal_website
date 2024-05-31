'use client'

import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import { MdFileDownload, MdFileDownloadDone } from 'react-icons/md'
import { useState } from 'react'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const ResumeSection = () => {
  const [downloaded, setDownloaded] = useState(false)

  const handleDownload = () => {
    setDownloaded(true)
  }

  return (
    <>
      <h1 className="text-3xl font-bold">Resume</h1>
      <div className="mt-8 flex flex-col items-center">
        <div className="hidden rounded-md border-2 border-gray-300 sm:block">
          <Document file={'/static/profprofile/ResumeFile.pdf'}>
            <Page pageNumber={1} />
          </Document>
        </div>
        <a
          href={'/static/profprofile/ResumeFile.pdf'}
          download
          className="mt-4 rounded-md bg-comprimary-600 p-2 text-white hover:bg-comprimary-800 dark:bg-comprimary-700 dark:hover:bg-comprimary-400 "
          onClick={handleDownload}
        >
          {downloaded ? (
            <MdFileDownloadDone className="text-3xl" />
          ) : (
            <MdFileDownload className="text-3xl" />
          )}
        </a>
      </div>
    </>
  )
}

export default ResumeSection
