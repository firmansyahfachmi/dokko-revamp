import React from "react";
import Image from "next/image";
import Text from "@/components/Text";
import gms from "@/public/images/gms.jpg";
import gms2 from "@/public/images/gms-2.jpeg";
import gms3 from "@/public/images/gms-3.jpeg";
import gmsweb from "@/public/images/gms-web.jpg";
import Link from "next/link";
import icoArrowRight from "@/public/icons/arrow-right.png";
import accentLeft from "@/public/images/accent-left.png";

export default function page() {
  return (
    <>
      <div className="h-[70vh] z-[2] relative">
        <Image src={gms} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="border-b border-light-grey">
        <div className="max-w-[1400px] w-full mx-auto my-auto  h-full pt-[90px] pb-[120px]">
          <Text
            className="w-[80%] leading-[130px] pb-[90px]"
            weight="ralewayRegular"
            size="heading-2"
          >
            GMS Farm Website
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
              <Text>Gudang Madu Sumatera</Text>
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
        <Text>
          Gudang Madu Sumatera (GMS) is an integrated sustainable beekeeping
          company built on the foundation of empowering forest communities in
          Indonesia. They produce a wide range of bee products such as pure raw
          honey, beeswax, raw propolis, bee pollen, and various other bee
          products. GMS provides top-quality products sourced from hives,
          created with honesty and integrity while maintaining a greater
          awareness and support for the environment.
        </Text>
      </div>
      <div className="flex border-y border-light-grey">
        <div className="w-5/12 h-[700px] border-r border-light-grey">
          <Image src={gmsweb} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="w-7/12 flex flex-col justify-center items-center">
          <div className="w-6/12">
            <Text variant="primary" size="caption" className="mb-4">
              Purpose
            </Text>
            <Text size="body-2">
            The webpage representing Gudang Madu Sumatera (GMS) plays a pivotal role in informing consumers about our dedication to quality ingredients and preservative-free bee products. By promoting transparency in sourcing, offering a diverse selection, and providing educational resources, it enables consumers to make well-informed decisions while also offering convenient online purchasing options.
            </Text>

            {/* <Text size="caption" className="mt-[100px]">
            The creation of a website page for Yupiek Food is essential to effectively communicate our commitment to quality and transparency. By showcasing our dedication to using only the finest ingredients and our rigorous production processes, we build trust with consumers.
            </Text> */}
          </div>
        </div>
      </div>
      <div className="flex z-[1]">
        <div className="h-auto flex-1">
          <Image src={gms2} alt="" className="h-full w-full object-contain" />
        </div>
        <div className="h-auto flex-1">
          <Image src={gms3} alt="" className="h-full w-full object-contain" />
        </div>
        {/* <div className="h-auto flex-1">
          <Image src={gms3} alt="" className="h-full w-full object-contain" />
        </div> */}
      </div>

      <div className="relative overflow-hidden h-fit">
        <Image
          src={accentLeft}
          alt=""
          className="absolute left-0 bottom-[-760px] h-[1200px] w-auto z-[0]"
        />
        <div className="max-w-[1400px] w-full mx-auto my-auto flex flex-col items-center justify-center  h-[250px] ">
          <div className="flex flex-col items-end gap-4 w-full">
            <Text size="caption" variant="primary">
              Next Project
            </Text>
            <Link href={"/work/yupiek"}>
              <div className="flex items-center gap-4">
                <Text size="heading-6">Yupiek Food </Text>
                <Image src={icoArrowRight} height={20} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
