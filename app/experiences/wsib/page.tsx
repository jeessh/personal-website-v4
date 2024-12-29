"use client";

import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import ExperiencePage from "@/app/components/ExperiencePage/ExperiencePage";
import { Navbar } from "@/app/components/Navbar/Navbar";


export default function WSIBPage() {
  return (
    <>
      <Navbar />
      <ExperiencePage 
      title="WSIB Innovation Lab" 
      description="Led development of innovative solutions for workplace safety using cutting-edge technologies." 
      startDate="May 2023" 
      endDate="August 2023" 
      positionTitle="Full Stack Developer"/>
    </>
  );
}