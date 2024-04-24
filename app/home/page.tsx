"use client";

import Text from "@/components/Text";
import React, { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import colorGrade1 from "@/public/images/color-grade-1.png";
import Scene3D from "@/components/Scene";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
});

export default function Home() {
  const hero = useRef(null);

  return (
    <div ref={hero} data-scroll-container className="relative">
      <div className="h-[100vh] pt-[100px] z-[2]">
        <div className="max-w-[1440px] w-full mx-auto my-auto">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "40%" }}
            transition={{ duration: 0.5 }}
          >
            <div className="border-t border border-primary mb-10"></div>
          </motion.div>
          <Text
            weight="ralewayRegular"
            size="heading-1"
            className="!text-[85px]"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              Crafting Immersive Digital Journeys Through Innovative Design and
              Development.
            </motion.div>
          </Text>
        </div>
      </div>

      <div className="flex h-[100vh] absolute top-[400px] right-[20%] z-[2] rotate-12">
        <Scene />
      </div>

      <div className="!h-[100vh] w-full">sasas</div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <Image
          src={colorGrade1}
          alt=""
          className="absolute right-0 top-[150px] h-[1500px] w-auto z-[0]"
        />
      </motion.div>
    </div>
  );
}
