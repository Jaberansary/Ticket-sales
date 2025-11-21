import call from "../assets/svg/call.svg";
import sms from "../assets/svg/sms-tracking.svg";
import location from "../assets/svg/location.svg";

const ContactUs = () => {
  return (
    <div className="w-full  flex justify-between gap-6">
      <div className="right-side flex flex-col gap-12">
        <div className="title flex flex-col gap-2">
          <div className="flex items-center gap-2 self-start">
            <div className="badge w-1.5 h-[50px] rounded-l-md bg-black flex-shrink-0"></div>
            <span className="text-2xl font-extrabold">تماس با ما</span>
          </div>
          <div className="text flex items-center gap-2 flex-1">
            <div className="dot w-2 h-2 rounded-full bg-black flex-shrink-0"></div>
            <p className="description text-sm max-w-[378px]">
              متن "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم..." یک متن
              ساختگی است.{" "}
            </p>
          </div>
        </div>
        <div className="icons flex flex-col gap-6">
          <div className="icon-item flex items-center gap-2.5">
            <div className="icon flex bg-black size-[52px] rounded-2xl items-center justify-center">
              <img
                src={location}
                className="w-9 h-9 invert"
              />
            </div>
            <p className="description">تهران، جهان کودک</p>
          </div>

          <div className="icon-item flex items-center gap-2.5">
            <div className="icon flex bg-black size-[52px] rounded-2xl items-center justify-center">
             <img
                src={sms}
                className="w-9 h-9 invert"
              />
            </div>
            <p className="description">johndoe@gmail.com</p>
          </div>

          <div className="icon-item flex items-center gap-2.5">
            <div className="icon flex bg-black size-[52px] rounded-2xl items-center justify-center">
              <img
                src={call}
                className="w-9 h-9 invert"
              />
            </div>
            <p className="description">021-12345678</p>
          </div>
        </div>
      </div>
      <div className="left-side flex w-full max-w-[808px] ">
        <div className="flex-1 bg-neutral-100 rounded-3xl p-5">
          <form className="h-full flex flex-col justify-between">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="">
                <label className="block text-sm   mb-2">نام:</label>
                <input
                  type="text"
                  placeholder="وارد کنید..."
                  className="w-full h-10 rounded-[14px] bg-white px-4 text-sm outline-none border border-transparent focus:border-black/10 placeholder:text-stone-300"
                />
              </div>

              <div className="">
                <label className="block text-sm   mb-2">نام خانوادگی:</label>
                <input
                  type="text"
                  placeholder="وارد کنید..."
                  className="w-full h-10 rounded-[14px] bg-white px-4 text-sm outline-none border border-transparent focus:border-black/10 placeholder:text-stone-300"
                />
              </div>

              <div className="">
                <label className="block text-sm   mb-2">ایمیل:</label>
                <input
                  type="email"
                  placeholder="وارد کنید..."
                  className="w-full h-10 rounded-[14px] bg-white px-4 text-sm outline-none border border-transparent focus:border-black/10 placeholder:text-stone-300"
                />
              </div>

              <div className="">
                <label className="block text-sm   mb-2">شماره تماس:</label>
                <input
                  type="text"
                  placeholder="وارد کنید..."
                  className="w-full h-10 rounded-[14px] bg-white px-4 text-sm outline-none border border-transparent focus:border-black/10 placeholder:text-stone-300"
                />
              </div>
            </div>
            <div className="mb-5">
              <label className="block text-sm   mb-2">توضیحات:</label>
              <textarea
                placeholder="وارد کنید..."
                className="w-full h-[76px] rounded-[21px] bg-white px-4 py-3 text-sm outline-none border border-transparent focus:border-black/10 resize-none placeholder:text-stone-300"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="w-[119px] h-10 rounded-[14px] bg-black text-white text-sm font-bold"
              >
                ارسال
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
