import { Link } from "react-router-dom";

const ReservationTile = () => {
  return (
    <li className="tile-hover col-span-3 bg-teal p-5">
      <Link
        to="/reservation"
        className="w-full h-full flex justify-center items-center text-seashell text-fluid font-semibold italic"
      >
        Reservation
      </Link>
    </li>
  );
};

export default ReservationTile;