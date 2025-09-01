import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import NavPage from "../components/NavPage";
const promotions = [
  {
    id: 1,
    day: "Monday",
    promotion: "Meatless Monday",
    info: "Kickstart your week with 20% off all vegan entrées.",
  },
  {
    id: 2,
    day: ["Tuesday", "Wednesday"],
    promotion: "Midweek Boost",
    info: "Buy one smoothie, get the second half price.",
  },
  {
    id: 3,
    day: "Thursday",
    promotion: "Happy Hours",
    info: "Enjoy 2-for-1 cocktails from 4 PM to 6 PM.",
  },
  {
    id: 4,
    day: ["Friday", "Saturday"],
    promotion: "Family Feast",
    info: "Kids eat free with every adult entrée after 6 PM.",
  },
  {
    id: 5,
    day: "Friday",
    promotion: "Student Special",
    info: "Show your student ID and get 15% off any meal.",
  },
  {
    id: 6,
    day: ["Friday", "Saturday"],
    promotion: "Brunch & Coffee Deal",
    info: "Free specialty coffee with every brunch order until 2 PM.",
  },
  {
    id: 7,
    day: "Sunday",
    promotion: "Sunday Treat",
    info: "Celebrate the weekend with a free dessert on any main course.",
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

const PromoPage = () => {
  useGSAP(() => {
    // animacja boxów
    gsap.from(".promo-box", {
      y: 50,
      opacity: 0,
      scale: 0.95,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    });

    // animacja nagłówków (wchodzą z góry)
    gsap.from(".promo-text", {
      y: -60,
      opacity: 0,
      scale: 0.85,
      duration: 1.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="h-screen bg-thulian flex flex-col items-center p-15">
      <NavPage
        iconColor="text-seashell"
        overlayClassName="bg-seashell text-softblack"
      />
      <h2 className="promo-text h2-fluid font-extrabold text-seashell mb-12">
        Weekly Promotions
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-5 w-full h-full">
        {groupedPromos.map(({ day, promos }) => (
          <div
            key={day}
            className="promo-box bg-shocking-40 flex flex-col justify-center items-center gap-4 p-4 rounded-xl shadow-lg cursor-pointer"
          >
            <h3 className=" underline text-xl font-bold text-seashell">
              {day}
            </h3>

            {promos.length > 0 ? (
              promos.map(({ id, promotion, info }) => (
                <div key={id} className="text-center">
                  <h4 className=" text-seashell font-semibold">{promotion}</h4>
                  <p className=" text-seashell/80 text-sm">{info}</p>
                </div>
              ))
            ) : (
              <p className=" text-seashell/40 italic text-sm">No promos</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromoPage;
