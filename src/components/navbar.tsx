"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-manu";
import { cn } from "@/utils/cn";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Adjust the threshold as needed
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleClick = (item: string | null) => {
    if (isSmallScreen) {
      setActive(active === item ? null : item);
    }
  };

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={handleClick} active={active} item="Home">
          <HoveredLink href="/">Home</HoveredLink>
        </MenuItem>
        <MenuItem setActive={handleClick} active={active} item="About Us">
          <div className="flex flex-col sm:space-y-4 text-sm">
            <HoveredLink href="/about-us">About Us</HoveredLink>
            <HoveredLink href="/mission-vision">Mission & Vision</HoveredLink>
            <HoveredLink href="/team">Our Team</HoveredLink>
            <HoveredLink href="/testimonials">Testimonials</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={handleClick} active={active} item="Leadership">
          <HoveredLink href="/leadership">Leadership</HoveredLink>
        </MenuItem>
        <MenuItem setActive={handleClick} active={active} item="Resources">
          <div className="flex flex-col sm:space-y-4 text-sm">
            <HoveredLink href="/blogs">Articles</HoveredLink>
            <HoveredLink href="/books">magazine</HoveredLink>
            <HoveredLink href="/videos">Videos</HoveredLink>
            <HoveredLink href="/podcasts">Podcasts</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={handleClick} active={active} item="Blog/News">
          <div className="flex flex-col sm:space-y-4 text-sm">
            <HoveredLink href="/blogs">Blogs</HoveredLink>
            <HoveredLink href="/createBlog">Create Blog</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={handleClick} active={active} item="Contact">
          <div className="flex flex-col sm:space-y-4 text-sm">
            <HoveredLink href="/contact">Contact</HoveredLink>
            <HoveredLink href="/advertigment-with-us">
              Advertisement with Us
            </HoveredLink>
            <HoveredLink href="/membership">Membership</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
