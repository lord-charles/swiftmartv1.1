import React from "react";
import { famousProducts, products } from "@/utils/data";
import ProductCard from "./ProductCard";

const PopolarProducts = () => {
  return (
    <>
      <div className="lg:mx-[300px] md:mx-[10px] grid mygrid gap-2 mb-[40px] place-items-center">
        {products.map((product, index) => {
          return (
            <div key={index} className="">
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PopolarProducts;
