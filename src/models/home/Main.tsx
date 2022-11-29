import { images } from "../../assets/images";

const Main = () => {
  return (
    <main className="h-[calc(50vh-28px)] flex flex-col items-center ">
      <div className="h-1/2">
        <img src={images.Shoe} alt="Shoe" className="h-full object-cover" />
      </div>
      <div className="w-full h-full py-4 flex flex-col items-center ">
        <h3 style={{ color: " #D58F06" }}>Nike Dunk Low Polvo Oliva </h3>
        <div className="w-3/4 flex justify-evenly mt-auto">
          <button className="py-1 px-4 rounded-full" style={{ background: " #D58F06", color: 'white'}}>Comprar</button>
          <button className="py-1 px-4 rounded-full" style={{ background: " #D58F06", color: 'white'}}>Experiencia VR</button>
        </div>
      </div>
    </main>
  );
};

export default Main;
