import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container } from "react-bootstrap";

const Brands = () => {
  const data = useStaticQuery(graphql`
    query BrandImages {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
        filter: {
          fileAbsolutePath: { regex: "/(/content/brands)/.*\\\\.md$/" }
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
        <h2 className="title">Collaborators, Clients & Partners</h2>
        <Container className="inner pt-0">
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
