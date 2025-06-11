import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="flex fixed w-full top-0 z-50 justify-center h-20">
      <section className="w-full max-w-[1280px] flex justify-between items-center px-4 py-2">
        <h1 className="text-xl font-semibold">
          <Link href="/" className="text-primary">JH</Link>
        </h1>
        
        <div className="flex flex-row space-x-6">
          <h2 className="text-base text-primary-500">
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>
          </h2>
          <h2 className="text-base">
            <Link href="/experiences" className="hover:text-primary transition-colors">Experiences</Link>
          </h2>
          <h2 className="text-base">
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </h2>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
