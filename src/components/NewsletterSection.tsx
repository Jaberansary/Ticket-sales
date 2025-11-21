import MainLogo from "../assets/images/MainLogo.png";

export default function NewsletterSection() {
  return (
    <section
      className="w-full bg-white py-10"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 px-4">
        <img
          src={MainLogo}
          alt="DotOne Logo"
          className=" w-[119px] h-[89px] object-contain mb-2"
        />
        <p className="text-center text-sm text-black leading-7 max-w-xl">
          متن &quot;لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم...&quot; یک
          متن ساختگی است که معمولا در طراحی صفحات وب و متون چاپی به عنوان
          جایگزین موقت.
        </p>
        <div className="w-full flex justify-center mt-4">
          <div className="w-full max-w-lg h-10 bg-[#f5f5f5] rounded-[14px] p-1 flex items-center gap-3">
            <button
              type="button"
              className="h-8 px-6 rounded-[10px] bg-black text-white text-xs font-bold flex-shrink-0"
            >
              عضویت در خبرنامه
            </button>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              className="flex-1 bg-transparent border-none outline-none px-4 text-left text-sm placeholder:text-[#c4c4c4]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
