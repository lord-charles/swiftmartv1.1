"use client";
import React, { useCallback, useEffect, useState } from "react";
import Hero from "./Hero";
import Category from "./Category";
import FeaturedProducts from "../Products/FeaturedProducts";
import SpecialProducts from "../Products/SpecialProducts";
import PopolarProducts from "../Products/PopolarProducts";
import Services from "./Services";
import Blogs from "../Products/Blogs";
import MarqueeC from "./Marquee";
import arrowleft from "../../public/images/arrowleft.png";
import Image from "next/image";
import axios from "axios";
import { base_url } from "@/utils/baseUrl";
import config from "@/utils/axiosconfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Backdrop from "@mui/material/Backdrop";
import { useRouter } from "next/navigation";
import useStore2 from "@/utils/useStore2";

const token =
  typeof window !== "undefined" && localStorage.getItem("useDetails")
    ? JSON.parse(localStorage.getItem("useDetails"))
    : null;

const Home = () => {
  const { addDetails2 } = useStore2();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = React.useState(10);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState("");
  const [isBlocked, setIsBlocked] = useState(false);
  const [mobile, setMobile] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  // const verifyToken = async (token) => {
  //   try {
  //     const api = axios.create({
  //       baseURL: base_url,
  //       headers: config(token).headers,
  //     });

  //     const myPromise = new Promise(async (resolve, reject) => {
  //       try {
  //         const response = await api.get(`user/verifyToken/`, config(token));
  //         if (response.data.message === "authorized") {
  //           setFirstName(response.data.user.firstname),
  //             setIsBlocked(response.data.user.isBlocked ? true : false);
  //         }

  //         setOpen(false);
  //         resolve();
  //         // console.log(response);
  //       } catch (err) {
  //         console.log(err);
  //         reject();
  //       }
  //     });

  //     toast.promise(myPromise, {
  //       pending: "Validating your account....",
  //       success: "Validation complete 🎉 ",
  //       error: "Log in to continue",
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   try {
  //     if (!token || !token.state.userDetails.token) {
  //       throw new Error("Missing token");
  //     }
  //     setOpen(true);
  //     verifyToken(token.state.userDetails.token);
  //   } catch (error) {
  //     console.error(error);
  //     router.push("/");
  //   }
  // }, []);

  return (
    <div className="overflow-hidden bg-gray-100 ">
      <ToastContainer />

      <Backdrop
        sx={{ color: "#fff9", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        // onClick={handleClose}
      ></Backdrop>

      <div className="bg-white h-[64vh]">
        <Hero />
      </div>

      <div className="bg-gray-100 mb-[100px]">
        <Services />

        <div className="lg:mx-[300px] md:mx-[10px] py-3 px-1 relative top-[5px]  text-black flex justify-between items-center">
          <p className="font-serif font-extrabold text-[27px]">
            Popolar Categories
          </p>
          <span className="flex gap-1 items-center cursor-pointer">
            <p className="text-[14px]">View more</p>{" "}
            <Image
              src={arrowleft}
              width={20}
              height={10}
              alt="arrow"
              className="h-[18px]"
            />
          </span>
        </div>
        <Category />

        <div className="lg:mx-[300px] md:mx-[10px] py-3 px-2 text-black flex justify-between items-center">
          <p className="font-serif font-extrabold text-[27px]">
            Featured Collection
          </p>
          <span className="flex gap-1 items-center cursor-pointer">
            <p className="text-[14px]">View more</p>{" "}
            <Image
              src={arrowleft}
              width={20}
              height={10}
              alt="arrow"
              className="h-[18px]"
            />
          </span>
        </div>
        <FeaturedProducts />

        <div className="lg:mx-[300px] md:mx-[10px] py-3 px-2 text-black flex justify-between items-center">
          <p className="font-serif font-extrabold text-[27px]">
            Special Products
          </p>
          <span className="flex gap-1 items-center cursor-pointer">
            <p className="text-[14px]">View more</p>{" "}
            <Image
              src={arrowleft}
              width={20}
              height={10}
              alt="arrow"
              className="h-[18px]"
            />
          </span>
        </div>
        <SpecialProducts />

        <div className="lg:mx-[300px] md:mx-[10px] py-3 px-2 text-black flex justify-between items-center">
          <p className="font-serif font-extrabold text-[27px]">
            Our Popolar Products
          </p>
          <span className="flex gap-1 items-center cursor-pointer">
            <p className="text-[14px]">View more</p>{" "}
            <Image
              src={arrowleft}
              width={20}
              height={10}
              alt="arrow"
              className="h-[18px]"
            />
          </span>
        </div>
        <PopolarProducts />

        <div className="lg:mx-[300px] md:mx-[10px] py-3 px-2 text-black flex justify-between items-center">
          <p className="font-serif font-extrabold text-[27px]">Our Partners</p>
        </div>
        <MarqueeC />

        <div className="lg:mx-[300px] md:mx-[10px] py-3 px-2 text-black flex justify-between items-center">
          <p className="font-serif font-extrabold text-[27px]">
            Our Latest News
          </p>
          <span className="flex gap-1 items-center cursor-pointer">
            <p className="text-[14px]">View more</p>{" "}
            <Image
              src={arrowleft}
              width={20}
              height={10}
              alt="arrow"
              className="h-[18px]"
            />
          </span>
        </div>
        <Blogs />
      </div>
    </div>
  );
};

export default Home;
