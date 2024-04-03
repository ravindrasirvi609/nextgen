"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-manu";
import { cn } from "@/utils/cn";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <HoveredLink href="/">Home</HoveredLink>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About Us">
          <div className="hidden sm:flex flex-col sm:space-y-4 text-sm">
            <HoveredLink href="/mission-vision">Mission & Vision</HoveredLink>
            <HoveredLink href="/team">Our Team</HoveredLink>
            <HoveredLink href="/testimonials">Testimonials</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Leadership">
          <HoveredLink href="/leadership">Leadership</HoveredLink>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Resources">
          <div className="hidden sm:flex flex-col sm:space-y-4 text-sm">
            <HoveredLink href="/blogs">Articles</HoveredLink>
            <HoveredLink href="/books">magazine</HoveredLink>
            <HoveredLink href="/videos">Videos</HoveredLink>
            <HoveredLink href="/podcasts">Podcasts</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Blog/News">
          <div className="hidden sm:flex flex-col sm:space-y-4 text-sm">
            <HoveredLink href="/blogs">Blogs</HoveredLink>
            <HoveredLink href="/createBlog">Create Blog</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="hidden sm:flex flex-col sm:space-y-4 text-sm">
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
