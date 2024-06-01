"use client";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import Footer from "@/components/footer";
import { GoogleGeminiEffectDemo } from "@/components/gemini-effect";
import { GlobeDemo } from "@/components/global";
import { MacbookScrollDemo } from "@/components/mackbook";
import { InfiniteMovingCardsDemo } from "@/components/testimonial-cards";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <NextSeo
        title="Nexgen Leaders - Your Source for Startup and Pharma News"
        description="Stay updated with the latest news and insights on startups and the pharmaceutical industry. Nexgen Leaders brings you in-depth articles, trends, and analysis."
      />
      {/* <Image src="/nextgen.png" alt="NEXTGen" width={300} height={300} /> */}
      {/* <HeroSection /> */}
      <MacbookScrollDemo />
      <div className="w-full">
        <GlobeDemo />
        <GoogleGeminiEffectDemo />
        <InfiniteMovingCardsDemo />
        <FeaturedBlogs />
      </div>
    </main>
  );
}
