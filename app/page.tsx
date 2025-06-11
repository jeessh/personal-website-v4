"use client";

import { useRef, useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Navbar } from "./components/Navbar/Navbar";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Scrollbar } from "./components/Scrollbar/Scrollbar";
import { ProjectCard } from "./components/ProjectCard/ProjectCard";
import { Footer } from "./components/Footer/Footer";

import HeroImage from "./assets/colour_palette.svg";
import personal from "./assets/personal.svg";
import contact from "./assets/contact.svg";
import work from "./assets/work.svg";
import arrow from "./assets/arrow_down.svg";
import wsib from "./assets/projectImages/wsibLogo.svg";
import blueprint from './assets/projectImages/uw_blueprint_logo.jpeg';
import wiz from './assets/projectImages/wizrobotics_logo.jpeg'
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const scrollPersonal = useRef(null);
  const scrollWork = useRef(null);
  const scrollContact = useRef(null);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const arrowOpacity = Math.max(0, 1 - scrollPosition / 300); // Fade out over 300px of scroll

  const { scrollYProgress: scrollPersonalProgress } = useScroll({
    target: scrollPersonal,
    offset: ["end end", "start center"],
  });
  const scalePersonalY = useSpring(scrollPersonalProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.001,
  });

  const { scrollYProgress: scrollWorkProgress } = useScroll({
    target: scrollWork,
    offset: ["end end", "start center"],
  });
  const scaleWorkY = useSpring(scrollWorkProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.001,
  });

  const { scrollYProgress: scrollContactProgress } = useScroll({
    target: scrollContact,
    offset: ["end end", "start center"],
  });
  const scaleContactY = useSpring(scrollContactProgress, {
    stiffness: 300,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <main className="flex min-h-screen flex-col items-center relative">
      <Navbar />
      <Sidebar />
      <section className="h-screen flex relative" id={"home"}>
        <div className="flex items-center">
          <div className="relative w-[400px] h-[500px] max-lg:hidden">
            <Image
              src={HeroImage}
              alt="headshot"
              className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px]"
            />
            <div className="absolute bg-background w-full h-screen bottom-[10.5rem] z-10" />
          </div>
          <div className="mx-16 flex flex-col">
            <div className="mb-4">
              <h1>Hey, I&apos;m Jesse 👋</h1>
              <h2>a {"<" + "full stack developer" + "/>"}</h2>
              <h2>and lo-fi beats enjoyer</h2>
            </div>
            <div className="mb-12">
              <h3>CS @ UWaterloo</h3>
            </div>
            {/* <div className="bg-button w-1/2 h-12 rounded-full border-2 border-button-border"></div> */}
          </div>
        </div>
      </section>
      <Image
        src={arrow}
        alt="arrow"
        className="max-xl:bottom-24 bottom-52 w-12 h-12 relative animate-bounce"
        style={{
          opacity: arrowOpacity,
          transition: "opacity 0.3s ease-out",
        }}
      />
      {/* Personal scrollbar position */}
      <>
        <section className="absolute top-0 flex flex-col items-center max-lg:hidden">
          <motion.div
            style={{ scaleY: scalePersonalY }}
            className="w-0.5 mr-[52rem] bg-line -z-10 h-screen"
          />
          <div className="w-24 h-24 border-line border drop-shadow-md bg-button rounded-full mr-[52rem] flex justify-center">
            <Image
              src={personal}
              alt="Scrollbar icon"
              className=""
              ref={scrollPersonal}
            />
          </div>
        </section>
        <div className="max-lg:hidden w-1/2 mt-36"></div>
      </>

      <div id="personal" className="relative bottom-[30rem]" />
      <section
        className="mx-16 lg:w-[840px] sm:w-[500px] relative bg-background"
        // id={"personal"}
      >
        <motion.span
          className="text-[2.5rem] font-[600]"
          initial={{ opacity: 0.3 }}
          whileInView={{ opacity: 0.8 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, margin: "-65% 0px -32.5% 0px" }}
        >
          I&apos;m just a <strong>3rd year CS student</strong> trying out all that life has to
          offer.{" "}
        </motion.span>
        <motion.span
          className="text-[2.5rem] font-[600]"
          initial={{ opacity: 0.3 }}
          whileInView={{ opacity: 0.8 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, margin: "-65% 0px -50% 0px" }}
        >
          Throughout my day, I chill with friends, vibe to lo-fi, and hop on
          courts for some v-ball 🏐.{" "}
        </motion.span>
        <motion.span
          className="text-[2.5rem] font-[600]"
          initial={{ opacity: 0.3 }}
          whileInView={{ opacity: 0.8 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, margin: "-60% 0px -52.5% 0px" }}
        >
          At night, what&apos;s better than playing around with the latest tool
          in a new side project?
        </motion.span>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{ opacity: 0.5 }}
          transition={{ duration: 1.25 }}
          viewport={{ once: true, margin: "-50% 0px -37.5% 0px" }}
        >
          <motion.h4
            className="text-[2.5rem] font-[600]"
            initial={{ opacity: 0.3 }}
            whileInView={{ opacity: 0.8 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, margin: "-50% 0px -37.5% 0px" }}
          >
            Some say it&apos;s no longer a hobby when it becomes your
            profession.
          </motion.h4>
        </motion.div>

        <motion.div
          className="mt-24 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{ opacity: 0.5 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, margin: "-50% 0px -40% 0px" }}
        >
          <motion.h4
            className="text-[2.5rem] font-[600]"
            initial={{ opacity: 0.3 }}
            whileInView={{ opacity: 0.8 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, margin: "-25% 0px -40% 0px" }}
          >
            Nah, Ima do my own thing.
          </motion.h4>
        </motion.div>
      </section>

      <div id="work" className="relative w-full flex flex-col items-center">
        {/* Work scrollbar position */}
        <>
          <section className="flex flex-col items-center max-lg:hidden relative -translate-y-32 -z-10">
            <motion.div
              style={{ scaleY: scaleWorkY }}
              className="w-0.5 mr-[52rem] bg-line h-72"
            />
            <div className="w-24 h-24 border-line border drop-shadow-md bg-button rounded-full mr-[52rem] flex justify-center">
              <Image
                src={work}
                alt="Scrollbar icon"
                className=""
                ref={scrollWork}
              />
            </div>
          </section>
        </>
      </div>
      <section className="flex flex-col mx-16 relative bg-background max-lg:mt-24 gap-12">
        <ProjectCard
          title="Full Stack Developer @ WSIB Innovation Lab"
          subtitle="Prototyping & Innovating"
          imageUrl={wsib}
          link="/experiences/wsib"
        />
        <ProjectCard
          title="Technical Lead & SWE @ UW Blueprint"
          subtitle=""
          imageUrl={blueprint}
          link="/experiences/marillac"
        />
        <ProjectCard
          title="SWE & Frontend @ Wiz Robotics"
          subtitle="Description 3"
          imageUrl={wiz}
          link="/experiences/wiz"
        />
      </section>
      <div
        id="contact"
        className="relative w-full flex flex-col items-center h-screen"
      >
        {/* Work scrollbar position */}
        <>
          <div className="h-[10dvh] w-[70dvw] absolute bg-background"></div>
          <section className="flex flex-col items-center max-lg:hidden relative -translate-y-64 -z-10">
            <motion.div
              style={{ scaleY: scaleContactY }}
              className="w-0.5 mr-[52rem] bg-line h-[70dvh]"
            />
            <section className="flex relative">
              <div className="w-24 h-24 border-line border drop-shadow-md bg-button rounded-full mr-[52rem] flex justify-center">
                <Image src={contact} alt="Scrollbar icon" className="" />
              </div>
              <div
                className="h-32 w-full absolute bottom-64"
                ref={scrollContact}
              ></div>
              <section className="lg:absolute lg:ml-36 lg:-bottom-10">
                <h2>If you think we&apos;d be a good fit,</h2>
                <h1>Let&apos;s connect!</h1>
                <div></div>
              </section>
            </section>
          </section>
        </>
      </div>

      <Footer />
    </main>
  );
}
