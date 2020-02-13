import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container } from "react-bootstrap";
import Img from "gatsby-image";
import Slider from "react-slick";

const Brands = () => {
  const data = useStaticQuery(graphql`
    query BrandImages {
      allFile(filter: { relativePath: { regex: "/brands/" } }) {
        edges {
          node {
            childImageSharp {
              fixed(quality: 100, width: 200, height: 80) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  `);

  const brands = data.allFile.edges;

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="brands">
        {/* <Container>
          <div className="block-title">
            <h2 className="block-title-text">
              Discover Our <br />
              Recent Articles
            </h2>
          </div>
        </Container> */}

        <Container className="inner">
          <h2 className="subtitle text-center"> Brands we've worked with</h2>
          <Slider className="brands-slider" {...settings}>
            {brands.map(({ node }) => (
              <div key={node.id}>
                <Img fixed={node.childImageSharp.fixed} />
              </div>
            ))}
          </Slider>
        </Container>
      </section>
    </>
  );
};

export default Brands;
