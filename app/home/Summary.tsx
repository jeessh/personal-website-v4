import React from "react";
import { summaries } from "./constants";

const Summary: React.FC = () => {
  return (
    <section className="flex flex-col justify-center">
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
  );
};
