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

// video details
export interface Videos {
  id: number;
  src: string;
  alt: string;
}

const photos: Photos[] = [
  {
    src: "/sfb_1.jpg",
    alt: "example",
    title: "example title",
    id: 0,
  },
  {
    src: "/our-town_1.JPG",
    alt: "example",
    title: "example title",
    id: 1,
  },
  {
    src: "/singfeld_1.jpg",
    alt: "example",
    title: "example title",
    id: 2,
  },
  {
    src: "/sfb_2.jpg",
    alt: "example",
    title: "example title",
    id: 3,
  },
  {
    src: "/singfeld_2.jpg",
    alt: "example",
    title: "example title",
    id: 4,
  },
  {
    src: "/pillowman_2.jpg",
    alt: "example",
    title: "example title",
    id: 5,
  },
  {
    src: "/pillowman_1.jpg",
    alt: "example",
    title: "example title",
    id: 4,
  },
];

const buttons: Buttons[] = [
  {
    id: 1,
    title: "Dramatic Reel",
  },
  {
    id: 2,
    title: "Comedic Reel",
  },
  {
    id: 3,
    title: "Performace Clips",
  },
];

const videos: Videos[] = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/Sjf0SbpnHXI?si=5WVqpKRmrtaV1YCS",
    alt: "Morning Person – Shrek",
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/lB0VLzzSxcU?si=Wna_UX6s9Njs6zSZ",
    alt: "What's Up Duloc",
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/3sPuuMg9G0Y?si=n4XEYAWO22zLgCJ7",
    alt: "Who I'd Be",
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

  // let video:
  //   | string
  //   | number
  //   | boolean
  //   | React.JSX.Element
  //   | Iterable<React.ReactNode>
  //   | React.PromiseLikeOfReactNode;

  let source;
  let title;

  if (rendered == 0) {
  } else if (rendered == 1) {
    source = videos[0].src;
    title = videos[0].alt;
    // title = video[0].title;
  } else if (rendered == 2) {
    source = videos[1].src;
    title = videos[1].alt;
  } else if (rendered == 3) {
    source = videos[2].src;
    title = videos[2].alt;
  } else {
    console.log("Something went wrong.");
  }

  const video = (
    <iframe
      className="rounded-sm w-[calc(800px*1/2)] h-[calc(400px*1/2)] md:w-[calc(800px*2/3)] md:h-[calc(400px*2/3)] lg:w-[800px] lg:h-[400px]"
      src={source}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );

  // ***RENDERED***
  return (
    <div className="w-9/12 mx-auto pt-16 md:pt-48 mb-20 md:mb-32">
      <div className="flex flex-col gap-10 mt-5">
        {/* Videos section */}
        <div className="flex flex-col mb-10">
          <h1 className="title text-center mb-10">Videos</h1>
          <div className="lg:row-span-4">
            <div className="py-2 px-1 rounded-md flex justify-center">
              {rendered == 0 ? (
                <div className="bg-slate-100/20 w-[calc(800px*1/2)] h-[calc(400px*1/2)] md:w-[calc(800px*2/3)] md:h-[calc(400px*2/3)] lg:w-[800px] lg:h-[400px]">
                  Click to select a video
                </div>
              ) : (
                <div>{video}</div>
              )}
              {/* {video} */}
            </div>
          </div>
          <div className="grid grid-cols-3 mt-5 lg:mx-10">
            {buttons.map((button) => {
              return (
                <button
                  key={button.id}
                  value={button.id}
                  onClick={handleClick}
                  className={`rounded-[var(--rounded-tiny)] text-lg text-[var(--light-text-color)] hover:bg-[var(--light-text-transparent)] hover:text-[var(--dark-text-color)] border-[var(--light-text-color)] border-2 m-4 w-3/4 place-self-center h-full`}
                  style={{ transition: "all 300ms ease-in-out" }}
                >
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
        <h1 className="title text-center mb-5">Production Photos</h1>
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          {photos.map((item) => {
            return (
              <div className="relative min-h-[12rem] md:min-h-[20rem] lg:min-h-[25rem] xl:min-h-[30rem]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  key={item.id}
                  fill
                  className="object-cover"
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
