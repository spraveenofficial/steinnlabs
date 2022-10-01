import ladyImage from "../../assets/lady.svg";

const Navbar = () => {
  return (
    <div className="bg-red-300 h-32 min-w-full flex text-center justify-between items-center mobile:justify-center">
      {/* Svg Here */}
      <div className="mobile:hidden">
        <img className="w-20 h-20" src={ladyImage} alt="" />
      </div>
      {/* Title Goes here */}
      <div className="mr-20 font-bold text-white mobile:mr-0">
        <h1 className="text-3xl ">Your Favorite Tunes</h1>
        <p>All Light and Darks</p>
      </div>
    </div>
  );
};

export { Navbar };
