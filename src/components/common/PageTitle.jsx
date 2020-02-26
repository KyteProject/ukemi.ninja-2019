import React from "react";
import { Container } from "react-bootstrap";

const PageTitle = ({ title, subTitle }) => {
  return (
    <Container className="inner pb-0">
      <h1 className="title text-center">{title}</h1>
      <h3 className="subtitle text-center font-italic">
        {subTitle ? subTitle[0] : null}
        <br className="d-none d-lg-block" />
        {subTitle ? subTitle[1] : null}
      </h3>
    </Container>
  );
};

export default PageTitle;
