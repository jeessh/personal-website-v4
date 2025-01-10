"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { StaticImageData } from 'next/image';

interface ProjectCardProps {
  title: string;
  subtitle: string;
  imageUrl: string | StaticImageData;
  link: string;
}

export function ProjectCard({ title, subtitle, imageUrl, link }: ProjectCardProps) {
  return (
    <section className="lg:w-[840px] sm:w-[500px]">
      <Link href={link}>
        <motion.div 
          className="mb-8 relative cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex gap-8">
            <div className="relative w-[120px] h-[120px] flex-shrink-0">
              <Image 
                src={imageUrl}
                alt={title}
                fill
                className="object-fit rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-4xl font-bold mb-2">{title}</h2>
              <p className="text-xl opacity-80">{subtitle}</p>
            </div>
          </div>
        </motion.div>
      </Link>
    </section>
  );
}
