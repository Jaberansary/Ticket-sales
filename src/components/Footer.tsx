import MainLogo from "../assets/images/MainLogo.png";

export default function Footer() {
  return (
    <section className="w-full bg-white pt-10 pb-4" dir="rtl">
        <div className="flex flex-col items-center gap-6">
          <img
            src={MainLogo}
            alt="DotOne Logo"
            className="w-[119px] h-[89px] object-contain mb-2"
          />
          <p className="text-center text-sm text-black leading-7 max-w-lg">
            متن &quot;لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم...&quot; یک
            متن ساختگی است که معمولا در طراحی صفحات وب و متون چاپی به عنوان
            جایگزین موقت.
          </p>
          <div className="w-full flex justify-center mt-2">
            <div className="w-full max-w-[483px] h-10 bg-[#f5f5f5] rounded-[14px] p-1 flex items-center justify-between">
              <button
                type="button"
                className="h-8 px-6 rounded-[10px] bg-black text-white text-xs font-bold flex-shrink-0"
              >
                عضویت در خبرنامه
              </button>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                className="flex-1 bg-transparent border-none outline-none px-4 text-left text-xs placeholder:text-[#CFCFCF
                ]"
              />
            </div>
          </div>
          <nav className="mt-8">
            <ul className="flex flex-wrap items-center justify-center gap-12 text-base">
              <li className="cursor-pointer text-[#424242] px-2">جستجو بلیط</li>
              <li className="cursor-pointer text-[#424242] px-2">درباره ما</li>
              <li className="cursor-pointer text-[#424242] px-2">پرسش های متداول</li>
              <li className="cursor-pointer text-[#424242] px-2">تماس با ما</li>
            </ul>
          </nav>
        </div>
        <div className="mt-6 border-top border-t border-[#DCDCDC] pt-2 w-[1224px]">
          <div className="flex items-center justify-between text-xs text-black">
            <span>کلیه حقوق محفوظ و متعلق به دات وان می‌باشد.</span>
            <span className="text-black transition cursor-pointer">
              قوانین و مقررات
            </span>
          </div>
        </div>

    </section>
  );
}
