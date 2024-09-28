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
import ImageSlideshow from "../components/swiper";

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
    src: "/#1.jpg",
    alt: "Jacob in green shirt, looking straight forward.",
    id: 0,
  },
  {
    src: "/#2.jpg",
    alt: "Jacob in denim jacket, smiling.",
    id: 1,
  },
  {
    src: "/#3.jpg",
    alt: "Jacob in green quarter zip, serious.",
    id: 2,
  },
  {
    src: "/#4.jpg",
    alt: "Jacob in green shirt.",
    id: 3,
  },
  {
    src: "/#5.jpg",
    alt: "Jacob in green shirt.",
    id: 4,
  },
  {
    src: "/#6.jpg",
    alt: "Jacob in green shirt.",
    id: 5,
  },
  {
    src: "/#7.jpg",
    alt: "Jacob in green shirt.",
    id: 6,
  },
];

// New Headshot will go in position 4!
let photoArray;

export default function Page() {
  // const photoArray = Object.keys(headshots).map(function (photoIndex) {
  //   let photo = headshots[photoIndex];
  //   return photo;
  // });

  return (
    <div>
      <div className="mx-10 sm:mx-20 pt-10 md:pt-48 mb-16 sm:mb-32">
        <h1 className="title pb-10 text-center md:text-start">{`Headshots & Resume`}</h1>
        <div className="flex flex-col sm:grid sm:grid-cols-2 w-full gap-5">
          {/* Headshots */}
          <motion.div
            className="flex justify-center flex-row sm:flex-col"
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            variants={headshotVariants}
          >
            <ImageSlideshow headshots={headshots} />
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
