/* eslint-disable no-nested-ternary */
const path = require("path");
const { paginate } = require("gatsby-awesome-pagination");
const { postsPerPage } = require("../../../data/siteConfig");

const createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    {
      allProjects: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
        filter: { fileAbsolutePath: { regex: "/(/content/projects)/.*\\\\.md$/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
      allProducts: allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
        filter: { fileAbsolutePath: { regex: "/(/content/products)/.*\\\\.md$/" } }
      ) {
        edges {
          node {
            id
            frontmatter {
              slug
              hidden
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
  const projects = result.data.allProjects.edges;
  const products = result.data.allProducts.edges;

  // Load templates
  const indexTemplate = path.resolve("./src/templates/index.jsx");
  const postTemplate = path.resolve("./src/templates/post.jsx");
  const projectTemplate = path.resolve("./src/templates/project.jsx");
  const productTemplate = path.resolve("./src/templates/product.jsx");

  // Create Shop Product pages
  products.forEach(({ node }) => {
    if (!node.frontmatter.hidden) {
      createPage({
        path: `shop/${node.frontmatter.slug}`,
        component: productTemplate,
        context: {
          slug: node.frontmatter.slug,
          id: node.id,
        },
      });
    }
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
    createPage({
      path: `blog/${node.slug}/`,
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
