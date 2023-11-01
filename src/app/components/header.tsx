"use client";
import Link from "next/link";
import MediaDropdown from "./media-dropdown";
import React, { useState } from "react";
import MobileDropdown from "./mobile-menu";

export interface MenuItem {
  title: string;
  route?: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "About",
    route: "/about",
  },
  {
    title: "Headshot + Resume",
    route: "/resume",
  },
  {
    title: "Media",
    route: "/media",
  },
  {
    title: "Contact",
    route: "/",
  },
];

export default function Header() {
  return (
    <header className="absolute top-0 right-0 header-bg hidden z-30 w-full md:flex md:flex-col justify-center">
      <Link href="/" className="col-start-2 col-end-5">
        <h1 className=" font-[300] font-sans text-center text-[var(--light-text-color)] py-3 px-4 header-title">
          Jacob Millman
        </h1>
      </Link>
      {/* only visible on screens medium and larger */}
      <ul className="hidden menu-item font-[400] md:grid grid-cols-5 text-[var(--light-text-color)] text-center pb-3 text-sm md:text-lg">
        {menuItems.map((item) => {
          return item.hasOwnProperty("children") ? (
            <MediaDropdown item={item} />
          ) : (
            <Link
              className="hover:text-[var(--accent-color)] place-self-center hover-underline-animation"
              href={item?.route || ""}
            >
              {item.title}
            </Link>
          );
        })}
      </ul>
    </header>
  );
}
