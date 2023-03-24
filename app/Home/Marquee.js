"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeC = () => {
  return (
    <div>
      <div className="lg:mx-[300px] md:mx-[10px] bg-white mb-[60px] py-4 rounded-md">
        <Marquee className="flex">
          <div className="mx-4 w-[150px]">
            <Image
              height={130}
              width={130}
              src="/images/brand-01.png"
              alt="brand"
            />
          </div>
          <div className="mx-4 w-[150px]">
            <Image
              height={130}
              width={130}
              src="/images/brand-02.png"
              alt="brand"
            />
          </div>
          <div className="mx-4 w-[150px]">
            <Image
              height={130}
              width={130}
              src="/images/brand-03.png"
              alt="brand"
            />
          </div>
          <div className="mx-4 w-[150px]">
            <Image
              height={130}
              width={130}
              src="/images/brand-04.png"
              alt="brand"
            />
          </div>
          <div className="mx-4 w-[150px]">
            <Image
              height={130}
              width={130}
              src="/images/brand-05.png"
              alt="brand"
            />
          </div>
          <div className="mx-4 w-[150px]">
            <Image
              height={130}
              width={130}
              src="/images/brand-06.png"
              alt="brand"
            />
          </div>
          <div className="mx-4 w-[150px]">
            <Image
              height={130}
              width={130}
              src="/images/brand-07.png"
              alt="brand"
            />
          </div>
          <div className="mx-4 w-[150px]">
            <Image
              height={130}
              width={130}
              src="/images/brand-08.png"
              alt="brand"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueeC;
