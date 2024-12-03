// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

function getNextVersionName() {
  return "v1.0.0";
  /*
  const expectedPrefix = '2.0.0-rc.';

  const lastReleasedVersion = versions[0];
  if (!lastReleasedVersion || !lastReleasedVersion.includes(expectedPrefix)) {
    throw new Error(
      'this code is only meant to be used during the 2.0 alpha/beta/rc phase.',
    );
  }
  const version = parseInt(lastReleasedVersion.replace(expectedPrefix, ''), 10);
  return `${expectedPrefix}${version + 1}`;

   */
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "OverProtocol Docs",
  url: "https://overprotocol.github.io",
  baseUrl: "/",

  // Github pages
  projectName: "overprotocol.github.io",
  organizationName: "overprotocol",
  deploymentBranch: "main",
  trailingSlash: false,

  favicon: "img/favicon.ico",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsible: false,
          editUrl: ({ docPath }) => {
            const nextVersionDocsDirPath = "docs";
            return `https://github.com/overprotocol/overprotocol.github.io/edit/develop/${nextVersionDocsDirPath}/${docPath}`;
          },
          path: "docs",
          // showLastUpdateTime: true,
          remarkPlugins: [math],
          rehypePlugins: [katex],
          versions: {
            current: {
              label: `${getNextVersionName()}`,
            },
          },
        },
        blog: false,
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity: "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/social-card.png",
      colorMode: {
        defaultMode: "light",
      },
      docs: {
        sidebar: {
          autoCollapseCategories: false,
          hideable: true,
        },
      },
      navbar: {
        title: "OverProtocol",
        logo: {
          alt: "Over Logo",
          src: "img/Over-Logo_black.png",
          className: "header-logo",
        },
        items: [
          {
            label: "Learn",
            position: "left",
            to: "/",
          },
          {
            label: "Operators",
            position: "left",
            to: "/operators",
          },
          {
            label: "Developers",
            position: "left",
            to: "/developers",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
            dropdownActiveClassDisabled: true,
            dropdownItemsAfter: [
              // {
              //   type: "html",
              //   value: '<hr class="dropdown-separator">',
              // },
              // {
              //   to: "/versions",
              //   label: "All Versions",
              // },
            ],
          },
          {
            href: "https://www.github.com/overprotocol",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "X",
                href: "https://x.com/overprotocol",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/overprotocol",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OverProtocol`,
      },
      prism: {
        // theme: lightCodeTheme,
        // darkTheme: darkCodeTheme,
        additionalLanguages: ['bash', 'solidity']
      },
    }),
};

module.exports = config;
