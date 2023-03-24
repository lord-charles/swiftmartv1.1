import { blogs } from "@/utils/data";
import BlogsCard from "./BlogsCard";

const Blogs = () => {
  return (
    <>
      <div className="lg:mx-[300px] md:mx-[10px] grid gap-6 mygrid mb-[10px] place-items-center">
        {blogs.map((blog, index) => {
          return (
            <div key={index} className="">
              <BlogsCard blog={blog} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Blogs;
