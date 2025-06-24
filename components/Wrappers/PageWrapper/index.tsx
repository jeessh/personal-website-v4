import React from "react";

interface PageWrapperProps {
  children: React.ReactNode;
  hasNavbar?: boolean;
  topSpacing?: boolean;
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  hasNavbar = false,
  topSpacing = false,
}) => {
  return (
    <main className="w-screen min-h-screen flex flex-col justify-center items-center">
      {children}
    </main>
  );
};

export default PageWrapper;
