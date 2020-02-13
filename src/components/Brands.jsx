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
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    autoplay: true,
    speed: 300,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <section className="brands">
        <Container className="inner">
          <h2 className="subtitle text-center"> Brands we've worked with</h2>
          <Slider className="brands-slider" {...settings}>
            {brands.map(({ node }) => (
              <div key={node.id}>
                <Img fixed={node.childImageSharp.fixed} className="brands-image" />
              </div>
            ))}
          </Slider>
        </Container>
      </section>
    </>
  );
};

export default Brands;
