import { useState, useEffect } from "react";
import { NavPage, ScrollToTop, HtmlBcg } from "../components";
import SakuraPetals from "../styles/SakuraPetals";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);

// ================= Menu data =================
const orderItem = {
  starters: [
    { id: 1, name: "Bruschetta Verde", price: 6 },
    { id: 2, name: "Stuffed Mushrooms", price: 7 },
    { id: 3, name: "Cauliflower Bites", price: 6 },
    { id: 4, name: "Spring Rolls", price: 6 },
    { id: 5, name: "Mini Falafel Plate", price: 7 },
    { id: 6, name: "Caprese Skewers", price: 7 },
  ],
  mains: [
    { id: 7, name: "Vegan Pad Thai", price: 11 },
    { id: 8, name: "Plant-Based Burger", price: 12 },
    { id: 9, name: "Stuffed Eggplant", price: 10 },
    { id: 10, name: "Pizza Margherita", price: 9 },
    { id: 11, name: "Chili Sin Carne", price: 11 },
    { id: 12, name: "Asparagus Risotto", price: 12 },
    { id: 13, name: "Tofu Panko Bowl", price: 11 },
    { id: 14, name: "Jackfruit Tacos", price: 12 },
  ],
  desserts: [
    { id: 15, name: "Vegan Lava Cake", price: 7 },
    { id: 16, name: "Matcha Cheesecake", price: 7 },
    { id: 17, name: "Coconut Panna Cotta", price: 6 },
    { id: 18, name: "Raw Brownie", price: 6 },
    { id: 19, name: "Fruit Tart", price: 7 },
  ],
  drinks: [
    { id: 20, name: "Thulian Spritz", price: 8 },
    { id: 21, name: "Viridian Mojito", price: 7 },
    { id: 22, name: "Carolina Breeze", price: 8 },
    { id: 23, name: "Shocking Mule", price: 7 },
    { id: 24, name: "Mango Daiquiri", price: 8 },
    { id: 25, name: "Classic Negroni", price: 9 },
    { id: 26, name: "Berry Sangria", price: 7 },
    { id: 27, name: "Cucumber Collins", price: 7 },
    { id: 28, name: "Espresso Martini", price: 8 },
    { id: 29, name: "Mocktail Sunset", price: 6 },
  ],
};

// ================= OrderMenu =================
const OrderMenu = ({ addToCart }) => {
  return (
    <div className="w-full pr-5 md:w-2/3">
      {Object.entries(orderItem).map(([section, items]) => (
        <div key={section} className="mb-8">
          <h3 className="mb-4 text-xl font-bold capitalize">{section}</h3>
          <div className="space-y-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="order-item flex items-center justify-between border-b pb-2"
              >
                <span className="font-medium text-softblack">{item.name}</span>
                <div className="flex items-center gap-3">
                  <span className="text-softblack">{item.price}€</span>
                  <button
                    onClick={(e) => addToCart(item, e.currentTarget)}
                    className="px-3 py-1 text-sm text-seashell bg-plumrose rounded-md cursor-pointer"
                  >
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// ================= Cart =================
const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="w-full pl-5 md:w-1/3 md:border-l">
      <h3 className="mb-4 text-xl font-bold">Your Cart</h3>
      {cart.length === 0 ? (
        <p className="italic text-softblack">No items yet.</p>
      ) : (
        <div className="cart space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-2"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-softblack/70">
                  {item.price}€ x {item.quantity}
                </p>
              </div>
              <div className="grid grid-cols-4 place-items-center">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-2 rounded cursor-pointer bg-thulian-80"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 rounded cursor-pointer bg-thulian-80"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-2 font-bold text-red-800 cursor-pointer"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}

          {/* Total */}
          <h3 className="mt-4 text-lg font-bold">Total: {total}€</h3>

          {/* Place Order Button */}
          <button
            onClick={() => alert("Order placed ✅")}
            disabled={cart.length === 0}
            className={`w-full mt-4 p-3 rounded-lg font-bold ${
              cart.length === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-softblack text-seashell cursor-pointer"
            }`}
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
};

// ================= OrderPage =================
const OrderPage = () => {
  const [cart, setCart] = useState([]);

  // Load saved cart on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add item + bounce animation for cart & Add button
  const addToCart = (item, button) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });

    // Bounce cart
    gsap.fromTo(
      ".cart",
      { scale: 1 },
      { scale: 1.03, duration: 0.2, yoyo: true, repeat: 1 }
    );

    // Bounce clicked Add button
    if (button) {
      gsap.fromTo(
        button,
        { scale: 1 },
        { scale: 1.15, duration: 0.15, ease: "back.out(2)", yoyo: true, repeat: 1 }
      );
    }
  };

  // Update item quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      setCart((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Intro animations
  useGSAP(() => {
    gsap.from(".order-title", {
      y: -60,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.from(".order-item", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.05,
      ease: "power2.out",
    });

    gsap.from(".cart", {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.3,
    });
  }, []);

  return (
    <section className="min-h-screen bg-seashell p-5 md:p-15">
      <ScrollToTop />
      <SakuraPetals petalCount={40} color1="text-plumrose" color2="text-carolina" />
      <HtmlBcg />
      <NavPage
        iconColor="text-plumrose"
        overlayClassName="bg-plumrose text-seashell"
      />

      <h2 className="order-title self-end mb-5 mt-15 text-right h2-fluid font-extrabold text-softblack">
        Order
      </h2>

      <div className="flex flex-col gap-5 p-5 border rounded-xl shadow-lg backdrop-blur-lg md:flex-row">
        {/* Menu Section */}
        <OrderMenu addToCart={addToCart} />

        {/* Cart Section */}
        <Cart
          cart={cart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
        />
      </div>
    </section>
  );
};

export default OrderPage;