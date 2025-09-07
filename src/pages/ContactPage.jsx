import { NavPage, ScrollToTop, HtmlBcg } from "../components";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SakuraPetals from "../styles/SakuraPetals";

// Images
import contactImage from "../assets/cl-restaurant-contact.png";
import contactImage2 from "../assets/cl-restaurant-contact2.png";
import contactImage3 from "../assets/cl-restaurant-contact3.png";

// Social media icons
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaTiktok,
  FaGoogle,
} from "react-icons/fa";

gsap.registerPlugin(useGSAP);

const ContactPage = () => {
  const leftRef = useRef(null);
  const imagesRef = useRef([]);

  useGSAP(() => {
    // Animate left column (contact info)
    gsap.fromTo(
      leftRef.current.children,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
      }
    );

    // Animate right column (images)
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
    <section className="min-h-screen bg-thulian p-5 md:p-15 flex flex-col md:flex-row gap-10 justify-center items-center md:items-start text-softblack">
      <ScrollToTop />
      <SakuraPetals
        petalCount={50}
        color1="text-shocking"
        color2="text-carolina"
      />
      <HtmlBcg />
      <NavPage
        iconColor="text-seashell"
        overlayClassName="bg-softblack text-seashell"
      />

      {/* Left column – Contact Info */}
      <div
        ref={leftRef}
        className="w-full md:w-1/2 md:sticky md:top-1/3 mt-15 text-seashell text-center md:text-left"
      >
        <h2 className="h2-fluid font-bold mb-4 text-softblack">
          Visit us, call us. We’re just a step away!
        </h2>

        {/* Opening hours */}
        <p className="text-s md:text-lg ml-1">
          Monday – Wednesday: 12:00 PM – 12:00 AM
        </p>
        <p className="text-s md:text-lg ml-1">
          Thursday – Friday: 12:00 PM – 01:00 AM
        </p>
        <p className="text-s md:text-lg ml-1">Weekend: 12:00 PM – last guest</p>

        {/* Contact details */}
        <p className="text-s md:text-lg ml-1">contact@cozy-leaf.eu</p>
        <p className="text-s md:text-lg ml-1">690 654 666</p>

        {/* Social Media */}
        <div className="flex justify-center md:justify-start gap-5 text-3xl mt-5 ml-1 text-seashell">
          {[FaInstagramSquare, FaFacebookSquare, FaTiktok, FaGoogle].map(
            (Icon, i) => (
              <Icon
                key={i}
                className="transition-transform duration-300 cursor-pointer hover:scale-110"
              />
            )
          )}
        </div>
      </div>

      {/* Right column – Images */}
      <div className="w-full md:w-1/2 rounded-xl">
        <div className="flex flex-col gap-5">
          {[contactImage2, contactImage3, contactImage].map((src, i) => (
            <img
              key={i}
              ref={(el) => (imagesRef.current[i] = el)}
              className="w-full aspect-[4/3] object-cover rounded-xl shadow-2xl"
              src={src}
              alt={`restaurant-${i}`}
              loading="lazy" // performance boost
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactPage;