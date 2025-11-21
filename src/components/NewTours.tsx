import tourImg1 from "../assets/images/tourImg-1.jpg";
import tourImg2 from "../assets/images/tourImg-2.jpg";
import tourImg3 from "../assets/images/tourImg-3.jpg";
import tourImg4 from "../assets/images/tourImg-4.jpg";
import arrowLeft from "../assets/svg/arrow-left.svg";
import TourCard from "./TourCard";

const NewTours = () => {
  const tours = [
    { id: 1, image: tourImg1 },
    { id: 2, image: tourImg2 },
    { id: 3, image: tourImg3 },
    { id: 4, image: tourImg4 },
  ];
  return (
    <div className="new-tour flex flex-col gap-6">
      <div className="titels flex items-center gap-6">
        <div className="badge w-1.5 h-[50px] rounded-l-md bg-black flex-shrink-0"></div>

        <div className="title font-extrabold text-2xl flex-shrink-0">
          جدیدترین تورها
        </div>

        <div className="text flex items-center gap-2 flex-1">
          <div className="dot w-2 h-2 rounded-full bg-black flex-shrink-0"></div>
          <p className="description">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
        </div>

        <div className="more-button flex-shrink-0">
          <button className="flex bg-black rounded-[14px] text-white w-[184px] h-10 items-center justify-center gap-2">
            <span>مشاهده بیشتر</span>
            <img src={arrowLeft} className="w-5 h-5 invert" />
          </button>
        </div>
      </div>

      <div className="tours flex gap-2 justify-between overflow-y-auto pb-2">
        {tours.map((tour) => (
          <TourCard key={tour.id} image={tour.image} />
        ))}
      </div>
    </div>
  );
};

export default NewTours;
