import Image from "next/image";
import React from "react";
import contactHero from "@/public/images/hero-contact.png";
import Text from "@/components/Text";
import accentLeft from "@/public/images/accent-left.png";
import Link from "next/link";

const projects = [
  {
    name: "Yupiek Food",
    img: "yupiek.jpg",
    category: "FnB",
    link: "/work/yupiek",
  },
  {
    name: "GMS Farm",
    img: "gms.jpg",
    category: "FnB",
    link: "/work/gms",
  },
];

export default function Work() {
  return (
    <div className="relative overflow-hidden">
      <div className="h-[600px] relative">
        <div className="max-w-[1400px] w-full mx-auto my-auto absolute top-0 left-0 bottom-0 right-0 h-full flex items-end border-b border-light-grey pb-8">
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
        className="absolute left-0 top-[-150px] h-[1200px] w-auto z-[0]"
      />
      <div className="max-w-[1400px] w-full mx-auto my-auto py-[90px] mb-[200px]">
        <div className="w-10/12 grid grid-cols-2 gap-x-16 gap-y-[150px]">
          {projects.map((item, index) => (
            <Link href={item.link} key={index}>
              <div className="w-full h-[700px] shadow-lg">
                <Image
                  src={`/images/${item.img}`}
                  alt=""
                  className="!w-full !h-full object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
              <div className="pl-5 mt-6">
                <Text size="heading-6">{item.name}</Text>
                <Text variant="primary" size="body-2">{item.category}</Text>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}