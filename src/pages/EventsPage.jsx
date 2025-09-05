import { NavPage, ScrollToTop, HtmlBcg } from "../components";
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

gsap.registerPlugin(Draggable);

const eventsItem = [
  { id: 1, name: "Jazz Evening Under the Leaves", date: 3 },
  { id: 2, name: "Opera Night with Vegan Wine", date: 6 },
  { id: 3, name: "Pet-Friendly Picnic in the Garden", date: 9 },
  { id: 4, name: "Vegan Sushi Workshop", date: 12 },
  { id: 5, name: "Acoustic Guitar Night", date: 15 },
  { id: 6, name: "Art & Dine: Painting with Plant-Based Tapas", date: 18 },
  { id: 7, name: "Sunday Yoga & Brunch", date: 21 },
  { id: 8, name: "Green Cocktail Masterclass", date: 23 },
  { id: 9, name: "Poetry Reading & Dessert Evening", date: 25 },
  { id: 10, name: "Vegan Cheese & Jazz Lounge", date: 27 },
  { id: 11, name: "Family Day: Kids Cook with Us", date: 30 },
];

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

const dayMap = {
  Monday: [1, 8, 15, 22, 29],
  Tuesday: [2, 9, 16, 23, 30],
  Wednesday: [3, 10, 17, 24],
  Thursday: [4, 11, 18, 25],
  Friday: [5, 12, 19, 26],
  Saturday: [6, 13, 20, 27],
  Sunday: [7, 14, 21, 28],
};

const daysInMonth = 30;

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
  return (
    <div
      ref={legendRef}
      className="fixed top-5 left-25 p-5 rounded-xl shadow-lg cursor-move z-50 backdrop-blur-lg"
    >
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
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <section className="min-h-screen bg-carolina p-15 relative">
      <SakuraPetals
        petalCount={50}
        color1="text-thulian"
        color2="text-viridian"
      />
      <ScrollToTop />
      <HtmlBcg />
      <NavPage
        iconColor="text-thistle"
        overlayClassName="bg-thistle text-softblack"
      />

      <h2 className="z-20 text-seashell text-right self-end h2-fluid font-extrabold mb-5 mt-15">
        Events
      </h2>
      <div className="hidden md:grid md:grid-cols-7 place-items-center">
        <p>Mon</p>
        <p>Tue</p>
        <p>Wed</p>
        <p>Thu</p>
        <p>Fri</p>
        <p>Sat</p>
        <p>Sun</p>
      </div>
      <div className="grid md:grid-cols-7 md:grid-rows-5 gap-2 w-full h-full z-20">
        {daysArray.map((day) => {
          const event = eventsItem.find((e) => e.date === day);
          const promosToday = promotions.filter((promo) =>
            promo.days.some((d) => dayMap[d]?.includes(day))
          );

          return (
            <div
              key={day}
              className={`tile-hover z-20 border p-2 rounded-lg shadow-md cursor-pointer ${
                event ? "bg-thistle-80" : "backdrop-blur-xs"
              }`}
            >
              <p className="font-bold">{day}</p>
              {event && <p className="text-softblack">{event.name}</p>}
              <div className="flex gap-1 mt-1 text-softblack">
                {promosToday.map((p, idx) => (
                  <span key={idx}>{p.icon}</span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* draggable legenda */}
      <Legend promotions={promotions} />
    </section>
  );
};

export default EventsPage;
