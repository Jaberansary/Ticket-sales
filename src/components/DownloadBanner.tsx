import { FaArrowLeft, FaChevronLeft } from "react-icons/fa6";
import planeImg from "../assets/images/plane.png";

const DownloadBanner = () => {
  return (
    <section className="w-full">
      <div className="flex w-full max-w-[1224px]   h-[340px] rounded-3xl overflow-hidden ">
        <div
          dir="rtl"
          className="  w-[728px] flex flex-col justify-center py-[60px] px-[45px] gap-6 bg-gradient-to-l from-neutral-100 to-black"
        >
          {/* Titles */}
          <div className="text-right space-y-2 text-xl font-bold">
            <h2 className=" text-black">
              لورم ایپسوم متن ساختگی با تولید سادگی
            </h2>
            <button className="flex items-center gap-2 text-neutral-700">
              <span>مشاهده لینک دانلود</span>
              <FaChevronLeft size={15} />
            </button>
          </div>

          {/* Download Button*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md ml-auto">
            <button className="flex items-center justify-between w-[192px] gap-3 bg-black text-white px-3.5 py-2 rounded-[10px] text-base">
              <span>دانلود نسخه اندروید</span>
              <FaArrowLeft className="shrink-0 translate-y-1" size={20} />
            </button>

            <button className="flex items-center justify-between w-[192px] gap-3 bg-black text-white px-3.5 py-2 rounded-[10px] text-base">
              <span>دانلود نسخه ویندوز</span>
              <FaArrowLeft className="shrink-0 translate-y-1" size={20} />
            </button>

            <button className="flex items-center justify-between w-[192px] gap-3 bg-black text-white px-3.5 py-2 rounded-[10px] text-base">
              <span>دانلود نسخه IOS</span>
              <FaArrowLeft className="shrink-0 translate-y-1" size={20} />
            </button>

            <button className="flex items-center justify-between w-[192px] gap-3 bg-black text-white px-3.5 py-2 rounded-[10px] text-base">
              <span>وب اپلیکیشن</span>
              <FaArrowLeft className="shrink-0 translate-y-1" size={20} />
            </button>
          </div>
        </div>

        {/* Image*/}
        <div className="w-[496px] h-[340px] overflow-hidden flex items-center justify-center bg-black">
          <img
            src={planeImg}
            alt="airplane"
            className="w-full h-full object-cover object-center rounded-l-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadBanner;
