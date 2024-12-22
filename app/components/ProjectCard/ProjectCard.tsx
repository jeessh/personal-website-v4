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
  position?: 'left' | 'right';
}

export function ProjectCard({ title, subtitle, imageUrl, link, position = 'left' }: ProjectCardProps) {
  return (
    <section className="flex relative lg:w-[840px] sm:w-[500px]">
      {position === 'left' && (
        <div className="w-2 bg-slate-500 absolute top-0 bottom-0 left-0"/>
      )}
      <Link href={link}>
        <motion.div 
          className="mx-8 mb-8 relative cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          <div className={`flex flex-col gap-8 relative ${position === 'right' ? 'items-end' : ''}`}>
            <div className="relative lg:w-[780px] sm:w-[420px] lg:h-[400px] sm:h-[200px]">
              <Image 
                src={imageUrl}
                alt={title}
                fill
                className="object-cover rounded-lg w-1/2"
              />
            </div>
            <div className={`flex flex-col ${position === 'right' ? 'items-end text-right' : ''}`}>
              <h2 className="text-4xl font-bold mb-2">{title}</h2>
              <p className="text-xl opacity-80">{subtitle}</p>
            </div>
          </div>
        </motion.div>
      </Link>
      {position === 'right' && (
        <div className="w-2 bg-slate-500 absolute top-0 bottom-0 right-0"/>
      )}
    </section>
  );
}
