"use client";

import Text from "@/components/Text";
import React, { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

export default function Home() {
  const hero = useRef(null);

  return (
    <div ref={hero} data-scroll-container>
      <div className="h-[150vh] pt-[170px] ">
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
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              Crafting Immersive Digital Journeys Through Innovative Design and
              Development.
            </motion.span>
          </Text>
        </div>
      </div>
    </div>
  );
}
