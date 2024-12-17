"use client";

import { useRef } from "react";
import axios from "axios";
import Image from "next/image";
import { Navbar } from "./components/Navbar/Navbar";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Scrollbar } from "./components/Scrollbar/Scrollbar";
import HeroImage from "./assets/colour_palette.svg";
import work from "./assets/work.svg";
import arrow from "./assets/arrow_down.svg";

export default function Home() {
  const temp1 = useRef(null);
  const temp2 = useRef(null);
  const audioRef = useRef<HTMLAudioElement>(null); // Reference to the audio element

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play(); // Start playing the audio
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <Sidebar />
      <section className="h-screen flex relative" id={"home"}>
        <div className="flex items-center">
          <div className="relative w-[400px] h-[500px]">
            <Image
              src={HeroImage}
              alt="headshot"
              className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px]"
            />
            <div className="absolute bg-background w-full h-screen bottom-[10.5rem] z-10" />
          </div>
          <div className="ml-16 flex flex-col">
            <div className="mb-4">
              <h2>
                Hey there! I&apos;m <b>Jesse</b> 👋
              </h2>
              <h2>
                a <b>full-stack developer</b>
              </h2>
              <h2>
                and <i>lo-fi beats enjoyer</i>
              </h2>
            </div>
            <div className="mb-12">
              <h3>Computer Science @ UWaterloo</h3>
            </div>
            {/* <div className="bg-button w-1/2 h-12 rounded-full border-2 border-button-border"></div> */}
          </div>
        </div>
        <div>
          <Image
            src={arrow}
            alt="arrow"
            className="absolute bottom-24 left-1/2 transform -translate-x-1/2 w-12 h-12 animate-bounce"
          />
        </div>
        <audio ref={audioRef} loop>
        <source src="temp.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={playAudio}>Play Forever</button>
      </section>
      <Scrollbar Icon={work} start={temp1} end={temp2} />
      <section
        className="h-screen flex flex-col ml-56 relative"
        id={"work"}
        ref={temp2}
      ></section>
    </main>
  );
}
