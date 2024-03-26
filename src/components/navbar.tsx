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
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About Us">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Mission & Vision</HoveredLink>
            <HoveredLink href="/interface-design">Our Team</HoveredLink>
            <HoveredLink href="/seo">Testimonials</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Leadership">

        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Resources">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Articles</HoveredLink>
            <HoveredLink href="/web-dev">Books</HoveredLink>
            <HoveredLink href="/interface-design">Videos</HoveredLink>
            <HoveredLink href="/seo">Podcasts</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Blog/News">

        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">

        </MenuItem>
      </Menu>
    </div>
  );
}
