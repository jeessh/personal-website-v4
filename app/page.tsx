import React from "react";
import PageWrapper from "../components/PageWrapper";
import Navbar from "../components/Navbar";

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <PageWrapper hasNavbar>
        <div className="flex flex-col h-[calc(100dvh-80px)]">
          <h2 className="text-5xl text-primary">This is</h2>
          <div className="flex flex-row gap-4">
            <h1 className="text-[10rem] font-bold text-primary">Jesse</h1>
            <h1 className="text-[10rem] font-bold text-transparent [-webkit-text-stroke-width:6px] [-webkit-text-stroke-color:theme(colors.primary)]">Huang</h1>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default HomePage;

