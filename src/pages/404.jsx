import React from "react";
import { Container } from "react-bootstrap";

import MainLayout from "../layout";

const NotFoundPage = () => (
  <MainLayout>
    <>
      <section className="in-development">
        <Container className="text-center">
          <h2 className="title">404 Page Not Found</h2>
          <p>Thanks for checking out this section, we are working hard to bring it to you soon!</p>
        </Container>
      </section>
    </>
  </MainLayout>
);

export default NotFoundPage;
