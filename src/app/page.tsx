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
              style={{ transition: "all 300ms ease-in-out" }}
            >
              Read More About Jacob
            </Link>
          </div>
        </div>
      </div>
      {/* What's New / Most Recently Section */}
      <div className="p-4 flex flex-col c-gradient text-[var(--dark-text-color)]">
        {/* What's Next */}
        <div className="title pb-12 pt-6 px-8 md:px-12 lg:px-20 xl:px-36 w-full grid grid-cols-3">
          <h1 className="col-start-1 md:col-end-3 col-end-4 text-left">
            {`Coming Soon`}
          </h1>
          <hr className="col-start-1 md:col-end-3 col-end-4 md:mr-10 border-solid horizontal-line-dark mt-2"></hr>
        </div>
        <ul className="md:px-12 lg:px-20 xl:px-36 h-auto pb-10 lg:pb-20">
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
              {/* <h2 className="text-3xl md:text-4xl font-[500] mb-4">
                {`Short Films`}
              </h2> */}
              {/* <h3 className="text-2xl 2xl:text-3xl font-[400] mt-2 mb-4">
                Short Film by Linsy Segarra
              </h3> */}
              <p className="md:text-lg lg:text-xl 2xl:text-2xl font-[400] lg:w-full">
                {`Jacob wrapped on Red Light, a short film written by Carlos A. Hiciano and directed by Louis Carrasco. Jacob played Wally, a cheerful, but shy man who is spending the night with a prostitute, without either of them realizing their intertwined past. Filming wrapped in March 2025, with release plans to be announced soon.`}
                <br></br>
                <br></br>
                {`Jacob also portrayed Jack in The Roles We Play, written and directed by Linsy Segarra. The short film depicts Jack and Honey, his partner, taking absurd measures to cope with the end of the world. Filming wrapped in December 2024, with a planned Summer 2025 release. `}
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
        {/* <div className="title pb-12 pt-6 px-8 md:px-12 lg:px-20 xl:px-36 w-full grid grid-cols-3">
          <h1 className="col-start-1 md:col-start-2 col-end-4 text-right md:pr-10">
            Most Recently
          </h1>
          <hr className="col-start-1 md:col-start-2 col-end-4 md:mr-10 border-solid horizontal-line-dark mt-2"></hr>
        </div> */}
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
            {/* <motion.div
              className="flex flex-col col-start-3 col-end-6 md:pl-10 md:mx-0"
              initial="hide"
              whileInView="show"
              viewport={{ once: true }}
              variants={introTextVariants}
            >
              <h2 className="text-3xl md:text-4xl font-[500]">Singfeld</h2>
              <h3 className="text-2xl 2xl:text-3xl font-[400] mt-2 mb-4">
                The Jerry Orbach Theatre
              </h3>
              <p className="md:text-lg lg:text-xl 2xl:text-2xl font-[400] lg:w-10/12">
                {`Jacob was most recently seen in Off-Broadway’s Singfeld,
                originating the on-stage iterations of George Costanza and
                Newman. After a solid six months of musical theatre comedy,
                Jacob is excited to utilize the lessons he learned and newfound
                Seinfeld knowledge in the next chapter of his career.`}
              </p>
              <div className="flex">
                <Link
                  className="min-w-[180px] mt-6 font-[600] text-center py-2 px-8 rounded-[var(--rounded-tiny)] text-lg text-[var(--dark-text-color)] hover:bg-[var(--light-text-color)] hover:text-[var(--accent-color)] border-[var(--light-text-color)] border-2"
                  href="https://www.nbcnewyork.com/entertainment/the-scene/new-york-live/go-see-the-musical-about-nothing/4688883/"
                  target="_blank"
                  style={{ transition: "all 300ms ease-in-out" }}
                >
                  Get Details
                </Link>
              </div>
            </motion.div> */}
          </li>
        </ul>
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
              style={{ transition: "all 300ms ease-in-out" }}
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
              style={{ transition: "all 300ms ease-in-out" }}
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
                style={{ transition: "all 300ms ease-in-out" }}
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
