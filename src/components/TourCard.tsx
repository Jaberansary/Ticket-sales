// TourCard.jsx
import { FaArrowLeft } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import tourLayout from "../assets/images/Rectangle4448.svg";

const TourCard = ({ image }) => {
  return (
    <div
      className="tour-item min-w-[288px] max-w-[288px] h-[333px] rounded-[28px] bg-cover bg-center relative overflow-hidden flex flex-col justify-between"
      style={{ backgroundImage: `url(${image})` }}
    >
      <img
        src={tourLayout}
        className="absolute bottom-0 left-0 w-full pointer-events-none"
      />

      <div className="date text-[10px] bg-stone-300 w-[88px] m-2.5 rounded-[15px] h-6 flex items-center justify-around relative">
        <LuCalendarDays size={17} />
        <p>15 تا 20 خرداد</p>
      </div>

      <div className="details text-stone-300 relative flex flex-col gap-0.5">
        <div className="top flex justify-between">
          <div className="title px-4 pt-2">تور شیراز</div>
          <div className="price w-[170px] h-[39px] bg-black/70 rounded-r-[28px] flex flex-col justify-center items-center">
            <div className="price-wrapper">
              <div className="price text-[8px]">تومان</div>
              <div className="number">9,820,000</div>
            </div>
          </div>
        </div>
        <div className="divider w-[101px] h-[1px] mx-3 bg-stone-300/50"></div>
        <div className="bottom flex justify-between px-4 py-2.5 gap-4">
          <div className="description text-[10px]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم...
          </div>
          <button className="show flex text-xs items-center gap-2">
            <span>مشاهده</span>
            <FaArrowLeft />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
