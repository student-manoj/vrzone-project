"use client";

import Image from "next/image";
import VideoIcons from "../../public/VideoIcons.png";
import Link from "next/link";
import "../../node_modules/react-modal-video/scss/modal-video.scss";
import ModalVideo from "react-modal-video";
import { useState } from "react";

const VideoSection = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div className=" bg-[url('/videoBackgroundImage.png')] bg-cover bg-center object-center">
        <div className="flex flex-col items-center justify-center gap-4 bg-black/45 py-28 text-white xl:py-32">
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="asUN0c94xnY"
            onClose={() => setOpen(false)}
          />
          <Image onClick={() => setOpen(true)} src={VideoIcons} alt="Video Icons" className="cursor-pointer p-3" />
          <h3 className="text-center text-3xl font-bold lg:w-[800px] xl:text-4xl">
            Join the virtual reality revolution and upgrade your entertainment.
          </h3>
          <p className="text-center text-base text-white/60 lg:w-[900px]">
            Immerse yourself in the endless possibilities of augmented and
            virtual reality. Discover new dimensions, enhance your experiences,
            and redefine reality like never before. Whether for gaming,
            education, or business, AR and VR are transforming the way we
            interact with the world around us. Take the leap into a new reality
            today.
          </p>
          <div className="pt-7 duration-300 hover:scale-110">
            <Link href="#" className="rounded-full bg-primary px-7 py-3 text-base font-medium text-white"> Start Exploring</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
