import article1 from "../assets/images/article-1.jpg";
import article2 from "../assets/images/article-2.jpg";
import moreArticle1 from "../assets/images/more-article-1.jpg";
import moreArticle2 from "../assets/images/more-article-2.jpg";
import moreArticle3 from "../assets/images/more-article-3.jpg";
import arrowLeft from "../assets/svg/arrow-left.svg";

import TourCard from "./TourCard";
import ArticleCard from "./ArticleCard";
import MoreArticleCard from "./MoreArticleCard";
const Articles = () => {
  const articles = [
    { id: 1, image: article1 },
    { id: 2, image: article2 },
  ];

  const moreArticles = [
    { id: 1, image: moreArticle1 },
    { id: 2, image: moreArticle2 },
    { id: 3, image: moreArticle3 },
  ];
  return (
    <div className="new-tour flex flex-col gap-6">
      <div className="titels flex items-center gap-6">
        <div className="badge w-1.5 h-[50px] rounded-l-md bg-black flex-shrink-0"></div>

        <div className="title font-extrabold text-2xl flex-shrink-0">
          مقالات{" "}
        </div>

        <div className="text flex items-center gap-2 flex-1">
          <div className="dot w-2 h-2 rounded-full bg-black flex-shrink-0"></div>
          <p className="description text-xs">
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
        </div>

        <div className="more-button flex-shrink-0">
          <button className="flex bg-black rounded-[14px] text-white w-[184px] h-10 items-center justify-center gap-2">
            <span>مشاهده بیشتر</span>
            <img src={arrowLeft} className="w-5 h-5 invert" />
          </button>
        </div>
      </div>

      <div className="tours flex gap-6 justify-between overflow-y-auto ">
        {articles.map((article) => (
          <ArticleCard key={article.id} image={article.image} />
        ))}
        <div className="more-articles w-[392px] flex flex-col  gap-3">
          {moreArticles.map((article) => (
            <MoreArticleCard key={article.id} image={article.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
