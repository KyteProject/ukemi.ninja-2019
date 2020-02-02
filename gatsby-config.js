require("dotenv").config();

const urljoin = require("url-join");
const path = require("path");
const config = require("./data/siteConfig");

const ghostConfig = {
  production: {
    apiUrl: process.env.GHOST_API_URL,
    contentApiKey: process.env.GHOST_CONTENT_API_KEY,
  },
  development: {
    apiUrl: process.env.DEV_GHOST_API_URL,
    contentApiKey: process.env.DEV_GHOST_CONTENT_API_KEY,
  },
};

const { apiUrl, contentApiKey } =
  process.env.NODE_ENV === "development" ? ghostConfig.development : ghostConfig.production;

if (!apiUrl || !contentApiKey || contentApiKey.match(/<key>/)) {
  throw new Error("GHOST_API_URL and GHOST_CONTENT_API_KEY are required to build.");
}

module.exports = {
  pathPrefix: config.pathPrefix === "" ? "/" : config.pathPrefix,
  siteMetadata: {
    siteUrl: urljoin(config.siteUrl, config.pathPrefix),
    rssMetadata: {
      site_url: urljoin(config.siteUrl, config.pathPrefix),
      feed_url: urljoin(config.siteUrl, config.pathPrefix, config.siteRss),
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${urljoin(config.siteUrl, config.pathPrefix)}/logos/logo-512.png`,
      copyright: config.copyright,
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: path.join(__dirname, "src", "images"),
        name: "images",
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:8777",
        contentTypes: ["projects"],
        queryLimit: 1000,
      },
    },
    {
      resolve: "gatsby-source-ghost",
      options:
        process.env.NODE_ENV === "development" ? ghostConfig.development : ghostConfig.production,
    },
    {
      resolve: "gatsby-source-shopware-channel",
      options: {
        host: process.env.SHOPWARE_ACCESS_URL,
        accessKey: process.env.SHOPWARE_ACCESS_KEY,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.googleAnalyticsID,
      },
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: config.themeColor,
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Muli", "Alice", "Quattrocento Sans", "Rokkit"],
        display: "swap",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-transition-link",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "minimal-ui",
        icons: [
          {
            src: "/logos/logo-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/logos/logo-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    },
    "gatsby-plugin-offline",
  ],
};
