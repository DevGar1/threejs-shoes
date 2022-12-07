import { useState } from "react";
import { images } from "../../assets/images";
import { useAnimation } from "../../hooks";

const Gallery = () => {
  const [index, setIndex] = useState(3);
  const isMounted = useAnimation(index > -1, 500);
  const [gallery] = useState([
    images.Shoe,
    images.Shoe2,
    images.Shoe3,
    images.Shoe4,
  ]);
  const changeGallery = (index: number) => {
    setIndex(index);
  };

  return (
    <div
      className="w-full h-[calc(50vh-28px)] flex flex-col bg-[rgba(0,0,0,0.05)]   "
      style={{ border: "0.3px solid rgba(0,0,0,0.3)" }}
    >
      <div className="w-full h-5/6 ">
        <div className={`w-full h-full `}>
          <img
            src={gallery[index]}
            alt="Shoe"
            className={`w-full object-cover image is ${isMounted && "mounted"}`}
          />
        </div>
      </div>
      <div className="w-full  h-1/6 flex justify-end gap-1  p-1">
        <img
          src={images.Shoe2}
          alt="Shoe"
          className="h-full  border-black bg-white rounded-md hover:bg-gray-100 cursor-pointer"
          style={{ border: "0.2px solid rgba(0,0,0,0.3)" }}
          onClick={() => changeGallery(0)}
        />
        <img
          src={images.Shoe3}
          alt="Shoe"
          className="h-full  border-black bg-white rounded-md hover:bg-gray-100 cursor-pointer"
          style={{ border: "0.2px solid rgba(0,0,0,0.3)" }}
          onClick={() => changeGallery(1)}
        />
        <img
          src={images.Shoe4}
          alt="Shoe"
          className="h-full  border-black bg-white rounded-md hover:bg-gray-100 cursor-pointer"
          style={{ border: "0.2px solid rgba(0,0,0,0.3)" }}
          onClick={() => changeGallery(2)}
        />
      </div>
    </div>
  );
};

export default Gallery;
