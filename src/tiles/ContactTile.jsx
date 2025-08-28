import { Link } from "react-router-dom";

const ContactTile = () => {
  return (
    <li className="tile-hover col-start-5 p-2 row-start-1 row-span-5 bg-thulian-80">
      <Link
        to="/contact"
        className="w-full h-full flex flex-col justify-start items-center text-seashell text-[2rem]/10 md:text-fluid font-semibold italic"
      >
        <span>C</span>
        <span>O</span>
        <span>N</span>
        <span>T</span>
        <span>A</span>
        <span>C</span>
        <span>T</span>
      </Link>
    </li>
  );
};

export default ContactTile;