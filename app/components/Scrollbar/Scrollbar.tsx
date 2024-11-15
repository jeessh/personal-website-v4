"use client";

import React, { RefObject, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";

interface ScrollbarProps {
  Icon: string;
  start: RefObject<HTMLElement>;
  end: RefObject<HTMLElement>;
}

export function Scrollbar({ Icon }: ScrollbarProps) {
    const end = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: end,
    offset: ["end end", "start center"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001,
  });
  return (
    <section className="absolute top-20 flex flex-col items-center">
      <motion.div
        style={{ scaleY }}
        className="w-0.5 h-screen mr-[52rem] bg-line -z-10"
      />
      <div className="w-24 h-24 border-line border drop-shadow-md bg-button rounded-full mr-[52rem] flex justify-center">
        <Image src={Icon} alt="Scrollbar icon" className="" ref={end}/>
      </div>
    </section>
  );
}
