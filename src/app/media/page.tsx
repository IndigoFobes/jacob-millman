"use client";
import Header from "../components/header";
import Image from "next/image";
import React, { useState, useEffect } from "react";

// images
export interface Photos {
  src: string;
  alt: string;
  title: string;
  id: number;
}

const photos: Photos[] = [
  {
    src: "/Jacob_ main_hs.jpg",
    alt: "example",
    title: "example title",
    id: 0,
  },
  {
    src: "/Jacob_ main_hs.jpg",
    alt: "example",
    title: "example title",
    id: 1,
  },
  {
    src: "/Jacob_ main_hs.jpg",
    alt: "example",
    title: "example title",
    id: 2,
  },
  {
    src: "/Jacob_ main_hs.jpg",
    alt: "example",
    title: "example title",
    id: 3,
  },
  {
    src: "/Jacob_ main_hs.jpg",
    alt: "example",
    title: "example title",
    id: 4,
  },
  {
    src: "/Jacob_ main_hs.jpg",
    alt: "example",
    title: "example title",
    id: 5,
  },
];

export default function Page() {
  return (
    <div className="w-9/12 mx-auto pt-16 md:pt-48 mb-20 md:mb-32">
      <div className="grid grid-rows-2 gap-10 mt-5">
        {/* Videos section */}
        <div className="bg-white/50">I WILL BE VIDEO SECTION</div>
        {/* Production photos section */}
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          {photos.map((item) => {
            return (
              <div className="relative">
                <Image
                  src={item.src}
                  alt={item.alt}
                  key={item.id}
                  width={1000}
                  height={500}
                />
                <p className="absolute bottom-0 py-2 px-3 bg-black/50 w-full">
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
