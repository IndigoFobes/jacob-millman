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
    <div className="w-9/12 mx-auto pt-16 md:pt-48 mb-20 md:mb-32">
      <h1 className="title pb-10 text-center md:text-start">About me</h1>
      {/* mobile */}
      <div className="md:hidden flex flex-col justify-center">
        <motion.div
          className="h-[20rem] w-[20rem] about-image place-self-center"
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={imageVariants}
        ></motion.div>
        <motion.p
          className="text-[.9rem] text-start font-[400] mt-10"
          initial="hide"
          whileInView="show"
          viewport={{ once: true }}
          variants={textVariants}
        >
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of souls like mine. I am so happy, my dear friend, so
          absorbed in the exquisite sense of mere tranquil existence, that I
          neglect my talents. I should be incapable of drawing a single stroke
          at the present moment; and yet I feel that I never was a greater
          artist than now. When, while the lovely valley teems with vapour
          around me, and the meridian sun strikes the upper surface of the
          impenetrable foliage of my trees, and but a few stray gleams steal
          into the inner sanctuary, I throw myself down among the tall grass by
          the trickling stream; and, as I lie close to the earth, a thousand
          unknown plants are noticed by me: when I hear the buzz of the little
          world among the stalks, and grow familiar with the countless
          indescribable forms of the insects and flies, then I feel the presence
          of the Almighty, who formed us in his own image, and the breath. A
          wonderful serenity has taken possession of my entire soul, like these
          sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of souls like mine. I am so happy, my dear friend, so
          absorbed in the exquisite sense of mere tranquil existence, that I
          neglect my talents. I should be incapable of drawing a single stroke
          at the present moment; and yet I feel that I never was a greater
          artist than now. When, while the lovely valley teems with vapour
          around me, and the meridian sun strikes the upper surface of the
          impenetrable foliage of my trees, and but a few stray gleams steal
          into the inner sanctuary, I throw myself down among the tall grass by
          the trickling stream; and, as I lie close to the earth, a thousand
          unknown plants are noticed by me: when I hear the buzz of the little
          world among the stalks, and grow familiar with the countless
          indescribable forms of the insects and flies, then I feel the presence
          of the Almighty, who formed us in his own image, and the breath
        </motion.p>
      </div>
      <motion.div
        className="md:relative md:float-right md:h-[22.4rem] md:w-[19.2rem] lg:h-[28rem] lg:w-[24rem] xl:h-[35rem] xl:w-[30rem] about-image ml-6 mb-4"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={imageVariants}
      >
        {/* <Image
          src="/Jacob_hs_2.jpg"
          alt="Male placeholder"
          fill={true}
          className="mx-auto object-cover md:pl-16 pb-10 bg-top"
        /> */}
      </motion.div>
      <motion.p
        className="hidden md:block text-[1.1rem] text-start font-[400]"
        initial="hide"
        whileInView="show"
        viewport={{ once: true }}
        variants={textVariants}
      >
        A wonderful serenity has taken possession of my entire soul, like these
        sweet mornings of spring which I enjoy with my whole heart. I am alone,
        and feel the charm of existence in this spot, which was created for the
        bliss of souls like mine. I am so happy, my dear friend, so absorbed in
        the exquisite sense of mere tranquil existence, that I neglect my
        talents. I should be incapable of drawing a single stroke at the present
        moment; and yet I feel that I never was a greater artist than now. When,
        while the lovely valley teems with vapour around me, and the meridian
        sun strikes the upper surface of the impenetrable foliage of my trees,
        and but a few stray gleams steal into the inner sanctuary, I throw
        myself down among the tall grass by the trickling stream; and, as I lie
        close to the earth, a thousand unknown plants are noticed by me: when I
        hear the buzz of the little world among the stalks, and grow familiar
        with the countless indescribable forms of the insects and flies, then I
        feel the presence of the Almighty, who formed us in his own image, and
        the breath. A wonderful serenity has taken possession of my entire soul,
        like these sweet mornings of spring which I enjoy with my whole heart. I
        am alone, and feel the charm of existence in this spot, which was
        created for the bliss of souls like mine. I am so happy, my dear friend,
        so absorbed in the exquisite sense of mere tranquil existence, that I
        neglect my talents. I should be incapable of drawing a single stroke at
        the present moment; and yet I feel that I never was a greater artist
        than now. When, while the lovely valley teems with vapour around me, and
        the meridian sun strikes the upper surface of the impenetrable foliage
        of my trees, and but a few stray gleams steal into the inner sanctuary,
        I throw myself down among the tall grass by the trickling stream; and,
        as I lie close to the earth, a thousand unknown plants are noticed by
        me: when I hear the buzz of the little world among the stalks, and grow
        familiar with the countless indescribable forms of the insects and
        flies, then I feel the presence of the Almighty, who formed us in his
        own image, and the breath
      </motion.p>
    </div>
  );
}
