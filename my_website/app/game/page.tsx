import { genPageMetadata } from 'app/seo'
import Construction from '@/components/Construction'

export const metadata = genPageMetadata({ title: 'Games' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <h1 className="mb-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          List of Games
        </h1>
        <p className="m-4">Work in Progress! Check back later!</p>
        <Construction />
      </div>
    </>
  )
}
