import Logo from "../assets/images/Logo.png";
import login from "../assets/svg/login.svg";

export default function Navbar() {
  return (
    <nav className="w-full bg-[var(--color-white-secondary)] rounded-[18px] h-15 mt-6 py-4">
      <div className="px-4 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <img
            src={Logo}
            alt="DotOne Logo"
            className="w-[58px] h-11 object-contain"
          />
          <ul className="flex items-center gap-10 text-[var(--color-dark-secondary)] text-base font-normal">
            <li className="cursor-pointer">جستجو بلیط</li>
            <li className="cursor-pointer">درباره ما</li>
            <li className="cursor-pointer">پرسش های متداول</li>
            <li className="cursor-pointer">تماس با ما</li>
          </ul>
        </div>

        <button className="bg-[var(--color-dark)] text-[var(--color-white)] px-5 py-2 rounded-[14px] flex items-center justify-end gap-1 w-[162px] h-10">
          <img src={login} className="w-5 h-5 invert" />
          <span className="align-middle text-sm">ورود / ثبت نام</span>
        </button>
      </div>
    </nav>
  );
}
