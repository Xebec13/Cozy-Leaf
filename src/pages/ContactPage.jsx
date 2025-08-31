import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import contactImage from "../assets/cl-restaurant-contact.png";
import contactImage2 from "../assets/cl-restaurant-contact2.png";
import contactImage3 from "../assets/cl-restaurant-contact3.png";

gsap.registerPlugin(useGSAP);

const ContactPage = () => {
  const leftRef = useRef(null);
  const imagesRef = useRef([]);

  useGSAP(() => {
    // animacja lewej kolumny
    gsap.fromTo(
      leftRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // animacja zdjęć
    gsap.fromTo(
      imagesRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
        delay: 1,
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-thulian-80 p-10 flex flex-col justify-center items-center md:items-start md:flex-row gap-10 text-softblack">
      {/* Left column – Opening Hours */}
      <div
        ref={leftRef}
        className="w-full md:w-1/2 text-center p-2 md:sticky md:top-1/3 md:left-0"
      >
        <h2 className="text-fluid font-bold mb-4">Opening Hours</h2>
        <p className="text-l">Monday – Wednesday: 12:00 PM – 12:00 AM</p>
        <p className="text-l">Thursday – Friday: 12:00 PM – 01:00 AM</p>
        <p className="text-l">Weekend: 12:00 PM – 02:00 AM</p>
        <p className="text-l">contact@cozy-leaf.eu</p>
        <p className="text-l">690 654 666</p>

        {/* Social Media */}
        <div className="flex justify-center items-center gap-10 text-xl mt-4">
          <span>🌐</span>
          <span>📘</span>
          <span>📸</span>
          <span>🎵</span>
          <span>▶️</span>
        </div>
      </div>

      {/* Right column – Images */}
      <div className="w-full md:w-1/2 rounded-xl">
        <div className="flex flex-col gap-5">
          {[contactImage2, contactImage3, contactImage].map((src, i) => (
            <img
              key={i}
              ref={(el) => (imagesRef.current[i] = el)}
              className="w-full aspect-[4/3] object-cover rounded-xl shadow-viridian-strong"
              src={src}
              alt={`restaurant-${i}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
