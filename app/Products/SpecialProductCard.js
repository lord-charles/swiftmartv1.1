"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ReactStars from "react-stars";
import prodcompare from "../../public/images/prodcompare.svg";
import wish from "../../public/images/wish.svg";
import wishlist from "../../public/images/wishlist.svg";
import addcart from "../../public/images/add-cart.svg";
import view from "../../public/images/view.svg";
import love1 from "../../public/images/love1.png";
import Countdown from "react-countdown-now";
import dynamic from "next/dynamic";
import LinearProgress from "@mui/material/LinearProgress";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SpecialProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [translateV, setTranslateV] = useState(0);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const [isSaleActive, setIsSaleActive] = useState(true);
  const endTime = new Date("2023-04-20T12:00:00Z"); // Replace with your own end date and time

  const handleComplete = () => {
    setIsSaleActive(false); // Disable the sale when the timer is up
  };
  const normalize = (value) => ((value - 3) * 100) / (1000 - 3);
  return (
    <div>
      <Link
        href={""}
        className="card relative overflow-hidden p-1 bg-white h-[380px] md:w-[440px] lg:w-[425px] flex gap-x-2"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        {/* part 1  */}

        <div className="relative overflow-hidden w-[50%]">
          <span className="">
            <Image
              src={product.images[0].image}
              width={250}
              height={250}
              className="object-contain transition duration-500 ease-in-out transform hover:scale-110 w-[180px] h-[210px] my-4"
              alt="image"
            />
          </span>
          {/* arrows */}
          {/* <span
            className="absolute left-[1px] bottom-[35px]"
            onClick={() => setTranslateV(translateV - 60)}
          >
            <Image
              src="/images/arrowL2.png"
              width={20}
              height={20}
              className=""
            />
          </span>
          <span
            className="absolute right-[50px] bottom-[35px]"
            onClick={() => setTranslateV(translateV + 60)}
          >
            <Image
              src="/images/arrowR2.png"
              width={20}
              height={20}
              className=""
            />
          </span> */}
          <div className="relative top-[60px] left-[20px] w-[120px] overflow-hidden">
            {" "}
            <div className={`flex space-x-0 w-[40rem] relative left-[10px]`}>
              <Carousel
                autoPlay
                infiniteLoop
                autoFocus
                itemsToShow
                dynamicWidth
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                className="flex "
              >
                {product.images.map((item, index) => {
                  return (
                    <div key={index} className="border w-[60px]">
                      <Image
                        src={item.image}
                        height={150}
                        width={150}
                        className="w-[50px] h-[50px] object-contain p-1 "
                        alt="image"
                      />
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
          <div
            className={`absolute top-[10px] right-3 transition-all`}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            {!isFavorite ? (
              <Image
                width={20}
                height={20}
                src={wish}
                alt="compare"
                className="relative left-[3`px]"
              />
            ) : (
              <Image
                width={25}
                height={29}
                src={love1}
                alt="love1"
                className="relative left-[5px]"
              />
            )}
          </div>{" "}
          <span className="absolute"></span>
          <div
            className={`absolute top-[45px] transition-all ${
              hovered ? "right-3" : "right-[-20px]"
            }
              `}
          >
            <div className="flex flex-col gap-3">
              <button className="border-0 bg-transparent">
                <Image
                  width={20}
                  height={20}
                  className="w-[15px]"
                  src={prodcompare}
                  alt="compare"
                />
              </button>
              <button className="border-0 bg-transparent">
                <Image
                  width={20}
                  height={20}
                  src={view}
                  alt="view"
                  className="w-[15px]"
                />
              </button>
              <button className="border-0 bg-transparent">
                <Image
                  width={20}
                  height={20}
                  src={addcart}
                  alt="addcart"
                  className="w-[15px]"
                />
              </button>
            </div>
          </div>
          <div className="absolute top-[10px] left-3 ">
            {product.prevPrice && product.prevPrice > 0 ? (
              <span className="bg-orange-200 p-[3.5px] rounded-full text-[10px] flex  justify-center items-center">
                <p className="mt-[-2px]">-</p>
                <p>{((product.prevPrice - product.price) * 0.01).toFixed(2)}</p>
                <p>%</p>
              </span>
            ) : null}
          </div>
        </div>

        {/* part2  */}
        <div className="flex flex-col gap-y-5 w-[50%] relative top-[20px]">
          <h2 className="text-[15px] font-serif text-orange-700">
            {product.name}
          </h2>

          <h2 className="font-semibold text-[15px]">{product.description}</h2>

          <ReactStars
            count={5}
            size={17}
            value={4}
            edit={false}
            activeColor="#ffd700"
          />
          {/* price  */}
          <div className="flex gap-x-2">
            <h2
              className={`${
                product.prevPrice && product.prevPrice > 0
                  ? "text-orange-700"
                  : ""
              }`}
            >
              Ksh {product.price}
            </h2>
            <h2 className="line-through">
              {product.prevPrice && product.prevPrice > 0
                ? `
                ksh
                  ${product.prevPrice}`
                : null}
            </h2>
          </div>

          {/* timer  */}
          <div className="text-[14px]">
            {isSaleActive ? (
              <Countdown
                date={endTime}
                daysInHours={true}
                onComplete={handleComplete}
                renderer={({ days, hours, minutes, seconds, completed }) => (
                  <div>
                    {completed ? (
                      <div>Time is up!</div>
                    ) : (
                      <div>
                        {days > 0 && <span>{days} Days, </span>}
                        <span className="px-2 py-1.5 text-center bg-red-400 rounded-full w-[50px] h-[50px] m-[5px]">
                          {hours}
                        </span>
                        :
                        {minutes < 10 ? (
                          `0${minutes}`
                        ) : (
                          <span className="px-2 py-1.5 bg-red-400 rounded-full w-[50px] h-[50px] text-center m-[5px]">
                            {minutes}
                          </span>
                        )}
                        :
                        {seconds < 10 ? (
                          `0${seconds}`
                        ) : (
                          <span className="px-2 py-1.5 bg-red-400 rounded-full w-[50px] h-[50px] text-center m-[5px]">
                            {seconds}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                )}
              />
            ) : (
              <div>Sale has ended!</div>
            )}
          </div>

          {/* products no  */}
          <div className="w-[87%]">
            <p className="mb-[3px] text-[13px] text-gray-400">
              Products: {product.countInStock}
            </p>
            <LinearProgress
              color="success"
              value={normalize(product.countInStock)}
              variant="determinate"
            />
          </div>

          <span
            className={` w-fit h-fit px-[10px] py-[6px] rounded-full hover:bg-orange-700 transition-all ${
              product.images.length > 2
                ? `text-white bg-orange-300`
                : `bg-black text-white`
            }`}
          >
            OPTIONS
          </span>
        </div>
      </Link>
    </div>
  );
};

export default dynamic(() => Promise.resolve(SpecialProductCard), {
  ssr: false,
});
