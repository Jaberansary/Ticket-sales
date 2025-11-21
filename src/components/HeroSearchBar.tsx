
import calendar from "../assets/svg/calendar-2.svg";
import location from "../assets/svg/location.svg";
import arrowDown from "../assets/svg/arrow-down.svg";
import arrangeCircle from "../assets/svg/arrange-circle-2.svg";
import user from "../assets/svg/user.svg";
import search from "../assets/svg/search-normal.svg";

const HeroSearchBar = () => {
  return (
    <div
      className="
        absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2
        w-full px-10
      "
    >
      <div
        className="
          w-full bg-[var(--color-white-secondary)]
          rounded-[30px] px-6 py-4
          flex items-center gap-4
          text-xs h-[120px]
        "
      >
        <div
          className="
            flex-1 flex items-center
            gap-1/2
            justify-between
          "
        >
          <div className="w-[150px] flex items-center justify-between px-3 py-4 bg-[var(--color-white)] rounded-[14px]">
            <div className="flex items-center gap-2">
              <img src={calendar} className="w-4 h-4" />
              <span className="text-[#999999] text-[12px]">تاریخ رفت</span>
            </div>
            <img src={arrowDown} className="w-4 h-4" />
          </div>

          <div className="w-[158px] flex items-center justify-between px-3 py-4 bg-[var(--color-white)] rounded-[14px]">
            <div className="flex items-center gap-2">
              <img src={calendar} className="w-4 h-4" />
              <span className="text-[#999999] text-[12px]">تاریخ برگشت</span>
            </div>
            <img src={arrowDown} className="w-4 h-4" />
          </div>

          <div className="relative flex items-center gap-2">
            <div className="w-[190px] flex items-center justify-between px-3 py-4 bg-[var(--color-white)] rounded-[14px]">
              <div className="flex items-center gap-2">
                <img src={location} className="w-4 h-4" />
                <span className="text-[#999999] text-[12px]">مبدا</span>
              </div>
              <img src={arrowDown} className="w-4 h-4" />
            </div>

            <div className="w-[190px] flex items-center justify-between px-3 py-4 bg-[var(--color-white)] rounded-[14px] shadow-sm ">
              <div className="flex items-center gap-2">
                <img src={location} className="w-4 h-4" />
                <span className="text-[#999999] text-[12px]">مقصد</span>
              </div>
                <img src={arrowDown} className="w-4 h-4"/>
            </div>
            <button
              className="
      absolute left-1/2 top-1/2 
       -translate-x-1/2
       -translate-y-1/2

      w-9 h-9 flex items-center justify-center"
            >
              <img src={arrangeCircle} className="w-4 h-4" />
            </button>
          </div>

          <div className="w-[130px] flex items-center justify-between px-3 py-4 bg-[var(--color-white)] rounded-[14px]">
            <div className="flex items-center gap-2">
              <img src={user} className="w-4 h-4" />
              <span className="text-[#999999] text-[12px]">تعداد مسافر</span>
            </div>
            <img src={arrowDown} className="w-4 h-4" />
          </div>
        </div>

        <button
          className="
            flex items-center justify-center gap-2
            px-6 py-3 rounded-[14px]
            bg-black text-white
            shrink-0 h-[40px] w-[139px]
          "
        >
          <span className="text-sm text-[12px] font-extrabold">جستجو</span>
           <img src={search} className="w-4 h-4 invert" />
        </button>
      </div>
    </div>
  );
};

export default HeroSearchBar;
