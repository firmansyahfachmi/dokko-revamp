import React from "react";
import Image from "next/image";
import Text from "@/components/Text";
import yupiek from "@/public/images/yupiek.jpg";

export default function page() {
  return (
    <>
      <div className="h-[70vh] z-[2] relative">
        <Image src={yupiek} alt="" className="h-full w-full object-cover" />
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
            <div className="w-4/12 flex flex-col gap-2">
              <Text variant="primary" size="body-2">
                Client
              </Text>
              <Text>Yupiek Food</Text>
            </div>
            <div className="w-6/12 flex flex-col gap-2">
              <Text variant="primary" size="body-2">
                Services
              </Text>
              <Text>Web Development</Text>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] w-full mx-auto my-auto flex items-center  h-[700px] ">
        <Text align="justify">
          YupiekFood memberi nilai tambah bahan yang disediakan alam, supaya
          bisa dinikmati lebih banyak orang dalam jangka waktu yang lebih lama.
          Produk Yupiek Food dibuat dari Bahan Berkualitas, Tanpa Pengawet.
          Bahan baku pilihan dan proses produksi yang higienis adalah jaminan
          mutu kami.
        </Text>
      </div>
    </>
  );
}
