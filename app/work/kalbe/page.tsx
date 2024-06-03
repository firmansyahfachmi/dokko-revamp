import React from "react";
import Image from "next/image";
import Text from "@/components/Text";
import kalbe from "@/public/images/kalbe.png";
import kalbe1 from "@/public/images/kalbe1.png";
import kalbe2 from "@/public/images/kalbe2.png";
import kalbe3 from "@/public/images/kalbe3.webp";
import kalbeweb from "@/public/images/kalbe-web.png";
import Link from "next/link";
import icoArrowRight from "@/public/icons/arrow-right.png";
import accentLeft from "@/public/images/accent-left.png";

export default function page() {
  return (
    <>
      <div className="h-[50vh] lg:h-[70vh] z-[2] relative">
        <Image src={kalbe2} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="border-b border-light-grey">
        <div className="max-w-[1400px] w-full mx-auto my-auto  h-full pt-[50px] lg:pt-[90px] pb-[70px] lg:pb-[120px] px-6 md:px-8 xl:px-0">
          <Text
            className="w-[80%] pb-[90px]"
            weight="ralewayRegular"
            size="heading-2"
          >
            Cerebrofot Talent Search
          </Text>

          <div className="flex">
            <div className="w-4/12 flex flex-col gap-2">
              <Text variant="primary" size="caption">
                Industry
              </Text>
              <Text size="body-2">Farmacy</Text>
            </div>
            <div className="w-6/12 flex flex-col gap-2">
              <Text variant="primary" size="caption">
                Client
              </Text>
              <Text size="body-2">Kalbe</Text>
            </div>
            <div className="w-4/12 flex flex-col gap-2">
              <Text variant="primary" size="caption">
                Services
              </Text>
              <Text size="body-2">Web Development</Text>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] w-full mx-auto my-auto flex items-center  min-h-[300px] py-10 lg:min-h-[600px] px-6 md:px-8 xl:px-0">
        <Text>
        Cerebrofort is a multivitamin brand that has been around since 1972 and is available in two variants, namely syrup containing fish oil to maintain health and jelly candy. It is a multivitamin supplement to help children&apos;s growth and development, help the body&apos;s metabolism, and maintain health.
        </Text>
      </div>
      <div className="flex flex-col md:flex-row border-y border-light-grey">
        <div className="md:w-5/12 lg:h-[700px] border-r border-light-grey">
          <Image src={kalbeweb} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="md:w-7/12 flex flex-col justify-center items-center py-8 lg:pb-0">
          <div className="w-10/12 lg:w-6/12">
            <Text variant="primary" size="caption" className="mb-4">
              Purpose
            </Text>
            <Text size="body-2">
            The talent selection through videos uploaded by parents is a crucial stage in the assessment process on the Cerebrofort Talent Search platform. Through these video submissions, we have the opportunity to discover hidden talents in children, while also allowing parents to showcase their child&apos;s uniqueness and potential.
            </Text>

            {/* <Text size="caption" className="mt-[100px]">
            The creation of a website page for Yupiek Food is essential to effectively communicate our commitment to quality and transparency. By showcasing our dedication to using only the finest ingredients and our rigorous production processes, we build trust with consumers.
            </Text> */}
          </div>
        </div>
      </div>
      <div className="flex z-[1]">
        <div className="h-auto flex-1">
          <Image src={kalbe1} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="h-auto flex-1">
          <Image src={kalbe} alt="" className="h-full w-full object-cover" />
        </div>
        {/* <div className="h-auto flex-1">
          <Image src={kalbe3} alt="" className="h-full w-full object-contain" />
        </div> */}
      </div>

      <div className="relative overflow-hidden h-fit">
        <Image
          src={accentLeft}
          alt=""
          className="absolute left-0 bottom-[-760px] h-[1200px] w-auto z-[0] hidden md:block"
        />
        <div className="max-w-[1400px] w-full mx-auto my-auto flex flex-col items-center justify-center h-[150px]  lg:h-[250px] px-6 md:px-8 xl:px-0">
          <div className="flex flex-col items-end gap-4 w-full">
            <Text size="caption" variant="primary">
              Next Project
            </Text>
            <Link href={"/work/gms"}>
              <div className="flex items-center gap-4">
                <Text size="heading-6">GMS Farm </Text>
                <Image src={icoArrowRight} height={20} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
