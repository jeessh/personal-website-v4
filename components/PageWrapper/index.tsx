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
    <main className="w-screen flex justify-center border-red-500 border-4">
      <section className={`
        w-full max-w-[1280px] 
        relative
        bg-green-500 border-blue-500 border-4
        ${hasNavbar ? 'mt-20' : ''}
      `}>
        {children}
      </section>
    </main>
  );
};

export default PageWrapper;
