import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Container, Row, Button } from "react-bootstrap";

import MainLayout from "../layout";
import { MetaData } from "../components/meta";
import TitleSection from "../components/common/TitleSection";
import InDevelopment from "../components/common/InDevelopment";
import PageTitle from '../components/common/PageTitle';
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
    <MainLayout>
      <MetaData title="Shop" location={location} />
      <TitleSection location={location} crumbLabel="Shop" />
      <PageTitle title="Ukemi Store" />
      <Container className="inner">
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
    </MainLayout>
  );
};

export default shop;
