"use client";
import React from "react";
import Summary from "./Summary";
import SectionWrapper from "@/components/Wrappers/SectionWrapper";

const Hero: React.FC = () => {
  return (
    <SectionWrapper topSpacing>
      <h2 className="text-[4rem] font-semibold text-colors-primary-600">
        This is
      </h2>
      <div className="flex flex-row gap-4">
        <h1 className="text-[8rem] font-bold text-colors-primary-600">
          {"<"}Jesse
          {/* Jesse */}
        </h1>
        <h1 className="text-[8rem] font-bold text-transparent [-webkit-text-stroke-width:6px] [-webkit-text-stroke-color:#566E52]">
          Huang{"/>"}
          {/* Huang */}
        </h1>
      </div>
      <h2 className="text-[4rem] font-semibold text-colors-primary-600 self-end">
        UW CS'27
      </h2>
    </SectionWrapper>
  );
};

export default Hero;
