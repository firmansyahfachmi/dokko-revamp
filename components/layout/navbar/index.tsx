import Image from "next/image";
import * as React from "react";

import Logo from "@/public/images/logo.png";
import Iconav from "@/public/icons/ico-bar.png";
import { AnimatePresence } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SideBar from "../sidebar";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

 
  return (
    <>
      <div className="navbar sticky top-0 py-6 header-glass z-[100]">
        <div className="max-w-[1440px] w-full mx-auto">
          <div className="flex-1">
            <a className="">
              <Image src={Logo} alt="" height={30} />
            </a>
          </div>
          <div className="flex-none">
            <a
              className="cursor-pointer"
              
              onClick={() => {
                setIsActive(!isActive);
              }}
            >
              <Image src={Iconav} alt="" height={30} />
            </a>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">
        {isActive && <SideBar handleClose={() => setIsActive(!isActive)} />}
      </AnimatePresence>
    </>
  );
}
