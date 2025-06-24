import React from "react";
import PageWrapper from "@/components/Wrappers/PageWrapper";
import Hero from "./home/Hero";
import Summary from "./home/Summary";

const HomePage: React.FC = () => {
  return (
    <>
      <PageWrapper hasNavbar topSpacing>
        <Hero />
        <Summary />
      </PageWrapper>
    </>
  );
};

export default HomePage;
