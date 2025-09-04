import { Link } from "react-router-dom";

const EventsTile = () => {
  return (
    <li className="tile-hover bg-carolina p-5">
      <Link
        to="/events"
        className="w-full h-full flex justify-center items-center text-seashell text-fluid font-semibold italic"
      >
        Events
      </Link>
    </li>
  );
};

export default EventsTile;