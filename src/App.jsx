import "./App.css";
import Articles from "./components/Articles";
import CmHero from "./components/CmHero";
import CmNavBar from "./components/CmNavbar";
import AboutSection from "./components/AboutSection";
import NewTours from "./components/NewTours";
import FaqSection from "./components/FaqSection";
import ContactUs from "./components/ContactUs";
import NewsletterSection from "./components/NewsletterSection";
function App() {
  return (
    <>
      <div className="mx-auto max-w-[1223px] flex flex-col gap-20">
        <CmNavBar />
        <CmHero />
        <NewTours />
        <AboutSection />
        <Articles />
        <FaqSection />
        <ContactUs />
        <NewsletterSection />
      </div>
    </>
  );
}

export default App;
