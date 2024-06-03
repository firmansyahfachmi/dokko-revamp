import Image from "next/image";
import React from "react";
import contactHero from "@/public/images/hero-contact.png";
import Text from "@/components/Text";
import accentLeft from "@/public/images/accent-left.png";
import Link from "next/link";

const projects = [
  {
    name: "PPT Energy Trading Singapore",
    img: "ppt3.png",
    category: "Energy",
    link: "/work/ppt",
  },
  {
    name: "Mobile Hauling System",
    img: "bib.jpg",
    category: "Energy",
    link: "/work/ppt",
  },
  {
    name: "Cerebrofort Talent Search",
    img: "kalbe2.png",
    category: "Farmacy",
    link: "/work/kalbe",
  },
  {
    name: "GMS Farm",
    img: "gms.jpg",
    category: "FnB",
    link: "/work/gms",
  },
  {
    name: "Yupiek Food",
    img: "yupiek.jpg",
    category: "FnB",
    link: "/work/yupiek",
  },
];

export default function Work() {
  return (
    <div className="relative overflow-hidden">
      <div className="h-[400px] lg:h-[600px] relative">
        <div className="max-w-[1400px] w-full mx-auto my-auto absolute top-0 left-0 bottom-0 right-0 h-full flex items-end border-b border-light-grey pb-8 px-6 md:px-8 xl:px-0">
          <Text
            size="heading-1"
            className="w-[80%] leading-[130px]"
            weight="ralewayRegular"
          >
            Work
          </Text>
        </div>
      </div>

      <Image
        src={accentLeft}
        alt=""
        className="absolute left-0 top-[-150px] h-[700px] lg:h-[1200px] w-auto z-[0]"
      />
      <div className="max-w-[1400px] w-full mx-auto my-auto py-[90px] mb-[50px] lg:mb-[200px] px-6 md:px-8 xl:px-0">
        <div className="lg:w-10/12 grid md:grid-cols-3 gap-x-8 lg:gap-x-16 gap-y-16 lg:gap-y-[150px]">
          {projects.map((item, index) => (
            <Link href={item.link} key={index}>
              <div className="w-full h-[300px] lg:h-[500px] shadow-lg">
                <Image
                  src={`/images/${item.img}`}
                  alt=""
                  className="!w-full !h-full object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="pl-5 mt-6">
                <Text size="body-2">{item.name}</Text>
                <Text variant="primary" size="caption">{item.category}</Text>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
