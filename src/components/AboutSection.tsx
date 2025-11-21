// AboutSection.tsx
import AboutUs from "./AboutUs";
import AbuotUsFlowChart from "./AbuotUsFlowChart";

export default function AboutSection() {
  return (
    <section className="w-full flex flex-col gap-8">
      {/* ردیف ۱: تیتر درباره ما */}
      <div className="flex items-center justify-start gap-3">
        <div className="badge w-1.5 h-[50px] rounded-l-md bg-black flex-shrink-0"></div>
        <span className="title font-extrabold text-2xl flex-shrink-0">
          درباره ما
        </span>
      </div>

      {/* ردیف ۲: توضیحات + چارت */}
      <div className="flex items-start justify-between gap-10">
        {/* ستون راست — توضیحات */}
        <AboutUs />

        {/* ستون چپ — چارت */}
        <AbuotUsFlowChart />
      </div>
    </section>
  );
}
