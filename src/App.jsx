import "./App.css";
import CmHero from "./components/CmHero";
import CmNavBar from "./components/CmNavbar";
function App() {
  return (
    <>
      <div className="mx-[108px]">
        <CmNavBar />
        <CmHero />
      </div>
    </>
  );
}

export default App;
