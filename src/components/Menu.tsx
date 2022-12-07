import { FC } from "react";
import { icons } from "../assets/icons";
import { images } from "../assets/images";
import { useAnimation } from "../hooks";

interface Props {
  isActive: boolean;
  close: () => void;
}

const Menu: FC<Props> = ({ isActive, close }) => {
  const hasTransitionedIn = useAnimation(isActive, 500);

  return (
    <>
      {(isActive || hasTransitionedIn) && (
        <div
          className={`absolute top-0 w-full h-screen bg-[rgba(0,0,0,0.4)]  modal ${
            hasTransitionedIn && "in"
          } ${isActive && "visible"}`}
          onClick={(event) => event.stopPropagation()}
        >
          <div
            className={`w-3/5 h-screen relative flex justify-center flex-col  card ${
              hasTransitionedIn && "in"
            } ${isActive && "visible"}  `}
          >
            <div className="w-full flex justify-center py-6  bg-white">
              <img
                src={images.Logo}
                alt="logo"
                className="h-full object-cover rounded-full "
              />
            </div>
            <ul className="w-full grow bg-white py-6 px-4">
              <li className="w-full h-10 py-4 px-2 flex items-center">
                <img
                  src={icons.Home}
                  alt="icon"
                  className="w-9 object-contain "
                />
                <p className="pl-2">Home</p>
              </li>
              <li className="w-full h-10 py-4 px-2 flex items-center">
                <img
                  src={icons.VR}
                  alt="icon"
                  className="w-9 object-contain "
                />
                <p className="pl-2">Experiencia VR</p>
              </li>
              <li className="w-full h-10 py-4 px-2 flex items-center">
                <img
                  src={icons.AR}
                  alt="icon"
                  className="w-9 object-contain "
                />
                <p className="pl-2">Experiencia AR</p>
              </li>
              <li className="w-full h-10 py-4 px-2 flex items-center">
                <img
                  src={icons.Cart}
                  alt="icon"
                  className="w-9 object-contain "
                />
                <p className="pl-2">Comprar</p>
              </li>
            </ul>
            <div className="absolute top-4 right-4">
              <img
                src={icons.Close}
                alt="close icon"
                className="h-4 object-contain cursor-pointer"
                onClick={close}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menu;
