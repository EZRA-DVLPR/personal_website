import BuyMeACoffeeButton from '@/components/Main/BuyMeACoffeeButton'
import KofiButton from '@/components/Main/KofiButton'
import LiberapayButton from '@/components/Main/LiberapayButton'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Tips' })

export default function Projects() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <h1 className="mb-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Tips/Donation Links!
        </h1>
        <div>
          <br></br>
          <ul className="flex flex-col items-center justify-center space-y-10">
            <li>
              <LiberapayButton />
            </li>
            <li>
              <BuyMeACoffeeButton />
            </li>
            <li>
              <KofiButton />
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
