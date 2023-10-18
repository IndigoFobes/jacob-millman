"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MenuItem } from "./header";

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
    title: "PHOTOS",
    route: "/media/photos",
  },
  {
    title: "VIDEOS",
    route: "/media/videos",
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

export default function MobileDropdown() {
  // Open mobile menu
  const [mobileIsOpen, setMobileIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setMobileIsOpen((old) => !old);
  };

  const transClass = mobileIsOpen ? "flex" : "hidden";

  return (
    <div className="md:hidden">
      <header className="font-sans w-full bg-[var(--dark-theme-color)] grid grid-cols-5 md:flex md:flex-col justify-center">
        <Link href="/" className="col-start-2 col-end-5">
          <h1 className="font-[600] text-center text-[var(--light-text-color)] py-3 px-4 header-title">
            JACOB MILLMAN
          </h1>
        </Link>
        {/* Mobile menu */}
        <div className="md:hidden text-[var(--light-text-color)] flex justify-center place-items-center">
          <button onClick={toggle}>click here</button>
        </div>
      </header>
      <div className="relative w-full col-start-1 col-end-6">
        <div
          className={`absolute top-0 right-0 w-2/6 z-30 bg-[var(--light-theme-color)] justify-center p-4 ${transClass}`}
        >
          <ul className="flex flex-col">
            {menuItems.map((item) => {
              return <Link href={item?.route || ""}>{item.title}</Link>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
