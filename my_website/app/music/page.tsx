import { genPageMetadata } from 'app/seo'
import MusicLayout from '@/layouts/MusicLayout'

export const metadata = genPageMetadata({ title: 'Music' })

export default function Projects() {
  return (
    <>
      <MusicLayout>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <h1 className="mb-8 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Music Page
          </h1>
        </div>
      </MusicLayout>
    </>
  )
}
