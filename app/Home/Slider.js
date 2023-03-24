"use client";
import Image from "next/legacy/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Slider1 = ({ image1, image2 }) => {
  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        autoFocus
        dynamicWidth
        showArrows={false}
        showStatus={false}
        showThumbs={false}
      >
        <div
          className=" w-[110px]
        relative top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]
        "
        >
          <Image
            width={150}
            height={150}
            src={image1}
            className="w-[130px] h-[130px] "
            alt="camera"
          />
        </div>
        <div className="w-[110px] relative top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
          <Image
            width={130}
            height={130}
            src={image2}
            className="w-[130px] h-[130px] "
            alt="camera"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider1;
