import React from "react";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col item-center justify-center relative overflow-hidden mx-auto py-10 md:py-10">
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white dark:text-black">
          Welcome to NEXTGen
        </h1>
        <p className="text-lg md:text-xl text-white dark:text-black">
          The future of web development
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
