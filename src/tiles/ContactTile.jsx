import { Link } from "react-router-dom";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ContactTile = () => {
  const tileRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    if (window.innerWidth < 768) return; // < md, nie animuj
    gsap.to(textRef.current, {
      y: () => tileRef.current.offsetHeight - textRef.current.offsetHeight,
      ease: "none",
      scrollTrigger: {
        trigger: tileRef.current,
        start: "top top",
        end: "bottom 80%",
        scrub: 3,
      },
    });
  }, []);

  return (
    <li
      ref={tileRef}
      className="tile-hover col-start-5 row-start-1 row-span-5 bg-thulian p-5"
    >
      <Link to="/contact" className="w-full h-full relative block md:my-10">
        <div
          ref={textRef}
          className="text-contact-tile-fluid flex items-center justify-center md:grid md:place-items-center text-center text-seashell font-semibold"
        >
          <p className="md:w-full text-center">C</p>
          <p className="md:w-full text-center">O</p>
          <p className="md:w-full text-center">N</p>
          <p className="md:w-full text-center">T</p>
          <p className="md:w-full text-center">A</p>
          <p className="md:w-full text-center">C</p>
          <p className="md:w-full text-center">T</p>
        </div>
      </Link>
    </li>
  );
};

export default ContactTile;
