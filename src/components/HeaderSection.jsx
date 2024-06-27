import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const HeaderSection = (props) => {
  return (
    <>
      <div className="flex flex-col items-center bg-[url('/aboutPageImage.png')] bg-cover bg-center text-white">
        <div className="py-52">
          <h3 className="text-4xl font-bold xl:text-5xl">{props.title}</h3>
          <div className="flex justify-center gap-2 pt-4">
            <Link href="/">Home</Link>
            <MdOutlineKeyboardDoubleArrowRight className="text-primary" />
            <span>{props.sTitle}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
