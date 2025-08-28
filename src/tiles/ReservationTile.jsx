import { Link } from "react-router-dom";

const ReservationTile = () => {
  return (
    <li className="tile-hover col-span-3 bg-carolina-60">
      <Link
        to="/reservation"
        className="w-full h-full flex justify-center items-center text-seashell text-[3rem] md:text-fluid font-semibold italic"
      >
        Reservation
      </Link>
    </li>
  );
};

export default ReservationTile;