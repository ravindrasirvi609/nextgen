import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          NEXTGEN
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 mx-auto">
          we are dedicated to providing you with the latest and most
          comprehensive blogs and articles tailored specifically to the
          pharmaceutical and medical industries. Whether youre a seasoned
          professional, a curious enthusiast, or a budding practitioner, our
          platform offers a diverse array of content designed to inform,
          inspire, and innovate.
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore Blogs
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
