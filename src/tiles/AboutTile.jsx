import { Link } from "react-router-dom";

const AboutTile = () => {
  return (
    <li className="tile-hover bg-carolina p-5">
      <Link
        to="/about"
        className="w-full h-full flex justify-center items-center text-seashell text-fluid font-semibold italic"
      >
        About
      </Link>
    </li>
  );
};

export default AboutTile;