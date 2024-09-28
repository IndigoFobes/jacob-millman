"use client";
import Header from "../components/header";
import Image from "next/image";
import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapCarousel from "../components/carousel";
import "../../../src/app/globals.css";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useMotionValue,
  Variants,
} from "framer-motion";

// Variants for animations
const titleVariants: Variants = {
  hide: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const imageVariants: Variants = {
  hide: {
    opacity: 0,
    y: 75,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
    },
  },
};

// images (Same as OG definition)
export interface Photos {
  src: string;
  alt: string;
  title: string;
  id: number;
}
[];

// shows with nested photos
export interface Shows {
  id: number;
  title: string;
  photos: {
    [key: string]: Photos;
  };
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
// OG photos layout; check out previous commits ***

const shows: Shows[] = [
  {
    id: 0,
    title: "The Pillowman",
    photos: {
      a: {
        id: 1,
        title: "The Pillowman",
        // src: "/IMG_2975 no button.png",
        src: "/IMG_2945-copy.jpg",
        alt: "The Pillowman",
      },
      b: {
        id: 2,
        title: "The Pillowman",
        // src: "/pillowman_2.jpg",
        src: "/IMG_2957 copy.jpg",
        alt: "The Pillowman",
      },
      c: {
        id: 3,
        title: "The Pillowman",
        src: "/IMG_2975 no button.png",
        alt: "The Pillowman",
      },
      d: {
        id: 4,
        title: "The Pillowman",
        src: "/IMG_3013 copy.jpg",
        alt: "The Pillowman",
      },
      e: {
        id: 5,
        title: "The Pillowman",
        src: "/IMG_3016 copy.jpg",
        alt: "The Pillowman",
      },
      f: {
        id: 6,
        title: "The Pillowman",
        src: "/IMG_3027 cropped.jpeg",
        alt: "The Pillowman",
      },
      g: {
        id: 7,
        title: "The Pillowman",
        src: "/IMG_3052-copy.jpg",
        alt: "The Pillowman",
      },
      h: {
        id: 8,
        title: "The Pillowman",
        src: "/pillowman_2.jpg",
        alt: "The Pillowman",
      },
    },
  },
  {
    id: 1,
    title: "Singfeld",
    photos: {
      a: {
        id: 1,
        title: "Singfeld, 2023",
        src: "/DSC_3490.jpg",
        alt: "Singfeld, 2023",
      },
      b: {
        id: 2,
        title: "Singfeld, 2023",
        src: "/singfeld_1.jpg",
        alt: "Singfeld, 2023",
      },
      c: {
        id: 3,
        title: "Singfeld, 2023",
        src: "/DSC_3554 copy.jpg",
        alt: "Singfeld, 2023",
      },
      d: {
        id: 4,
        title: "Singfeld, 2023",
        src: "/DSC_4385.jpg",
        alt: "Singfeld, 2023",
      },
      e: {
        id: 5,
        title: "Singfeld, 2023",
        src: "/DSC_5267.jpg",
        alt: "Singfeld, 2023",
      },
      f: {
        id: 6,
        title: "Singfeld, 2023",
        src: "/DSC_5433.jpg",
        alt: "Singfeld, 2023",
      },
    },
  },
  {
    id: 2,
    title: "Stupid F**king Bird",
    photos: {
      a: {
        id: 1,
        title: "Stupid F**king Bird",
        src: "/SFB_main-cropped.jpg",
        alt: "Stupid F**king Bird",
      },
      b: {
        id: 2,
        title: "Stupid F**king Bird",
        src: "/sfb_1.jpg",
        alt: "Stupid F**king Bird",
      },
      c: {
        id: 3,
        title: "Stupid F**king Bird",
        src: "/sfb_3.jpg",
        alt: "Stupid F**king Bird",
      },
      d: {
        id: 4,
        title: "Stupid F**king Bird",
        src: "/sfb_4.jpg",
        alt: "Stupid F**king Bird",
      },
    },
  },
  {
    id: 3,
    title: "Anything Goes",
    photos: {
      a: {
        id: 1,
        title: "Anything Goes",
        src: "/DSC_0003.jpg",
        alt: "Anything Goes",
      },
      b: {
        id: 2,
        title: "Anything Goes",
        src: "/DSC_0167.jpg",
        alt: "Anything Goes",
      },
      c: {
        id: 3,
        title: "Anything Goes",
        src: "/DSC_0283(1).jpg",
        alt: "Anything Goes",
      },
      d: {
        id: 4,
        title: "Anything Goes",
        src: "/DSC_0294.jpg",
        alt: "Anything Goes",
      },
      e: {
        id: 5,
        title: "Anything Goes",
        src: "/DSC_0322.jpg",
        alt: "Anything Goes",
      },
      f: {
        id: 6,
        title: "Anything Goes",
        src: "/DSC_0433.jpg",
        alt: "Anything Goes",
      },
      g: {
        id: 7,
        title: "Anything Goes",
        src: "/IMG_2556cropped.jpeg",
        alt: "Anything Goes",
      },
      h: {
        id: 8,
        title: "Anything Goes",
        src: "/IMG_2721 cropped.jpeg",
        alt: "Anything Goes",
      },
      i: {
        id: 9,
        title: "Anything Goes",
        src: "/IMG_3134 cropped.jpeg",
        alt: "Anything Goes",
      },
    },
  },
  {
    id: 4,
    title: "Our Town",
    photos: {
      a: {
        id: 1,
        title: "Our Town",
        src: "/our-town_2.JPG",
        alt: "Our Town",
      },
      b: {
        id: 2,
        title: "Our Town",
        src: "/IMG_2270.JPG",
        alt: "Our Town",
      },
      c: {
        id: 3,
        title: "Our Town",
        src: "/our-town_1.JPG",
        alt: "Our Town",
      },
      d: {
        id: 4,
        title: "Our Town",
        src: "/our-town_3.JPG",
        alt: "Our Town",
      },
      e: {
        id: 5,
        title: "Our Town",
        src: "/our-town_4.JPG",
        alt: "Our Town",
      },
      f: {
        id: 6,
        title: "Our Town",
        src: "/our-town_5.JPG",
        alt: "Our Town",
      },
      g: {
        id: 7,
        title: "Our Town",
        src: "/our-town_6.JPG",
        alt: "Our Town",
      },
    },
  },
];

const buttons: Buttons[] = [
  {
    id: 1,
    title: "Juno (2007)",
  },
  {
    id: 2,
    title: "The Notebook (2004)",
  },
  {
    id: 3,
    title: "Shrek the Musical (Lord Farquaad)",
  },
  {
    id: 4,
    title: "Chigaco Fire",
  },
  {
    id: 5,
    title: "NBC Singfeld! Interview",
  },
];

const videos: Videos[] = [
  {
    id: 1,
    src: "https://www.youtube.com/embed/Ei8UmDwlKHc?si=RHqfAQTmewUlJfjb",
    alt: "Juno (2007)",
  },
  {
    id: 2,
    src: "https://www.youtube.com/embed/8ebAS-OoTZg?si=soq7UOt8hfdlihf4",
    alt: "The Notebook (2004)",
  },
  {
    id: 3,
    src: "https://www.youtube.com/embed/q3UnUWocP0E?si=1zQf9b1TzwEdDVRG",
    alt: "Shrek",
  },
  {
    id: 4,
    src: "https://www.youtube.com/embed/ThQE-MVn4Vk?si=f04dsHNkooMcwQeL",
    alt: "Chicago Fire",
  },
  {
    id: 5,
    src: "https://www.youtube.com/embed/p2EIvRfL6Cw?si=Az7IUnjF2fX2BfWg",
    alt: "NBC Singfeld! Interview",
  },
];

/* For Video State Rendering

Dislay certain videos depending on which "button" is clicked/toggled  
*/

export default function Page() {
  function handleClick(e) {
    setRendered(e.target.value);
  }

  const [rendered, setRendered] = useState(0);

  let source;
  let title;
  let id;

  // TODO: Tighten up this code using a formula
  if (rendered == 0) {
  } else if (rendered == 1) {
    source = videos[0].src;
    title = videos[0].alt;
    id = videos[0].id;
    // title = video[0].title;
  } else if (rendered == 2) {
    source = videos[1].src;
    title = videos[1].alt;
    id = videos[1].id;
  } else if (rendered == 3) {
    source = videos[2].src;
    title = videos[2].alt;
    id = videos[2].id;
  } else if (rendered == 4) {
    source = videos[3].src;
    title = videos[3].alt;
    id = videos[3].id;
  } else if (rendered == 5) {
    source = videos[4].src;
    title = videos[4].alt;
    id = videos[4].id;
  } else {
    console.log("Something went wrong.");
  }

  // Video frame
  const video = (
    <iframe
      className="rounded-sm w-[calc(800px*1/2)] h-[calc(400px*1/2)] md:w-[calc(800px*2/3)] md:h-[calc(400px*2/3)] lg:w-[800px] lg:h-[400px]"
      src={source}
      title={title}
      key={id}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );

  let photosArray;
  // For mapping photos within shows
  shows.map((show) => {
    const photosArray = Object.keys(show.photos).map(function (photoIndex) {
      let photo = show.photos[photoIndex];
      return photo;
    });
  });

  // ***RENDERED***
  return (
    <div className="w-9/12 mx-auto pt-20 md:pt-48 mb-20 md:mb-32 flex flex-col gap-6 mt-5">
      {/* Videos section */}
      <div className="flex flex-col justify-center content-center mb-10">
        <motion.h1
          className="title text-center"
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={titleVariants}
        >
          Videos
        </motion.h1>
        <hr className="w-3/4 border-solid mt-4 place-self-center horizontal-line-light mb-8"></hr>
        <div className="flex justify-center lg:row-span-4">
          <motion.div
            className="py-2 px-1 rounded-md flex justify-center"
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            variants={imageVariants}
          >
            {rendered == 0 ? (
              <div className="video-image flex b-gradient border-2 rounded-[var(--rounded-tiny)] w-[calc(800px*1/2)] h-[calc(400px*1/2)] md:w-[calc(800px*2/3)] md:h-[calc(400px*2/3)] lg:w-[800px] lg:h-[400px]">
                <div className="flex image-overlay w-full justify-center">
                  <p className="place-self-center font-[500] text-[1rem] md:text-[2rem]">
                    Click below to see a video
                  </p>
                </div>
              </div>
            ) : (
              <div>{video}</div>
            )}
            {/* {video} */}
          </motion.div>
        </div>
        <div className="flex flex-col lg:flex-row lg:h-[5rem] place-self-center mt-10 lg:mx-10 w-full">
          {buttons.map((button) => {
            return (
              <button
                key={button.id}
                value={button.id}
                onClick={handleClick}
                className={`media-buttons rounded-[var(--rounded-tiny)] lg:text-md text-[var(--light-text-color)] hover:bg-[var(--light-text-transparent)] hover:text-[var(--dark-text-color)] border-[var(--light-text-color)] border-2 p-2 m-2 md:m-4 w-3/4 place-self-center h-full`}
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
      <div className="flex flex-col justify-center content-center">
        <motion.h1
          className="title text-center"
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={titleVariants}
        >
          Production Photos
        </motion.h1>
        <hr className="w-3/4 border-solid mt-4 place-self-center horizontal-line-light mb-2"></hr>
      </div>
      {/* map through each show, with photos from each show. I can either create new interfaces with photos nested into shows. I don't know another good option. */}
      {shows.map((show) => {
        return (
          <div key={show.id}>
            <motion.h2
              className="text-[2rem] py-4 w-3/4"
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
              variants={titleVariants}
            >
              {show.title}
            </motion.h2>
            <BootstrapCarousel show={show} key={show.id} />
          </div>
        );
      })}
      {/* OG photo layout, just 3 rows of 3, look at previous commits */}
    </div>
  );
}
