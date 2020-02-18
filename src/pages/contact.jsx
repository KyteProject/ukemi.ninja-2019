import React from "react";

import { MetaData } from "../components/meta";
import MainLayout from "../layout";
import TitleSection from "../components/common/TitleSection";
import ContactForm from "../components/contact/ContactForm";
import ContactDetails from "../components/contact/ContactDetails";

const contact = ({ location }) => {
  return (
    <MainLayout>
      <div className="contact-container">
        <MetaData title="Contact Us" location={location} />
        <TitleSection location={location} crumbLabel="Contact" />
        <ContactDetails />
        <ContactForm />
      </div>
    </MainLayout>
  );
};

export default contact;
