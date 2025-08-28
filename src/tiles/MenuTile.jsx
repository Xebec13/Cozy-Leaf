import { Link } from "react-router-dom";

const MenuTile = () => {
  return (
    <li className="tile-hover col-span-2 row-span-2 bg-thulian">
      <Link
        to="/menu"
        className="w-full h-full flex justify-center items-center text-seashell text-[3rem] md:text-fluid font-semibold italic"
      >
        Menu
      </Link>
    </li>
  );
};

export default MenuTile;