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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: path.join(__dirname, "src", "content", "projects"),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    {
      resolve: "gatsby-source-ghost",
      options:
        process.env.NODE_ENV === "development" ? ghostConfig.development : ghostConfig.production,
    },
    {
      resolve: `gatsby-source-stripe`,
      options: {
        objects: ["Product", "Sku"],
        secretKey: process.env.GATSBY_STRIPE_KEY,
        downloadFiles: true,
      },
    },
    {
      resolve: `gatsby-source-custom-api`,
      options: {
        url: "https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;",
        rootKey: "restCountries",
        schemas: {
          countries: `
          name: String
          alpha2Code: String
          `,
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: config.googleAnalyticsID,
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
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-stripe",
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
