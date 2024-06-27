import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ img, title, description, date }) => {
  return (
    <>
      <div className="group relative flex flex-col gap-4 rounded-3xl border border-primary p-5">
        <p className="absolute left-10 top-10 rounded-lg bg-white px-4 py-3 text-xl font-medium text-primary">{date}</p>
        <Image src={img} alt="image" />
        <h3 className="pt-2 text-xl font-bold group-hover:text-primary xl:text-2xl">{title}</h3>
        <p className="text-base text-Gray32">{description}</p>
        <div className="py-6 xl:py-7">
          <Link href="#" className="rounded-full border border-primary px-7 py-3 text-base font-medium  group-hover:bg-primary group-hover:text-white">Read More</Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
