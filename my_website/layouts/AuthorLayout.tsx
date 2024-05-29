import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import Carousel from '@/components/Carousel'

interface Props {
  children: ReactNode
  content: Omit<Authors, '_id' | '_raw' | 'body'>
}

const images = [
  //{ src: '/static/about/.jpg', title: 'title', description: 'description', date: '2023-05-01' },
  { src: '/static/about/ecuselfie.jpg', title: 'Selfie with ECU Pirate', description: 'During my trip in North Carolina to do research, I went on a Walmart run with my roommate and we saw this pirate guy outside the store. I don\'t normally take selfies unless they\'re funny.', date: '2023-05-02' },
  { src: '/static/about/labhelper.jpg', title: 'ECU Research Helper', description: 'In one of the neighboring labs, I was asked to help calibrate and set up the machine\'s wiring. It was fun to help the other people on their project.', date: '2023-05-03' },
  { src: '/static/about/senseibenny.jpg', title: 'Sensei Benny and I', description: 'After an award ceremony for Sensei Benny `The Jet` I asked for a photo and he obliged. He\'s an awesome guy and a true teacher. A true craftsman who knows a lot about his craft. It\'s an honor to be able to train with him.', date: '2023-05-03' },
  { src: '/static/about/senseiadam.jpg', title: 'Sensei Adam, Sensei Angel, and I', description: 'During an award ceremony for Sensei Benny `The Jet` (not pictured here), I managed to find his brother, Sensei Adam. I asked for a photo and it was awesome being able to talk to him. Sensei Angel is one of the primary teachers I have now.', date: '2023-05-03' },
  { src: '/static/about/lunasleep.jpg', title: 'Luna sleeping on the priner', description: 'This is my other cat, Luna. She is not photogenic at all, but I managed so snag a photo of her sleeping.', date: '2023-05-03' },
  { src: '/static/about/honeyfrontover.jpg', title: 'Honey over the printer', description: 'This is one of my cats. Her name is Honey and she is adorable, chunky, and funny.', date: '2023-05-03' },
  { src: '/static/about/honeywithguitar.jpg', title: 'Honey with the guitars', description: 'Here is Honey sitting with my instruments. It\'s rare to get a photo of her looking at the camera.', date: '2023-05-03' },
  { src: '/static/about/blackbeltcard.jpg', title: '2nd Dan ID Card', description: 'This ID card is given to those who practice Tae Kwon Do and achieve the rank of 2nd Dan (2nd Degree Black Belt). This is certified from the Kukkiwon, an organization based in South Korea dedicated to overseeing the official matters of Tae Kwon Do.', date: '2023-05-01' },
  { src: '/static/about/palico.jpg', title: 'Palico in Monster Hunter Rise', description: 'A series of Video Games that I enjoy is Monster Hunter. Here is a photo of my Palico Partner for hunting.', date: '2023-05-01' },
//add images of instruments

];

export default function AuthorLayout({ children, content }: Props) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = content

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About Me
          </h1>
          <div className='flex justify-center content-center'>
            <img src={'/static/about/profshot.jpg'} className='w-[55%] h-auto' />
          </div>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            )}
            <h3 className="pb-2 pt-4 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="x" href={twitter} />
            </div>
          </div>
          <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
            {children}
          </div>
        </div>
        <Carousel images={images} />
      </div>
    </>
  )
}
