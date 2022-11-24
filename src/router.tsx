import { Route, Routes } from "react-router-dom";
import { BadDevice, Home } from "./pages";

export const paths = {
  home: "/",
  shoppingCart: "/buy",
  model: "/model",
  badDevice: "/bad/device",
};

export const Router = () => {
  return (
    <Routes>
      <Route path={paths.home} element={<Home />} />
      <Route path={paths.shoppingCart} />
      <Route path={paths.model} />
      <Route path={paths.badDevice} element={<BadDevice />} />
    </Routes>
  );
};
