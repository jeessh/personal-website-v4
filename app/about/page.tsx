import React from "react";
import PageWrapper from "../../components/PageWrapper";

const AboutPage: React.FC = () => {
  return (
    <>
      <PageWrapper hasNavbar>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-primary mb-6">About Me</h1>
          {/* About content will go here */}
        </div>
      </PageWrapper>
    </>
  );
};

export default AboutPage;

