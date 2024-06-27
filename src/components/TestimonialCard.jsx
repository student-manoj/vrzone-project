import Image from "next/image";
import { BiSolidQuoteRight } from "react-icons/bi";

const TestimonialCard = ({ title, img, icon, profetion, description }) => {
  return (
    <>
      <div className="group flex flex-col items-center justify-center gap-6 rounded-3xl bg-white px-6 py-12 xl:px-7 xl:py-14">
        <BiSolidQuoteRight className="h-10 w-10 duration-300 group-hover:text-primary" />
        <p className="text-center text-Gray32">{description}</p>
        <Image src={icon} alt="Icon" />
        <Image src={img} alt="Image" />
        <div className="text-center">
          <h3 className="text-xl font-semibold duration-300 group-hover:text-primary">{title}</h3>
          <p>{profetion}</p>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
