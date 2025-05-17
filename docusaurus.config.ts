import type { Config} from '@docusaurus/types'
import type { Options } from '@docusaurus/preset-classic'


const config: Config = {
  title: 'JavaScript инженерлеріне арналған Python нұсқаулығы',
  tagline: 'Python, JavaScript, programming, experience, tutorials, open source, free, eBooks, downloads, PDF, examples',
  organizationName: 'coccinelleee',
  projectName: 'isaadiploma',
  url: 'https://coccinelleee.github.io',
  baseUrl: '/isaadiploma/',         
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  presets: [
    [
      'classic',
      ({
        docs: {
          path: './docs',
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          sidebarCollapsed: false,
          editLocalizedFiles: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        }
      }) as Options,
    ],
  ],

  themeConfig: (
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        hideOnScroll: true,
        title: 'JavaScript инженерлеріне арналған Python нұсқаулығы',
        logo: {
          alt: 'JavaScript инженерлеріне арналған Python нұсқаулығы',
          href: '/',
          src: './img/favicon.ico'
        },
      },
      metadata: [
        { name: 'keywords', content: 'Python, JavaScript, Programming, Experience, Tutorial, Open Source, Free, eBook, Download, PDF, Examples' },
        { name: 'description', content: 'The Python Guide for JavaScript Engineers is an open source ebook that covers everything from Python environment installation to project development. This book compares the similarities and differences between JavaScript and Python through cases to help JavaScript engineers quickly master the Python language.' },
        { name: 'author', content: 'luckrnx09' },
      ],
    }
  ),
  plugins: [
    function (context, options) {
      return {
        name: 'baidu-plugin',
        injectHtmlTags({ content }) {
          return {
            postBodyTags: [`
            <script type="text/javascript">
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "k0fttuea53");
        </script>
            `],
          };
        },
      };
    },
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
        docsRouteBasePath: "/",
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],
  stylesheets: [],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-cn'],
  },
};

module.exports = config;
