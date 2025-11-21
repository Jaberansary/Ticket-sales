import { FaArrowLeft } from "react-icons/fa6";

const ArticleCard = ({ image }) => {
  return (
    <div className="article-card w-[392px] flex flex-col p-4 bg-neutral-100 rounded-[24px] gap-4">
      <div
        className="article-image h-[298px] rounded-[18px] bg-cover bg-center relative overflow-hidden flex flex-col justify-between"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="article-bottom flex flex-col gap-1">



      <p className="font-bold text-sm leading-[22px]">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است
      </p>
      <p className="text-xs leading-[22px]">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها
      </p>
      <div className="date-action flex text-xs justify-between items-center">
        <p className="text-neutral-500">24 خرداد 1403</p>
        <button className="flex bg-white rounded-[14px]  w-[133px] h-10 items-center justify-center gap-2">
          <span>مشاهده بیشتر</span>
          <FaArrowLeft />
        </button>
      </div>
      </div>
    </div>
  );
};

export default ArticleCard;
