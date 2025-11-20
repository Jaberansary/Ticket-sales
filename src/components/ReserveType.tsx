import { useState } from "react";
import { BsBank } from "react-icons/bs";
import { IoBusOutline } from "react-icons/io5";
import { LuHotel } from "react-icons/lu";
import { MdOutlineAirplanemodeActive, MdOutlineTrain } from "react-icons/md";

export default function ReserveType() {
  const [activeItem, setActiveItem] = useState("پرواز");

  const rightMenuItems = [
    { icon: MdOutlineAirplanemodeActive, label: "پرواز" },
    { icon: LuHotel, label: "هتل" },
    { icon: MdOutlineTrain, label: "قطار" },
    { icon: IoBusOutline, label: "اتوبوس" },
    { icon: BsBank, label: "تور" },
  ];
  return (
    <div className="absolute bottom-20 right-10 h-[61px] bg-[var(--color-white-secondary)] rounded-[20px] py-2 px-4 flex items-center gap-4">
      {rightMenuItems.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center gap-1 cursor-pointer px-4"
          onClick={() => setActiveItem(item.label)}
        >
          <item.icon className="text-xl" />
          <span
            className={`text-xs ${
              activeItem === item.label ? "font-bold" : "font-normal"
            }`}
          >
            {item.label}
          </span>
          <span
            className={`block w-4 h-[4px] rounded-sm ${
              activeItem === item.label ? "bg-black" : "bg-transparent"
            }`}
          ></span>
        </div>
      ))}
    </div>
  );
}
