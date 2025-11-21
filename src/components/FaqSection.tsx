import { useState } from "react";
import FaqImage from "../assets/images/FaqImage.png";
import arrowLeft from "../assets/svg/arrow-left.svg";
import add from "../assets/svg/add.svg";
import minus from "../assets/svg/minus.svg";
const faqs = [
  {
    id: 1,
    question: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",
    answer:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است.",
  },
  {
    id: 2,
    question: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",
    answer:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است.",
  },
  {
    id: 3,
    question: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",
    answer:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است.",
  },
  {
    id: 4,
    question: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",
    answer:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است.",
  },
  {
    id: 5,
    question: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟",
    answer:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم است.",
  },
];

export default function FaqSection() {
  const [activeId, setActiveId] = useState<number | null>(faqs[2].id);

  return (
    <section className="w-full flex justify-between gap-6 h-[443px]">
      <div className="w-[392px] h-full rounded-[32px] overflow-hidden">
        <img
          src={FaqImage}
          alt="سوالات متداول"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 h-full flex flex-col">
        <div className="titels flex items-center gap-6">
          <div className="badge w-1.5 h-[50px] rounded-l-md bg-black flex-shrink-0" />
          <div className="title font-extrabold text-2xl flex-shrink-0">
            پرسش‌های متداول
          </div>

          <div className="text flex items-center gap-2 flex-1">
            <div className="dot w-2 h-2 rounded-full bg-black flex-shrink-0" />
            <p className="description text-xs">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است
            </p>
          </div>

          <div className="more-button flex-shrink-0">
            <button className="flex bg-black rounded-[14px] text-white w-[184px] h-10 items-center justify-center gap-2">
              <span>مشاهده بیشتر</span>
              <img src={arrowLeft} className="w-5 h-5 invert" />
            </button>
          </div>
        </div>
        <div className="mt-6 flex-1 flex flex-col justify-between">
          {faqs.map((item) => {
            const isActive = activeId === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveId(isActive ? null : item.id)}
                className={`w-full text-right rounded-[14px] px-4 py-3 font-semibold text-sm transition-colors duration-200
                  ${
                    isActive
                      ? "bg-black text-white"
                      : "bg-[var(--color-white-secondary)] text-black"
                  }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold">{item.question}</span>
                  <span className="text-xl leading-none">
                    {isActive ? (
                      <img src={minus} className="w-5 h-5 invert" />
                    ) : (
                      <img src={add} className="w-5 h-5" />
                    )}
                  </span>
                </div>
                {isActive && (
                  <div className="mt-3 pt-3 border-t border-[#373737]">
                    <p className="text-xs leading-relaxed font-normal">
                      {item.answer}
                    </p>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
