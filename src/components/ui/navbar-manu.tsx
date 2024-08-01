"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

interface MenuItemProps {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  setActive,
  active,
  item,
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    if (children) {
      setIsOpen(!isOpen);
      setActive(active === item ? null : item);
    }
  };

  const handleMouseEnter = () => {
    if (!isOpen && children) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative group"
    >
      <motion.p
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="cursor-pointer text-black hover:text-blue-600 dark:text-white dark:hover:text-blue-400 font-medium"
      >
        {item}
      </motion.p>
      <AnimatePresence>
        {isOpen && children && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={transition}
            className="absolute top-full left-1/2 transform -translate-x-1/2 z-10"
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg">
              <div className="w-max h-full p-4">{children}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface MenuProps {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}

export const Menu: React.FC<MenuProps> = ({ setActive, children }) => {
  return (
    <nav className="relative rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg flex justify-center space-x-6 px-8 py-4">
      {children}
    </nav>
  );
};

interface ProductItemProps {
  title: string;
  description: string;
  href: string;
  src: string;
}

export const ProductItem: React.FC<ProductItemProps> = ({
  title,
  description,
  href,
  src,
}) => {
  return (
    <Link href={href} className="flex space-x-3 items-center group">
      <Image
        src={src}
        width={80}
        height={80}
        alt={title}
        className="rounded-md shadow-md group-hover:shadow-lg transition-shadow duration-200"
      />
      <div>
        <h4 className="text-lg font-semibold mb-1 text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {title}
        </h4>
        <p className="text-gray-600 text-sm max-w-[12rem] dark:text-gray-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
    >
      {children}
    </Link>
  );
};
