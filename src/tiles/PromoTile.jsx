import { Link } from "react-router-dom";

const PromoTile = () => {
  return (
    <li className="tile-hover bg-thistle text-seashell p-5">
      <Link
        to="/promo"
        className="w-full h-full flex justify-center items-center text-fluid font-semibold italic"
      >
        Promo
      </Link>
    </li>
  );
};

export default PromoTile;