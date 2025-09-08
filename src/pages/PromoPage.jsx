import { NavPage, ScrollToTop, HtmlBcg } from "../components";
import SakuraPetals from "../styles/SakuraPetals";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaLeaf,
  FaCocktail,
  FaChild,
  FaGraduationCap,
  FaCoffee,
  FaBirthdayCake,
  FaAppleAlt,
} from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// ================= Promotions Data =================
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

// ================= PromoPage =================
const PromoPage = () => {
  useGSAP(() => {
    // Title animation
    gsap.from(".promo-title", {
      y: -60,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });
  }, []);

  useGSAP(() => {
    // Animate promo bars
    gsap.utils.toArray(".promo-bar").forEach((el, i) => {
      gsap.from(el, {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: i * 0.15,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    // Animate dividers
    gsap.utils.toArray(".divider").forEach((el, i) => {
      gsap.from(el, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 2.5,
        ease: "power3.out",
        delay: i * 0.2,
        scrollTrigger: {
          trigger: el,
          start: "top 100%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <section className="min-h-screen bg-thistle p-5 md:p-15">
      <ScrollToTop />
      <SakuraPetals petalCount={50} color1="text-thulian" color2="text-shocking" />
      <HtmlBcg />
      <NavPage
        iconColor="text-softblack"
        overlayClassName="bg-seashell text-softblack"
      />

      <h2 className="promo-title h2-fluid mb-5 mt-15 self-end text-right font-extrabold text-softblack">
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

// ================= PromoBox =================
const PromoBox = ({ day, promos }) => (
  <div className="promo-bar mb-10 p-2">
    <h3 className="text-2xl md:text-4xl font-bold text-softblack">{day}</h3>

    {promos.length > 0 ? (
      promos.map(({ id, promotion, info, icon }) => (
        <div
          key={id}
          className="mt-2 flex flex-col items-start text-s text-softblack"
        >
          {/* Promotion text + icon */}
          <div className="ml-1 flex items-center gap-2">
            <span className="text-xs">{icon}</span>
            <h4 className="font-semibold">{promotion}</h4>
          </div>
          <p className="ml-1">{info}</p>
        </div>
      ))
    ) : (
      <p className="text-sm italic text-softblack">No promos</p>
    )}

    {/* Divider */}
    <div className="divider my-2 h-1 w-full bg-seashell"></div>
  </div>
);