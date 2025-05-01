import { themes as prismThemes } from "prism-react-renderer"
import type { Config } from "@docusaurus/types"
import type * as Preset from "@docusaurus/preset-classic"

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const gitHubRepository = "research-data-management-handbook"

const config: Config = {
  title: "Research Data Management Handbook",
  tagline: "Manage your research data effectively at TU/e",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://fictional-doodle-vm76q9w.pages.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.PREVIEW_PATH
    ? `${gitHubRepository}/${process.env.PREVIEW_PATH}`
    : `/${gitHubRepository}/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "tue-datastewards", // Usually your GitHub org/user name.
  projectName: gitHubRepository, // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/tue-datastewards/research-data-management-handbook/tree/main",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/tue-datastewards/research-data-management-handbook/tree/main",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "My Site",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Handbook",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/tue-datastewards/research-data-management-handbook",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Handbook",
              to: "/docs/intro",
            },
            {
              label: "Blog",
              to: "/blog",
            },
          ],
        },
        {
          title: "TU/e Resources",
          items: [
            {
              label: "Research Cockpit",
              href: "https://cockpit.research.tue.nl",
            },
            {
              label: "Solution Searcher",
              href: "https://openpar.pages.tue.nl/solution-searcher/",
            },
          ],
        },
        {
          title: "More about Research Data Management",
          items: [
            {
              label: "Zenodo",
              href: "https://zenodo.org/communities/tue_rdmsupport",
            },
            {
              label: "GitHub",
              href: "https://github.com/tue-datastewards/research-data-management-handbook/",
            },
            {
              label: "TU/e Research Data Management Website",
              href: "https://www.tue.nl/en/our-university/library/library-for-researchers-and-phds/research-data-management/",
            },
          ],
        },
      ],
      copyright: `CC0 Public Domain Dedication`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
