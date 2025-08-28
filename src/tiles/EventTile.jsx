import { Link } from "react-router-dom";

const EventsTile = () => {
  return (
    <li className="tile-hover bg-thulian-40">
      <Link
        to="/events"
        className="w-full h-full flex justify-center items-center text-seashell text-[3rem] md:text-fluid font-semibold italic"
      >
        Events
      </Link>
    </li>
  );
};

export default EventsTile;