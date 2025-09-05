import { NavPage, ScrollToTop, HtmlBcg, Calendar } from "../components";
import SakuraPetals from "../styles/SakuraPetals";
import { useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { useGSAP } from "@gsap/react";

import {
  FaLeaf,
  FaCocktail,
  FaChild,
  FaGraduationCap,
  FaCoffee,
  FaBirthdayCake,
  FaAppleAlt,
} from "react-icons/fa";

gsap.registerPlugin(Draggable,useGSAP);

const promotions = [
  { promotion: "Meatless Monday", icon: <FaLeaf />, days: ["Monday"] },
  {
    promotion: "Midweek Boost",
    icon: <FaAppleAlt />,
    days: ["Tuesday", "Wednesday"],
  },
  { promotion: "Happy Hours", icon: <FaCocktail />, days: ["Thursday"] },
  {
    promotion: "Family Feast",
    icon: <FaChild />,
    days: ["Friday", "Saturday"],
  },
  { promotion: "Student Special", icon: <FaGraduationCap />, days: ["Friday"] },
  {
    promotion: "Brunch & Coffee Deal",
    icon: <FaCoffee />,
    days: ["Friday", "Saturday"],
  },
  { promotion: "Sunday Treat", icon: <FaBirthdayCake />, days: ["Sunday"] },
];

// ---------------- Legend ----------------
const Legend = ({ promotions }) => {
  const legendRef = useRef(null);

  useGSAP(() => {
    // drag
    Draggable.create(legendRef.current, {
      type: "x,y",
      inertia: true,
    });
    gsap.set(legendRef.current, { x: 0, y: 0 });

    gsap.fromTo(
      legendRef.current,
      { x: -10, backdropFilter: "blur(10px)", backgroundColor: "transparent" },
      {
        x: 10,
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(222, 161, 233, 0.8)",
        duration: 0.2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: 3, // 3 razy tam i z powrotem
      }
    );
  }, []);
  useGSAP(() => {
    // animacja nagłówka
    gsap.from(".event-title", {
      y: -60,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });
  }, []);
  return (
    <div
      ref={legendRef}
      className="fixed top-5 left-1/3 md:left-25 p-5 rounded-xl shadow-lg cursor-move z-20 backdrop-blur-lg"
    >
      <p className="text-softblack font-bold">Promo</p>
      <div className="flex flex-col gap-2">
        {promotions.map((p, i) => (
          <div
            key={i}
            className="flex items-center justify-start gap-2 text-softblack font-bold"
          >
            <span className="text-xs md:text-sm">{p.icon}</span>
            <span className="text-xs md:text-xs">{p.promotion}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// ---------------- EventsPage ----------------
const EventsPage = () => {
  return (
    <section className="min-h-screen bg-carolina p-15 relative">
      <SakuraPetals
        petalCount={50}
        color1="text-thulian"
        color2="text-shocking"
      />
      <ScrollToTop />
      <HtmlBcg />
      <NavPage
        iconColor="text-thistle"
        overlayClassName="bg-thistle text-softblack"
      />

      <h2 className="event-title text-seashell text-right self-end h2-fluid font-extrabold mb-5 mt-15">
        Events
      </h2>
      <Calendar
        dayTextClass="font-bold"
        eventTextClass="text-xs md:text-sm"
        iconSize="text-sm"
        textSize="text-xs md:text-base"
        containerGrid="grid md:grid-cols-7 md:grid-rows-5 gap-2"
      />

      {/* draggable legenda */}
      <Legend promotions={promotions} />
    </section>
  );
};

export default EventsPage;
