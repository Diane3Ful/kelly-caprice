import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Katie Kush, Kelly Caprice - Free Use Maid Service',
  tagline: 'Watch Katie Kush, Kelly Caprice - Free Use Maid Service Full Video Free HD ✔️No Ads',
  favicon: 'img/favicon.ico',

  url: 'https://kelly-caprice.vercel.app/',
  baseUrl: '/',

  organizationName: 'spel987',
  projectName: 'Katie Kush, Kelly Caprice - Free Use Maid Service',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/Diane3Ful/kelly-caprice/tree/main/',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'og:url', content: 'https://kelly-caprice.vercel.app'},
        {name: 'og:image', content: 'https://p-u.vercel.app/assets/meta_visual.png'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {name: 'twitter:image', content: 'https://p-u.vercel.app/assets/meta_visual.png'},
        {name: 'og:description', content: 'Watch Katie Kush, Kelly Caprice - Free Use Maid Service Full Video Free HD ✔️No Ads.'},
        {name: 'theme-color', content: '#4f46e5'},
        {name: 'google-site-verification', content: ''}
      ],
      navbar: {
        title: 'PolyUploader',
        logo: {
          alt: 'PolyUploader Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Guide & Explications',
          },
          {
            href: 'https://github.com/Diane3Ful/kelly-caprice',
            label: 'GitHub Repository',
            position: 'right',
          },
        ],
      },
      footer: {

        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Guide & Explications',
                to: '/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Demonstration',
                href: 'https://kelly-caprice.vercel.app/',
              },
              {
                label: 'GitHub Repository',
                href: 'https://kelly-caprice.vercel.app/',
              },
              {
                label: 'Site GitHub Repository',
                href: 'https://kelly-caprice.vercel.app/',
              },
              {
                label: 'Terms',
                href: 'https://kelly-caprice.vercel.app/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PolyUploader, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
