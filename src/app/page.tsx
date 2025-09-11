"use client";
import Header from "./components/header";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import React, { useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useMotionValue,
  Variants,
} from "framer-motion";
import { AnimatePresence } from "framer-motion";

const introPictureVariants: Variants = {
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

const introTextVariants: Variants = {
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

const titleVariants: Variants = {
  hide: {
    opacity: 0,
    y: 75,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const reachOutVariants: Variants = {
  hide: {
    opacity: 0,
    x: -200,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const reachOutTextVariants: Variants = {
  hide: {
    opacity: 0,
    x: 200,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function Home() {
  return (
    <div>
      {/* Hero section */}
      <div className="font-mono font-[400] relative bg-[var(--light-theme-color)] flex flex-col md:grid grid-cols-7">
        <div className="md:relative col-start-1 col-end-8 md:min-h-[30rem] lg:min-h-[40rem] xl:min-h-[50rem] xl:max-h-[60rem] w-full">
          <Image
            src="/Jacob-header-photo-2025.jpg"
            alt="Jacob on a couch with potted plant."
            fill={true}
            className="hidden md:flex object-cover"
          />
          {/* mobile */}
          <Image
            src="/Jacob-header-photo-2025-mobile.jpg"
            alt="Jacob on a couch with potted plant."
            width={1000}
            height={500}
            className="md:hidden object-cover"
          />
          {/* <div className="hidden md:flex absolute font-mono text-[1.5rem] lg:text-[2rem] xl:text-[3rem] bottom-[2rem] z-30 left-0 translate-x-10 -rotate-6 ">
            Jacob A. Millman
          </div> */}
        </div>
        <div className="col-start-1 col-end-8 flex flex-col justify-center content-center my-auto px-4 py-10 2xl:pr-60 bg-[var(--dark-theme-color)]">
          <h1 className="text-[var(--accent-color)] font-[300] mom-quote leading-normal mb-2 mx-8 md:mx-10 lg:mx-20 xl:mx-40 text-center">
            &quot;A{" "}
            <span className="text-[var(--accent-color)] font-[700]">
              once-in-a-lifetime talent,
            </span>{" "}
            backed up by an{" "}
            <span className="text-[var(--accent-color)] font-[700]">
              electrifying personality{" "}
            </span>
            and a
            <span className="text-[var(--accent-color)] font-[700]">
              {" "}
              flood of charisma
            </span>
            &quot;
            <span className="text-[1rem] md:text-[1.5rem]  ml-4">
              - Nancy Millman
            </span>
            {/* <span className="text-[var(--light-text-color)] font-[500]">
              actor
            </span>{" "} */}
          </h1>
          <div className="flex justify-center">
            <Link
              className="min-w-[180px] mt-6 font-[600] text-center py-2 px-8 rounded-[var(--rounded-tiny)] text-lg text-[var(--light-text-color)] hover:bg-[var(--light-text-transparent)] hover:text-[var(--dark-text-color)] border-[var(--light-text-color)] border-2"
              href="/about"
              style={{
                transition: "all 300ms ease-in-out",
              }}
            >
              Read More About Jacob
            </Link>
          </div>
        </div>
      </div>
      {/* What's New / Most Recently Section */}
      <div className="px-4 pt-4 pb-20 flex flex-col c-gradient text-[var(--dark-text-color)]">
        {/* What's Next */}
        <div className="title pb-12 pt-6 px-8 md:px-12 lg:px-20 xl:px-36 w-full grid grid-cols-3">
          <h1 className="col-start-1 md:col-end-3 col-end-4 text-left">
            {`What's New?`}
          </h1>
          <hr className="col-start-1 md:col-end-3 col-end-4 md:mr-10 border-solid horizontal-line-dark mt-2"></hr>
        </div>
        <ul className="md:px-12 lg:px-20 xl:px-36 h-auto pb-8">
          <li className="flex flex-col md:grid md:grid-cols-5">
            {/* image */}
            {/* <motion.div
              className="md:col-start-1 md:col-end-3 relative place-self-center h-96 w-full mb-10 md:mb-0 md:w-full md:h-full md:mr-10"
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
              variants={introPictureVariants}
            >
              <Image
                src="/singfeld_1.jpg"
                alt="Jacob in Singfeld"
                fill
                className="object-cover"
              />
            </motion.div> */}
            {/* text */}
            <motion.div
              className="flex flex-col col-start-1 col-end-6 md:mx-0"
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
              variants={introTextVariants}
            >
              <p className="md:text-lg lg:text-xl 2xl:text-2xl font-[400] lg:w-full">
                {`Jacob will return Off-Broadway this fall, understudying the roles of Lorne Michaels and John Belushi in Not Ready for Prime Time. As a lifelong fan of SNL, he is delighted to be a part of this production. As an actor, he is thrilled to be able to study these two legends and their lives.`}
                <br></br>
                <br></br>
                {/* {`Per ${(
                  <a href="https://www.broadwayworld.com/article/NOT-READY-FOR-PRIME-TIME-Play-Based-on-SATURDAY-NIGHT-LIVE-Will-Premiere-Off-Broadway-This-Fall-20250707">
                    Broadway World
                  </a>
                )}, `} */}
                {`Per `}
                <a
                  className="text-blue-500 underline hover:text-blue-600"
                  target="_blank"
                  href="https://www.broadwayworld.com/article/NOT-READY-FOR-PRIME-TIME-Play-Based-on-SATURDAY-NIGHT-LIVE-Will-Premiere-Off-Broadway-This-Fall-20250707"
                >
                  Broadway World
                </a>
                {`, `}
              </p>
              <p className="md:text-md lg:text-lg 2xl:text-xl font-[400] lg:w-full ml-10 italic pt-2">
                {`Not Ready For Prime Time is a fictionalized account about the origins of “Saturday Night Live,” the ground-breaking NBC show that launched on October 11, 1975, and revolutionized American political and cultural satire. Audiences are introduced to nine misfit comedians – originally known as the “Not Ready For Prime Time Players” - as they rise to stardom: Dan Aykroyd, John Belushi, Chevy Chase, Jane Curtin, Garrett Morris, Bill Murray, Laraine Newman and Gilda Radner, and a young TV producer and writer, Lorne Michaels. The play follows their turbulent journey as they create comedic television history, producing a show that is still going strong after almost 50 years.`}
              </p>
              <p className="md:text-lg lg:text-xl 2xl:text-2xl font-[400] lg:w-full">
                <br></br>
                {`"This new play pulses with live music, quick wit, and backstage mayhem, capturing the electric atmosphere of a cultural revolution in the making." (`}
                <a
                  className="text-blue-500 underline hover:text-blue-600"
                  target="_blank"
                  href="https://playbill.com/article/new-play-about-the-early-days-of-snl-not-ready-for-prime-time-will-bow-off-broadway"
                >
                  Playbill
                </a>
                {`)`}
                <br></br>
                <br></br>
                {`Playing Off-Broadway at the Robert W. Wilson MCC Theater Space, previews begin October 5, with opening night set for October 20. Tickets are available `}
                <a
                  className="text-blue-500 underline hover:text-blue-600"
                  target="_blank"
                  href="https://notreadyforprimetimeplay.com/?utm_source=google&utm_medium=cpc&utm_campaign=onsale&gad_source=1&gad_campaignid=22913864316&gbraid=0AAAABBKkq6FArAoggMUEysDxrw3MGLGUh&gclid=Cj0KCQjwwsrFBhD6ARIsAPnUFD1KQUZLLUf4SD0HBy473oVhmKNGGfaxqwom_KmE-hhDvGyJEm-V_xkaAhYoEALw_wcB"
                >
                  here
                </a>
                {`.`}
              </p>

              {/* <div className="flex">
                <Link
                  className="min-w-[180px] mt-6 font-[600] text-center py-2 px-8 rounded-[var(--rounded-tiny)] text-lg text-[var(--dark-text-color)] hover:bg-[var(--light-text-color)] hover:text-[var(--accent-color)] border-[var(--light-text-color)] border-2"
                  href="https://www.nbcnewyork.com/entertainment/the-scene/new-york-live/go-see-the-musical-about-nothing/4688883/"
                  target="_blank"
                  style={{ transition: "all 300ms ease-in-out" }}
                >
                  Get Details
                </Link>
              </div> */}
            </motion.div>
          </li>
        </ul>
        {/* Most Recent */}
        <div className="title pb-12 pt-6 px-8 md:px-12 lg:px-20 xl:px-36 w-full grid grid-cols-3">
          <h1 className="col-start-1 md:col-start-2 col-end-4 text-right md:pr-10">
            Most Recent
          </h1>
          <hr className="col-start-1 md:col-start-2 col-end-4 md:mr-10 border-solid horizontal-line-dark mt-2"></hr>
        </div>
        <ul className="md:px-12 lg:px-20 xl:px-36 h-auto">
          {/* first show */}
          <li className="flex flex-col md:grid md:grid-cols-5">
            {/* image */}
            {/* <motion.div
              className="md:col-start-1 md:col-end-3 relative place-self-center h-96 w-full mb-10 md:mb-0 md:w-full md:h-full md:mr-10"
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
              variants={introPictureVariants}
            >
              <Image
                src="/singfeld_1.jpg"
                alt="Jacob in Singfeld"
                fill
                className="object-cover"
              />
            </motion.div> */}
            {/* text */}
            <motion.div
              className="flex flex-col col-start-1 col-end-6 md:mx-0"
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
              variants={introTextVariants}
            >
              <p className="md:text-lg lg:text-xl 2xl:text-2xl font-[400] lg:w-full">
                {`Jacob also portrayed Jack in The Roles We Play, written and directed by Linsy Segarra. The film follows Jack and his partner, Honey, taking absurd measures to cope with the end of the world. Currently in post-production with a planned 2025 release. `}
              </p>
            </motion.div>
          </li>
        </ul>
        {/* Posters */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-y-4 gap-x-20 mt-12 md:mt-16 md:mb-4 place-self-center w-[90%] md:w-[60%]">
          <motion.div
            className="relative place-self-center aspect-[2/3] w-full"
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            variants={introPictureVariants}
          >
            <Image
              src="/nfrpt-poster.jpg"
              alt="Not Ready For Prime Time poster"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            className="relative place-self-center aspect-[2/3] w-full"
            initial="hide"
            whileInView="show"
            viewport={{ once: true }}
            variants={introPictureVariants}
          >
            <Image
              src="/The-Roles-We-Play-poster.jpg"
              alt="The Roles We Play poster"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
        {/* Quote section */}
        {/* <div className=" md:p-10">
          <p className="font-mono text-xl lg:text-2xl 2xl:text-3xl font-[300] text-[var(--accent-color)] text-center lg:mx-20 my-5">
            {`"Millman`} <span className="font-[700]">skillfully delivers</span>{" "}
            {`a generous dose of doubt and neuroses to George Costanza...”`}
            <br></br> {`- Manhattan Digest`}
          </p>
        </div> */}
      </div>
      {/* Image section */}
      <div className="h-screen">
        {/* Headshots section */}
        <div className="grid grid-cols-10 b-gradient h-1/2">
          {/* headshot */}
          <div className="col-start-1 col-end-6 md:col-end-4 w-full relative h-full">
            <Image
              src="/hs1.jpg"
              alt="Jacob in denim jacket, kind smile."
              fill
              className="object-cover object-top"
            />
          </div>
          {/* text/link */}
          <div className="col-start-6 md:col-start-4 col-end-11 w-full flex flex-col gap-6 justify-center items-center mx-auto">
            <motion.h2
              className="title text-[var(--light-text-color)]"
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
              variants={titleVariants}
            >
              {`Headshots`} <br className="sm:hidden"></br> {`& Resume`}
            </motion.h2>
            <hr className="w-3/4 xl:w-1/2 border-solid horizontal-line-dark mt-2"></hr>
            <Link
              className=" mt-6 font-[600] text-center py-1 px-3 md:py-2 md:px-8 rounded-[var(--rounded-tiny)] md:text-lg text-[var(--light-text-color)] hover:bg-[var(--light-text-transparent)] hover:text-[var(--dark-text-color)] border-[var(--light-text-color)] border-2"
              href="/resume"
              style={{
                transition: "all 300ms ease-in-out",
              }}
            >
              See More
            </Link>
          </div>
        </div>
        {/* Production shot section */}
        <div className="grid grid-cols-10 a-gradient h-1/2">
          {/* text/link */}
          <div className="col-start-1 col-end-6 md:col-end-8 w-full flex flex-col gap-6 justify-center items-center mx-auto">
            <motion.h2
              className="title text-[var(--light-text-color)]"
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
              variants={titleVariants}
            >
              Media
            </motion.h2>
            <hr className="w-3/4 xl:w-1/2 border-solid horizontal-line-dark mt-2"></hr>
            <Link
              className=" mt-6 font-[600] text-center py-1 px-3 md:py-2 md:px-8 rounded-[var(--rounded-tiny)] md:text-lg text-[var(--light-text-color)] hover:bg-[var(--light-text-transparent)] hover:text-[var(--dark-text-color)] border-[var(--light-text-color)] border-2"
              href="/media"
              style={{
                transition: "all 300ms ease-in-out",
              }}
            >
              See More
            </Link>
          </div>
          {/* photo */}
          <div className="col-start-6 md:col-start-8 col-end-11 w-full relative h-full">
            <Image
              src="/media-pic.jpg"
              alt="Jacob in Anything Goes"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
      {/* Video section */}
      {/* See Previous version for code here. */}
      {/* Contact section */}
      <div className="w-screen flex min-h-screen" id="contact">
        {/* image portion of contact - hidden on mobile */}
        <div className="hidden md:block md:relative w-2/5">
          <Image
            src={"/SFB_main-cropped.jpg"}
            alt={
              "Jacob sitting on a wooden box, smiling, wearing green flannel."
            }
            fill
            className="object-cover"
          ></Image>
        </div>
        {/* Text portion of Reach Out Contact section */}
        <div className="contact-bg w-full md:w-3/5 text-[var(--dark-text-color)] flex flex-col md:p-6">
          <div className="contact-overlay w-full h-full">
            <motion.div
              className="flex flex-col ml-10 mt-4 md:ml-4 lg:mt-4 lg:ml-20"
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
              variants={reachOutTextVariants}
            >
              <h2 className="title mb-2">Reach out!</h2>
              <hr className="w-3/4 xl:w-1/2 border-solid horizontal-line-dark mt-2 mb-12"></hr>
              {/* email */}
              <div className="pb-3">
                <Link
                  href={"mailto:jacobamillman@gmail.com"}
                  target={"_blank"}
                  className={"text-3xl flex flex-row"}
                >
                  <MdEmail className="mr-2" />
                  <h3 className="text-lg md:text-xl lg:text-2xl font-[600]">
                    jacobamillman@gmail.com
                  </h3>
                </Link>
              </div>
              {/* instagram */}
              <div className="pb-3">
                <Link
                  href={" https://www.instagram.com/jacob.millman/"}
                  target={"_blank"}
                  className={"text-3xl flex flex-row"}
                >
                  <FaInstagram className="mr-2" />
                  <h3 className="text-lg md:text-xl lg:text-2xl font-[600]">
                    instagram
                  </h3>
                </Link>
              </div>
              {/* actors access */}
              <div className="pb-3 flex flex-row">
                <Link
                  href={"https://resumes.actorsaccess.com/jacobmillman"}
                  target={"_blank"}
                  className={"flex flex-row"}
                >
                  <Image
                    src={"/actors_access.png"}
                    alt={"Actors Access Icon"}
                    width={30}
                    height={30}
                    className={"mr-2"}
                  ></Image>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-[600]">
                    actors access
                  </h3>
                </Link>
              </div>
              {/* backstage */}
              <div className="pb-8 flex flex-row">
                <Link
                  href={"https://www.backstage.com/u/jacob-millman/"}
                  target={"_blank"}
                  className={"flex flex-row"}
                >
                  <Image
                    src={"/backstage-logo.png"}
                    alt={"Actors Access Icon"}
                    width={30}
                    height={30}
                    className={"mr-2"}
                  ></Image>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-[600]">
                    backstage
                  </h3>
                </Link>
              </div>
              {/* button */}
              <Link
                className="min-w-[180px] mt-6 font-[600] place-self-start text-center py-2 px-8 rounded-[var(--rounded-tiny)] text-lg text-[var(--dark-text-color)] hover:bg-[var(--light-text-color)] hover:text-[var(--accent-color)] border-[var(--dark-text-color)] hover:border-[var(--light-text-color)] md:border-[var(--light-text-color)] border-2"
                href="mailto:jacobamillman@gmail.com"
                style={{
                  transition: "all 300ms ease-in-out",
                }}
              >
                Send an Email
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
