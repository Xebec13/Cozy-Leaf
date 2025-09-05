import { NavPage, ScrollToTop, HtmlBcg, Calendar } from "../components";
import SakuraPetals from "../styles/SakuraPetals";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useState } from "react";

gsap.registerPlugin(useGSAP);
// ---------------- ReservationForm ----------------

const ReservationForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.name || form.name.length < 2) {
      newErrors.name = "Please enter your full name (min 2 characters).";
    }

    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!form.phone || form.phone.replace(/\D/g, "").length < 9) {
      newErrors.phone = "Please enter a valid phone number.";
    }

    if (!form.date) newErrors.date = "Please select a date.";
    if (!form.time) newErrors.time = "Please select a time.";

    if (!form.guests || form.guests < 1) {
      newErrors.guests = "At least 1 guest required.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Reservation submitted ✅");
      // ewentualnie czyszczenie formularza
      setForm({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: 1,
        message: "",
      });
    }
  };

  return (
    <div className="w-full flex justify-start items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full bg-thistle-80 rounded-xl shadow-xl p-5 space-y-3 border z-20"
      >
        {/* Full Name */}
        <div>
          <label className="block text-softblack font-semibold mb-2">
            Full Name
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black bg-seashell-80"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="block text-softblack font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="your@email.com"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black bg-seashell-80"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-softblack font-semibold mb-2">
            Phone
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+48 123 456 789"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black bg-seashell-80"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-softblack font-semibold mb-2">
              Date
            </label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black bg-seashell-80"
            />
            {errors.date && (
              <p className="text-red-500 text-sm">{errors.date}</p>
            )}
          </div>
          <div>
            <label className="block text-softblack font-semibold mb-2">
              Time
            </label>
            <input
              type="time"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black bg-seashell-80"
            />
            {errors.time && (
              <p className="text-red-500 text-sm">{errors.time}</p>
            )}
          </div>
        </div>

        {/* Guests */}
        <div>
          <label className="block text-softblack font-semibold mb-2">
            Number of Guests
          </label>
          <input
            type="number"
            min="1"
            value={form.guests}
            onChange={(e) =>
              setForm({ ...form, guests: Number(e.target.value) })
            }
            placeholder="2"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black bg-seashell-80"
          />
          {errors.guests && (
            <p className="text-red-500 text-sm">{errors.guests}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-softblack font-semibold mb-2">
            Message (optional)
          </label>
          <textarea
            rows="4"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Special requests, allergies..."
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black bg-seashell-80"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-softblack text-seashell font-bold p-3 rounded-lg cursor-pointer"
        >
          Book a Table
        </button>
      </form>
    </div>
  );
};
// ---------------- ReservationPage ----------------
const ReservationPage = () => {
  useGSAP(() => {
    // animacja nagłówka
    gsap.from(".reservation-title", {
      y: -60,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });

    // animacja dla zawartości grida (formularz + prawa kolumna)
    gsap.from(".reservation-content > div", {
      y: 40,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.4, // każdy element z małym opóźnieniem
    });
  }, []);
  return (
    <section className="min-h-screen bg-mauve p-15">
      <ScrollToTop />
      <SakuraPetals
        petalCount={50}
        color1="text-thulian"
        color2="text-carolina"
      />
      <HtmlBcg />
      <NavPage
        iconColor="text-softblack"
        overlayClassName="bg-thistle text-softblack"
      />

      <h2 className="reservation-title text-softblack text-right self-end h2-fluid font-extrabold mb-5 mt-15">
        Reservation
      </h2>
      {/* Osobny komponent formularza */}
      <div className="reservation-content grid grid-cols-1 md:grid-cols-2 gap-5 place-items-start">
        <div className="w-full min-w-[200px]">
          <ReservationForm />
        </div>
        <div className="w-full ml-auto z-20">
          {/* Opening Hours */}
          <div className="bg-thistle-80 text-softblack rounded-xl shadow-md p-5 mb-5 border">
            <h3 className="font-bold text-s mb-2">Opening Hours</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <span className="font-semibold">Lunch:</span> 12:00 – 17:00{" "}
                <em>(Saturdays, Sundays & Holidays only)</em>
              </li>
              <li>
                <span className="font-semibold">Dinner:</span> 17:00 – 24:00{" "}
                <em>(Food 23:00) </em>
              </li>
              <li>
                <span className="font-semibold">Drinks:</span> Served until
                closing time (last guest)
              </li>
            </ul>
          </div>
          <Calendar
            dayTextClass="text-softblack font-bold text-xs"
            eventTextClass="text-[0.5rem] italic"
            iconSize="text-[0.5rem]"
            textSize="text-xs"
            containerGrid="grid grid-cols-5 md:grid-cols-7 gap-1"
            showWeekdays={false}
          />
          <Link
            to="/events"
            className="flex items-center justify-end gap-2 text-right text-softblack font-semibold mt-1 "
          >
            <span>Go to events</span>
            <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReservationPage;
