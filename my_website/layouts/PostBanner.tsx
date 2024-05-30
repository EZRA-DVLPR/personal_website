import { ReactNode } from 'react'
import Image from '@/components/Image'
import Bleed from 'pliny/ui/Bleed'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog, Authors } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import Tag from '@/components/Tag'

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface LayoutProps {
  authorDetails: CoreContent<Authors>[]
  content: CoreContent<Blog>
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export default function PostMinimal({ content, next, prev, authorDetails, children }: LayoutProps) {
  const { slug, title, images, date, tags } = content
  
  //find a better image suited for a default display
  const displayImage = images && images.length > 0 ? images[0] : '/static/images/github-traffic.png'

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
      <div>
        <div className="flex justify-between items-center pt-10">
          <div>
            <PageTitle>{title}</PageTitle>
          </div>
          <div>
            <dt className="sr-only">Published on</dt>
            <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              <time dateTime={date}> 
                {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
              </time>
            </dd>
          </div>
        </div>
        <div className="space-y-1 pb-10 text-center dark:border-gray-700">
          <div className="w-full">
            <Bleed>
              <div className="relative aspect-[2/1] w-full">
                <Image src={displayImage} alt={title} fill className="object-cover" />
              </div>
            </Bleed>
          </div>
          <br></br>
            <dd>
              <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:space-x-0 xl:space-y-8">
                {authorDetails.map((author) => (
                  <li className="flex items-center space-x-2" key={author.name}>
                    {author.avatar && (
                      <Image
                        src={author.avatar}
                        width={38}
                        height={38}
                        alt="avatar"
                        className="h-10 w-10 rounded-full"
                      />
                    )}
                    <dl className="whitespace-nowrap text-sm font-medium leading-5">
                      <dt className="sr-only">Name</dt>
                      <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                      <dt className="sr-only">Twitter</dt>
                      <dd>
                        {author.twitter && (
                          <Link
                            href={author.twitter}
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          >
                            {author.twitter
                              .replace('https://twitter.com/', '@')
                              .replace('https://x.com/', '@')}
                          </Link>
                        )}
                      </dd>
                    </dl>
                  </li>
                ))}
              </ul>
            </dd>
        </div>
          {tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xl uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Tags
                    </h2>
                    <div className="flex flex-wrap">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
          <div className="prose max-w-none py-4 dark:prose-invert">{children}</div>
          {siteMetadata.comments && (
            <div className="pb-6 pt-6 text-center text-gray-700 dark:text-gray-300" id="comment">
              <Comments slug={slug} />
            </div>
          )}
          <footer>
            <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
              {prev && prev.path && (
                <div className="pt-4 xl:pt-8">
                  <Link
                    href={`/${prev.path}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label={`Previous post: ${prev.title}`}
                  >
                    &larr; {prev.title}
                  </Link>
                </div>
              )}
              {next && next.path && (
                <div className="pt-4 xl:pt-8">
                  <Link
                    href={`/${next.path}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label={`Next post: ${next.title}`}
                  >
                    {next.title} &rarr;
                  </Link>
                </div>
              )}
            </div>
          </footer>
        </div>
      </article>
    </SectionContainer>
  )
}
