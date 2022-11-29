import { icons } from "../assets/icons";

const Header = () => {
  return (
    <header className="w-full h-14 p-3 flex justify-between " style={{ background: " #D58F06" }}>
      <div className="h-full flex items-center">
        <img src={icons.HamburgetMenu} alt="hamburger menu" className="object-cover h-full" />
      </div>
      <div className="h-full flex items-center text-white">
        <h2>Three Shoes</h2>
      </div>
      <div className="h-full flex items-center">
        <img src={icons.ShoppingCart} alt="shopping cart icon" className="object-cover h-full" />
      </div>
    </header>
  );
};

export default Header;
