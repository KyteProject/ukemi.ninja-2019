import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Container, Row, Button } from "react-bootstrap";

import MainLayout from "../layout";
import { MetaData } from "../components/meta";
import TitleSection from "../components/common/TitleSection";
import InDevelopment from "../components/common/InDevelopment";

const shop = ({ location }) => {
  const data = useStaticQuery(
    graphql`
      query AllProductsQuery {
        allStripeSku(filter: { active: { eq: true } }) {
          edges {
            node {
              id
              product {
                id
                attributes
                created
                metadata {
                  slug
                  version
                  summary
                }
                name
                shippable
              }
            }
          }
        }
      }
    `
  );

  const products = data.allStripeSku.edges;

  return (
    <MainLayout>
      <MetaData title="Shop" location={location} />

      <div className="shop-container">
        <TitleSection location={location} crumbLabel="Shop" />
        <InDevelopment />
        {products.length > 0
          ? /* prettier-ignore */
            products.map(({node}) =>
              <Link key={node.product.id} to={`shop/${node.product.metadata.slug}`}>{node.product.name}</Link>
              )
          : null}
      </div>
    </MainLayout>
  );
};

export default shop;
