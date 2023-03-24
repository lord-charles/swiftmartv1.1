"use client";
import React from "react";
import Image from "next/image";
import Slider1 from "./Slider";
import fruits from "../../public/images/foods2.png";
import soko from "../../public/images/soko.webp";
import headphone1 from "../../public/images/headphone.jpg";
import headphone2 from "../../public/images/earphones_b_3.webp";
import ps51 from "../../public/images/ps5 (3).jpg";
import ps52 from "../../public/images/ps5 (7).jpg";
import kitchen1 from "../../public/images/kitchen.png";
import kitchen2 from "../../public/images/kitchen2.png";
import book1 from "../../public/images/books2.webp";
import book2 from "../../public/images/books.png";
import fashion1 from "../../public/images/fashion.png";
import fashion2 from "../../public/images/fashion2.jpg";
import health1 from "../../public/images/health1.png";
import health2 from "../../public/images/health2.png";
import car1 from "../../public/images/car1.png";
import car2 from "../../public/images/car2.png";

const Category = () => {
  return (
    <div>
      <div className="grid grid-cols-4 lg:mx-[300px] md:mx-[10px] place-items-center bg-gray-100 rounded-md mb-[60px] cursor-pointer">
        <div className="relative  md:w-[228px]  lg:w-[325px] flex flex-col items-center justify-center bg-white mb-[1px]  py-2 hover:bg-gray-100 transition-all h-[198px]">
          <div className=" flex flex-col items-center justify-center relative top-[10px]">
            <div className="relative top-[-13px]">
              <h6>Food & Beverage</h6>
            </div>
            <div className="">
              <Slider1 image1={soko} image2={fruits} />
            </div>
          </div>
        </div>

        <div className="relative py-2  md:w-[228px] lg:w-[325px] flex flex-col items-center bg-white mb-[1px] hover:bg-gray-100 transition-all h-[198px]">
          <div className=" flex flex-col items-center justify-center">
            <div className="mb-[10px]">
              <h6>Electronics</h6>
            </div>
            <div className="">
              <Slider1 image1={headphone1} image2={headphone2} />
            </div>
          </div>
        </div>

        <div className="relative py-2  md:w-[228px] lg:w-[325px] flex flex-col items-center bg-white mb-[1px] hover:bg-gray-100 transition-all h-[198px]">
          <div className=" flex flex-col items-center justify-center">
            <div className="mb-[10px]">
              <h6>Beauty & Fashion</h6>
            </div>
            <div className="">
              <Slider1 image1={fashion1} image2={fashion2} />
            </div>
          </div>
        </div>

        <div className="relative py-2  md:w-[228px] lg:w-[325px] flex flex-col items-center bg-white mb-[1px] hover:bg-gray-100 transition-all h-[198px]">
          <div className=" flex flex-col items-center justify-center">
            <div className="mb-[10px]">
              <h6>Home & Kitchen</h6>
            </div>
            <div className="">
              <Slider1 image1={kitchen1} image2={kitchen2} />
            </div>
          </div>
        </div>

        <div className="relative py-2  md:w-[228px] lg:w-[325px] bg-white mb-[1px] hover:bg-gray-100 transition-all h-[198px]">
          <div className=" flex flex-col items-center justify-center">
            <div className="mb-[10px]">
              <h6>Games & Toys</h6>
            </div>
            <div className="">
              <Slider1 image1={ps51} image2={ps52} />
            </div>
          </div>
        </div>

        <div className="relative py-2  md:w-[228px] lg:w-[325px] flex flex-col items-center bg-white mb-[1px] hover:bg-gray-100 transition-all  h-[198px]">
          <div className=" flex flex-col items-center justify-center">
            <div className="mb-[10px]">
              <h6>Book & Media</h6>
            </div>
            <div className="">
              <Slider1 image1={book1} image2={book2} />
            </div>
          </div>
        </div>

        <div className="relative py-2  md:w-[228px] lg:w-[325px] flex flex-col items-center bg-white mb-[1px] hover:bg-gray-100 transition-all h-[198px]">
          <div className=" flex flex-col items-center justify-center">
            <div className="mb-[10px]">
              <h6>Health & Wellness</h6>
            </div>
            <div className="">
              <Slider1 image1={health1} image2={health2} />
            </div>
          </div>
        </div>

        <div className="relative py-2  md:w-[228px] lg:w-[325px] flex flex-col items-center bg-white mb-[1px] hover:bg-gray-100 transition-all h-[198px]">
          <div className=" flex flex-col items-center justify-center">
            <div className="mb-[10px]">
              <h6>Automotive</h6>
            </div>
            <div className="">
              <Slider1 image1={car1} image2={car2} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
