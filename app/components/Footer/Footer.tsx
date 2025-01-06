"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <motion.footer 
      className="w-full py-8 mt-auto border-t border-line"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-[840px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm opacity-80">
          © {currentYear} Jesse Huang. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <Link 
            href="https://github.com/yourusername" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </Link>
          <Link 
            href="https://linkedin.com/in/yourusername" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </Link>
          <Link 
            href="mailto:your.email@example.com"
            className="hover:text-accent transition-colors"
          >
            Email
          </Link>
          <button
            onClick={scrollToTop}
            className="hover:text-accent transition-colors"
            aria-label="Scroll to top"
          >
            ↑ Top
          </button>
        </div>
      </div>
    </motion.footer>
  );
} 