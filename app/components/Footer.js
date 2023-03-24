import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../../public/images/newsletter.png";
const Footer = () => {
  return (
    <div className="relative bottom-0 left-0 right-0 bg-gray-900">
      <footer className="py-4 border-b-[1px] border-b-gray-600">
        <div className="lg:mx-[300px] md:mx-[10px] flex justify-between py-3">
          <div className="flex items-center gap-x-10">
            <Image src={newsletter} width={35} height={50} alt="newsletter" />
            <h2 className="text-[28px] font-bold text-white">
              Sign Up for Newsletter
            </h2>
          </div>

          <div className="h-[45px] bg-white rounded-md p-2 w-[600px] flex justify-between items-center">
            <input
              type="text"
              className="outline-none focus:ring-0"
              placeholder="your email address"
              autoFocus
            />
            <span className="text-white bg-gray-900  px-3  h-[43px] relative left-[6px] flex items-center rounded-md  cursor-pointer">
              <p>Subscribe</p>
            </span>
          </div>
        </div>
      </footer>

      <footer className="py-4 bg-gray-900 border-b-[1px] border-b-gray-600">
        <div className="lg:mx-[300px] md:mx-[10px] flex justify-between">
          <div className="col-4">
            <h4 className="text-white mb-4 text-[20px] font-bold">
              Contact Us
            </h4>
            <div>
              <div className="text-white ">
                Nakuru : Egerton university, <br /> njoro, main campus <br />
                PinCode: 131103
              </div>
              <div className="flex flex-col">
                <a
                  href="tel:+91 8264954234"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +254 740315545
                </a>
                <a
                  href="mailto:navdeepdahiya753@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  mwanikicharles226@gmail.com
                </a>
              </div>
              <div className="social_icons d-flex align-items-center gap-30 mt-4">
                <a className="text-white" href="#">
                  {/* <BsLinkedin className="fs-4" /> */}
                </a>
                <a className="text-white" href="#">
                  {/* <BsInstagram className="fs-4" /> */}
                </a>
                <a className="text-white" href="#">
                  {/* <BsGithub className="fs-4" /> */}
                </a>
                <a className="text-white" href="#">
                  {/* <BsYoutube className="fs-4" /> */}
                </a>
              </div>
            </div>
          </div>

          <div className="col-3">
            <h4 className="text-white mb-4 text-[20px] font-bold">
              Information
            </h4>
            <div className="flex flex-col">
              <Link href="/privacy-policy" className="text-white py-2 mb-1">
                Privacy Policy
              </Link>
              <Link href="/refund-policy" className="text-white py-2 mb-1">
                Refund Policy
              </Link>
              <Link href="/shipping-policy" className="text-white py-2 mb-1">
                Shipping Policy
              </Link>
              <Link href="/term-conditions" className="text-white py-2 mb-1">
                Terms & Conditions
              </Link>
              <Link href="" className="text-white py-2 mb-1">
                Blogs
              </Link>
            </div>
          </div>

          <div className="col-3">
            <h4 className="text-white mb-4 text-[20px] font-bold">Account</h4>
            <div className="flex flex-col">
              <Link href="" className="text-white py-2 mb-1">
                About Us
              </Link>
              <Link href="" className="text-white py-2 mb-1">
                Faq
              </Link>
              <Link href="" className="text-white py-2 mb-1">
                Contact
              </Link>
            </div>
          </div>

          <div className="col-2">
            <h4 className="text-white mb-4 text-[20px] font-bold">
              Quick Links
            </h4>
            <div className="flex flex-col">
              <Link href="" className="text-white py-2 mb-1">
                Laptops
              </Link>
              <Link href="" className="text-white py-2 mb-1">
                Headphones
              </Link>
              <Link href="" className="text-white py-2 mb-1">
                Tablets
              </Link>
              <Link href="" className="text-white py-2 mb-1">
                Watch
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()} Powered by charles mall v2.0
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
