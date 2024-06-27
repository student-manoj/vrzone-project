import HeaderSection from "@/components/HeaderSection";
import Image from "next/image";
import contactPageImage from "../../../public/contactPageImage.png";
import { FaFacebookF } from "react-icons/fa6";

const Contactpage = () => {
  return (
    <>
      <HeaderSection title="Contact Us" sTitle="Contact Us" />
      <div className="container mx-auto px-4 py-24 xl:py-28">
        <div className="grid gap-10 rounded-3xl border-2 border-primary p-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="grid gap-6 pt-10 xl:pt-12">
              <div className="grid gap-6 md:grid-cols-2">
                <input placeholder="Name" className="h-12 rounded-full border border-primary px-5 focus:outline-none"/>
                <input placeholder="Email" className="h-12 rounded-full border border-primary px-5 focus:outline-none"/>
                <input placeholder="Phone" className="h-12 rounded-full border border-primary px-5 focus:outline-none"/>
                <input placeholder="Subject" className="h-12 rounded-full border border-primary px-5 focus:outline-none"/>
              </div>
              <textarea placeholder="Message" className="h-40 w-full rounded-3xl border border-primary px-5 pt-3 focus:outline-none" />
            </div>
            <div className="grid place-items-center pt-6">
              <button className="rounded-full bg-primary px-6 py-2 text-white duration-300 hover:scale-110"> Send Message</button>
            </div>
          </div>
          <div className="col-span-1">
            <Image src={contactPageImage} alt="Contact Page Image" className="w-full " />
          </div>
        </div>
        <div className="grid gap-4 pt-20 md:grid-cols-2 md:pt-24 lg:grid-cols-3 xl:py-28">
          <div className="flex flex-col items-center rounded-3xl border border-primary p-10">
            <FaFacebookF className="h-16 w-16 rounded-full bg-primary p-4 text-white" />
            <h4 className="pb-1 pt-4 text-center text-xl font-semibold">Phone Number</h4>
            <p className="text-center text-base text-black/50"> +(000) 1234-56789 </p>
          </div>
          <div className="flex flex-col items-center rounded-3xl border border-primary p-10">
            <FaFacebookF className="h-16 w-16 rounded-full bg-primary p-4 text-white" />
            <h4 className="pb-1 pt-4 text-center text-xl font-semibold"> Our Location</h4>
            <p className="text-center text-base text-black/50"> 35 W 46nd Street, Wall Road New York </p>
          </div>
          <div className="flex flex-col items-center rounded-3xl border border-primary p-10">
            <FaFacebookF className="h-16 w-16 rounded-full bg-primary p-4 text-white" />
            <h4 className="pb-1 pt-4 text-center text-xl font-semibold">Email</h4>
            <p className="text-center text-base text-black/50">admin@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactpage;
