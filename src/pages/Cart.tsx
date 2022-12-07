import { useEffect } from "react";
import { App } from "../3D";

const Cart = () => {
  useEffect(() => {
    const container = document.getElementById("cart");
    if (!container) throw new Error("Problems with the container");
    new App(container);
  }, []);
  return <canvas id="cart" className="w-full h-screen bg-slate-300"></canvas>;
};

export default Cart;
