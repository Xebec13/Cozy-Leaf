import SakuraPetals from "./styles/SakuraPetals";
import LeafIcon from "./styles/LeafIcon";
import {ScrollToTop,HtmlBcg} from './components/'

import {
  EventsTile,
  GalleryTile,
  MenuTile,
  PromoTile,
  OrderTile,
  ReservationTile,
  AboutTile,
  ContactTile,
} from "./tiles";

const Nav = () => {
  return (
    <nav className="min-h-screen bg-transparent p-5 md:p-15">
      <ScrollToTop/>
      <HtmlBcg/>
      <SakuraPetals petalCount={40} color1="text-thulian" color2="text-carolina" />
      <ul className="block md:grid md:grid-cols-[2fr_2fr_2fr_2fr_0.5fr] md:grid-rows-5 gap-0.5 w-full h-full uppercase text-seashell">
        {/* Logo */}
        <div className="tile-hover p-5 relative col-span-2 row-span-2 flex flex-col justify-center items-center text-seashell overflow-hidden">
          
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
