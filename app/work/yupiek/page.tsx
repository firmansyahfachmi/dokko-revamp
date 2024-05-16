import React from "react";
import Image from "next/image";
import Text from "@/components/Text";
import yupiek from "@/public/images/yupiek.jpg";
import yupiek2 from "@/public/images/yupiek2.jpg";
import yupiek3 from "@/public/images/yupiek3.jpg";
import yupiek4 from "@/public/images/yupiek4.jpg";
import yupiekweb from "@/public/images/yupiek-web.jpg";

export default function page() {
  return (
    <>
      <div className="h-[70vh] z-[2] relative">
        <Image src={yupiek2} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="border-b border-light-grey">
        <div className="max-w-[1400px] w-full mx-auto my-auto  h-full pt-[90px] pb-[120px]">
          <Text
            className="w-[80%] leading-[130px] pb-[90px]"
            weight="ralewayRegular"
            size="heading-2"
          >
            Yupiek Food Website
          </Text>

          <div className="flex">
            <div className="w-4/12 flex flex-col gap-2">
              <Text variant="primary" size="body-2">
                Industry
              </Text>
              <Text>Food and Beverage</Text>
            </div>
            <div className="w-6/12 flex flex-col gap-2">
              <Text variant="primary" size="body-2">
                Client
              </Text>
              <Text>Yupiek Food</Text>
            </div>
            <div className="w-4/12 flex flex-col gap-2">
              <Text variant="primary" size="body-2">
                Services
              </Text>
              <Text>Web Development</Text>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] w-full mx-auto my-auto flex items-center  h-[600px] ">
        <Text >
          YupiekFood adds value to the ingredients that nature provides, so that
          can be enjoyed by more people for a longer period of time. Yupiek Food
          products are made from quality ingredients, without preservatives.
          Selected raw materials and hygienic production processes are our
          guarantee of quality.
        </Text>
      </div>
      <div className="flex border-y border-light-grey">
        <div className="w-5/12 h-[700px] border-r border-light-grey">
          <Image
            src={yupiekweb}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-7/12 flex flex-col justify-center items-center">
          <div className="w-6/12">
            <Text variant="primary" size="caption" className="mb-4">
              Purpose
            </Text>
            <Text size="body-2">
            The website page for Yupiek Food serves as a vital platform for informing consumers about our dedication to quality ingredients and preservative-free products. Through transparent sourcing, diverse offerings, and educational resources, it facilitates informed choices while offering convenient online shopping.
            </Text>

            {/* <Text size="caption" className="mt-[100px]">
            The creation of a website page for Yupiek Food is essential to effectively communicate our commitment to quality and transparency. By showcasing our dedication to using only the finest ingredients and our rigorous production processes, we build trust with consumers.
            </Text> */}
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="h-auto flex-1">
          <Image src={yupiek} alt="" className="h-full w-full object-contain" />
        </div>
        <div className="h-auto flex-1">
          <Image
            src={yupiek3}
            alt=""
            className="h-full w-full object-contain"
          />
        </div>
        <div className="h-auto flex-1">
          <Image
            src={yupiek4}
            alt=""
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </>
  );
}
