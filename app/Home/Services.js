import React from "react";
import { services } from "@/utils/data";
import Image from "next/image";

const Services = () => {
  return (
    <div>
      <div className="lg:mx-[300px] md:mx-[10px] flex justify-between py-10 mb-[20px] relative top-[20px] px-3 items-center">
        {services.map((service, index) => {
          return (
            <div
              className="flex gap-x-7 items-center cursor-pointer"
              key={index}
            >
              <Image src={service.icon} width={35} height={35} alt="image" />
              <div className="">
                <h2 className="text-[17px] font-bold font-serif">
                  {service.title}
                </h2>
                <h3 className="text-[13px] font-serif">
                  {service.Description}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
