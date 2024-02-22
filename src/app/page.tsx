"use client";
import HeroSection from "@/components/heroSection";
import { Navbar } from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Image src="/nextgen.png" alt="NEXTGen" width={300} height={300} /> */}
      <HeroSection />
    </main>
  );
}
