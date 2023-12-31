"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsArrowRight, BsFacebook, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { TypeAnimation } from "react-type-animation";

export default function Intro() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const animations = [
    { text: "Designer", color: "#0766AD" },
    {
      text: "Digital Marketer",
      color: "#F24A72",
    },
  ];

  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { ref } = useSectionInView("Home", 0.5);
  const [animationIndex, setAnimationIndex] = useState(0);
  const [currentColor, setCurrentColor] = useState<string>(animations[0].color);
  const currentAnimation = animations[animationIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationIndex((prevIndex) => (prevIndex + 1) % animations.length);
      setCurrentColor((prevColor) => {
        const nextIndex =
          (animations.findIndex((a) => a.text === currentAnimation.text) + 1) %
          animations.length;
        return animations[nextIndex].color;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [currentAnimation.text, animations]);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb:0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <motion.div
          className="relative z-0"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
        >
          <Image
            src="/kvan_ava.jpg"
            alt="portrait"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-24 w-24 rounded-full object-cover
            border-[0.35rem] border-white shadow-xl"
          />
          <motion.span
            className="absolute bottom-0 right-0 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </motion.div>
      </div>
      <div className="flex gap-2 items-center justify-center">
        <span className="text-[3rem] inline-block my-20 font-bold ">I'm</span>
        <TypeAnimation
          key={animationIndex}
          sequence={[currentAnimation.text, 3000]}
          wrapper="h2"
          speed={5}
          className={`text-[3rem] inline-block my-20 font-bold`}
          repeat={Infinity}
          style={{
            color: currentColor,
          }}
        />
      </div>
      <motion.h1
        className="relative z-0 mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Tống Khánh Vân.</span> I'm a{" "}
        <span className="font-bold">Digital Marketer</span> with{" "}
        <span className="font-bold">2 years</span> of experience. I enjoy
        promoting{" "}
        <span className="italic">
          products & services through digital channels
        </span>
        . My focus is{" "}
        <span className="underline">
          data analytics, content marketing, SEO/SEM
        </span>
        .
      </motion.h1>
      <motion.div
        className="flex flex-col
       sm:flex-row items-center justify-center 
       gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 
          py-3 flex items-center gap-2 rounded-full outline-none
          focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
          transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="bg-white px-7 
          py-3 flex items-center gap-2 rounded-full 
          group outline-none
          focus:scale-110 hover:scale-110 active:scale-105
          transition cursor-pointer blackBorder dark:bg-white/10"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />{" "}
        </a>
        <a
          className="bg-white px-7 
          py-3 flex items-center gap-2 rounded-full
          focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105
          transition cursor-pointer border
          border-black/10 dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white px-7 
          py-3 flex items-center gap-2 rounded-full
          focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105
          transition cursor-pointer border
          border-black/10 dark:bg-white/10 dark:text-white/60"
          href="https://facebook.com"
          target="_blank"
        >
          <BsFacebook />
        </a>
      </motion.div>
    </section>
  );
}
