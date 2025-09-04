import { Link } from "react-router-dom";

const OrderTile = () => {
  return (
    <li className="tile-hover col-span-4 bg-seashell p-5">
      <Link
        to="/order"
        className="w-full h-full flex justify-center items-center text-plumrose h1-fluid font-semibold italic"
      >
        Order
      </Link>
    </li>
  );
};

export default OrderTile;