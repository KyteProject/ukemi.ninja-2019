import React, { useState, useEffect } from "react";

import { graphql, useStaticQuery } from "gatsby";
import { Container, Row, Button } from "react-bootstrap";

import { MetaData } from "../components/meta";
import TitleSection from "../components/common/TitleSection";
import PageTitle from "../components/common/PageTitle";
import ListItem from "../components/shop/ListItem";

const Shop = ({ location }) => {
  const data = useStaticQuery(
    graphql`
      query AllProductsQuery {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
          filter: {
            fileAbsolutePath: { regex: "/(/content/products)/.*\\\\.md$/" }
            frontmatter: { hidden: { eq: false } }
          }
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
                hidden
              }
              html
            }
          }
        }
      }
    `
  );

  const products = data.allMarkdownRemark.edges;
  const categories = ["all"];

  products.forEach(({ node }) => {
    !categories.includes(node.frontmatter.category)
      ? categories.push(node.frontmatter.category)
      : null;
  });

  const [filterCat, setFilterCat] = useState("all");
  const [filterProducts, setFilterProducts] = useState(products);
  const handleClick = (event) => {
    setFilterCat(event.target.attributes.value.value.toLowerCase());
  };

  useEffect(() => {
    if (filterCat === "all") {
      return setFilterProducts(products);
    }

    const results = products.filter((product) =>
      product.node.frontmatter.category.toLowerCase().includes(filterCat)
    );

    return setFilterProducts(results);
  }, [filterCat]);

  return (
    <>
      <MetaData title="Shop" location={location} image="/images/og-index.png" />
      <TitleSection location={location} crumbLabel="Shop" />
      <PageTitle
        title="Ukemi Store"
        subTitle={["Check out some of our unique parkour, freerunning, and movement products!"]}
      />
      <Container className="inner pt-5">
        <div className="filter text-center">
          <ul>
            {categories.map((cat) => (
              <li key={cat}>
                <Button as="a" value={cat} onClick={handleClick}>
                  {cat}
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-view boxed">
          <div className="tiles">
            <Row>
              {products.length > 0
                ? /* prettier-ignore */
                  filterProducts.map(({node}) =>
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

export default Shop;
