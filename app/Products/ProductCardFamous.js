import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCardFamous = ({ product, index }) => {
  return (
    <Link
      href=""
      className="flex flex-col items-center justify-center relative "
    >
      <div
        className={`flex flex-col gap-y-2 absolute top-2 left-4 ${
          index === 0 ? `text-white` : `text-black`
        }`}
      >
        <p className="font-serif capitalize">{product.category}</p>
        <h2 className="text-[25px] font-bold">{product.name}</h2>
        <p className="text-[14px] font-thin">{product.description}</p>
      </div>
      <div>
        <Image
          src={product.images}
          alt="image"
          className="w-[350px] h-[450px] rounded-md"
          height={400}
          width={400}
        />
      </div>
    </Link>
  );
};

export default ProductCardFamous;
