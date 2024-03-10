import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import logo from "../assets/Logo.svg";

function Navbar() {
  const [active, setActive] = useState("hidden");

  const toggleMenu = () => {
    if (active === "hidden") {
      setActive("grid");
    } else {
      setActive("hidden");
    }
  };

  return (
    <nav className="w-100 min-h-[70px] border-b border-slate-500 ">
      <div className="container mx-auto flex h-[70px] items-center px-[15px] xl:px-0">
        <img
          src={logo}
          alt="Sounds Logo"
          width={30}
          height={30}
          className="mr-[35px]"
        />
        <div className="nav-left hidden gap-[35px] md:flex">
          <a href="#" className="active">
            About
          </a>
          <a href="#">Content</a>
          <a href="#">Contact</a>
        </div>
        <div className="nav-right ml-auto hidden gap-[35px] md:flex">
          <a href="#" className="text-primary-color">
            Try for free
          </a>
          <a href="#">Log in or Register</a>
        </div>
        <button className="ml-auto md:hidden" onClick={toggleMenu}>
          <IoIosMenu size={40} />
        </button>
      </div>
      <div
        className={`nav-mobile ${active} mt-[-10px] gap-[10px] px-[15px] pb-[25px] md:hidden`}
      >
        <a href="#" className="active">
          About
        </a>
        <a href="#">Content</a>
        <a href="#">Contact</a>
        <a href="#" className="text-primary-color">
          Try for free
        </a>
        <a href="#">Log in or Register</a>
      </div>
    </nav>
  );
}

export default Navbar;
