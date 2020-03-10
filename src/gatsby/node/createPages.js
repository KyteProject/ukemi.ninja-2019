/* eslint-disable no-nested-ternary */
const path = require("path");
const { paginate } = require("gatsby-awesome-pagination");
const { postsPerPage } = require("../../../data/siteConfig");

const createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
      allGhostPost(sort: { order: ASC, fields: published_at }) {
        edges {
          node {
            slug
          }
        }
      }
      allStripeSku {
        edges {
          node {
            id
            product {
              metadata {
                slug
              }
            }
          }
        }
      }
    }
  `);

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors);
  }

  // Extract query results
  const posts = result.data.allGhostPost.edges;
  const projects = result.data.allMarkdownRemark.edges;
  const products = result.data.allStripeSku.edges;

  // Load templates
  const indexTemplate = path.resolve("./src/templates/index.jsx");
  const postTemplate = path.resolve("./src/templates/post.jsx");
  const projectTemplate = path.resolve("./src/templates/project.jsx");
  const productTemplate = path.resolve("./src/templates/product.jsx");

  // Create Shop Product pages
  products.forEach(({ node }) => {
    createPage({
      path: `shop/${node.product.metadata.slug}`,
      component: productTemplate,
      context: {
        id: node.id,
      },
    });
  });

  // Create Project pages
  projects.forEach(({ node }) => {
    createPage({
      path: `projects/${node.frontmatter.slug}`,
      component: projectTemplate,
      context: {
        slug: node.frontmatter.slug,
        id: node.id,
      },
    });
  });

  // Create post pages
  posts.forEach(({ node }) => {
    const url = `blog/${node.slug}/`;

    createPage({
      path: url,
      component: postTemplate,
      context: {
        slug: node.slug,
      },
    });
  });

  // Create pagination
  paginate({
    createPage,
    items: posts,
    itemsPerPage: postsPerPage,
    component: indexTemplate,
    pathPrefix: ({ pageNumber }) => {
      if (pageNumber === 0) {
        return "/blog/";
      }
      return "/blog/page";
    },
  });
};

module.exports = createPages;
