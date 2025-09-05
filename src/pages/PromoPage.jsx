import { NavPage, ScrollToTop, HtmlBcg } from "../components";
import SakuraPetals from "../styles/SakuraPetals";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger,useGSAP);

import {
  FaLeaf,
  FaCocktail,
  FaChild,
  FaGraduationCap,
  FaCoffee,
  FaBirthdayCake,
  FaAppleAlt,
} from "react-icons/fa";

const promotions = [
  {
    id: 1,
    day: "Monday",
    promotion: "Meatless Monday",
    info: "Kickstart your week with 20% off all vegan entrées.",
    icon: <FaLeaf />,
  },
  {
    id: 2,
    day: ["Tuesday", "Wednesday"],
    promotion: "Midweek Boost",
    info: "Buy one smoothie, get the second half price.",
    icon: <FaAppleAlt />,
  },
  {
    id: 3,
    day: "Thursday",
    promotion: "Happy Hours",
    info: "Enjoy 2-for-1 cocktails from 4 PM to 6 PM.",
    icon: <FaCocktail />,
  },
  {
    id: 4,
    day: ["Friday", "Saturday"],
    promotion: "Family Feast",
    info: "Kids eat free with every adult entrée after 6 PM.",
    icon: <FaChild />,
  },
  {
    id: 5,
    day: "Friday",
    promotion: "Student Special",
    info: "Show your student ID and get 15% off any meal.",
    icon: <FaGraduationCap />,
  },
  {
    id: 6,
    day: ["Friday", "Saturday"],
    promotion: "Brunch & Coffee Deal",
    info: "Free specialty coffee with every brunch order until 2 PM.",
    icon: <FaCoffee />,
  },
  {
    id: 7,
    day: "Sunday",
    promotion: "Sunday Treat",
    info: "Celebrate the weekend with a free dessert on any main course.",
    icon: <FaBirthdayCake />,
  },
];

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const groupedPromos = daysOfWeek.map((day) => ({
  day,
  promos: promotions.filter((promo) =>
    Array.isArray(promo.day) ? promo.day.includes(day) : promo.day === day
  ),
}));

// ---------------- PromoPage ----------------
const PromoPage = () => {
  useGSAP(() => {
    // animacja nagłówka
    gsap.from(".promo-title", {
      y: -60,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });
  }, []);
  useGSAP(() => {
    // animacja boxów (promo-bar)
    gsap.utils.toArray(".promo-bar").forEach((el, i) => {
      gsap.from(el, {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: i * 0.15, // efekt domina
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });
    // animacja dividerów
    gsap.utils.toArray(".divider").forEach((el, i) => {
      gsap.from(el, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 2.5,
        ease: "power3.out",
        delay: i * 0.2, // ten sam efekt domina
        scrollTrigger: {
          trigger: el,
          start: "top 100%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <section className="min-h-screen bg-thistle p-15">
      <ScrollToTop />
      <SakuraPetals
        petalCount={50}
        color1="text-thulian"
        color2="text-shocking"
      />
      <HtmlBcg />
      <NavPage
        iconColor="text-softblack"
        overlayClassName="bg-seashell text-softblack"
      />

      <h2 className="text-right self-end promo-title h2-fluid font-extrabold text-softblack mb-5 mt-15">
        Weekly Promotions
      </h2>

      <div>
        {groupedPromos.map(({ day, promos }) => (
          <PromoBox key={day} day={day} promos={promos} />
        ))}
      </div>
    </section>
  );
};

export default PromoPage;

// ---------------- PromoBox ----------------
const PromoBox = ({ day, promos }) => (
  <div className="promo-bar mb-10 p-2">
    <h3 className="text-2xl md:text-4xl font-bold text-softblack">{day}</h3>

    {promos.length > 0 ? (
      promos.map(({ id, promotion, info, icon }) => (
        <div
          key={id}
          className="text-softblack text-s md:text-s flex flex-col items-start mt-2"
        >
          {/* tekst promo */}
          <div className="flex items-center justify-center gap-2 ml-1">
            {/* ikona */}
            <p className="text-xs">{icon}</p>
            <h4 className="font-semibold">{promotion}</h4>
          </div>
          <p className="ml-1">{info}</p>
        </div>
      ))
    ) : (
      <p className="italic text-softblack text-sm">No promos</p>
    )}

    {/* divider */}
    <div className="divider h-1 bg-seashell w-full my-2"></div>
  </div>
);
