import React from "react";

const SongCard = ({ name, images }) => {
  return (
    <div className="songCard cursor-pointer w-40 flex justify-center items-center flex-col overflow-hidden">
      <img src={images[0].url} alt="song" className="w-36 h-36 rounded-md" />
      <p className="text-black font-bold text-sm">{name}</p>
    </div>
  );
};

export { SongCard };
