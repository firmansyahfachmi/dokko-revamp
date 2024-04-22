import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "./animation";
import Link from "./Link";
import Curve from "./Curve";
import Footer from "./Footer";

import icoClose from '@/public/icons/ic-close.png'
import Image from "next/image";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function SideBar({handleClose}: any) {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.glass} onClick={() => handleClose()}></div>
      <div className={styles.body}>
        <div className="w-[74px] h-[74px] rounded-full border border-primary flex cursor-pointer absolute top-10 right-[100px]" onClick={() => handleClose()}>
            <Image src={icoClose} alt=""  className="mx-auto my-auto w-[30px] h-[30px]"/>
        </div>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={styles.nav}
        >
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            );
          })}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
