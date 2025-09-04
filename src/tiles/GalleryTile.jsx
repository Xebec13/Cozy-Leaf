import { Link } from "react-router-dom";

const GalleryTile = () => {
  return (
    <li className="tile-hover col-span-2 bg-skymagenta p-5">
      <Link
        to="/gallery"
        className="w-full h-full flex justify-center items-center text-seashell text-fluid font-semibold italic"
      >
        Gallery
      </Link>
    </li>
  );
};

export default GalleryTile;