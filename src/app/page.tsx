"use client";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/footer";
import { GoogleGeminiEffectDemo } from "@/components/gemini-effect";
import { GlobeDemo } from "@/components/global";
import { MacbookScrollDemo } from "@/components/mackbook";
import { Navbar } from "@/components/navbar";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <Image src="/nextgen.png" alt="NEXTGen" width={300} height={300} /> */}
      {/* <HeroSection /> */}
      <MacbookScrollDemo />
      <div className="w-full">
        <GlobeDemo />
        <GoogleGeminiEffectDemo />
      </div>

      <FeaturedBlogs />
      <div className="w-full py-8">
        <Footer />

      </div>

    </main>
  );
}
