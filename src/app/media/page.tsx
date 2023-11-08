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

// buttons
export interface Buttons {
  id: number;
  title: string;
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

const buttons: Buttons[] = [
  {
    id: 1,
    title: "Video 1",
  },
  {
    id: 2,
    title: "Video 2",
  },
  {
    id: 3,
    title: "Video 3",
  },
];

/* For Video State Rendering

I am guessing I need UseState

Dislay certain videos depending on which "button" is clicked/toggled  
*/

export default function Page() {
  function handleClick(e) {
    setRendered(e.target.value);
  }

  const [rendered, setRendered] = useState(0);

  let video:
    | string
    | number
    | boolean
    | React.JSX.Element
    | Iterable<React.ReactNode>
    | React.PromiseLikeOfReactNode;

  if (rendered == 0) {
    video = <p>Click below to see a video</p>;
  } else if (rendered == 1) {
    video = <p>Video 1</p>;
  } else if (rendered == 2) {
    video = <p>Video 2</p>;
  } else if (rendered == 3) {
    video = <p>Video 3</p>;
  } else {
    video = <p>So sorry, something went wrong! {rendered}</p>;
  }

  return (
    <div className="w-9/12 mx-auto pt-16 md:pt-48 mb-20 md:mb-32">
      <div className="grid grid-rows-2 gap-10 mt-5">
        {/* Videos section */}
        <div className="bg-white/50 grid grid-rows-5">
          <div className="row-start-1 row-span-4">{video}</div>
          <div className="grid grid-cols-3">
            {buttons.map((button) => {
              return (
                <button key={button.id} value={button.id} onClick={handleClick}>
                  {button.title}
                </button>
              );
            })}
          </div>
          {/* <button onClick={handleClick} className="bg-red-400 m-4 p-3">
            Click me
          </button> */}
        </div>
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
