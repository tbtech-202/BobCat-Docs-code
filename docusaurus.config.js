// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/vsLight");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "BobCat",
  tagline:
    "Imagine a simple customizable multipurpose bot",
  url: "https://servermanagerbot.ml",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  trailingSlash: false,
  deploymentBranch:"main",
  organizationName: "tbtech-202", // Usually your GitHub org/user name.
  projectName: "BobCat-Docs", // Usually your repo name.
  plugins: ["docusaurus-plugin-sass"],
  presets: [ 
    [
      "classic",
      {
        docs: {
          editUrl: "https://github.com/tbtech-202/BobCat-Docs/tree/main",
          routeBasePath: "/",
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/scss/main.scss"),
        },
      },
    ],
  ],
  themeConfig: {
    // announcementBar: {
    //   content: `🎉 <strong>Server Manager</strong> has been officially verified! <a href="/blog/verification-announcement">Check out our blog</a>!`,
    //   },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    blog: {
      showReadingTime: true,
      },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
    },
    navbar: {
      title: "BobCat Inc",
      hideOnScroll: true,
      items: [
        {
          href: 'http://invite.bobcatbot.xyz/',
          position: 'right',
          label: 'Invite Me',
        },
        {
          href: 'https://discord.gg/6bCKvP24kb',
          position: 'right',
          label: 'Support',
        },
        {
          to: '/category/documentation',
          position: 'right',
          label: 'Docs',
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "BobCat Bot",
          items: [
            {
              label: "Support",
              href: "https://discord.gg/6bCKvP24kb"
            },
            {
              label: "Terms of Service",
              to: "/terms"
            },
            {
              label: "Privacy Policy",
              to: "/privacy"
            },
          ]
        },
      {
        title: "Other",
        items: [
          {
            label: "GitHub",
            href: "https://github.com/Server-Manager-Dev-Team/website"
          },
          {
            label: "Blog",
            to: "/blog"
          },
          {
            label: "Roadmap",
            to: "/roadmap"
          }
        ]
      }
      ]
    },
    prism: {
      defaultLanguage: "python",
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
