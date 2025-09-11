"use client";
import Header from "../components/header";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
  useMotionValue,
  Variants,
} from "framer-motion";

const textVariants: Variants = {
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

const imageVariants: Variants = {
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

export default function Page() {
  return (
    <div className="w-9/12 mx-auto md:pt-40 lg:pt-48 mb-20 md:mb-32 relative">
      {/* <h1 className="title pb-10 text-center md:text-start">About me</h1> */}
      {/* mobile */}
      <div className="md:hidden flex flex-col justify-center">
        <motion.p
          className="text-[.9rem] text-start font-[400] mt-10"
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={textVariants}
        >
          {/* <span className="text-[1.5rem]">Jacob Millman </span> */}
          {`From a very young age, Jacob would constantly study the words and actions of others, seeing how it affected the world around them. The books he read would become reality, the films he watched would become lessons. He did not realize what he was doing until he was asked to be in some friends’ short films. He proceeded to win Best Lead Actor (Sci-Fi Fantasy) and Best Supporting Actor (Drama) at the ~Mill Middle School Young Playwrights Film Festival~. It all clicked – he was an Actor. He was working on his Craft.`}
          {<br></br>}
          {<br></br>}
          {`Yes, Jacob Millman is an Actor. He uses “craft” as a noun. Never out of arrogance – he just finds the craft (👀) so fascinating. We’ve had to cut supporting sentences following that statement because we asked Jacob what made it so fascinating and he got too excited and got the zoomies and then he ran into a wall, so we are on our way to the ER, but we’ll circle back soon.`}
          {<br></br>}
        </motion.p>
        <motion.p
          className="text-[.9rem] text-start font-[400] mt-6"
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={textVariants}
        >
          {`Colleagues and audiences alike consistently commend the intelligence, strength and authenticity that Jacob brings to his work. While he may not always take himself too seriously, he will always be focused on elevating the text and doing the story justice. As an artist, Jacob leads with generosity, prioritizing his collaborators and storytelling above glamour. From farce to family drama, from musical theater to mockumentary, Jacob’s work is elevated by his clear understanding of technique, allowing him to transcend genres and mediums.`}
        </motion.p>
        <motion.p
          className="text-[.9rem] text-start font-[400] mt-6"
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={textVariants}
        >
          {`At the end of the day, it’s midnight. And in conclusion, as hard as we try, a brief bio will not do Jacob Millman justice. Experience his work for yourself. Or even better, ask him about it – watch as he lights up and brings you into his world, one full of curiosity and hope and torment and resilience andddd he ran into a wall again.`}
        </motion.p>
      </div>
      {/* desktop */}
      <motion.p
        className="hidden md:block text-[1.1rem] text-start font-[400] pt-16"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={textVariants}
      >
        {/* <span className="text-[1.5rem]">Jacob Millman </span> */}
        {`From a very young age, Jacob would constantly study the words and actions of others, seeing how it affected the world around them. The books he read would become reality, the films he watched would become lessons. He did not realize what he was doing until he was asked to be in some friends’ short films. He proceeded to win Best Lead Actor (Sci-Fi Fantasy) and Best Supporting Actor (Drama) at the ~Mill Middle School Young Playwrights Film Festival~. It all clicked – he was an Actor. He was working on his Craft.`}
        {<br></br>}
      </motion.p>
      <motion.p
        className="hidden md:block text-[1.1rem] text-start font-[400]"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={imageVariants}
      >
        {<br></br>}
        {`Yes, Jacob Millman is an Actor. He uses “craft” as a noun. Never out of arrogance – he just finds the craft (👀) so fascinating. We’ve had to cut supporting sentences following that statement because we asked Jacob what made it so fascinating and he got too excited and got the zoomies and then he ran into a wall, so we are on our way to the ER, but we’ll circle back soon.`}
        {<br></br>}
      </motion.p>
      {<br></br>}
      <motion.p
        className="hidden md:block text-[1.1rem] text-start font-[400]"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={textVariants}
      >
        {`Colleagues and audiences alike consistently commend the intelligence, strength and authenticity that Jacob brings to his work. While he may not always take himself too seriously, he will always be focused on elevating the text and doing the story justice. As an artist, Jacob leads with generosity, prioritizing his collaborators and storytelling above glamour. From farce to family drama, from musical theater to mockumentary, Jacob’s work is elevated by his clear understanding of technique, allowing him to transcend genres and mediums.`}
      </motion.p>
      <motion.p
        className="hidden md:block text-[1.1rem] text-start font-[400]"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={imageVariants}
      >
        {<br></br>}
        {`At the end of the day, it’s midnight. And in conclusion, as hard as we try, a brief bio will not do Jacob Millman justice. Experience his work for yourself. Or even better, ask him about it – watch as he lights up and brings you into his world, one full of curiosity and hope and torment and resilience andddd he ran into a wall again.`}
        {<br></br>}
      </motion.p>
    </div>
  );
}
