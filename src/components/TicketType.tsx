import { useState } from "react";
import { MdOutlineAirplanemodeActive, MdOutlineTrain } from "react-icons/md";

const TicketType = () => {
  const [selectedLeftMenu1, setSelectedLeftMenu1] = useState("");
  const [selectedLeftMenu2, setSelectedLeftMenu2] = useState("");
  return (
    <div className="absolute bottom-20 left-10 flex gap-4">
      <div className="w-[192px] h-[40px] bg-[var(--color-white-secondary)] rounded-[14px] flex items-center gap-2">
        {["داخلی", "خارجی"].map((item) => (
          <div
            key={item}
            className={`flex-1 flex mx-1 py-2 justify-center items-center cursor-pointer rounded-[14px] ${
              selectedLeftMenu1 === item
                ? "bg-black text-white"
                : "bg-transparent text-black"
            }`}
            onClick={() => setSelectedLeftMenu1(item)}
          >
            <span className="text-xs">{item}</span>
          </div>
        ))}
      </div>

      <div className="w-[240px] h-[40px] bg-[var(--color-white-secondary)] rounded-[14px] flex items-center gap-2">
        {[
          { icon: MdOutlineAirplanemodeActive, label: "رفت" },
          { icon: MdOutlineTrain, label: "رفت و برگشت" },
        ].map((item) => (
          <div
            key={item.label}
            className={`flex-1 flex mx-1 py-2 justify-center items-center gap-1 cursor-pointer rounded-[14px] ${
              selectedLeftMenu2 === item.label
                ? "bg-black text-white"
                : "bg-transparent text-black"
            }`}
            onClick={() => setSelectedLeftMenu2(item.label)}
          >
            <item.icon className="text-sm" />
            <span className="text-xs">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketType;
