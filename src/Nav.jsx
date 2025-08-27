const Nav = () => {
  return (
    <nav className="h-screen p-15">
      <ul className="grid grid-cols-[2fr_2fr_2fr_2fr_0.5fr] grid-rows-5 w-full h-full">
        <li className="col-span-2 row-span-2 bg-viridian ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-16 h-16 text-thulian animate-wind"
          >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>
          <h1>Cozy Leaft</h1>
          <p>Vegan Restaurant</p>
        </li>
        <li className="col-span-2 bg-carolina">Gallery</li>
        <li className="col-span-2 row-span-2 bg-thulian">Menu</li>
        <li className="bg-thulian-40 ">Events</li>
        <li className="bg-viridian-40">Promotions</li>
        <li className="col-span-4 bg-seashell">Order Now</li>
        <li className="col-span-3 border-1 border-black bg-carolina-60">
          Reservation
        </li>
        <li className=" bg-shocking-40">About Us</li>
        <li className="col-start-5 row-start-1 row-span-5 bg-thulian-80">
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
