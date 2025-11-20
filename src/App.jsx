import "./App.css";
import CmHero from "./components/CmHero";
import CmNavBar from "./components/CmNavbar";
import NewTours from "./components/NewTours";
function App() {
  return (
    <>
      <div className="mx-[108px] flex flex-col gap-10">
        <CmNavBar />
        <CmHero />
        <NewTours />
      </div>
    </>
  )
}

export default App;
