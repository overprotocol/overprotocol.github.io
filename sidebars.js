/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs/src/sidebars/types.ts').SidebarConfig} */
const learnSidebar = [
  {
    type: "html",
    value: "Learn",
    className: "sidebar-title",
  },
  {
    type: "doc",
    id: "learn/index",
    label: "Welcome to OverProtocol",
  },
  {
    type: "category",
    label: "Layered Architecture",
    collapsible: true,
    collapsed: true,
    link: {
      type: "doc",
      id: "learn/layered-architecture/overview",
    },
    items: [
      "learn/layered-architecture/ethanos",
    ],
  },
  {
    type: "category",
    label: "Consensus",
    collapsible: true,
    collapsed: true,
    link: {
      type: "doc",
      id: "learn/consensus/overview",
    },
    items: [
      "learn/consensus/requirements",
      "learn/consensus/rewards-and-penalties",
    ],
  },
  {
    type: "category",
    label: "Tokenomics",
    collapsible: true,
    collapsed: true,
    link: {
      type: "doc",
      id: "learn/tokenomics/overview",
    },
    items: [
      {
        type: "doc",
        label: "Token Distribution",
        id: "learn/tokenomics/distribution",
      },
      "learn/tokenomics/feedback",
      "learn/tokenomics/fee",
    ],
  },
];

/** @type {import('@docusaurus/plugin-content-docs/src/sidebars/types.ts').SidebarConfig} */
const operatorsSidebar = [
  {
    type: "html",
    value: "Operators",
    className: "sidebar-title",
  },
  {
    type: "doc",
    id: "operators/index",
    label: "Getting Started",
  },
  {
    type: "doc",
    id: "operators/system-requirements",
    label: "System Requirements",
  },
  {
    type: "doc",
    label: "Run a Node",
    id: "operators/run-a-node",
  },
  {
    type: "doc",
    label: "Operate Validators",
    id: "operators/operate-validators",
  },
  {
    type: "category",
    label: "Command Line Options",
    collapsible: true,
    collapsed: true,
    items: [
      {
        type: "doc",
        label: "Kairos",
        id: "operators/CLI-options/kairos",
      },
      {
        type: "doc",
        label: "Chronos",
        id: "operators/CLI-options/chronos",
      },
    ],
  },
  {
    type: "doc",
    label: "FAQs",
    id: "operators/faqs",
  },
];

/** @type {import('@docusaurus/plugin-content-docs/src/sidebars/types.ts').SidebarConfig} */
const developersSidebar = [
  {
    type: "html",
    value: "Developers",
    className: "sidebar-title",
  },
  {
    type: "doc",
    id: "developers/index",
    label: "Getting Started",
  },
  {
    type: "category",
    label: "Build Your Contract",
    collapsible: true,
    collapsed: true,
    link: { type: "doc", id: "developers/build-your-contract/index" },
    items: [
      "developers/build-your-contract/deploy-your-contract",
      "developers/build-your-contract/developer-tools",
    ],
  },
  {
    type: "doc",
    label: "Client APIs",
    id: "developers/client-apis",
  },
  {
    type: "doc",
    label: "Deployed Contracts",
    id: "developers/deployed-contracts",
  },
];

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  learnSidebar,
  operatorsSidebar,
  developersSidebar,
};

module.exports = sidebars;
