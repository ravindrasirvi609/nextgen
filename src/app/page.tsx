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
    <>
      <NextSeo
        title="Nexgen Leaders - Your Source for Startup and Pharma News"
        description="Stay updated with the latest news and insights on startups and the pharmaceutical industry. Nexgen Leaders brings you in-depth articles, trends, and analysis."
        canonical="https://www.nextgenleaders.vip"
        openGraph={{
          url: "https://www.nextgenleaders.vip",
          title: "Nexgen Leaders - Your Source for Startup and Pharma News",
          description:
            "Stay updated with the latest news and insights on startups and the pharmaceutical industry. Nexgen Leaders brings you in-depth articles, trends, and analysis.",
          images: [
            {
              url: "https://https://www.nextgenleaders.vip/images/og-image.jpg",
              width: 800,
              height: 600,
              alt: "Nexgen Leaders",
            },
          ],
          site_name: "Nexgen Leaders",
        }}
        twitter={{
          handle: "@nexgenleaders",
          site: "@nexgenleaders",
          cardType: "summary_large_image",
        }}
      />
      <main className="flex min-h-screen flex-col items-center justify-between">
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
      <Footer />
    </>
  );
}
