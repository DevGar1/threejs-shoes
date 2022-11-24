import { useNavigate } from "react-router-dom";

const BadDevice = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-300">
      <div className="flex flex-col">
        <h2 className="text-center">404</h2>
        <p>
          Esta página no cuenta con soporte para el dispositivo que estas utilizando, te invitamos a volver pronto para disfrutar
          de esta aplicación
        </p>
        <div className="flex justify-center">
          <button onClick={goToHome}>Go to home</button>
        </div>
      </div>
    </div>
  );
};

export default BadDevice;
