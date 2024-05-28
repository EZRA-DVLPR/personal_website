import { genPageMetadata } from 'app/seo'
import ArtGallery from '@/components/ArtGallery'

export const metadata = genPageMetadata({ title: 'Art' })

const images = [
    //{ src: '/static/art/.jpg', title: 'title', description: 'description', date: '2023-05-01' },
    { src: '/static/art/butterfly.jpg', title: 'A butterfly I drew with Cross Hatching', description: 'For my art class, we were given this slip of paper with the outline of the butterfly. We were then told to fill in the image using only the cross hatching technique.', date: '2023-05-02' },
    { src: '/static/art/gorilla.jpg', title: 'Gorilla', description: 'I like gorillas. He sit.', date: '2023-05-01' },
    { src: '/static/art/ohmshirt.jpeg', title: 'Ohm Shirt - Framing Study', description: 'For my art class, we were tasked with wandering campus to find and utilize the environment to frame objects to draw attention. I took my shirt off and wanted to show the color variety of the Ohm symbol so I picked a neutral background of the rocks, and scoured the nearby area for colored rocks to balance the color variety from the shirt.', date: '2023-05-01' },
    { src: '/static/art/redscrunchie.jpeg', title: 'Red Scrunchie - Framing Study', description: 'For my art class, we were tasked with wandering campus to find and utilize the environment to frame objects to draw attention. For this image, I found a scrunchie that could be used with the red tarps above.', date: '2023-05-01' },
    { src: '/static/art/sloth.jpg', title: 'Sloth', description: 'I like Sloths. I found this sleeping position especially comical and had to snap a photo. He sleep.', date: '2023-05-01' },
  ];

export default function Projects() {
  return (
    <>
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
    <h1 className="mb-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">Art Gallery</h1>
    <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Click an image to learn more!
          </p>
          <div>
<p className='mt-4' />
            <ArtGallery images={images}/>
</div>
    </div>
      
    </>
  )
}
