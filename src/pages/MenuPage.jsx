import { NavPage, ScrollToTop, HtmlBcg } from "../components";
import SakuraPetals from "../styles/SakuraPetals";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);

// ================= Menu data =================
const menuItems = {
  starters: [
    { id: 1, name: "Bruschetta Verde", info: "Sourdough, avocado, basil pesto", price: "6€" },
    { id: 2, name: "Stuffed Mushrooms", info: "Cashew cheese, garlic, parsley", price: "7€" },
    { id: 3, name: "Cauliflower Bites", info: "Crispy, sriracha mayo", price: "6€" },
    { id: 4, name: "Spring Rolls", info: "Tofu, veggies, peanut dip", price: "6€" },
    { id: 5, name: "Mini Falafel Plate", info: "Chickpeas, tahini, pickles", price: "7€" },
    { id: 6, name: "Caprese Skewers", info: "Tomatoes, vegan mozzarella, basil", price: "7€" },
  ],
  mains: [
    { id: 7, name: "Vegan Pad Thai", info: "Rice noodles, tofu, peanuts", price: "11€" },
    { id: 8, name: "Plant-Based Burger", info: "Smash patty, cheddar, lettuce", price: "12€" },
    { id: 9, name: "Stuffed Eggplant", info: "Quinoa, chickpeas, tomato", price: "10€" },
    { id: 10, name: "Pizza Margherita", info: "Cashew cheese, tomato, basil", price: "9€" },
    { id: 11, name: "Chili Sin Carne", info: "Beans, avocado, tortilla chips", price: "11€" },
    { id: 12, name: "Asparagus Risotto", info: "Creamy rice, lemon zest", price: "12€" },
    { id: 13, name: "Tofu Panko Bowl", info: "Crispy tofu, jasmine rice", price: "11€" },
    { id: 14, name: "Jackfruit Tacos", info: "Pulled jackfruit, lime crema", price: "12€" },
  ],
  desserts: [
    { id: 15, name: "Vegan Lava Cake", info: "Dark chocolate, molten center", price: "7€" },
    { id: 16, name: "Matcha Cheesecake", info: "Cashew base, matcha swirl", price: "7€" },
    { id: 17, name: "Coconut Panna Cotta", info: "Coconut cream, mango coulis", price: "6€" },
    { id: 18, name: "Raw Brownie", info: "Dates, cacao, walnuts", price: "6€" },
    { id: 19, name: "Fruit Tart", info: "Seasonal fruit, vegan cream", price: "7€" },
  ],
  drinks: [
    { id: 20, name: "Thulian Spritz", info: "Rosé, hibiscus, orange peel", price: "8€" },
    { id: 21, name: "Viridian Mojito", info: "Rum, mint, lime, soda", price: "7€" },
    { id: 22, name: "Carolina Breeze", info: "Gin, elderflower, lemon", price: "8€" },
    { id: 23, name: "Shocking Mule", info: "Vodka, ginger beer, lime", price: "7€" },
    { id: 24, name: "Mango Daiquiri", info: "Rum, mango, lime", price: "8€" },
    { id: 25, name: "Classic Negroni", info: "Gin, vermouth, campari", price: "9€" },
    { id: 26, name: "Berry Sangria", info: "Red wine, orange, berries", price: "7€" },
    { id: 27, name: "Cucumber Collins", info: "Gin, cucumber, soda", price: "7€" },
    { id: 28, name: "Espresso Martini", info: "Vodka, espresso, coffee", price: "8€" },
    { id: 29, name: "Mocktail Sunset", info: "Orange, cranberry, grenadine", price: "6€" },
  ],
};

// ================= MenuPage =================
const MenuPage = () => {
  const [activeTab, setActiveTab] = useState("starters");
  const sectionRef = useRef(null);

  // Animate section on tab change
  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, [activeTab]);

  // Animate header + tabs on mount
  useGSAP(() => {
    gsap.from(".menu-title", {
      y: -60,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });
    gsap.from(".menu-tabs", {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.2,
    });
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-5 bg-plumrose md:h-screen md:p-15">
      <ScrollToTop />
      <SakuraPetals petalCount={50} color1="text-thulian" color2="text-shocking" />
      <HtmlBcg />
      <NavPage iconColor="text-seashell" overlayClassName="bg-mauve text-seashell" />

      {/* Section title */}
      <h2 className="menu-title self-end mb-5 mt-15 text-right h2-fluid font-extrabold text-seashell">
        Menu
      </h2>

      {/* Tabs navigation */}
      <div
        className="menu-tabs grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8 justify-center"
        role="tablist"
      >
        {Object.keys(menuItems).map((section) => (
          <button
            key={section}
            role="tab"
            aria-selected={activeTab === section}
            onClick={() => setActiveTab(section)}
            className={`text-sm md:text-base px-4 py-2 font-bold rounded-lg transition duration-300 cursor-pointer z-20 ${
              activeTab === section ? "bg-seashell text-softblack" : "text-seashell"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>

      {/* Active section with animation */}
      <div
        ref={sectionRef}
        className="z-20 flex-1 w-full border border-white rounded-xl backdrop-blur-lg overflow-y-auto"
      >
        {menuItems[activeTab].map(({ id, name, info, price }) => (
          <div
            key={id}
            className="flex items-center justify-between p-5 border-b border-white/10"
          >
            <div>
              <h4 className="text-sm font-bold text-seashell md:text-lg">{name}</h4>
              <p className="text-xs text-thistle md:text-sm">{info}</p>
            </div>
            <span className="font-semibold text-seashell">{price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuPage;