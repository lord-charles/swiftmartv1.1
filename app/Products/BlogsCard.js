"use client";
import Image from "next/image";
import { Button } from "@mui/material";

const BlogsCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-lg">
      <div>
        <Image
          src={blog.image}
          width={200}
          height={200}
          className="object-cover w-[400px] h-[200px] rounded-t-lg"
          alt="blog"
        />
      </div>
      <div className="flex flex-col space-y-4 p-4  items-center">
        <h2 className="">{blog.date}</h2>
        <p className="font-serif font-semibold">{blog.description}</p>
        <p className="text-[13px]">
          {blog.richDescription.slice(0, 80) + `...`}
        </p>
        <Button variant="outlined" className="w-[140px] text-[14px]">
          Read more
        </Button>
      </div>
    </div>
  );
};

export default BlogsCard;
