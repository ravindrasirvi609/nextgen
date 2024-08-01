"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-manu";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={cn("fixed top-4 inset-x-0 max-w-4xl mx-auto z-50", className)}
    >
      <div className="relative px-4 md:px-0">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden absolute right-4 top-4 z-50"
          onClick={toggleMenu}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Home">
              <HoveredLink href="/">Home</HoveredLink>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="About Us">
              <div className="flex flex-col space-y-2">
                <HoveredLink href="/about-us">About Us</HoveredLink>
                <HoveredLink href="/mission-vision">
                  Mission & Vision
                </HoveredLink>
                <HoveredLink href="/team">Our Team</HoveredLink>
                <HoveredLink href="/testimonials">Testimonials</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Leadership">
              <HoveredLink href="/leadership">Leadership</HoveredLink>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Resources">
              <div className="flex flex-col space-y-2">
                <HoveredLink href="/blogs">Articles</HoveredLink>
                <HoveredLink href="/books">Magazine</HoveredLink>
                <HoveredLink href="/videos">Videos</HoveredLink>
                <HoveredLink href="/podcasts">Podcasts</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Blog/News">
              <div className="flex flex-col space-y-2">
                <HoveredLink href="/blogs">Blogs</HoveredLink>
                <HoveredLink href="/createBlog">Create Blog</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Contact">
              <div className="flex flex-col space-y-2">
                <HoveredLink href="/contact">Contact</HoveredLink>
                <HoveredLink href="/advertise-with-us">
                  Advertise with Us
                </HoveredLink>
                <HoveredLink href="/membership">Membership</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed inset-0 bg-white dark:bg-gray-800 z-40"
            >
              <div className="flex flex-col space-y-4 p-4 mt-16">
                <HoveredLink href="/">Home</HoveredLink>
                <HoveredLink href="/about-us">About Us</HoveredLink>
                <HoveredLink href="/leadership">Leadership</HoveredLink>
                <HoveredLink href="/blogs">Resources</HoveredLink>
                <HoveredLink href="/blogs">Blog/News</HoveredLink>
                <HoveredLink href="/contact">Contact</HoveredLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
