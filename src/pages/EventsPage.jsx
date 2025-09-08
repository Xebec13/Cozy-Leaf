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

gsap.registerPlugin(Draggable, useGSAP);

const promotions = [
  { promotion: "Meatless Monday", icon: <FaLeaf />, days: ["Monday"] },
  { promotion: "Midweek Boost", icon: <FaAppleAlt />, days: ["Tuesday", "Wednesday"] },
  { promotion: "Happy Hours", icon: <FaCocktail />, days: ["Thursday"] },
  { promotion: "Family Feast", icon: <FaChild />, days: ["Friday", "Saturday"] },
  { promotion: "Student Special", icon: <FaGraduationCap />, days: ["Friday"] },
  { promotion: "Brunch & Coffee Deal", icon: <FaCoffee />, days: ["Friday", "Saturday"] },
  { promotion: "Sunday Treat", icon: <FaBirthdayCake />, days: ["Sunday"] },
];

// ---------------- Legend (draggable) ----------------
const Legend = ({ promotions }) => {
  const legendRef = useRef(null);

  useGSAP(() => {
    // Enable dragging
    Draggable.create(legendRef.current, {
      type: "x,y",
      inertia: true,
    });
    gsap.set(legendRef.current, { x: 0, y: 0 });

    // Subtle wiggle animation on mount
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
        repeat: 3, // wiggle 3 times
      }
    );
  }, []);

  return (
    <div
      ref={legendRef}
      className="fixed top-5 left-1/3 md:left-25 z-30 p-5 rounded-xl shadow-lg backdrop-blur-lg cursor-move"
    >
      <p className="font-bold text-softblack">Promo</p>
      <div className="flex flex-col gap-2">
        {promotions.map((p, i) => (
          <div key={i} className="flex items-center gap-2 font-bold text-softblack">
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
  useGSAP(() => {
    // Reveal page title
    gsap.from(".event-title", {
      y: -60,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });

    // Stagger reveal for calendar cells
    gsap.from(".event-calendar *", {
      opacity: 0,
      y: 20,
      duration: 0.2,
      stagger: 0.009,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="relative min-h-screen bg-carolina p-5 md:p-15">
      <SakuraPetals petalCount={50} color1="text-thulian" color2="text-shocking" />
      <ScrollToTop />
      <HtmlBcg />
      <NavPage iconColor="text-thistle" overlayClassName="bg-thistle text-softblack" />

      <h2 className="event-title self-end mb-5 mt-15 text-right h2-fluid font-extrabold text-seashell">
        Events
      </h2>

      <div className="event-calendar">
        <Calendar
          dayTextClass="font-bold"
          eventTextClass="text-xs md:text-sm"
          iconSize="text-sm"
          textSize="text-xs md:text-base"
          containerGrid="grid gap-2 md:grid-cols-7 md:grid-rows-5"
        />
      </div>

      {/* Draggable legend */}
      <Legend promotions={promotions} />
    </section>
  );
};

export default EventsPage;