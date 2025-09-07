import { NavPage, ScrollToTop, HtmlBcg, Calendar } from "../components";
import SakuraPetals from "../styles/SakuraPetals";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useState } from "react";

gsap.registerPlugin(useGSAP);

// ================= ReservationForm =================
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

  // Basic form validation
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

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      alert("Reservation submitted ✅");
      // Reset form
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
    <div className="flex w-full items-center justify-start">
      <form
        onSubmit={handleSubmit}
        className="z-20 w-full space-y-3 rounded-xl border bg-thistle-80 p-5 shadow-xl"
      >
        {/* Full Name */}
        <div>
          <label className="mb-2 block font-semibold text-softblack">
            Full Name
          </label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your Name"
            className="w-full rounded-lg border bg-seashell-80 p-3 focus:outline-none focus:ring-1 focus:ring-black"
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <label className="mb-2 block font-semibold text-softblack">
            Email
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="your@email.com"
            className="w-full rounded-lg border bg-seashell-80 p-3 focus:outline-none focus:ring-1 focus:ring-black"
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="mb-2 block font-semibold text-softblack">
            Phone
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+48 123 456 789"
            className="w-full rounded-lg border bg-seashell-80 p-3 focus:outline-none focus:ring-1 focus:ring-black"
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone}</p>
          )}
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-semibold text-softblack">
              Date
            </label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="w-full rounded-lg border bg-seashell-80 p-3 focus:outline-none focus:ring-1 focus:ring-black"
            />
            {errors.date && (
              <p className="text-sm text-red-500">{errors.date}</p>
            )}
          </div>
          <div>
            <label className="mb-2 block font-semibold text-softblack">
              Time
            </label>
            <input
              type="time"
              value={form.time}
              onChange={(e) => setForm({ ...form, time: e.target.value })}
              className="w-full rounded-lg border bg-seashell-80 p-3 focus:outline-none focus:ring-1 focus:ring-black"
            />
            {errors.time && (
              <p className="text-sm text-red-500">{errors.time}</p>
            )}
          </div>
        </div>

        {/* Guests */}
        <div>
          <label className="mb-2 block font-semibold text-softblack">
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
            className="w-full rounded-lg border bg-seashell-80 p-3 focus:outline-none focus:ring-1 focus:ring-black"
          />
          {errors.guests && (
            <p className="text-sm text-red-500">{errors.guests}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="mb-2 block font-semibold text-softblack">
            Message (optional)
          </label>
          <textarea
            rows="4"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            placeholder="Special requests, allergies..."
            className="w-full rounded-lg border bg-seashell-80 p-3 focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full cursor-pointer rounded-lg bg-softblack p-3 font-bold text-seashell"
        >
          Book a Table
        </button>
      </form>
    </div>
  );
};

// ================= ReservationPage =================
const ReservationPage = () => {
  useGSAP(() => {
    // Title animation
    gsap.from(".reservation-title", {
      y: -60,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });

    // Content animation (form + right column)
    gsap.from(".reservation-content > div", {
      y: 40,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.4,
    });
  }, []);

  return (
    <section className="min-h-screen bg-mauve p-5 md:p-15">
      <ScrollToTop />
      <SakuraPetals petalCount={50} color1="text-thulian" color2="text-carolina" />
      <HtmlBcg />
      <NavPage
        iconColor="text-softblack"
        overlayClassName="bg-thistle text-softblack"
      />

      <h2 className="reservation-title h2-fluid mb-5 mt-15 self-end text-right font-extrabold text-softblack">
        Reservation
      </h2>

      {/* Main content: form + side info */}
      <div className="reservation-content grid grid-cols-1 gap-5 place-items-start md:grid-cols-2">
        {/* Form */}
        <div className="min-w-[200px] w-full">
          <ReservationForm />
        </div>

        {/* Right column */}
        <div className="z-20 ml-auto w-full">
          {/* Opening Hours */}
          <div className="mb-5 rounded-xl border bg-thistle-80 p-5 text-softblack shadow-md">
            <h3 className="mb-2 text-s font-bold">Opening Hours</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <span className="font-semibold">Lunch:</span> 12:00 – 17:00{" "}
                <em>(Saturdays, Sundays & Holidays only)</em>
              </li>
              <li>
                <span className="font-semibold">Dinner:</span> 17:00 – 24:00{" "}
                <em>(Food 23:00)</em>
              </li>
              <li>
                <span className="font-semibold">Drinks:</span> Served until
                closing time (last guest)
              </li>
            </ul>
          </div>

          {/* Small calendar */}
          <Calendar
            dayTextClass="text-xs font-bold text-softblack"
            eventTextClass="text-[0.5rem] italic"
            iconSize="text-[0.5rem]"
            textSize="text-xs"
            containerGrid="grid grid-cols-4 gap-1 md:grid-cols-7"
            showWeekdays={false}
          />

          {/* Link to Events */}
          <Link
            to="/events"
            className="mt-1 flex items-center justify-end gap-2 text-right font-semibold text-softblack"
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