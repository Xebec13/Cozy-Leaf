import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavPage = ({ buttonClassName = "text-viridian", overlayClassName = "bg-viridian text-seashell" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-6 z-50">
      {/* Ikona hamburgera */}
      {!isOpen && (
        <button
          className={`flex items-center justify-center w-10 h-10 text-3xl cursor-pointer ${buttonClassName}`}
          onClick={() => setIsOpen(true)}
        >
          <FaBars />
        </button>
      )}

      {/* Overlay */}
      <div
        className={`fixed inset-0 w-full h-screen flex flex-col justify-center items-center gap-8 text-2xl font-semibold transform transition-transform duration-600 ease-in-out ${overlayClassName} ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Krzyżyk w overlay */}
        <button
          className="absolute top-6 left-6 text-4xl cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </button>

        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link>
        <Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
        <Link to="/promo" onClick={() => setIsOpen(false)}>Promo</Link>
        <Link to="/reservation" onClick={() => setIsOpen(false)}>Reservation</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default NavPage;