import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Container, Row, Button } from "react-bootstrap";

import { MetaData } from "../components/meta";
import TitleSection from "../components/common/TitleSection";
import PageTitle from "../components/common/PageTitle";
import ListItem from "../components/shop/ListItem";

const shop = ({ location }) => {
  const data = useStaticQuery(
    graphql`
      query AllProductsQuery {
        allStripeSku(filter: { active: { eq: true } }) {
          edges {
            node {
              currency
              product {
                name
                metadata {
                  slug
                  short_summary
                }
                id
              }
              price
              localFiles {
                publicURL
              }
              id
            }
          }
        }
      }
    `
  );

  const products = data.allStripeSku.edges;

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
                    <ListItem key={node.id} item={node} />
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
