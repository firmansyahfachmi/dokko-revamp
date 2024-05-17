"use client";

import Text from "@/components/Text";
import React, { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import Image from "next/image";
import colorGrade1 from "@/public/images/color-grade-1.png";
import accentLeft from "@/public/images/accent-left.png";
import accentBottom from "@/public/images/accent-bottom.png";
import Scene3D from "@/components/Scene";
import dynamic from "next/dynamic";
import Projects from "@/components/Projects";
import styles from "./style.module.scss";
import Link from "next/link";
import icoArrowRight from "@/public/icons/arrow-right.png";

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

const services = [
  {
    img: "web.png",
    title: "Web Development",
    desc: "Create and maintain websites, ensuring they function correctly, are user-friendly, and deliver exceptional online experiences.",
  },
  {
    img: "smartphone.png",
    title: "Mobile Development",
    desc: "Involves designing, building, and optimizing applications for smartphones and tablets, catering to diverse platforms and user needs.",
  },
  {
    img: "ui.png",
    title: "UI/UX Design",
    desc: "Making user interfaces and experiences for websites and apps, ensuring usability, accessibility, and aesthetics.",
  },
  {
    img: "data.png",
    title: "Data Analysis",
    desc: "Involves collecting, processing, and interpreting data to uncover insights, trends, and patterns that inform decision-making and strategy.",
  },
];

export default function Home() {
  return (
    <div  className="relative overflow-hidden">
      <div className="h-[100vh] pt-[200px] z-[2]">
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
        <Text className="w-[45%]" size="body-2">
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

      <div className=" max-w-[1400px] w-full mx-auto mt-[300px]">
        <div className="flex">
          <div className="border-r border-primary-dark w-[40%] pt-10">
            <div className="flex items-center gap-10 ">
              <Text size="heading-4">What we do</Text>
              <Image src={icoArrowRight} height={30} alt="" />
            </div>
          </div>
          <div className="pt-10 w-[60%] pl-[150px] grid grid-cols-2 gap-x-[100px] gap-y-[50px]">
            {services.map((item, index) => {
              const { img, title, desc } = item;
              return (
                <div className="flex flex-col gap-4" key={index}>
                  <div className="h-[50px] w-[50px]">
                    <Image
                      src={`/icons/${img}`}
                      alt=""
                      width={50}
                      height={50}
                    />
                  </div>
                  <Text weight="medium" size="body-1">
                    {title}
                  </Text>
                  <Text size="body-2" align="justify">
                    {desc}
                  </Text>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Image
          src={accentLeft}
          alt=""
          className="absolute left-0 top-[2250px] h-[1200px] w-auto z-[0]"
        />

      <div className="min-h-[700px] max-w-[1400px] w-full mx-auto mt-[300px] z-[1]">
        <Text className="w-[300px] mb-10" variant="primary">
          Partners we&lsquo;ve connected with along our journey.
        </Text>
        <div className={`flex gap-4 ${styles.partners}`}>
          <Text size="heading-3" className={styles.item}>
            Yupiek Food
          </Text>
          <Text size="heading-3" className={styles.item}>
            GMS Farm
          </Text>
          {/* <Text size="heading-3" className={styles.item}>
            Cerebrofort
          </Text> */}
        </div>
        {/* <div className={`flex gap-4 ${styles.partners} mb-8`}>
          <Text size="heading-3" className={styles.item}>
            Oneproklin
          </Text>
          <Text size="heading-3" className={styles.item}>
            PPT Energy Singapore
          </Text>
        </div> */}

        <Link href={"/work"}>
          <Text size="caption" className="underline decoration-primary ">
            See more
          </Text>
        </Link>
      </div>

      <Image
          src={accentBottom}
          alt=""
          className="absolute right-0 bottom-[-900px] h-[1300px] w-auto z-[0]"
        />
    </div>
  );
}
