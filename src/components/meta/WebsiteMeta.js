import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import _ from "lodash";
import { StaticQuery, graphql } from "gatsby";
import url from "url";

import ImageMeta from "./ImageMeta";
import config from "../../../data/siteConfig";

const WebsiteMeta = ({ data, settings, canonical, title, description, image, type }) => {
  const ghostSettings = settings.allGhostSettings.edges[0].node;

  const publisherLogo = url.resolve(config.siteUrl, ghostSettings.logo || config.siteIcon);

  let shareImage = image || data.feature_image || _.get(ghostSettings, "cover_image", null);

  shareImage = shareImage ? url.resolve(config.siteUrl, shareImage) : null;

  const ghostDescription =
    description ||
    data.meta_description ||
    data.description ||
    config.siteDescriptionMeta ||
    ghostSettings.description;

  const ghostTitle = `${title || data.meta_title || data.name || data.title} - ${
    ghostSettings.title
  }`;

  return (
    <>
      <Helmet>
        <title>{ghostTitle}</title>
        <meta name="description" content={ghostDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:site_name" content={ghostSettings.title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={ghostTitle} />
        <meta property="og:description" content={ghostDescription} />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:title" content={ghostTitle} />
        <meta name="twitter:description" content={ghostDescription} />
        <meta name="twitter:url" content={canonical} />
        {ghostSettings.twitter && (
          <meta
            name="twitter:site"
            content={`https://twitter.com/${ghostSettings.twitter.replace(/^@/, "")}/`}
          />
        )}
        {ghostSettings.twitter && <meta name="twitter:creator" content={ghostSettings.twitter} />}
        <script type="application/ld+json">
          {`
                    {
                        "@context": "https://schema.org/",
                        "@type": "${type}",
                        "url": "${canonical}",
                        ${
                          shareImage
                            ? `"image": {
                                "@type": "ImageObject",
                                "url": "${shareImage}",
                                "width": "${config.shareImageWidth}",
                                "height": "${config.shareImageHeight}"
                            },`
                            : ""
                        }
                        "publisher": {
                            "@type": "Organization",
                            "name": "${ghostSettings.title}",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "${publisherLogo}",
                                "width": 60,
                                "height": 60
                            }
                        },
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "${config.siteUrl}"
                        },
                        "description": "${ghostDescription}"
                    }
                `}
        </script>
      </Helmet>
      <ImageMeta image={shareImage} />
    </>
  );
};

WebsiteMeta.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    feature_image: PropTypes.string,
    description: PropTypes.string,
    bio: PropTypes.string,
    profile_image: PropTypes.string,
  }).isRequired,
  settings: PropTypes.shape({
    allGhostSettings: PropTypes.object.isRequired,
  }).isRequired,
  canonical: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  type: PropTypes.oneOf(["WebSite", "Series"]).isRequired,
};

const WebsiteMetaQuery = (props) => (
  <StaticQuery
    query={graphql`
      query GhostSettingsWebsiteMeta {
        allGhostSettings {
          edges {
            node {
              ...GhostSettingsFields
            }
          }
        }
      }
    `}
    render={(data) => <WebsiteMeta settings={data} {...props} />}
  />
);

export default WebsiteMetaQuery;
