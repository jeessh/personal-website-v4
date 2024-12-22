"use client";

import React, { RefObject, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";

interface ScrollbarProps {
  Icon: string;
  start: RefObject<HTMLElement>;
  end: RefObject<HTMLElement>;
  margin: boolean;
  screenHeight: boolean;
  height: number;
}

export function Scrollbar({ Icon, margin, screenHeight, height }: ScrollbarProps) {
  const end = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: end,
    offset: ["end end", "start center"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.001,
  });
  return (
    <>
    <section className="absolute top-0 flex flex-col items-center max-lg:hidden">
      <motion.div
        style={{ scaleY }}
        className={`w-0.5 mr-[52rem] bg-line -z-10 ${screenHeight ? "h-screen" : `h-${height}`}`}
      />
      <div className="w-24 h-24 border-line border drop-shadow-md bg-button rounded-full mr-[52rem] flex justify-center">
        <Image src={Icon} alt="Scrollbar icon" className="" ref={end}/>
      </div>
    </section>
    <div className={`max-lg:hidden w-1/2 ${margin ? "mt-36" : ""}`}>

    </div>
    </>
  );
}
