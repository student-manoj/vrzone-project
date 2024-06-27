import BlogCard from "@/components/BlogCard";
import BlogSection from "@/components/BlogSection";
import HeaderSection from "@/components/HeaderSection";
import Heading from "@/components/Heading";
import { BlogData } from "@/utils/BlogData";

const Blogpage = () => {
  return (
    <>
      <HeaderSection title="Blog" sTitle="Blog" />
      <div className="container mx-auto px-4 py-20 xl:py-24">
        <Heading
          stitle="Our Blog"
          title="We create amazing things"
          description="Discover how VR is reshaping the way we learn, work, and play. Uncover the innovative advancements that are pushing the boundaries of what’s  possible in this rapidly evolving field. "
        />
        <div className="grid gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3 xl:pt-14">
          {BlogData.map((value) => (
            <BlogCard key={value.id} {...value} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogpage;
