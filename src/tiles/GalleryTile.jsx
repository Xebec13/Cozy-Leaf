import { Link } from "react-router-dom";

const GalleryTile = () => {
  return (
    <li className="tile-hover col-span-2 bg-carolina">
      <Link
        to="/gallery"
        className="w-full h-full flex justify-center items-center text-seashell text-[3rem] md:text-fluid font-semibold italic"
      >
        Gallery
      </Link>
    </li>
  );
};

export default GalleryTile;