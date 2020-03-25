import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Container, Row } from "react-bootstrap";

import { MetaData } from "../components/meta";
import TitleSection from "../components/common/TitleSection";
import PageTitle from "../components/common/PageTitle";
import ListItem from "../components/shop/ListItem";

const shop = ({ location }) => {
  const data = useStaticQuery(
    graphql`
      query AllProductsQuery {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: { fileAbsolutePath: { regex: "/(/content/products)/.*\\\\.md$/" } }
        ) {
          edges {
            node {
              id
              frontmatter {
                slug
                weight
                width
                details
                height
                length
                name
                price
                category
                product_images
                shipping_info
                short_description
                stripe_id
                thumbnail
              }
              html
            }
          }
        }
      }
    `
  );

  const products = data.allMarkdownRemark.edges;

  return (
    <>
      <MetaData title="Shop" location={location} />
      <TitleSection location={location} crumbLabel="Shop" />
      <PageTitle
        title="Ukemi Store"
        subTitle={["Check out some of our unique parkour, freerunning, and movement products!"]}
      />
      <Container className="inner pt-5">
        <div className="grid grid-view boxed">
          <div className="tiles">
            <Row>
              {products.length > 0
                ? /* prettier-ignore */
                  products.map(({node}) =>
                    <ListItem key={node.id} item={node.frontmatter} />
                  )
                : null}
            </Row>
          </div>
        </div>
      </Container>
    </>
  );
};

export default shop;
