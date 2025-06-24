import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  topSpacing?: boolean;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  topSpacing = false,
}) => {
  return (
    <section
      className={`
        max-w-[1280px] 
        relative
        flex flex-col 
        items-start
        justify-center
        ${topSpacing ? "top-1/2 translate-y-1/2" : "pt-0"}
      `}
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
