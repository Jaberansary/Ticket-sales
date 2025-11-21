import { useState } from "react";
import airplane from "../assets/svg/airplane.svg";

const TicketType = () => {
  const [selectedLeftMenu1, setSelectedLeftMenu1] = useState("");
  const [selectedLeftMenu2, setSelectedLeftMenu2] = useState("رفت"); // پیش‌فرض رفت

  const ticketOptions = [
    { variant: "oneWay", label: "رفت" },
    { variant: "roundTrip", label: "رفت و برگشت" },
  ];

  return (
    <div className="absolute bottom-20 left-10 flex gap-4">
      {/* داخلی / خارجی */}
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

      {/* رفت / رفت و برگشت */}
      <div className="w-[240px] h-[40px] bg-[var(--color-white-secondary)] rounded-[14px] flex items-center gap-2">
        {ticketOptions.map(({ variant, label }) => {
          const isActive = selectedLeftMenu2 === label;

          return (
            <div
              key={label}
              className={`flex-1 flex mx-1 py-2 justify-center items-center gap-1 cursor-pointer rounded-[14px] ${
                isActive ? "bg-black text-white" : "bg-transparent text-black"
              }`}
              onClick={() => setSelectedLeftMenu2(label)}
            >
              {/* آیکون‌ها */}
              {variant === "oneWay" ? (
                // آیکون ساده هواپیما
                <img
                  src={airplane}
                  alt={label}
                  className={`w-4 h-4 ${isActive ? "invert" : ""}`}
                />
              ) : (
                // رفت و برگشت: دایره‌ی خط‌چین + هواپیما که بهش وصله
                <div className="relative w-6 h-5 flex items-center">
                  {/* دایره‌ی خط‌چین سمت چپ */}
                  <div
                    className={`absolute left-0 w-4 h-4 rounded-full border border-dashed ${
                      isActive ? "border-white" : "border-black"
                    }`}
                  />
                  {/* هواپیما که به دایره وصله */}
                  <img
                    src={airplane}
                    alt={label}
                    className={`absolute right-1 w-3 h-3 ${
                      isActive ? "invert" : ""
                    }`}
                  />
                </div>
              )}

              <span className="text-xs">{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TicketType;
