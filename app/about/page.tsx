import Image from "next/image";
import React from "react";
import aboutHero from "@/public/images/hero-about.png";
import Text from "@/components/Text";

const methods = [
  {
    title: "Innovating Tech",
    desc: "Our group helps smart minds improve software and IT, mixing fresh ideas with technical skills to create something new.",
  },
  {
    title: "Digital Revolution.",
    desc: "Start a digital revolution in software and IT, making things much better and changing the way we do things.",
  },
  {
    title: "IT Collaboration.",
    desc: "We bring together specialist to transform how software and IT function, breaking norms and driving significant changes.",
  },
  {
    title: "Tech Dynamics.",
    desc: "We assemble minds to redefine how technology operates, breaking barriers and ushering in transformative shifts.",
  },
];

export default function About() {
  return (
    <div className="relative overflow-hidden">
      <div className="h-[100vh] z-[2] relative">
        <Image src={aboutHero} alt="" className="h-full w-full" />
        <div className="max-w-[1400px] w-full mx-auto my-auto absolute top-0 left-0 bottom-0 right-0 h-full flex items-center">
          <Text
            className="!text-[100px] w-[70%] leading-[130px]"
            weight="ralewayRegular"
          >
            Transforming ideas into{" "}
            <span className="text-primary">digital magic.</span>
          </Text>
        </div>
      </div>
      <div className="max-w-[1400px] w-full mx-auto my-auto py-[190px]">
        <div className="flex">
          <div className="w-5/12">
            <Text size="heading-5"> our story</Text>
          </div>
          <div className="w-7/12">
            <Text  size="body-2">
              In the world of virtual agencies, we combine our skills to come up
              with clever solutions. Dokko is unique because we carefully create
              digital experiences that spark inspiration, empowerment, and
              change. We’re leaders in software, great at making big ideas real.
              Let’s team up to create a future where technology’s endless
              possibilities make amazing things happen.
            </Text>
          </div>
        </div>
        <div className="flex mt-[200px]">
          <div className="w-5/12">
            <Text size="heading-5"> our method</Text>
          </div>
          <div className="w-7/12">
            {methods.map((item, index) => (
              <div
                className={` collapse collapse-arrow mb-4 ${
                  index != 3 ? "border-b border-light-grey" : ""
                } rounded-none`}
                key={index}
              >
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title !px-0">
                  <Text size="body-1" variant="primary">
                    {item.title}
                  </Text>
                </div>
                <div className="collapse-content mb-3 !px-0">
                  <Text size="body-2">{item.desc}</Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
