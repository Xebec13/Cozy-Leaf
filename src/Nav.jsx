import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
import SakuraPetals from "./styles/SakuraPetals";
import LeafIcon from "./styles/LeafIcon";
import { ScrollToTop, HtmlBcg } from "./components/";
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

gsap.registerPlugin(useGSAP);

const Nav = () => {
  const curtainRef = useRef(null);

  // Entry curtain animation
  useGSAP(() => {
    gsap.fromTo(
      curtainRef.current,
      {
        y: 0,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100%)", // pełny prostokąt
      },
      {
        y: "-100%", // równomiernie podnosi całość
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 50% 95%, 0% 100%)", // środek wyżej
        duration: 1.6,
        ease: "power3.inOut",
        onComplete: () => {
          curtainRef.current.style.display = "none";
        },
      }
    );
  }, []);

  return (
    <nav className="relative min-h-screen bg-transparent p-5 md:p-15 overflow-hidden">
      <ScrollToTop />
      <HtmlBcg />
      <SakuraPetals
        petalCount={40}
        color1="text-thulian"
        color2="text-carolina"
      />

      {/* Curtain overlay */}
      <div
        ref={curtainRef}
        className="fixed inset-0 w-full h-full bg-skymagenta z-50"
      />

      {/* Grid of navigation tiles */}
      <ul className="relative z-10 block w-full h-full uppercase text-seashell md:grid md:grid-cols-[2fr_2fr_2fr_2fr_0.5fr] md:grid-rows-5 gap-0.5">
        {/* Logo tile */}
        <div className="tile-hover relative col-span-2 row-span-2 flex flex-col justify-center items-center p-5 text-seashell overflow-hidden">
          <LeafIcon className="relative z-10 size-16 md:size-1/3 text-thulian animate-wind" />
          <h1 className="h1-fluid relative z-10 font-extrabold whitespace-nowrap">
            Cozy Leaf
          </h1>
          <p className="relative z-10 text-xl md:text-2xl font-bold text-thulian">
            Vegan Restaurant
          </p>
        </div>

        {/* Navigation tiles */}
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
