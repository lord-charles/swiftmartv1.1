import React from "react";
import { specialProducts } from "@/utils/data";
import SpecialProductCard from "./SpecialProductCard";

const SpecialProducts = () => {
  return (
    <div>
      <div className="lg:mx-[300px] md:mx-[10px] grid lg:grid-cols-3 md:grid-cols-2 xxs:grid-cols-1 gap-2 mb-[40px] place-items-center">
        {specialProducts.map((product, index) => {
          return (
            <div key={index} className="">
              <SpecialProductCard product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SpecialProducts;
