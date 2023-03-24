"use client";

import compare from "../../public/images/compare.svg";
import wishlist from "../../public/images/wishlist.svg";
import user from "../../public/images/user.svg";
import cart from "../../public/images/cart.svg";
import menu from "../../public/images/menu.svg";
import Link from "next/link";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import MyDropdown from "./Menu";
import dynamic from "next/dynamic";
import axios from "axios";
import { base_url } from "@/utils/baseUrl";
import config from "@/utils/axiosconfig";

const userSession =
  typeof window !== "undefined" && localStorage.getItem("useDetails2")
    ? JSON.parse(localStorage.getItem("useDetails2"))
    : null;
const token =
  typeof window !== "undefined" && localStorage.getItem("useDetails")
    ? JSON.parse(localStorage.getItem("useDetails"))
    : null;

const Header = () => {
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("KSH");
  const [firstName, setFirstName] = useState("");

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="relative left-0 right-0 top-0">
      <div
        className="border-b-2 border-gray-700 bg-gray-900
py-3 text-[13px]"
      >
        <div className="lg:mx-[280px] md:mx-[10px] flex justify-between">
          <div className="text-white ">
            Free Shipping Over ksh1000 & Free Returns
          </div>

          <div className="flex gap-x-8">
            <div>
              <p className=" text-white">
                Hotline:
                <Link className="text-white" href="tel:+254 740315545">
                  +254 740315545
                </Link>
              </p>
            </div>

            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="flex gap-1 items-center">
                  <h2 className="text-white">{language}</h2>
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[999]">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                          onClick={() => setLanguage("English")}
                        >
                          English
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                          onClick={() => setLanguage("Kiswahili")}
                        >
                          Kiswahili
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                          onClick={() => setLanguage("Spanish")}
                        >
                          Spanish
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                          onClick={() => setLanguage("French")}
                        >
                          French
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="flex gap-1 items-center">
                  <h2 className="text-white">{currency}</h2>
                  <ChevronDownIcon
                    className="-mr-1 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[999]">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                          onClick={() => setCurrency("KSH")}
                        >
                          KHS
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                          onClick={() => setCurrency("USD")}
                        >
                          USD
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                          onClick={() => setCurrency("USDT")}
                        >
                          USDT
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                          onClick={() => setCurrency("EURO")}
                        >
                          EURO
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 py-3">
        <div className="flex justify-between lg:lg:mx-[280px]  md:mx-[10px] items-center">
          <Link
            className="text-white font-bold text-[30px] animate-pulse"
            href=""
          >
            SwiftMart
          </Link>

          {/* input form  */}
          <div className="flex gap-x-1 lg:flex md:hidden ">
            <div className="h-[45px] bg-white rounded-tl-lg rounded-bl-lg p-2 lg:w-[400px] ">
              <input
                type="text"
                className="outline-none focus:ring-0"
                placeholder="Search Product Here..."
                autoFocus
              />
            </div>

            <div className="bg-yellow-300 h-[45px] w-[40px] flex justify-center items-center rounded-tr-lg  rounded-br-lg ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>

          {/* links */}
          <div className="flex gap-x-7 items-center md:text-[15px]">
            <div>
              <Link
                href="/compare-product"
                className="flex text-white gap-x-2 items-center"
              >
                <Image
                  width={35}
                  height={35}
                  src={compare}
                  alt="compare"
                  className="md: w-[30px] h-[30px] hover:spinCtm"
                />
                <p className="mb-0">
                  Compare <br /> Products
                </p>
              </Link>
            </div>
            <div>
              <Link
                href="/wishlist"
                className=" flex text-white gap-x-2 items-center  hover:animate-pulse"
              >
                <Image
                  width={35}
                  height={35}
                  src={wishlist}
                  alt="wishlist"
                  className="md: w-[30px] h-[30px]"
                />
                <p className="mb-0">
                  Favourite <br /> wishlist
                </p>
              </Link>
            </div>
            <div>
              <Link
                href="/login"
                className=" flex text-white gap-x-2 items-center hover:animate-pulse"
              >
                <Image
                  width={35}
                  height={35}
                  src={user}
                  alt="user"
                  className="md: w-[30px] h-[30px] "
                />
                <p className="mb-0">
                  {firstName.length < 1 ? (
                    `Log out`
                  ) : (
                    <p>
                      Log in <br /> My Account
                    </p>
                  )}
                </p>
              </Link>
            </div>
            <div>
              <Link
                href="/cart"
                className=" flex text-white hover:animate-pulse"
              >
                <Image width={35} height={35} src={cart} alt="cart" />
                <div className="flex flex-col gap-7">
                  <span className=" bg-white text-black w-[30px] text-center rounded-md">
                    0
                  </span>
                  <p className="text-[13px]">ksh 500</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 py-4 text-white flex justify-between">
        <div className="lg:mx-[280px] md:mx-[10px] flex items-center gap-8">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="flex gap-3 items-center">
                <Image src={menu} width={40} height={40} alt="menu" />
                <h2 className="font-serif">SHOP CATEGORIES</h2>
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[999]">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Food & Beverage
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Electronics
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Beauty & Fashion
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Home & Kitchen
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Games & Toys
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Book & Media
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Health & Wellness
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Automotive
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <div className="flex  gap-4 font-serif text-[18px]">
            <Link href="/">Home</Link>
            <Link href="/product">Our Store</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <MyDropdown name={"Log in"} />
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Header), {
  ssr: false,
});
