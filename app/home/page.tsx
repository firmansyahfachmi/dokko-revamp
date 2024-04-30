"use client";

import Text from "@/components/Text";
import React, { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import colorGrade1 from "@/public/images/color-grade-1.png";
import Scene3D from "@/components/Scene";
import dynamic from "next/dynamic";
import Projects from "@/components/Projects";
import styles from "./style.module.scss";

const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
});

const partners = [
  "Yupiek Food",
  "GMS Farm",
  "Oneproklin",
  "Cerberofort",
  "PPT Energy Singapore",
];

export default function Home() {
  const hero = useRef(null);
  return (
    <div ref={hero} data-scroll-container className="relative">
      <div className="h-[100vh] pt-[100px] z-[2]">
        <div className="max-w-[1400px] w-full mx-auto my-auto">
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

      <div className="flex h-[100vh] absolute top-[400px] right-[20%] z-[2] rotate-12">
        <Scene />
      </div>

      <div className="!h-[50vh] max-w-[1400px] w-full mx-auto my-auto">
        <Text className="w-[45%]" align="justify">
          Discover unrivaled excellence as we elevate your brand, exceeding
          expectations at every turn. With dedication and expertise, we ensure
          each interaction leaves a lasting impression, immersing customers in
          transformative experiences.
        </Text>
      </div>
      <div className=" max-w-[1400px] w-full mx-auto mt-[200px] !relative">
        <Text
          className="w-[50%]"
          align="justify"
          variant="primary"
          size="heading-5"
          weight="regular"
        >
          Featured works
        </Text>
        <Projects />
      </div>

      <div className="h-[100vh] max-w-[1400px] w-full mx-auto mt-[250px] !relative">
        <Text className="w-[300px] mb-10" variant="primary">
          Partners we&lsquo;ve connected with along our journey.
        </Text>
        <div className={`flex gap-4 ${styles.partners}`}>
          <Text size="heading-3" className={styles.item}>Yupiek Food</Text>
          <Text size="heading-3" className={styles.item}>GMS Farm</Text>
          <Text size="heading-3" className={styles.item}>Cerebrofort</Text>
        </div>
        <div className={`flex gap-4 ${styles.partners}`}>
          <Text size="heading-3" className={styles.item}>Oneproklin</Text>
          <Text size="heading-3" className={styles.item}>PPT Energy Singapore</Text>
        </div>
      </div>
    </div>
  );
}
