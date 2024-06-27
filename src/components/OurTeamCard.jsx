import Image from "next/image";

const OurTeamCard = ({ img, name, profetion }) => {
  return (
    <>
      <div className="flex flex-col items-center gap-1 rounded-3xl border border-primary bg-[#FFFAF5]">
        <Image src={img} alt="Team Number image" className="w-full rounded-3xl" />
        <h3 className="pt-7 text-2xl font-semibold">{name}</h3>
        <h3 className="pb-7 text-base text-black/50">{profetion}</h3>
      </div>
    </>
  );
};

export default OurTeamCard;
