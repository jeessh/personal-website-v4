import Image from "next/image";
import {Navbar} from "./components/Navbar/Navbar";
import {Sidebar} from "./components/Sidebar/Sidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <Sidebar />
      <section className="bg-blue-500 h-[calc(100vh-5rem)]">
        <div>
          
        </div>
      </section>
    </main>
  );
}
