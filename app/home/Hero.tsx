import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col justify-center h-[calc(100dvh)]">
      <h2 className="text-[4rem] font-semibold text-colors-primary-600">This is</h2>
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
        <h2 className="text-[4rem] font-semibold text-colors-primary-600 self-end">UW CS'27</h2>
    </div>
  );
};

export default Hero;
