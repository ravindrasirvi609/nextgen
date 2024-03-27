import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
const products = [
  {
    imageSrc: "/nextgen.png",
    alt: "jordans",
    height: "400",
    width: "400",
    className: "object-contain",
    title: "Air Jordan 4 Retro Reimagined",
    description: "The Air Jordan 4 Retro Reimagined Bred will release on Saturday, February 17, 2024. Your best opportunity to get these right now is by entering raffles and waiting for the official releases.",
    price: 100
  },
  {
    imageSrc: "/nextgen.png",
    alt: "another product",
    height: "400",
    width: "400",
    className: "object-contain",
    title: "Another Product",
    description: "Description of another product.",
    price: 200
  },
  {
    imageSrc: "/nextgen.png",
    alt: "third product",
    height: "400",
    width: "400",
    className: "object-contain",
    title: "Third Product",
    description: "Description of the third product.",
    price: 150
  },
  {
    imageSrc: "/nextgen.png",
    alt: "fourth product",
    height: "400",
    width: "400",
    className: "object-contain",
    title: "Fourth Product",
    description: "Description of the fourth product.",
    price: 180
  },
];


function FeaturedBlogs() {
  return (
    <>
      <div className="mx-auto sm:m-8 text-xl">Featured Blogs</div>
      <div className="flex flex-col sm:flex-row sm:flex-wrap">
        {products.map((product, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
            <BackgroundGradient className="rounded-lg max-w-sm p-4 sm:p-6 bg-white dark:bg-zinc-900">
              <div className="mb-6">
                <Image
                  src={product.imageSrc}
                  alt={product.alt}
                  height={parseInt(product.height)}
                  width={parseInt(product.width)}
                  className={product.className}
                />
                <p className="text-base sm:text-lg text-black mt-4 mb-2 dark:text-neutral-200">
                  {product.title}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {product.description}
                </p>
              </div>
              <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-2 text-xs sm:text-sm font-bold dark:bg-zinc-800">
                <span>Buy now </span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  ${product.price}
                </span>
              </button>
            </BackgroundGradient>
          </div>
        ))}
      </div>
    </>


  );
}

export default FeaturedBlogs;
