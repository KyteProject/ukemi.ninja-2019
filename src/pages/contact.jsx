import React from "react";
import Contact from "../components/Contact";
import MainLayout from "../layout";
import TitleSection from "../components/TitleSection";
import { MetaData } from "../components/meta";

const contact = ({ location }) => {
  return (
    <MainLayout>
      <div className="contact-container">
        <MetaData title="Contact Us" location={location} />
        <TitleSection location={location} crumbLabel="Contact" />
        <Contact />
      </div>
    </MainLayout>
  );
};

export default contact;
