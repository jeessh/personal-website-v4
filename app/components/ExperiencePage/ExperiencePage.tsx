"use client";

import { motion } from "framer-motion";

interface ExperiencePageProps {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  positionTitle: string;
}

export default function ExperiencePage({ 
  title,
  description, 
  startDate,
  endDate,
  positionTitle
}: ExperiencePageProps) {
  return (
    <main className="flex min-h-screen flex-col items-center pt-24">
      <motion.section 
        className="w-full max-w-[840px] px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold mb-4">
          {title}
        </h1>
        <h2 className="text-3xl font-semibold mb-2">
          {positionTitle}
        </h2>
        <p className="text-xl opacity-80 mb-8">
          {startDate} - {endDate}
        </p>

        <div className="prose prose-lg max-w-none">
          <p>{description}</p>
        </div>
      </motion.section>
    </main>
  );
}
