import React from "react";

interface PageWrapperProps {
  children: React.ReactNode;
  hasNavbar?: boolean;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ 
  children, 
  hasNavbar = false 
}) => {
  return (
    <main className="w-screen flex justify-center">
      <section className={`
        w-full max-w-[1280px] 
        relative
        flex flex-col items-center
        ${hasNavbar ? 'mt-20' : ''}
      `}>
        {children}
      </section>
    </main>
  );
};

export default PageWrapper;
