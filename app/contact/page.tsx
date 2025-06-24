import React from "react";
import PageWrapper from "../../components/PageWrapper";

const ContactPage: React.FC = () => {
  return (
    <>
      <PageWrapper hasNavbar>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-primary mb-6">Contact Me</h1>
          {/* Contact content will go here */}
        </div>
      </PageWrapper>
    </>
  );
};

export default ContactPage;

