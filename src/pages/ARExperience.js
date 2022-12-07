import "@google/model-viewer/lib/model-viewer";
import { Header } from "../components";

const ARExperience = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <Header />
      <div className="w-full flex items-center justify-center grow bg-slate-200 ">
        <model-viewer
          alt="Neil Armstrong's Spacesuit from the Smithsonian Digitization Programs Office and National Air and Space Museum"
          src="/shoes.glb"
          ar
          shadow-intensity="1"
          camera-controls
        >
          <div className="w-full">
            <button slot="ar-button" className="mx-auto">
              👋 Activate AR
            </button>
          </div>
        </model-viewer>
      </div>
    </div>
  );
};

export default ARExperience;
