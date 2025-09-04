import { Link } from "react-router-dom";

const MenuTile = () => {
  return (
    <li className="tile-hover col-span-2 row-span-2 bg-plumrose p-5">
      <Link
        to="/menu"
        className="w-full h-full flex justify-center items-center text-seashell text-fluid font-semibold italic"
      >
        Menu
      </Link>
    </li>
  );
};

export default MenuTile;