import Text from "@/components/Text";
import Link from "next/link";
import * as React from "react";

export default function Footer() {
  return (
    <div className="z-[1]">
      <div className="bg-white w-full border-t border-light-grey py-[60px] lg:py-[100px]">
        <div className="max-w-[1400px] w-full mx-auto flex flex-col lg:flex-row px-6 md:px-8 xl:px-0">
          <div className="lg:w-[80%] flex lg:flex-col justify-between mb-12 lg:mb-0">
            <Text size="heading-2" weight="ralewayRegular" className="w-[50%]">
              Let&apos;s work together
            </Text>
            <Link href={'/contact'}>
            <div className="px-5 py-3 border border-primary rounded-full w-fit lg:mt-4 cursor-pointer">
              <Text size="caption">Get in touch</Text>
            </div>
            </Link>
          </div>
          <div className="flex gap-[70px] lg:gap-[120px]">
          <div className="w-[15%] flex flex-col gap-4">
            <Text size="caption" variant="primary">
              Navigate
            </Text>
            <Link href={"/"}>
              <Text weight="medium">Home</Text>
            </Link>
            <Link href={"/about"}>
              <Text weight="medium">About</Text>
            </Link>
            <Link href={"/work"}>
              <Text weight="medium">Work</Text>
            </Link>
            <Link href={"/contact"}>
              <Text weight="medium">Contact</Text>
            </Link>
          </div>
          <div className="w-[10%] flex flex-col gap-4">
            <Text size="caption" variant="primary">
              Socials
            </Text>
            <Link href={"https://www.instagram.com/loominace/"}>
              <Text weight="medium">Instagram</Text>
            </Link>
            <Link href={"https://www.linkedin.com/company/loominace"}>
              <Text weight="medium">Linkedin</Text>
            </Link>
          </div>
          </div>
        </div>
      </div>
      <div className=" bg-primary-dark h-[60px] w-full flex px-6 xl:px-0">
        <div className="max-w-[1400px] w-full mx-auto my-auto">
          <Text size="caption" className="text-white">
            © Copyright 2024. All Rights Reserved. loominace.com
          </Text>
        </div>
      </div>
    </div>
  );
}
