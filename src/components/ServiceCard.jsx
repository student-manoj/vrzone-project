import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ title, icon, description }) => {
  return (
    <>
      <div className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-primary bg-white px-7 py-12 duration-300 hover:bg-primary hover:text-white">
        <div className="rounded-full border-4 border-primary bg-white p-4">
          <Image src={icon} alt="icon" className="h-10 w-10 object-center" />
        </div>
        <h3 className="pt-5 text-xl font-bold">{title}</h3>
        <p className="text-center text-Gray32 group-hover:text-white/60">{description}</p>
        <div className="pt-8 duration-300 hover:scale-110">
          <Link href="#" className="rounded-full bg-primary px-7 py-3 text-base font-medium text-white group-hover:bg-yellow-50 group-hover:text-primary" >Read More</Link>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
