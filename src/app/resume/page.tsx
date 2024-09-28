"use client";
import Header from "../components/header";
import Link from "next/link";
import Image from "next/image";
import Resume from "../components/resume";
import { AiOutlineDownload } from "react-icons/ai";
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
const headshotVariants: Variants = {
  hide: {
    opacity: 0,
    x: -200,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const resumeVariants: Variants = {
  hide: {
    opacity: 0,
    x: 200,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

// images
export interface Headshots {
  src: string;
  alt: string;
  id: number;
}

const headshots: Headshots[] = [
  {
    src: "/Jacob_ main_hs.jpg",
    alt: "Jacob in green shirt, looking straight forward.",
    id: 0,
  },
  {
    src: "/Jacob_hs_2.jpg",
    alt: "Jacob in denim jacket, smiling.",
    id: 1,
  },
  {
    src: "/Jacob_hs_5.jpg",
    alt: "Jacob in green quarter zip, serious.",
    id: 2,
  },
  {
    src: "/jacob_headshot_green.jpg",
    alt: "Jacob in green shirt.",
    id: 3,
  },
];

// New Headshot will go in position 4!

export default function Page() {
  return (
    <div>
      <div className="mx-10 sm:mx-20 pt-10 md:pt-48 mb-16 sm:mb-32">
        <h1 className="title pb-10 text-center md:text-start">{`Headshots & Resume`}</h1>
        <div className="flex flex-col sm:grid sm:grid-cols-2 w-full gap-5">
          {/* Headshots */}
          <motion.div
            className="grid grid-cols-2 grid-rows-2 gap-4"
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            variants={headshotVariants}
          >
            {/* <div>headshots</div>
          <div>headshots</div>
          <div>headshots</div>
          <div>headshots</div> */}
            {headshots.map((item) => {
              return (
                <Link key={item.id} href={item.src} download target={"_blank"}>
                  <div className="relative">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      key={item.id}
                      width={1000}
                      height={500}
                    />
                    <div
                      className="opacity-[0] absolute flex bg-black/80 hover:opacity-100 top-0 left-0 w-full h-full justify-center"
                      style={{ transition: "opacity 300ms ease-in-out" }}
                    >
                      <AiOutlineDownload className="place-self-center text-[4rem] text-slate-100/80" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </motion.div>
          {/* Resume */}
          <motion.div
            className="w-full flex flex-col"
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            variants={resumeVariants}
          >
            <Image
              src={"/JacobMillman–Resume.jpg"}
              alt={"Jacob's resume"}
              width={1000}
              height={500}
            />
            <div className="w-full h-full flex justify-center">
              <Link
                className="bg-[var(--light-theme-color)] hover:bg-[var(--accent-color)] place-self-center w-full text-center py-2"
                href={"JacobMillman–Resume.pdf"}
                download
                target={"_blank"}
                style={{ transition: "all 300ms ease-in-out" }}
              >
                Download Resume
              </Link>
            </div>

            {/* Really cool PDF viewer, but I think we have to pay for this, so maybe not. */}
            {/* <Resume /> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
