"use client";

import { progressBarData } from "@/utils/progressBarData";
import OurBenifitsImage from "../../public/OurBenifitsImage.png";
import ProgressBar from "@ramonak/react-progress-bar";
import Image from "next/image";
const OurBenifitsSection = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-24 xl:py-28">
        <div className="grid place-items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <Image src={OurBenifitsImage} alt="Our Benifits Image" className="w-full rounded-3xl" />
          <div className="pt- flex flex-col items-center gap-4 pt-4 lg:items-start lg:pt-0 xl:gap-7">
            <h6><li className="text-lg font-medium text-primary">Our Benifits</li></h6>
            <h2 className="text-center text-3xl font-bold lg:text-start xl:text-4xl">
              The world your imagination invites you to create is almost
              limitless.
            </h2>
            <p className="text-center text-sm text-Gray32 md:w-[600px] lg:w-auto lg:text-start xl:w-[629px] xl:text-base">
              We have 20 years of experience working in industry has enabled us
              to build our services and solutions in strategy, consulting,
              technology & operations that help our clients with their trading
              projects around the world.
            </p>
            <div className="flex flex-col gap-4">
              {progressBarData.map((value) => (
                <div key={value.id} className="flex flex-col gap-3">
                  <div className="font-bold">{value.title}</div>
                  <ProgressBar baseBgColor="#FFECDA" bgColor="#F97D09" height="12px" width="50dvh" completed={value.progressBar}  maxCompleted={100} labelSize="10px" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurBenifitsSection;
