const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://docs.logfire.ai',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    // logo: "https://github.com/logfire-sh/web-client/blob/main/images/logo.svg",
    // logoLink: 'https://hasura.io/learn/',
    // title:
    //   "<a href='https://hasura.io/learn/'><img class='img-responsive' src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/learn-logo.svg' alt='Learn logo' /></a>",
    githubUrl: 'https://github.com/hasura/gatsby-gitbook-boilerplate',
    helpUrl: '',
    tweetText: '',
    social: ``,
    links: [{ text: '', link: '' }],
    search: {
      enabled: true,
      indexName: 'Search',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
        'cli'
    ],
    collapsedNav: [],
    links: [{ text: 'Logfire', link: 'https://logfire.ai' }],
    frontLine: false,
    ignoreIndex: true,
    // title:
    //   "<a href='https://hasura.io/learn/'>graphql </a><div class='greenCircle'></div><a href='https://hasura.io/learn/graphql/react/introduction/'>react</a>",
  },
  siteMetadata: {
    title: 'Logfire documentation',
    description: 'Logfire documentation',
    ogImage: null,
    docsLocation: 'https://github.com/logfire-sh/documentation/tree/main/content',
    // favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Logfire documentation Starter',
      short_name: 'Logfire documentation starter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
