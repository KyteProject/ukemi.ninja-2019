const config = {
  siteTitle: "Ukemi - Movement Design Specialists",
  siteTitleShort: "Ukemi Ltd.", // Short site title under 12 characters to prevent truncation.
  siteTitleAlt: "Ukemi - Movement Design", // Alternative site title for SEO.
  siteLogo: "/favicon/favicon-196.png",
  siteIcon: "/favicon/favicon-196.png",
  siteUrl: "https://ukemi.ninja",
  defaultOGImage: "/images/og-index.png",
  pathPrefix: "",
  siteDescription:
    "Ukemi promotes activity in highly urbanised areas and encourages a healthier society through digital design, product creation, and community arts development.",
  siteRss: "/rss.xml",
  siteFBAppID: "", // TODO
  googleAnalyticsID: "", // TODO
  // disqusShortname: 'https-vagr9k-github-io-gatsby-advanced-starter',
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userLinks: [
    {
      label: "Facebook",
      url: "https://www.facebook.com/UkemiProject",
    },
    {
      label: "GitHub",
      url: "https://github.com/ukemi-project",
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/UkemiProject/",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/company/19003676/",
    },
    {
      label: "Twitter",
      url: "https://twitter.com/UkemiProject",
    },
    {
      label: "Youtube",
      url: "#",
    },
  ],
  copyright: "Copyright © 2020. Ukemi",
  themeColor: "#c62828",
  backgroundColor: "#e0e0e0",
  postsPerPage: 12,
  shareImageWidth: 1000,
  shareImageHeight: 523,
  postageSender: {
    name: "Ukemi",
    address1: "111 Constitution Street",
    address2: "",
    town: "Aberdeen",
    county: "Aberdeenshire",
    country: "GBR",
    postcode: "AB24 5EG",
  },
};

if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

if (config.siteUrl.substr(-1) === "/") {
  config.siteUrl = config.siteUrl.slice(0, -1);
}

if (config.siteRss && config.siteRss[0] !== "/") {
  config.siteRss = `/${config.siteRss}`;
}

module.exports = config;
