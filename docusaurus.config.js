// @ts-check
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mathematical Physics Statements Wiki',
  tagline: 'A curated index of proved, conjectured, and disproved statements in quantum and statistical physics.',
  favicon: 'img/favicon.ico',

  url: 'https://kangle-morning.github.io',
  baseUrl: '/qfolklore/',

  organizationName: 'kangle-morning',
  projectName: 'qfolklore',

  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  trailingSlash: false,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
         docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/kangle-morning/qfolklore/tree/main/',
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.10/dist/katex.min.css',
      type: 'text/css',
    },
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexPages: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
        language: ['en'],
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    navbar: {
      title: 'Physics Wiki',
      logo: {
        alt: 'Physics Wiki Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Browse',
        },
        {
          to: '/docs/about',
          label: 'About',
          position: 'left',
        },
        {
          to: '/docs/open-problems/long-range-area-laws',
          label: 'Open Problems',
          position: 'left',
        },
        {
          href: 'https://github.com/kangle-morning/qfolklore',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://kangle-morning.github.io/',
          label: 'Homepage',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Browse',
          items: [
            { label: 'About', to: '/docs/about' },
            { label: 'Mermin–Wagner', to: '/docs/proved/mermin-wagner' },
            { label: 'Open Problems', to: '/docs/open-problems/long-range-area-laws' },
          ],
        },
        {
          title: 'Project',
          items: [
            { label: 'GitHub', href: 'https://github.com/kangle-morning/qfolklore' },
            { label: 'Homepage', href: 'https://kangle-morning.github.io/' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mathematical Physics Statements Wiki.`,
    },

    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
  },
};

module.exports = config;