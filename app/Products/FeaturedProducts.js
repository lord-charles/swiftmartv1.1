import React from "react";
import { famousProducts, products } from "@/utils/data";
import ProductCard from "./ProductCard";
import ProductCardFamous from "./ProductCardFamous";

const FeaturedProducts = () => {
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

      <div className="lg:mx-[300px] md:mx-[10px] grid mygrid gap-[10px]  mb-[130px]">
        {famousProducts.map((productFamous, index) => {
          return (
            <div key={index} className="lg:w-[310px] md:w-[290px] mb-[15px]">
              <ProductCardFamous product={productFamous} index={index} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FeaturedProducts;
