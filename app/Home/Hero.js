"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className="lg:mx-[300px] md:mx-[10px] relative top-[50px] mb-[100px] py-6">
        <div className="flex md:flex-row xxs:flex-col gap-x-7 items-center">
          <div className="w-[1100px] h-[380px] flex flex-col items-center justify-center relative top-[18px] rounded-md">
            <Carousel
              autoPlay
              infiniteLoop
              autoFocus
              showArrows={false}
              showStatus={false}
              showThumbs={false}
            >
              <div className="relative">
                <Image
                  height={400}
                  width={400}
                  src="/images/main-banner-1.jpg"
                  className="h-[450px] rounded-md"
                  alt="main banner"
                />
                <div className="absolute top-[70px] left-[45px] text-start">
                  <h4 className="text-orange-700 p-2">
                    SUPERCHARGED FOR PROS.
                  </h4>
                  <h5 className="font-extrabold lg:text-[40px] md:text-[30px]">
                    iPhone 14 Pro.
                  </h5>
                  <p className="text-[15px] p-1">
                    From ksh199,999 or 41,000/mon.
                    <br /> for 24months
                  </p>
                  <Link
                    href=""
                    className="px-[20px] py-[13px] text-white bg-black rounded-3xl relative top-[30px] hover:bg-orange-700 transition-all"
                  >
                    BUY NOW
                  </Link>
                </div>
              </div>

              <div className="relative">
                <Image
                  width={400}
                  height={400}
                  src="/images/main-banner.jpg"
                  className="h-[450px] rounded-md"
                  alt="camera"
                />

                <div className="absolute top-[75px] left-[45px] text-start">
                  <h4 className="text-orange-700 p-2">
                    SUPERCHARGED FOR PROS.
                  </h4>
                  <h5 className="font-extrabold lg:text-[40px] md:text-[30px]">
                    Special Sale
                  </h5>
                  <p className="text-[15px] p-1">
                    From ksh1,999.00 or 40.00/mon.
                    <br /> for 24months
                  </p>
                  <Link
                    href=""
                    className="px-[20px] py-[13px] text-white bg-black rounded-3xl relative top-[30px] hover:bg-orange-700 transition-all"
                  >
                    BUY NOW
                  </Link>
                </div>
              </div>

              <div>
                <Image
                  height={400}
                  width={400}
                  src="/images/kil1.webp"
                  className="h-[450px] rounded-md"
                  alt="main banner"
                />
              </div>

              <div>
                <Image
                  height={400}
                  width={400}
                  src="/images/kil2.webp"
                  className="h-[450px] rounded-md"
                  alt="main banner"
                />
              </div>

              <div>
                <Image
                  height={400}
                  width={400}
                  src="/images/kil3.webp"
                  className="h-[450px] rounded-md"
                  alt="main banner"
                />
              </div>

              <div>
                <Image
                  height={400}
                  width={400}
                  src="/images/kil4.webp"
                  className="h-[450px] rounded-md"
                  alt="main banner"
                />
              </div>

              <div>
                <Image
                  height={400}
                  width={400}
                  src="/images/kil6.webp"
                  className="h-[450px] rounded-md"
                  alt="main banner"
                />
              </div>

              <div>
                <Image
                  height={400}
                  width={400}
                  src="/images/kil7.webp"
                  className="h-[450px] rounded-md"
                  alt="main banner"
                />
              </div>
            </Carousel>
          </div>

          <div className="relative top-[18px]">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <Image
                  height={150}
                  width={190}
                  src="/images/catbanner-01.jpg"
                  className="w-[420px] h-[200px] rounded-md"
                  alt="main banner"
                />
                <div className="absolute top-[50px] left-[20px]">
                  <h4 className="text-orange-700">Best Sake</h4>
                  <h5 className="lg:text-[22px] md:text-[16px] font-bold">
                    Xps Pro.
                  </h5>
                  <p className="lg:text-[14px] md:text-[12px]">
                    From ksh98,000 <br /> or ksh5,001/mon
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  height={150}
                  width={190}
                  src="/images/catbanner-02.jpg"
                  className="w-[420px] h-[200px] rounded-md"
                  alt="main banner"
                />
                <div className="absolute top-[50px] left-[20px]">
                  <h4 className="text-orange-700">NEW ARRIVAL</h4>
                  <h5 className="lg:text-[22px] md:text-[16px] font-bold">
                    Smart watch.
                  </h5>
                  <p className="lg:text-[14px] md:text-[12px]">
                    From ksh98,000 <br /> or ksh5,001/mon
                  </p>
                </div>
              </div>
              <div className="relative ">
                <Image
                  height={150}
                  width={190}
                  src="/images/catbanner-03.jpg"
                  className="w-[420px] h-[200px] rounded-md"
                  alt="main banner"
                />
                <div className="absolute top-[50px] left-[20px]">
                  <h4 className="text-orange-700">NEW ARRIVAL</h4>
                  <h5 className="lg:text-[22px] md:text-[16px] font-bold">
                    iPad S13+ Pro.
                  </h5>
                  <p className="lg:text-[14px] md:text-[12px]">
                    From ksh98,000 <br /> or ksh5,001/mon
                  </p>
                </div>
              </div>
              <div className="relative ">
                <Image
                  height={150}
                  width={190}
                  src="/images/catbanner-04.jpg"
                  className="w-[420px] h-[200px] rounded-md"
                  alt="main banner"
                />
                <div className="absolute top-[50px] left-[20px]">
                  <h4 className="text-orange-700">NEW ARRIVAL</h4>
                  <h5 className="lg:text-[22px] md:text-[16px] font-bold">
                    Sony.
                  </h5>
                  <p className="lg:text-[14px] md:text-[12px]">
                    From ksh98,000 <br /> or ksh5,001/mon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
