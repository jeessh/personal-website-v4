import React from "react";
import { summaries } from "./constants";
import SectionWrapper from "@/components/Wrappers/SectionWrapper";

const Summary: React.FC = () => {
  return (
    <SectionWrapper>
      <section className="flex flex-col justify-center items-start relative pt-12">
        {summaries.map((point, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-2xl font-bold text-primary">{point.title}</h3>
            <p className="text-lg text-secondary">{point.subtitle}</p>
            <p className="text-md text-gray-600">
              {point.company} - {point.year}
            </p>
            <img
              src={point.logo}
              alt={`${point.company} logo`}
              className="w-16 h-16 mt-2"
            />
          </div>
        ))}
      </section>
    </SectionWrapper>
  );
};

export default Summary;
