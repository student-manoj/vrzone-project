import Image from "next/image";
import footerLogo from "../../public/footerLogo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { TbCircleDotFilled } from "react-icons/tb";
import { FooterData, FooterData2 } from "@/utils/footerData";

const FooterSectionTow = () => {
  return (
    <>
      <div className="bg-secondary py-16 text-white">
        <div className="container mx-auto grid gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 lg:place-items-center xl:grid-cols-4">
          <div className="flex flex-col gap-6">
            <div>
              <Image src={footerLogo} alt="Logo" className="w-full" />
            </div>
            <p>
              Step into a universe where the constraints of the physical realm
              vanish, replaced by boundless landscapes waiting to be discovered.
            </p>
            <div className="grid grid-cols-5">
              <FaFacebookF className="rounded-full bg-white p-3 text-[#FF9301] duration-300 hover:bg-[#FF9301] hover:text-white" />
              <FaInstagram className="rounded-full bg-white p-3 text-[#FF9301] duration-300 hover:bg-[#FF9301] hover:text-white" />
              <FaTwitter className="rounded-full bg-white p-3 text-[#FF9301] duration-300 hover:bg-[#FF9301] hover:text-white" />
              <FaLinkedinIn className="rounded-full bg-white p-3 text-[#FF9301] duration-300 hover:bg-[#FF9301] hover:text-white" />
              <FaYoutube className="rounded-full bg-white p-3 text-[#FF9301] duration-300 hover:bg-[#FF9301] hover:text-white" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-semibold">Menu</div>
            {FooterData.map((value) => (
              <div key={value.id} className="flex flex-col gap-3">
                <div className="flex items-center gap-4"> <span><TbCircleDotFilled className="text-[#FF9301]" /></span>{value.title}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-semibold">Company</div>
            {FooterData2.map((value) => (
              <div key={value.id} className="flex flex-col gap-3">
                <div className="flex items-center gap-4"><span><TbCircleDotFilled className="text-[#FF9301]" /></span>{value.title}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-semibold">Contact information</div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <span className="rounded-xl bg-primary p-2"><FaPhone className="text-white" /></span>
                <div className="flex flex-col"><span> Phone Number</span> +(000) 1234-56789</div>
              </div>
              <div className="flex items-center gap-4">
                <span className="rounded-xl bg-primary p-2"><FaLocationDot className="text-white" /></span>
                <div className="flex flex-col"><span>Location</span>35 W 46nd Street, Wall Road New York</div>
              </div>
              <div className="flex items-center gap-4">
                <span className="rounded-xl bg-primary p-2"><IoIosMail className="text-white" /></span>
                <div className="flex flex-col"><span className="">Email</span>admin@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterSectionTow;
