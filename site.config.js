const CONFIG = {
  // profile setting (required)
  profile: {
    name: 'gimmia\'s SecuBlog',
    image: '/avatar.svg',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: 'Security Student',
    bio: 'I study security with Dreamhack.io',
    email: 'gimm78064@gmail.com',
    linkedin: 'Not Yet',
    github: 'gimmia',
    instagram: 'Not Yet',
  },
  projects: [
    {
      name: `gimmia's blog`,
      href: 'https://gimmia.com'
    }
  ],
  // blog setting (required)
  blog: {
    title: 'gimmia\'s SecuBlog',
    description: 'welcome to gimmia\'s SecuBlog!',
    theme: 'light' // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: 'https://gimmia-SecuBlog.vercel.app',
  since: 2022, // If leave this empty, current year will be used.
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: '4f4768cbb3b84540b8ab0f42f19c1b8d', // process.env.NOTION_PAGE_ID
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.GOOGLE_MEASUREMENT_ID || ''
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.GOOGLE_SITE_VERIFICATION || ''
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: 'morethanmin/morethan-log',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
