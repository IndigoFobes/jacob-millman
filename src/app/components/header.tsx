import Link from 'next/link';
import MediaDropdown  from './media-dropdown';
import React from 'react';

export interface MenuItem {
    title: string;
    route?: string;
    children?: MenuItem[];
}

const menuItems: MenuItem[] = [
    {
        title: "HOME",
        route: "/"
    },
    {
        title: "ABOUT",
        route: "/about"
    },
    {
        title: "MEDIA",
        children: [
            {
                title:  "PHOTOS",
                route: "/media/photos"
            },
            {
                title:  "VIDEOS",
                route: "/media/videos"
            }
        ]
    },
    {
        title: "RESUME",
        route: "/resume"
    },
    {
        title: "CONTACT",
        route: "/"
    }
];

export default function Header () {
    return (
        <header className="w-full bg-[var(--dark-theme-color)] flex flex-col justify-center">
            <h1 className="text-center text-[var(--light-text-color)] font-[var(--main-font-style)] py-3 px-4 header-title">JACOB MILLMAN</h1>
            <ul className="grid grid-cols-5 text-[var(--light-text-color)] text-center pb-3 text-xl">
            {menuItems.map((item) => {
          return item.hasOwnProperty("children") ? (
            <MediaDropdown item={item} />
          ) : (
            <Link className="hover:text-[var(--accent-color)]" href={item?.route || ""}>
              {item.title}
            </Link>
          );
        })}
                {/* <li><Link href="/">HOME</Link></li>
                <li><Link href="/about">ABOUT</Link></li>
                <li>MEDIA</li>
                <li><Link href="/resume">RESUME</Link></li>
                <li>CONTACT</li> */}
            </ul>
        </header>

    )
}