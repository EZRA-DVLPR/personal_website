'use client'

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ResumeSection = () => {
    return (
        <>
            <h1 className='text-3xl font-bold'>Resume</h1>
            <div className="flex flex-col items-center mt-8">
                <div className="hidden sm:block border-2 border-gray-300 rounded-md">
                    <Document file={'/static/profprofile/ResumeFile.pdf'}>
                        <Page pageNumber={1} />
                    </Document>
                </div>
                <a
                    href={'/static/profprofile/ResumeFile.pdf'}
                    download
                    className="mt-4 p-2 bg-green-500 text-white rounded-md hover:bg-green-700"
                >
                    Download Resume
                </a>
            </div>
        </>
    );
};

export default ResumeSection;
