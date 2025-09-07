import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavPage = ({ iconColor = "text-white", overlayClassName = "bg-black text-white" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-4 z-50">
      {/* Ikona hamburgera */}
      {!isOpen && (
        <button
          className={`flex items-center justify-center w-10 h-10 text-3xl cursor-pointer backdrop-blur-xl rounded-full ${iconColor}`}
          onClick={() => setIsOpen(true)}
        >
          <FaBars />
        </button>
      )}

      {/* Overlay */}
      <div
        className={`fixed top-0 left-0 z-50 w-full h-screen flex flex-col justify-center items-center gap-8 text-2xl font-semibold transform transition-transform duration-600 ease-in-out ${overlayClassName} ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Krzyżyk w overlay */}
        <button
          className="absolute top-4 left-4 text-4xl cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </button>

        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
        <Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link>
        <Link to="/order" onClick={() => setIsOpen(false)}>Order</Link>
        <Link to="/events" onClick={() => setIsOpen(false)}>Events</Link>
        <Link to="/promo" onClick={() => setIsOpen(false)}>Promo</Link>
        <Link to="/reservation" onClick={() => setIsOpen(false)}>Reservation</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default NavPage;