import { Route, Routes } from "react-router-dom";
import { BadDevice } from "./pages";
import ARExperience from "./pages/ARExperience";
import Cart from "./pages/Cart";

export const paths = {
  home: "/",
  shoppingCart: "/buy",
  model: "/model",
  badDevice: "/bad/device",
};

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path={paths.home} element={<Cart />} />
        <Route path={paths.shoppingCart} />
        <Route path={paths.model} />
        <Route path={paths.badDevice} element={<BadDevice />} />
      </Routes>
    </>
  );
};
