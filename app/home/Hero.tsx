import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col justify-center h-[calc(100dvh)] bg-slate-600">
      <h2 className="text-5xl text-colors-primary-600">This is</h2>
      <div className="flex flex-row gap-4">
        <h1 className="text-[10rem] font-bold text-colors-primary-600">
          {"<"}Jesse
        </h1>
        <h1 className="text-[10rem] font-bold text-transparent [-webkit-text-stroke-width:6px] [-webkit-text-stroke-color:#566E52]">
          Huang{"/>"}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
