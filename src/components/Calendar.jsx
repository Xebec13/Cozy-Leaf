import {
  FaLeaf,
  FaCocktail,
  FaChild,
  FaGraduationCap,
  FaCoffee,
  FaBirthdayCake,
  FaAppleAlt,
} from "react-icons/fa";

// ================= Mocked Data =================
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
  { promotion: "Midweek Boost", icon: <FaAppleAlt />, days: ["Tuesday", "Wednesday"] },
  { promotion: "Happy Hours", icon: <FaCocktail />, days: ["Thursday"] },
  { promotion: "Family Feast", icon: <FaChild />, days: ["Friday", "Saturday"] },
  { promotion: "Student Special", icon: <FaGraduationCap />, days: ["Friday"] },
  { promotion: "Brunch & Coffee Deal", icon: <FaCoffee />, days: ["Friday", "Saturday"] },
  { promotion: "Sunday Treat", icon: <FaBirthdayCake />, days: ["Sunday"] },
];

// Days mapped to numbers in month
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

// ================= Calendar Component =================
const Calendar = ({
  dayTextClass = "text-s font-bold",
  eventTextClass = "text-sm",
  iconSize = "text-sm",
  textSize = "text-xs md:text-sm font-semibold",
  containerGrid = "grid md:grid-cols-7 md:grid-rows-5 gap-2 w-full h-full z-20",
  showWeekdays = true,
}) => {
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="w-full">
      {/* Weekday labels */}
      {showWeekdays && (
        <div className={`hidden md:grid md:grid-cols-7 place-items-center mb-2 ${textSize}`}>
          <p>Mon</p>
          <p>Tue</p>
          <p>Wed</p>
          <p>Thu</p>
          <p>Fri</p>
          <p>Sat</p>
          <p>Sun</p>
        </div>
      )}

      {/* Calendar grid */}
      <div className={containerGrid}>
        {daysArray.map((day) => {
          const event = eventsItem.find((e) => e.date === day);
          const promosToday = promotions.filter((promo) =>
            promo.days.some((d) => dayMap[d]?.includes(day))
          );

          return (
            <div
              key={day}
              className={`tile-hover border p-2 rounded-lg shadow-md cursor-pointer z-20 ${
                event ? "bg-thistle-80" : "backdrop-blur-sm"
              }`}
            >
              <p className={dayTextClass}>{day}</p>

              {/* Promo icons */}
              <div className={`flex gap-1 my-1 text-softblack ${iconSize}`}>
                {promosToday.map((p, idx) => (
                  <span key={idx}>{p.icon}</span>
                ))}
              </div>

              {/* Event name */}
              {event && (
                <p className={`${eventTextClass} text-softblack`}>
                  {event.name}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;