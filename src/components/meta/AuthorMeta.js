import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import _ from "lodash";
import { StaticQuery, graphql } from "gatsby";

import ImageMeta from "./ImageMeta";
import getAuthorProperties from "./getAuthorProperties";
import config from "../../../data/siteConfig";

const AuthorMeta = ({ data, settings, canonical }) => {
  const ghostSettings = settings.allGhostSettings.edges[0].node;
  const author = getAuthorProperties(data);
  const shareImage = author.image || _.get(ghostSettings, "cover_image", null);
  const title = `${data.name} - ${ghostSettings.title}`;
  const description = data.bio || config.siteDescriptionMeta || ghostSettings.description;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:site_name" content={ghostSettings.title} />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
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
                        "@type": "Person",
                        "name": "${data.name}",
                        ${author.sameAsArray ? `"sameAs": ${author.sameAsArray},` : ""}
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
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "${config.siteUrl}"
                        },
                        "description": "${description}"
                    }
                `}
        </script>
      </Helmet>
      <ImageMeta image={shareImage} />
    </>
  );
};

AuthorMeta.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    bio: PropTypes.string,
    profile_image: PropTypes.string,
    website: PropTypes.string,
    twitter: PropTypes.string,
    facebook: PropTypes.string,
  }).isRequired,
  settings: PropTypes.shape({
    allGhostSettings: PropTypes.object.isRequired,
  }).isRequired,
  canonical: PropTypes.string.isRequired,
};

const AuthorMetaQuery = (props) => (
  <StaticQuery
    query={graphql`
      query GhostSettingsAuthorMeta {
        allGhostSettings {
          edges {
            node {
              ...GhostSettingsFields
            }
          }
        }
      }
    `}
    render={(data) => <AuthorMeta settings={data} {...props} />}
  />
);

export default AuthorMetaQuery;
