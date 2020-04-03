import React from "react";

import { MetaData } from "../components/meta";
import TitleSection from "../components/common/TitleSection";
import ContactForm from "../components/contact/ContactForm";
import ContactDetails from "../components/contact/ContactDetails";
import PageTitle from "../components/common/PageTitle";

const contact = ({ location }) => {
  return (
    <>
      <div className="contact-container">
        <MetaData title="Contact Us" location={location} />
        <TitleSection location={location} crumbLabel="Contact" />
        <PageTitle
          title="Get In Touch!"
          subTitle={[
            "Want to hire us, collaborate, or even just chat?",
            "We'd love to hear from you.",
          ]}
        />
        <ContactDetails />
        <ContactForm />
      </div>
    </>
  );
};

export default contact;
