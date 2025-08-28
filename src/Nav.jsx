import SakuraPetals from './styles/SakuraPetals'
import LeafIcon from "./styles/LeafIcon";

const Nav = () => {
  return (
    <nav className="h-full md:h-screen bg-viridian p-5 md:p-15">
      <ul className="block md:grid md:grid-cols-[2fr_2fr_2fr_2fr_0.5fr] md:grid-rows-5 w-full h-full">
        <div className="nav-hover relative col-span-2 row-span-2 flex flex-col justify-center items-center text-seashell overflow-hidden cursor-pointer">
          <SakuraPetals petalCount={50} />
          <LeafIcon className="relative z-10 size-16 md:size-1/3 text-thulian animate-wind" />
          <h1 className="h1-fluid font-extrabold whitespace-nowrap relative z-10">
            Cozy Leaf
          </h1>
          <p className="text-xl md:text-2xl text-thulian relative z-10">
            Vegan Restaurant
          </p>
        </div>
        <li className="nav-hover text-softblack text-[3rem] md:text-fluid font-semibold p-1 italic flex justify-center items-center col-span-2 bg-carolina cursor-pointer">
          Gallery
        </li>
        <li className="nav-hover text-softblack text-[3rem] md:text-fluid font-semibold p-1 italic flex justify-center items-center col-span-2 row-span-2 bg-thulian cursor-pointer">
          Menu
        </li>
        <li className="nav-hover text-softblack text-[3rem] md:text-fluid font-semibold p-1 italic flex justify-center items-center bg-thulian-40 cursor-pointer ">
          Events
        </li>
        <li className="nav-hover text-softblack text-[3rem] md:text-fluid font-semibold p-1 italic flex justify-center items-center bg-thulian-60 cursor-pointer">
          Promo
        </li>
        <li className="nav-hover text-softblack text-[3rem] md:text-fluid font-semibold p-1 italic flex justify-center items-center col-span-4 bg-seashell cursor-pointer">
          Order
        </li>
        <li className="nav-hover text-softblack text-[3rem] md:text-fluid font-semibold p-1 italic flex justify-center items-center col-span-3 bg-carolina-60 cursor-pointer">
          Reservation
        </li>
        <li className="nav-hover text-[3rem] md:text-fluid-desktop font-semibold p-1 italic flex justify-center items-center bg-shocking-40 cursor-pointer">
          About
        </li>
        <li className="nav-hover italic flex justify-center items-center col-start-5 row-start-1 row-span-5 bg-thulian-80 cursor-pointer">
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
