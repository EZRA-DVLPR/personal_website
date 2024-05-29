/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'EZRA\'s Personal Website',
  author: 'EZRA-DVLPR',
  headerTitle: 'Portfolio',
  description: 'A portfolio website created with Next.js and Tailwind.css',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://ezra-dvlpr.github.io/personal_website/',
  siteRepo: 'https://github.com/EZRA-DVLPR/personal_website',
  siteLogo: '/static/images/logo.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'EZRA-DVLPR@protonmail.com',
  github: 'https://github.com/EZRA-DVLPR',
  x: 'https://x.com/IsaiahMTech',
  linkedin: 'https://www.linkedin.com/in/isaiah-martinez-tech-dev-comp-math/',
  instagram: 'https://www.instagram.com/the_ezra_project/',
  //mastodon: 'https://mastodon.social/@mastodonuser',
  //threads: 'https://www.threads.net',
  //twitter: 'https://twitter.com/Twitter',
  //facebook: 'https://facebook.com',
  //youtube: 'https://youtube.com',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    simpleAnalytics: {},
  },
  newsletter: {
    provider: 'buttondown',
  },
  comments: {
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'title', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      metadata: '0', // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
  },
}

module.exports = siteMetadata
