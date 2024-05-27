import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import Typewriter from '@/components/Main/Typewriter'
import Image from '@/components/Image'
import GHCalendar from '@/components/Main/GHCalendar'
import Skills from '@/components/Main/Skills'

const MAX_DISPLAY = 3

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <div className='flex items-center justify-center'>
            <Image
                //change source to professional headshot of me
                src={'/static/images/Ez-pfp-art.png'}
                alt="Headshot"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
          </div>
          <Typewriter />                 
          <h1 className='text-3xl font-bold'>Elevator Pitch</h1>
          {/* Make sure to match this text to that of the About page === ./authors/default.mdx */}
          <p className='text-lg leading-7 text-gray-500 dark:text-gray-400'>
            My name is Isaiah Martinez, and I am a graduate student studying Computer Science at CSUN.
            I obtained my B.S. in Computer Science and Mathematics in Spring 2023.
            My interests include algorithm design and analysis, graph theory, combinatorics, proofs, and research.

            I am a lifelong student.
            There is always something new to learn, and I am happy to be a part of it.
            I often construct new mini-projects and learn new skills beyond coding.
            As such, I am very comfortable with trying new things and often seek to expand the limits of my understanding, even beyond my fields of interest.
            This extends beyond my academic studies to my hobbies, personal relationships, and my view on life.
          </p>
          <GHCalendar />
          <Skills />
          {/* `Latest Blog Posts` must always be the last thing in this div */}
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest Blog Posts
          </h1>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm title={'Subscribe to my newsletter!'}/>
        </div>
      )}
    </>
  )
}
