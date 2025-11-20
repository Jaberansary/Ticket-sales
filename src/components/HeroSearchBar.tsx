import { BiTransferAlt } from "react-icons/bi";
import { CiCalendar, CiLocationOn, CiUser } from "react-icons/ci";
import { FiChevronDown, FiSearch } from "react-icons/fi";

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
              <CiCalendar className="text-base" />
              <span className="text-[#999999] text-[12px]">تاریخ رفت</span>
            </div>
            <FiChevronDown className="text-[12px]" />
          </div>

          <div className="w-[158px] flex items-center justify-between px-3 py-4 bg-[var(--color-white)] rounded-[14px]">
            <div className="flex items-center gap-2">
              <CiCalendar className="text-base" />
              <span className="text-[#999999] text-[12px]">تاریخ برگشت</span>
            </div>
            <FiChevronDown className="text-[12px] text-[#999999]" />
          </div>

          <div className="relative flex items-center gap-2">
            <div className="w-[190px] flex items-center justify-between px-3 py-4 bg-[var(--color-white)] rounded-[14px]">
              <div className="flex items-center gap-2">
                <CiLocationOn className="text-base" />
                <span className="text-[#999999] text-[12px]">مبدا</span>
              </div>
              <FiChevronDown className="text-[12px]" />
            </div>

            <div className="w-[190px] flex items-center justify-between px-3 py-4 bg-white rounded-[14px] shadow-sm ">
              <div className="flex items-center gap-2">
                <CiLocationOn className="text-base" />
                <span className="text-[#999999] text-[12px]">مقصد</span>
              </div>
              <FiChevronDown className="text-[12px]" />
            </div>
            <button
              className="
      absolute left-1/2 top-1/2 
       -translate-x-1/2
       -translate-y-1/2

      w-9 h-9 flex items-center justify-center"
            >
              <BiTransferAlt className="text-[14px]" />
            </button>
          </div>

          <div className="w-[130px] flex items-center justify-between px-3 py-4 bg-[var(--color-white)] rounded-[14px]">
            <div className="flex items-center gap-2">
              <CiUser className="text-base" />
              <span className="text-[#999999] text-[12px]">تعداد مسافر</span>
            </div>
            <FiChevronDown className="text-[12px]" />
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
          <FiSearch className="text-sm" />
        </button>
      </div>
    </div>
  );
};

export default HeroSearchBar;
