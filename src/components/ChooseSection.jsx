"use client";

import Image from "next/image";
import Link from "next/link";
import chooseUsimage from "../../public/chooseUsimage.png";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import { CounterSectionData } from "@/utils/CounterData";
import CountUp from "react-countup";

const ChooseSection = () => {
  const [counting, setCounting] = useState(false);
  return (
    <>
      <div className="container mx-auto px-4 py-24 xl:py-28">
        <div className="grid place-items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col items-center gap-4 lg:items-start xl:gap-7">
            <h6><li className="text-lg font-medium text-primary">Why choose us</li></h6>
            <h2 className="text-center text-3xl font-bold lg:text-start xl:text-4xl">
              The world your imagination invites you to create is almost
              limitless
            </h2>
            <p className="text-center text-sm text-Gray32 md:w-[600px] lg:w-auto lg:text-start xl:w-[629px] xl:text-base">
              Pretium pharetra est elit sollicitudin mollis habitasse. Lobortis
              leo justo porta erat laoreet torquent tortor arcu nascetur aliquam
              inceptos. Montes lacinia egestas elit eleifend vestibulum nisl
              faucibus eros phasellus.
            </p>

            <div className="pt-4 xl:pt-6">
              <Link href="#" className="rounded-full bg-primary px-7 py-3 text-base font-medium text-white">Discover More</Link></div>
            <ScrollTrigger onEnter={() => setCounting(true)} onExit={() => setCounting(false)} className="grid gap-6 pt-10 md:grid-cols-3 xl:pt-14">
              {CounterSectionData.map((value) => (
                <div key={value.id} className="flex flex-col items-center gap-2 rounded-2xl bg-[#FFFAF5] p-10">
                  <div className="text-4xl font-bold">
                    {counting && (
                      <CountUp start={0} end={value.value} duration={10} delay={0}/>)}k+
                  </div>
                  <p className="text-base text-Gray32">{value.name}</p>
                </div>
              ))}
            </ScrollTrigger>
          </div>
          <Image src={chooseUsimage} alt="About Section Image" className="w-full rounded-3xl"/>
        </div>
      </div>
    </>
  );
};

export default ChooseSection;
