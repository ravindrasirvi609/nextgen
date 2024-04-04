"use client";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import React, { useEffect, useState } from "react";

const images = [
  "https://www.youtube.com/watch?v=5L7WbNHzcRw",
  "https://youtu.be/dTuHXUt1weQ",
  "https://www.youtube.com/watch?v=8rMsdkDeqfc",
  "https://www.youtube.com/watch?v=UQFGeyj5oXo",
  "https://www.youtube.com/watch?v=XQPqD71VkMg",
  "https://www.youtube.com/watch?v=0I647GU3Jsc",
  "https://youtu.be/dTuHXUt1weQ",
  "https://www.youtube.com/watch?v=8rMsdkDeqfc",
  "https://www.youtube.com/watch?v=XQPqD71VkMg",
  "https://www.youtube.com/watch?v=UQFGeyj5oXo",
  "https://www.youtube.com/watch?v=5L7WbNHzcRw",
  "https://youtu.be/dTuHXUt1weQ",
  "https://www.youtube.com/watch?v=8rMsdkDeqfc",
  "https://www.youtube.com/watch?v=UQFGeyj5oXo",
  "https://www.youtube.com/watch?v=0I647GU3Jsc",
];

const Videos: React.FC = () => {
  const [playerReady, setPlayerReady] = useState(false);

  useEffect(() => {
    setTimeout(() => setPlayerReady(true), 1000);
  }, []);
  return (
    <div className="py-44">
      <ParallaxScroll images={images} />
    </div>
  );
};

export default Videos;
