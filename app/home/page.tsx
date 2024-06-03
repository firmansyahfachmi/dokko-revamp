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
  "PPT Energy Trading Singapore",
  "Sinarmas Mining",
  "Kalbe",
  "GMS Farm",
  "Yupiek Food",
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
    <div className="relative overflow-hidden">
      <div className="h-[550px] md:h-[600px] lg:h-[700px] xl:h-[100vh] pt-[150px] xl:pt-[200px] z-[2] px-6 md:px-8 xl:px-0">
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
            className="!text-[32px] md:!text-[46px] lg:!text-[62px] xl:!text-[85px]"
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.8 }}
          >
            <Text className="w-[80%] md:w-[60%] xl:w-[40%] mt-16" size="body-2">
              Discover unrivaled excellence as we elevate your brand, exceeding
              expectations at every turn.
            </Text>
          </motion.div>
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
          className="absolute right-[-20px] top-[350px] md:top-[200px] xl:top-[150px] h-[500px] md:h-[700px] xl:h-[1500px] w-auto z-[0]"
        />
      </motion.div>

      <div className="flex h-[70vh] absolute top-[380px] md:top-[250px] lg:top-[350px] xl:top-[450px] right-[-260px] md:right-[-150px] lg:right-[-10%] xl:right-[12%] z-[2] rotate-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 2.1 }}
        >
          <Scene />
        </motion.div>
      </div>

      {/* <div className="h-fit xl:!h-[25vh] max-w-[1400px] w-full mx-auto my-auto  px-6 md:px-8 xl:px-0">
        
      </div> */}
      <div className=" max-w-[1400px] w-full mx-auto mt-[200px] md:mt-[130px] lg:mt-[200px] !relative  px-6 md:px-8 xl:px-0">
        <Text
          className="xl:w-[50%]"
          align="justify"
          variant="primary"
          size="heading-5"
          weight="regular"
        >
          Featured works
        </Text>
        <Projects />
      </div>

      <div className=" max-w-[1400px] w-full mx-auto mt-[100px] xl:mt-[300px] px-6 md:px-8 xl:px-0 z-[2]">
        <div className="flex flex-col xl:flex-row">
          <div className="xl:border-r border-primary-dark xl:w-[40%] pt-10">
            <div className="flex items-center gap-10 ">
              <Text size="heading-4">What we do</Text>
              <Image
                src={icoArrowRight}
                height={30}
                alt=""
                className="h-[20px] w-[20px] xl:h-[30px] xl:w-[30px]"
              />
            </div>
          </div>
          <div className="pt-10 xl:w-[60%] xl:pl-[150px] grid md:grid-cols-2 gap-x-[100px] gap-y-[50px]">
            {services.map((item, index) => {
              const { img, title, desc } = item;
              return (
                <div className="flex flex-col gap-4" key={index}>
                  <div className="h-[30px] lg:h-[50px] w-[30px] lg:w-[50px]">
                    <Image
                      src={`/icons/${img}`}
                      alt=""
                      width={50}
                      height={50}
                      className="object-contain"
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
        className="absolute left-0 top-[1100px] md:top-[1100px] xl:top-[2000px] h-[350px] xl:h-[1000px] w-auto z-[0]"
      />

      <div className="min-h-[550px] xl:min-h-[600px] max-w-[1400px] w-full mx-auto mt-[180px] xl:mt-[300px] z-[2] px-6 md:px-8 xl:px-0">
        <Text className="w-[300px] mb-10" variant="primary">
          Partners we&lsquo;ve connected with along our journey.
        </Text>
        <div className="hidden md:block">
          <div className={`flex gap-4 ${styles.partners}`}>
            <Text size="heading-5" className={styles.item}>
              PPT Energy Singapore
            </Text>
            <Text size="heading-5" className={styles.item}>
              Sinarmas Mining
            </Text>
            <Text size="heading-5" className={styles.item}>
              Kalbe
            </Text>
          </div>
          <div className={`flex gap-4 ${styles.partners} mb-8`}>
            
            <Text size="heading-5" className={styles.item}>
              GMS Farm
            </Text>
            <Text size="heading-5" className={styles.item}>
              Yupiek Food
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-3 md:hidden">
          {partners.map((partner, index) => 
          <Text size="heading-6" className={index != partners.length - 1? `border-b border-primary pb-3` : ''} key={index}>
            {partner}
          </Text>
          )}
        </div>

        <Link href={"/work"}>
          <Text size="caption" className="underline decoration-primary mt-8">
            See more
          </Text>
        </Link>
      </div>

      <Image
        src={accentBottom}
        alt=""
        className="absolute right-0 bottom-[-50px] xl:bottom-[-400px] h-[200px] xl:h-[800px] w-auto z-[0]"
      />
    </div>
  );
}
