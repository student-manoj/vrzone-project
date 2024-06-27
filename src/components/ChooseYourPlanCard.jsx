import { ChooseYourPlanSectionData2 } from "@/utils/ChooseYourPlanSectionData";

const ChooseYourPlanCard = ({ title, description, amount }) => {
  return (
    <>
      <div className="flex flex-col gap-4 rounded-3xl border border-primary bg-white px-6 py-14 xl:px-7 xl:py-16">
        <h3 className="left-pxtext-3xl text-center text-xl font-bold xl:text-2xl">{title}</h3>
        <p className="text-center text-base text-Gray32">{description}</p>
        <div className="py-4 xl:py-5">
          <div className="w-full rounded-full bg-primary py-3 text-center text-lg font-medium text-white xl:py-4 xl:text-xl">
            ${amount} USD /month
          </div>
        </div>
        {ChooseYourPlanSectionData2.map((value) => (
          <div key={value.id} className="flex items-center justify-start gap-3 xl:gap-4">
            <div className="h-1 w-1 rounded-full ring-4 ring-primary" />
            <div className="">{value.title}</div>
          </div>
        ))}
        <div className="pt-4 xl:pt-5">
          <button className="w-full rounded-full bg-primary py-3 text-center text-xl font-medium text-white xl:py-4">Get Started</button>
        </div>
      </div>
    </>
  );
};

export default ChooseYourPlanCard;
