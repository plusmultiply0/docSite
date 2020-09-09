module.exports = {
  title: 'Kim Zhou的文档小站',
  tagline: 'coding for fun~',
  url: 'https://docsite-on-render.onrender.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onDuplicateRoutes: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'plusmultiply0', // Usually your GitHub org/user name.
  projectName: 'docSite', // Usually your repo name.
  // githubHost: ,
  
  themeConfig: {
    navbar: {
      title: 'My DocSite',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/plusmultiply0/docSite',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'OverView',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/plusmultiply0/docSite',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} docSite, Inc. Built with Docusaurus. Power by Render`,
    },
  },
  plugins:[],
  themes: [],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  customFields:{},
  // script:[],
  // ssrTemplate:'',
  stylesheets:[],
};
