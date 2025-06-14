import React from "react";
import PageWrapper from "../components/PageWrapper";
import Navbar from "../components/Navbar";

const HomePage: React.FC = () => {
  return (
    <>
      <PageWrapper hasNavbar>
        <div className="flex flex-col h-[calc(100dvh-80px)]">
          <h2 className="text-5xl text-primary-600">This is</h2>
          <div className="flex flex-row gap-4">
            <h1 className="text-[10rem] font-bold text-primary-600">Jesse</h1>
            <h2 className="text-secondary">Heading 2</h2>
            <h3 className="text-tertiary">Heading 3</h3>
            <h4 className="text-forth">Heading 4</h4>
            <p className="text-fifth">Paragraph</p>
            <h1 className="text-[10rem] font-bold text-transparent [-webkit-text-stroke-width:6px] [-webkit-text-stroke-color:theme(colors.primary)]">Huang</h1>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default HomePage;

