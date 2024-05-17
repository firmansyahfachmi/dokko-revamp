import Image from "next/image";
import React from "react";
import aboutHero from "@/public/images/hero-about.png";
import Text from "@/components/Text";

const methods = [
  {
    title: "Tech Dynamics",
    desc: "We assemble minds to redefine how technology operates, breaking barriers and ushering in transformative shifts.",
  },
  {
    title: "Continuous Innovation",
    desc: "Through research and development initiatives, we explore emerging technologies and trends to deliver cutting-edge solutions that drive business success.",
  },

  {
    title: "Digital Revolution",
    desc: "Start a digital revolution in software and IT, making things much better and changing the way we do things.",
  },
  {
    title: "Collaborative Partnership",
    desc: "we're your partner in progress. We work closely with businesses to understand their unique needs and objectives, co-creating tailored solutions that align with their vision and goals.",
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
            <Text size="body-2">
              In the industry of virtual agencies, we stand out for our attention to detail in creating digital experiences that spark inspiration, empowerment and change. As frontrunners in the software space, we thrive on turning big visions into concrete realities. Let&apos;s collaborate to shape a future where the limitless potential of technology catalyzes incredible results for businesses.
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
