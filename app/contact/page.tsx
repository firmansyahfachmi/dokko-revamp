"use client";

import Image from "next/image";
import React, { useState } from "react";
import contactHero from "@/public/images/hero-contact.png";
import Text from "@/components/Text";
import accentLeft from "@/public/images/accent-left.png";

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (event) => {
    setIsSubmitted(true);
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0e6b075a-fddd-4d07-9a1c-b7ae10140bf5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thank you for your submission! We will respond to you shortly.");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="h-[60vh] xl:h-[100vh] z-[2] relative">
        <Image src={contactHero} alt="" className="h-full w-full" />
        <div className="max-w-[1400px] w-full mx-auto my-auto absolute top-0 left-0 bottom-0 right-0 h-full flex items-center">
          <Text
            className="!text-[32px] md:!text-[46px] lg:!text-[62px] xl:!text-[100px] lg:w-[80%] px-6 md:px-8 xl:px-0"
            weight="ralewayRegular"
          >
            Generate <span className="text-primary">meaningful</span> creations collectively.
          </Text>
        </div>
      </div>

      <Image src={accentLeft} alt="" className="absolute left-0 top-[750px] h-[1200px] w-auto z-[0]" />

      <div className="max-w-[1400px] w-full mx-auto my-auto py-[90px] lg:py-[190px] px-6 md:px-8 xl:px-0">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-7/12">
            <h2>
              Let's build <br />
              something <span className="text-primary">awesome!</span>
            </h2>
          </div>
          <div className="md:w-5/12 flex flex-col gap-6 mt-10 md:mt-0">
            {!isSubmitted ? (
              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="!border-b border-light-grey w-full !outline-none !shadow-none py-3 font-DMSans-Regular"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  className="!border-b border-light-grey w-full !outline-none !shadow-none py-3 font-DMSans-Regular"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  className="!border-b border-light-grey w-full !outline-none !shadow-none py-3 font-DMSans-Regular"
                  required
                />
                <textarea
                  name="message"
                  className="!border-b border-light-grey w-full !outline-none !shadow-none py-3 font-DMSans-Regular resize-none"
                  placeholder="Message"
                  rows={5}
                  required
                ></textarea>
                <button
                  type="submit"
                  className="px-8 py-3 border border-primary rounded-full w-fit mt-4 cursor-pointer ml-auto hover:bg-primary hover:text-white transition-all duration-200"
                >
                  Submit
                </button>
              </form>
            ) : (
              <p>{result}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
