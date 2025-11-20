import { BsBank } from "react-icons/bs";
import { IoBusOutline } from "react-icons/io5";
import { LuHotel } from "react-icons/lu";
import { MdOutlineAirplanemodeActive, MdOutlineTrain } from "react-icons/md";
import Hero from "../assets/images/hero.jpg";

export default function CmHero() {
  return (
    <div className="relative w-full">
      <img
        src={Hero}
        alt="DotOne Hero"
        className="w-full aspect-[2.39] object-cover rounded-[40px]"
      />

      <div className="absolute bottom-6 right-6 bg-[var(--color-white-secondary)]  rounded-[20px] px-8 py-4 flex items-center gap-10">
        <div className="flex flex-col items-center gap-1 cursor-pointer px-8">
          <MdOutlineAirplanemodeActive className="text-2xl" />
          <span className="text-[15px] font-medium">پرواز</span>
        </div>
        <div className="flex flex-col items-center gap-1 cursor-pointer px-8">
          <LuHotel className="text-2xl" />
          <span className="cursor-pointer">هتل</span>
        </div>
        <div className="flex flex-col items-center gap-1 cursor-pointer px-8">
          <MdOutlineTrain className="text-2xl" />
          <span className="cursor-pointer">قطار</span>
        </div>
        <div className="flex flex-col items-center gap-1 cursor-pointer px-8">
          <IoBusOutline className="text-2xl" />
          <span className="cursor-pointer">اتوبوس</span>
        </div>
        <div className="flex flex-col items-center gap-1 cursor-pointer px-8">
          <BsBank className="text-2xl" />
          <span className="cursor-pointer">تور</span>
        </div>
      </div>
    </div>
  );
}
