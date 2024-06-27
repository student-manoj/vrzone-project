import { BlogData } from "@/utils/BlogData";
import Heading from "./Heading";
import BlogCard from "./BlogCard";

const BlogSection = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-24 xl:py-28">
        <Heading
          stitle="Our Blog"
          title="We create amazing things"
          description="Discover how VR is reshaping the way we learn, work, and play. Uncover the innovative advancements that are pushing the boundaries of what’s  possible in this rapidly evolving field. "
        />
        <div className="grid gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3 xl:pt-14">
          {BlogData.slice(0, 3).map((value) => (
            <BlogCard key={value.id} {...value} />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogSection;
