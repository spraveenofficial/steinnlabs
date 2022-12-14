import { useRef } from "react";
import { setCorousel } from "../../hooks/carousel";
import { SongCard } from "../SongCard";
import "./style.css";

const Carousel = ({ name, title, type }) => {
  const ref = useRef();
  const { next, prev } = setCorousel(ref);
  return (
    <div ref={ref}>
      <div className="flex justify-between items-center text-center">
        <h1 className="text-xl font-bold text-gray-500">{title}</h1>
        <div className="w-full flex-1 mx-2 h-[1px] bg-gray-500 rounded-full relative"></div>
        <div className="flex">
          <button
            className="carousel-prev opacity-[0.1] text-blue-700"
            onClick={prev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
            </svg>
          </button>
          <button className="carousel-next text-blue-700" onClick={next}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center h-[12rem]">
        <div className="w-full">
          <div className="carousel-main overflow-auto scroll-smooth scroll">
            <div className="carousel-content">
              {name.map((item, id) => {
                if (type === "songs") {
                  return (
                    <SongCard key={id} name={item.name} images={item.images} />
                  );
                } else {
                  return (
                    <SongCard key={id} name={item.name} images={item.icons} />
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Carousel };
