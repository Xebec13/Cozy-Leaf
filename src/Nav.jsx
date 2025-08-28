import SakuraPetals from "./styles/SakuraPetals";
import LeafIcon from "./styles/LeafIcon";

import EventsTile from "./tiles/EventTile";
import GalleryTile from "./tiles/GalleryTile";
import MenuTile from "./tiles/MenuTile";
import PromoTile from "./tiles/PromoTile";
import OrderTile from "./tiles/OrderTile";
import ReservationTile from "./tiles/ReservationTile";
import AboutTile from "./tiles/AboutTile";
import ContactTile from "./tiles/ContactTile";

const Nav = () => {
  return (
    <nav className="h-full bg-viridian p-5 md:p-15">
      <ul className="block md:grid md:grid-cols-[2fr_2fr_2fr_2fr_0.5fr] md:grid-rows-5 w-full h-full uppercase text-seashell">
        
        {/* Logo */}
        <div className="tile-hover p-5 relative col-span-2 row-span-2 flex flex-col justify-center items-center text-seashell overflow-hidden">
          <SakuraPetals petalCount={50} />
          <LeafIcon className="relative z-10 size-16 md:size-1/3 text-thulian animate-wind" />
          <h1 className="h1-fluid font-extrabold whitespace-nowrap relative z-10">
            Cozy Leaf
          </h1>
          <p className="text-xl md:text-2xl font-bold text-thulian relative z-10">
            Vegan Restaurant
          </p>
        </div>

        {/* Tiles */}
        <GalleryTile />
        <MenuTile />
        <EventsTile />
        <PromoTile />
        <OrderTile />
        <ReservationTile />
        <AboutTile />
        <ContactTile />
      </ul>
    </nav>
  );
};

export default Nav;