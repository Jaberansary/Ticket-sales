import { FaArrowLeft } from "react-icons/fa6";

const MoreArticleCard = ({ image }) => {
  return (
    <div className="article-card w-[392px] flex  p-3.5 bg-neutral-100 rounded-[24px] gap-2">
      <div
        className="article-image min-w-[124px] h-[124px] rounded-lg bg-cover bg-center relative overflow-hidden flex flex-col justify-between"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="article-bottom flex flex-col gap-2">
        <p className="font-bold text-xs">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </p>
        <p className="text-xs">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از ...
        </p>
        <div className="date-action text-xs flex justify-between items-center">
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

export default MoreArticleCard;
