import { useState } from "react";
import { icons } from "../assets/icons";
import Menu from "./Menu";

const Header = () => {
  const [isMenuActive, setisMenuActive] = useState(false);

  return (
    <>
      <header
        className="w-full h-14 p-3 flex justify-between "
        style={{ background: " #D58F06" }}
      >
        <div className="h-full flex items-center">
          <img
            src={icons.HamburgetMenu}
            alt="hamburger menu"
            className="object-cover h-full cursor-pointer"
            onClick={() => setisMenuActive(true)}
          />
        </div>
        <div className="h-full flex items-center text-white">
          <h2>Three Shoes</h2>
        </div>
        <div className="h-full flex items-center">
          <img
            src={icons.ShoppingCart}
            alt="shopping cart icon"
            className="object-cover h-full"
          />
        </div>
      </header>
      <Menu close={() => setisMenuActive(false)} isActive={isMenuActive} />
    </>
  );
};

export default Header;
