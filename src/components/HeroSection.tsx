import Hero from "../assets/images/Hero.jpg";
import HeroSearchBar from "./HeroSearchBar";
import ReserveType from "./ReserveType";
import TicketType from "./TicketType";
export default function HeroSection() {
  return (
    <div
      className="relative w-full h-[562px] bg-cover bg-center rounded-[40px] px-20 mb-10"
      style={{ backgroundImage: `url(${Hero})` }}
    >
      <ReserveType />
      <TicketType />
      <HeroSearchBar />
    </div>
  );
}
