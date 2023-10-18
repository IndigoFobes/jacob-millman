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
    title: "HOME",
    route: "/",
  },
  {
    title: "ABOUT",
    route: "/about",
  },
  {
    title: "MEDIA",
    children: [
      {
        title: "PHOTOS",
        route: "/media/photos",
      },
      {
        title: "VIDEOS",
        route: "/media/videos",
      },
    ],
  },
  {
    title: "RESUME",
    route: "/resume",
  },
  {
    title: "CONTACT",
    route: "/",
  },
];

export default function Header() {
  return (
    <header className="hidden font-sans w-full bg-[var(--dark-theme-color)] md:flex md:flex-col justify-center">
      <Link href="/" className="col-start-2 col-end-5">
        <h1 className="font-[600] text-center text-[var(--light-text-color)] py-3 px-4 header-title">
          JACOB MILLMAN
        </h1>
      </Link>
      {/* only visible on screens medium and larger */}
      <ul className="hidden menu-item font-[500] md:grid grid-cols-5 text-[var(--light-text-color)] text-center pb-3 text-sm md:text-lg lg:text-xl">
        {menuItems.map((item) => {
          return item.hasOwnProperty("children") ? (
            <MediaDropdown item={item} />
          ) : (
            <Link
              className="hover:text-[var(--accent-color)]"
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
