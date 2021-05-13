import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container } from "react-bootstrap";

const Brands = () => {
  const data = useStaticQuery(graphql`
    query BrandImages {
      allMarkdownRemark(
        limit: 20
        sort: { order: ASC, fields: frontmatter___name }
        filter: {
          fileAbsolutePath: { regex: "/(/content/brands)/.*.md$/" }
          frontmatter: { featured: { eq: true } }
        }
      ) {
        edges {
          node {
            id
            frontmatter {
              name
              website
              brand_logo
            }
          }
        }
      }
    }
  `);

  const brands = data.allMarkdownRemark.edges;

  return (
    <>
      <section className="brands">
        <Container className="inner">
          <h2 className="title">Clients & Collaborators</h2>
          <div className="brand-list">
            {brands.map(({ node }) => (
              <div className="brand-item" key={node.id}>
                <a href={node.frontmatter.website}>
                  <img
                    src={node.frontmatter.brand_logo}
                    className="brands-image"
                    alt={node.frontmatter.name}
                  />
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Brands;
