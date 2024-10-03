import Image from "next/image";
import { Navbar } from "./components/Navbar/Navbar";
import { Sidebar } from "./components/Sidebar/Sidebar";
import HeroImage from "./assets/colour_palette.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Sidebar />
      <section className="h-screen flex ml-56 relative" id={"home"}>
        <div className="flex items-center ">
          <Image
            src={HeroImage}
            alt="headshot"
            width={400}
            height={500}
            className="relative z-1"
          />
          <div className="ml-10">
            <h2>Hey there! I&apos;m</h2>
            <h1>Jesse huang</h1>
            <div className="w-4/4 h-0.5 bg-slate-100 m-1 mb-3" />
            <h2>Full-Stack Developer | UW CS &apos;27</h2>
          </div>
        </div>
        <div className="absolute w-0.5 h-3/4 ml-10 bg-line left-0 -z-10" />
      </section>
      <section
        className="h-screen flex flex-col ml-56 relative"
        id={"personal"}
      >
        <div className="w-20 h-20 border bg-icon rounded-full"></div>
        <div className="mt-16">
          <h2 className="">
            I&apos;m a 3rd year Computer Science Major at the University of
            Waterloo.
          </h2>
          <h2>
            If I&apos;m ever able to find time between work sessions, I enjoy
            watching the NBA, playing volleyball, and getting my 8 hours of
            sleep
          </h2>
        </div>
      </section>
    </main>
  );
}
