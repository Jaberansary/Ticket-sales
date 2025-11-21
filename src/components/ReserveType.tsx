import { useState } from "react";
import airplaneBulk from "../assets/svg/airplaneBulk.svg";
import building from "../assets/svg/buliding.svg";
import bus from "../assets/svg/bus.svg";
import train from "../assets/svg/train.svg";
import tour from "../assets/svg/bank.svg";

export default function ReserveType() {
  const [activeItem, setActiveItem] = useState("پرواز");

  const rightMenuItems = [
    { icon: airplaneBulk, label: "پرواز" },
    { icon: building, label: "هتل" },
    { icon: train, label: "قطار" },
    { icon: bus, label: "اتوبوس" },
    { icon: tour, label: "تور" },
  ];

  return (
    <div className="absolute bottom-20 right-10 h-[61px] bg-[var(--color-white-secondary)] rounded-[20px] py-2 px-4 flex items-center gap-4">
      {rightMenuItems.map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center gap-1 cursor-pointer px-4"
          onClick={() => setActiveItem(item.label)}
        >
          <img
            src={item.icon}
            alt={item.label}
            className="w-5 h-5"
          />
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
