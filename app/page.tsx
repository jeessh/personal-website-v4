import React from "react";
import PageWrapper from "../components/PageWrapper";
import Navbar from "../components/Navbar";
import Hero from "./home/Hero";

const HomePage: React.FC = () => {
  return (
    <>
      <PageWrapper>
        <Hero />
      </PageWrapper>
    </>
  );
};

export default HomePage;
