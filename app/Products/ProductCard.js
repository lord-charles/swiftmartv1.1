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

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div>
      <Link
        href={""}
        className="card relative overflow-hidden p-4 bg-white h-[380px] w-[270px]"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex flex-col items-center justify-center">
          <div>
            <Image
              src={hovered ? product.images[1].image : product.images[0].image}
              width={150}
              height={150}
              className="object-cover transition duration-500 ease-in-out transform hover:scale-110 w-[170px] h-[170px] my-4"
              alt="image"
            />
          </div>

          <div className="flex flex-col gap-y-2">
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
          </div>

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
      </Link>
    </div>
  );
};

export default ProductCard;
