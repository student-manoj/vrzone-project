import HeaderSection from "@/components/HeaderSection";
import Image from "next/image";
import SingleBlog from "../../../../public/SingleBlog.png";
import singleBlogSiatBarImg from "../../../../public/singleBlogSiatBarImg.png";
import { CiCalendar } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { TbCircleDotFilled } from "react-icons/tb";
import {
  CategoriesSingleBlogData,
  SingleBlogData,
  TagsSingleBlogData,
} from "@/utils/BlogData";
import SingleBlogCard from "@/components/SingleBlogCard";
import FooterSectionOne from "@/components/FooterSectionOne";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const SingleBlogPage = () => {
  return (
    <>
      <HeaderSection title="Single Blog" sTitle="Single Blog" />
      <div className="container mx-auto grid gap-6 px-4 py-14 md:grid-cols-3 xl:gap-12 xl:px-10">
        <div className="md:col-span-2">
          <Image src={SingleBlog} alt="Single Blog" className="w-full" />
          <div className="flex gap-9 pt-7 xl:gap-10 xl:pt-7">
            <div className="flex items-center gap-2">
              <CiCalendar className="text-primary" />
              <span className="text-base font-medium">April-05-2024</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRegComment className="text-primary" />
              <span className="text-base font-medium">0 Comments</span>
            </div>
          </div>
          <h3 className="pt-5 text-2xl font-bold xl:text-3xl">
            The essentials of cyber security solutions
          </h3>
          <p className="pt-3 text-Gray32">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            pulvinar urna et enim consectetur euismod. Quisque lacinia
            scelerisque interdum. Nullam eleifend accumsan arcu, ut tincidunt
            lorem tempus quis. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Sed volutpat ultrices
            massa eu tincidunt. Quisque venenatis rutrum mollis. Donec et lacus
            lorem. Etiam odio justo, fringilla sed metus non, sagittis interdum
            justo. Cras eleifend metus eget urna sagittis, non molestie mauris
            placerat. Maecenas eleifend, massa nec semper egestas, est magna
            convallis sem, ut fermentum mauris elit in ex.
            <br />
            Pellentesque porttitor augue eget ullamcorper convallis.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum id nisl nec arcu pretium
            ullamcorper vitae at risus. Curabitur tincidunt ipsum sit amet nisi
            suscipit, a vestibulum nisl posuere. Orci varius natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Etiam ut
            neque non ipsum maximus condimentum. Maecenas tincidunt tempus
            pellentesque.
          </p>
          <div className="flex flex-col gap-4 pt-7">
            <div className="flex gap-3">
              <TbCircleDotFilled className="text-[#FF9301]" />
              <spn className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</spn>
            </div>
            <div className="flex gap-3">
              <TbCircleDotFilled className="text-[#FF9301]" />
              <spn className="text-base">Cras nisl metus, tristique at dolor eu, finibus facilisis ex.</spn>
            </div>
            <div className="flex gap-3">
              <TbCircleDotFilled className="text-[#FF9301]" />
              <spn className="text-base"> Nullam suscipit, est in egestas cursus, maximus quam.</spn>
            </div>
          </div>
          <h3 className="pt-20 text-2xl font-bold xl:text-3xl"> 3 Replies to “Things Can Help Any Coworking Flourish Again”</h3>
          {SingleBlogData.map((value) => (
            <SingleBlogCard key={value.id} {...value} />
          ))}
          <div className="grid gap-6 pt-10 xl:pt-12">
            <div className="grid grid-cols-2 gap-6">
              <input placeholder="Name" className="h-10 rounded-full border border-primary px-5 focus:outline-none" />
              <input placeholder="Email" className="h-10 rounded-full border border-primary px-5 focus:outline-none" />
              <input placeholder="Phone" className="h-10 rounded-full border border-primary px-5 focus:outline-none"
              />
              <input placeholder="Subject" className="h-10 rounded-full border border-primary px-5 focus:outline-none"/>
            </div>
            <textarea placeholder="Message" className="h-36 w-full rounded-3xl border border-primary px-5 pt-3 focus:outline-none" />
          </div>
          <div className="grid place-items-center pt-6">
            <button className="rounded-full bg-primary px-6 py-2 text-white duration-300 hover:scale-110">Send Message</button>
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-primary px-7 py-11">
            <li className="pb-5 text-2xl font-semibold text-white">Search</li>
            <input placeholder="Search..." className="h-11 w-full rounded-full px-4"/>
          </div>
          <div className="py-14">
            <div className="flex flex-col items-center justify-center bg-[#FFFAF5] py-14">
              <Image src={singleBlogSiatBarImg} alt="Single Blog SiatBar Image"/>
              <h3 className="pb-2 pt-6 text-2xl font-bold">ASK Project</h3>
              <h3 className="text-xl font-medium text-primary">Post Author</h3>
              <p className="px-7 pb-10 pt-4 text-center text-base">
                Circumnavigated gathered by gravity emerged into consciousness
                something incredible is waiting to be known a still more
                glorious dawn awaits are creatures of the cosmos.
              </p>
              <div className="grid grid-cols-3 gap-3 lg:grid-cols-5">
                <FaFacebookF className="rounded-full border border-primary bg-white p-3 text-[#FF9301] duration-300 hover:bg-[#FF9301] hover:text-white" />
                <FaInstagram className="rounded-full border border-primary bg-white p-3 text-[#FF9301] duration-300 hover:bg-[#FF9301] hover:text-white" />
                <FaTwitter className="rounded-full border border-primary bg-white p-3 text-[#FF9301] duration-300 hover:bg-[#FF9301] hover:text-white" />
                <FaLinkedinIn className="rounded-full border border-primary bg-white p-3 text-[#FF9301] duration-300 hover:bg-[#FF9301] hover:text-white" />
                <FaYoutube className="rounded-full border border-primary bg-white p-3 text-[#FF9301] duration-300 hover:bg-[#FF9301] hover:text-white" />
              </div>
            </div>
          </div>
          <div className="flex flex-col bg-[#FFFAF5] py-14 pb-14">
            <div><li className="px-7 text-2xl font-bold">Categories</li></div>
            {CategoriesSingleBlogData.map((value) => (
              <div key={value.id} className="group px-7 pt-6">
                <div className="border-b border-Gray32/50 pb-2 duration-300 group-hover:text-primary">
                  {value.title}
                </div>
              </div>
            ))}
          </div>
          <div className="py-14">
            <div className="flex flex-col bg-[#FFFAF5] py-14 pb-14">
              <div> <li className="px-7 text-2xl font-bold">Tags</li></div>
              <div className="flex cursor-pointer flex-wrap gap-4 px-7 pt-6">
                {TagsSingleBlogData.map((value) => (
                  <div
                    key={value.id}
                    className="rounded-full border border-primary bg-white px-4 py-2 hover:bg-primary"
                  >
                    {value.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSectionOne />
    </>
  );
};

export default SingleBlogPage;
