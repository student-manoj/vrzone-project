import Image from "next/image";
import { BiSolidShare } from "react-icons/bi";

const SingleBlogCard = ({ img, title, description }) => {
  return (
    <>
      <div className="pt-10 xl:pt-12">
        <div className="flex items-center gap-6 rounded-3xl border border-primary p-5">
          <Image src={img} alt="image" />
          <div className="">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="pb-5 pt-2">{description}</p>
            <button className="flex items-center gap-3 rounded-full bg-primary px-6 py-2 text-white duration-300 hover:scale-110">
              <BiSolidShare /> <span>Reply</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlogCard;
