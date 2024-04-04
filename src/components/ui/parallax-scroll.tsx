"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import ReactPlayer from "react-player";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-30 px-3 py-40 w-full mx-auto"
        ref={gridRef}
      >
        <div className="grid gap-40">
          {firstPart.map((el, idx) => (
            <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
              <ReactPlayer
                url={el}
                height={400}
                width={500}
                className="h-80 w-full object-cover object-left-top rounded-lg border-2 hover:border-8" // Removed unnecessary styles
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-40">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <ReactPlayer
                url={el}
                height={400}
                width={500}
                className="h-80 w-full object-cover object-left-top rounded-lg border-2 hover:border-8" // Removed unnecessary styles
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-40">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <ReactPlayer
                url={el}
                height={400}
                width={500}
                className="h-80 w-full object-cover object-left-top rounded-lg border-2 hover:border-8" // Removed unnecessary styles
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
