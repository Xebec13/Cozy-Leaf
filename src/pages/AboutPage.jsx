import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavPage from "../components/NavPage";
import { FaArrowDown } from "react-icons/fa";

import SakuraPetals from "../styles/SakuraPetals";
import image1 from "../assets/cl-restaurant-about.png";
import image2 from "../assets/cl-restaurant-about2.png";
import image3 from "../assets/cl-restaurant-about3.png"; // ✅ brakujący import
import image4 from "../assets/cl-restaurant-about4.png";
import image5 from "../assets/cl-restaurant-about5.png";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const section2Ref = useRef(null);

  // Section 1 animation (intro)
  useGSAP(() => {
    gsap.fromTo(
      ".intro-line",
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.3, ease: "power3.out" }
    );
  }, []);

  // Section 2 paragraph animation
  useGSAP(() => {
    gsap.utils
      .toArray(section2Ref.current.querySelectorAll(".story-line"))
      .forEach((el) => {
        gsap.fromTo(
          el,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 100%",
              end: "top 20%",
              scrub: true,
              toggleActions: "play reverse play reverse",
            },
          }
        );
      });
  }, []);

  // Parallax only for section 2 (bg)
  useGSAP(() => {
    let getRatio = (el) =>
      window.innerHeight / (window.innerHeight + el.offsetHeight);

    gsap.utils.toArray(".parallaxSection").forEach((section, i) => {
      const bg = section.querySelector(".bg");

      gsap.fromTo(
        bg,
        {
          backgroundPosition: () =>
            i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px",
        },
        {
          backgroundPosition: () =>
            `50% ${window.innerHeight * (1 - getRatio(section))}px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: () => (i ? "top bottom" : "top top"),
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          },
        }
      );
    });
  }, []);

  return (
    <section className="min-h-screen text-seashell ">
      <NavPage
        iconColor="text-seashell"
        overlayClassName="bg-carolina text-seashell"
      />

      {/* Section 1 */}
      <div className="min-h-screen bg-carolina flex flex-col justify-center items-center gap-10 p-5 md:p-15 ">
        <SakuraPetals
          petalCount={50}
          color1="text-thulian"
          color2="text-viridian"
        />
        <h2 className="intro-line h2-fluid font-extrabold z-20">
          Our story begins with
        </h2>
        <FaArrowDown className="intro-line text-2xl animate-bounce" />
      </div>

      {/* Section 2 - Parallax */}
      <div
        ref={section2Ref}
        className="parallaxSection h-screen md:h-[150vh] relative overflow-hidden p-5 md:p-15"
      >
        {/* Background */}
        <div
          className="bg absolute inset-0 w-full h-full bg-center bg-cover"
          style={{ backgroundImage: `url(${image1})` }}
        ></div>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(180deg, hsla(203, 50%, 62%, 1) 0%, hsla(203, 50%, 62%, 0.3) 20%, transparent 60%, hsla(25, 35%, 30%, 1) 100%)",
          }}
        ></div>

        {/* Storytelling */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center ">
          <h2 className="story-line h2-fluid font-extrabold mb-6">
            Simple vision
          </h2>
          <div className="text-lg md:text-2xl flex flex-col gap-2">
            <p className="story-line">to bring vibrant, plant-based flavors</p>
            <p className="story-line">
              from local fields straight to your table.
            </p>
            <p className="story-line">Every ingredient reflects our passion</p>
            <p className="story-line">
              for nature and nourishment from roots...
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="h-auto md:h-[200dvh] bg-[hsla(25,35%,30%,1)] flex flex-col md:flex-row gap-10 p-5 md:p-15">
        {/* Left column (text) */}
        <div className="text-right self-start md:sticky top-1/3 w-full md:w-1/2">
          <h2 className="h2-fluid font-extrabold mb-6">to Plates</h2>
          <p className="text-l md:text-2xl mb-4">
            From the fields to your plate, every leaf and grain finds its place
            in dishes crafted with love.
          </p>
          <p className="text-lg md:text-2xl">
            At Cozy Leaf, we transform nature’s harvest into unforgettable
            culinary experiences.
          </p>
        </div>

        {/* Right column (static images) */}
        <div className="h-full w-full md:w-3/4 flex flex-col gap-6">
          <img
            src={image2}
            alt="dish"
            className="size-80 object-cover rounded-xl shadow-xl mx-auto"
          />
          <img
            src={image3}
            alt="dish"
            className="size-80 object-cover rounded-xl shadow-xl mx-auto"
          />
          <img
            src={image4}
            alt="dish"
            className="size-80 object-cover rounded-xl shadow-xl mx-auto"
          />
          <img
            src={image5}
            alt="dish"
            className="size-80 object-cover rounded-xl shadow-xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;