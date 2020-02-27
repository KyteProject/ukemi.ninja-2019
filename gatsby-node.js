/* eslint-disable no-nested-ternary */

const path = require("path");
const { paginate } = require("gatsby-awesome-pagination");
const { postsPerPage } = require("./data/siteConfig");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

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
      allGhostTag(sort: { order: ASC, fields: name }) {
        edges {
          node {
            slug
            url
            postCount
          }
        }
      }
      allGhostAuthor(sort: { order: ASC, fields: name }) {
        edges {
          node {
            slug
            url
            postCount
          }
        }
      }
      allGhostPage(sort: { order: ASC, fields: published_at }) {
        edges {
          node {
            slug
            url
          }
        }
      }
      allGhostPage(sort: { order: ASC, fields: published_at }) {
        edges {
          node {
            slug
            url
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
  const tags = result.data.allGhostTag.edges;
  const authors = result.data.allGhostAuthor.edges;
  const pages = result.data.allGhostPage.edges;
  const posts = result.data.allGhostPost.edges;
  const projects = result.data.allMarkdownRemark.edges;
  const products = result.data.allStripeSku.edges;

  // Load templates
  const tagsTemplate = path.resolve("./src/templates/tag.jsx");
  const authorTemplate = path.resolve("./src/templates/author.jsx");
  const indexTemplate = path.resolve("./src/templates/index.jsx");
  const pageTemplate = path.resolve("./src/templates/page.jsx");
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

  // Create tag pages
  tags.forEach(({ node }) => {
    const totalPosts = node.postCount !== null ? node.postCount : 0;
    const numberOfPages = Math.ceil(totalPosts / postsPerPage);

    node.url = `blog/tag/${node.slug}/`;

    Array.from({ length: numberOfPages }).forEach((_, i) => {
      const currentPage = i + 1;
      const prevPageNumber = currentPage <= 1 ? null : currentPage - 1;
      const nextPageNumber = currentPage + 1 > numberOfPages ? null : currentPage + 1;
      const nextPagePath = nextPageNumber ? `${node.url}page/${nextPageNumber}/` : null;
      const previousPagePath = prevPageNumber	? prevPageNumber === 1 ? node.url : `${node.url}page/${prevPageNumber}/` : null; // prettier-ignore

      createPage({
        path: i === 0 ? node.url : `${node.url}page/${i + 1}/`,
        component: tagsTemplate,
        context: {
          slug: node.slug,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numberOfPages,
          humanPageNumber: currentPage,
          prevPageNumber,
          nextPageNumber,
          previousPagePath,
          nextPagePath,
        },
      });
    });
  });

  // Create author pages
  authors.forEach(({ node }) => {
    const totalPosts = node.postCount !== null ? node.postCount : 0;
    const numberOfPages = Math.ceil(totalPosts / postsPerPage);

    node.url = `blog/author/${node.slug}/`;

    Array.from({ length: numberOfPages }).forEach((_, i) => {
      const currentPage = i + 1;
      const prevPageNumber = currentPage <= 1 ? null : currentPage - 1;
      const nextPageNumber = currentPage + 1 > numberOfPages ? null : currentPage + 1;
      const nextPagePath = nextPageNumber ? `${node.url}page/${nextPageNumber}/` : null;
      const previousPagePath = prevPageNumber ? prevPageNumber === 1 ? node.url : `${node.url}page/${prevPageNumber}/` : null; // prettier-ignore

      createPage({
        path: i === 0 ? node.url : `${node.url}page/${i + 1}/`,
        component: authorTemplate,
        context: {
          slug: node.slug,
          limit: postsPerPage,
          skip: i * postsPerPage,
          numberOfPages,
          humanPageNumber: currentPage,
          prevPageNumber,
          nextPageNumber,
          previousPagePath,
          nextPagePath,
        },
      });
    });
  });

  // Create pages
  pages.forEach(({ node }) => {
    node.url = `blog/${node.slug}/`;

    createPage({
      path: node.url,
      component: pageTemplate,
      context: {
        slug: node.slug,
      },
    });
  });

  // Create post pages
  posts.forEach(({ node }) => {
    node.url = `blog/${node.slug}/`;

    createPage({
      path: node.url,
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
