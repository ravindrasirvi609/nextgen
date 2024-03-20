"use client";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import HeroSection from "@/components/HeroSection";
import { GlobeDemo } from "@/components/global";
import { Navbar } from "@/components/navbar";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <Image src="/nextgen.png" alt="NEXTGen" width={300} height={300} /> */}
      <HeroSection />
      <FeaturedBlogs />
      <div className="w-full my-8">
        <GlobeDemo />

      </div>

    </main>
  );
}
