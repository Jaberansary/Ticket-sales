import arrowLeft from "../assets/svg/arrow-left.svg";
import arrowLeftMore from "../assets/svg/arrowleft.svg";
import planeImg from "../assets/images/plane.png";

const DownloadBanner = () => {
  return (
    <section className="w-full">
      <div className="flex w-full max-w-[1224px]   h-[340px] rounded-3xl overflow-hidden ">
        <div
          dir="rtl"
          className="  w-[728px] flex flex-col justify-center py-[60px] px-[45px] gap-6 bg-gradient-to-l from-neutral-100 to-black"
        >
          <div className="text-right space-y-2 text-xl font-bold">
            <h2 className=" text-black">
              لورم ایپسوم متن ساختگی با تولید سادگی
            </h2>
            <button className="flex items-center gap-2 text-neutral-700">
              <span>مشاهده لینک دانلود</span>
             <img src={arrowLeftMore} className="w-3 h-3" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md ml-auto">
            <button className="flex items-center justify-between w-[192px] gap-3 bg-black text-white px-3.5 py-2 rounded-[10px] text-[15px]">
              <span>دانلود نسخه اندروید</span>
              <img src={arrowLeft} className="w-6 h-6 invert" />
            </button>

            <button className="flex items-center justify-between w-[192px] gap-3 bg-black text-white px-3.5 py-2 rounded-[10px] text-[15px]">
              <span>دانلود نسخه ویندوز</span>
              <img src={arrowLeft} className="w-6 h-6 invert" />
            </button>

            <button className="flex items-center justify-between w-[192px] gap-3 bg-black text-white px-3.5 py-2 rounded-[10px] text-[15px]">
              <span>دانلود نسخه IOS</span>
              <img src={arrowLeft} className="w-6 h-6 invert" />
            </button>

            <button className="flex items-center justify-between w-[192px] gap-3 bg-black text-white px-3.5 py-2 rounded-[10px] text-[15px]">
              <span>وب اپلیکیشن</span>
              <img src={arrowLeft} className="w-6 h-6 invert" />
            </button>
          </div>
        </div>
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
