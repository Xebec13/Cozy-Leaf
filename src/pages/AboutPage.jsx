import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import NavPage from "../components/NavPage";
import Carousel from "../components/Carousel";
import { FaArrowDown } from "react-icons/fa";

import SakuraPetals from "../styles/SakuraPetals";
import image1 from "../assets/cl-restaurant-about.png";
import image2 from "../assets/cl-restaurant-about2.png";
import image3 from "../assets/cl-restaurant-about3.png";
import image4 from "../assets/cl-restaurant-about4.png";
import image5 from "../assets/cl-restaurant-about5.png";
import image6 from "../assets/cl-restaurant-about6.png";

const sliderImages = [image2, image3, image4, image5];

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  // Section 1 animation (intro)
  useGSAP(() => {
    gsap.fromTo(
      ".intro-line",
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.3, ease: "power3.out" }
    );
  }, []);

  // Section 2 + 3 paragraph animation
  useGSAP(() => {
    gsap.utils.toArray(".story-line").forEach((el) => {
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
  // Parallax only for image sections (farm, kitchen, etc.)
  useGSAP(() => {
    const getRatio = (el) =>
      window.innerHeight / (window.innerHeight + el.offsetHeight);

    gsap.utils.toArray(".parallaxSection").forEach((section) => {
      const bg = section.querySelector(".bg");

      gsap.fromTo(
        bg,
        {
          backgroundPosition: `50% ${
            -window.innerHeight * getRatio(section)
          }px`,
        },
        {
          backgroundPosition: `50% ${
            window.innerHeight * (1 - getRatio(section))
          }px`,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
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
      <div className="min-h-screen w-full bg-carolina flex flex-col justify-center items-center gap-10 p-5 md:p-15 ">
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
      {/* Section 2+3 wrapper */}
      <div className="relative">
        {/* Section 2 - Farm Parallax */}
        <div className="parallaxSection h-screen md:h-[150vh] relative overflow-hidden p-5 md:p-15">
          {/* Background */}
          <div
            className="bg absolute inset-0 w-full h-full bg-center bg-cover"
            style={{ backgroundImage: `url(${image1})` }}
          ></div>

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 backdrop-blur-xs"
            style={{
              backgroundImage:
                "linear-gradient(180deg, hsla(203,50%,62%,1) 0%, hsla(203,50%,62%,0.3) 30%, hsla(25,35%,85%,0.25) 60%, hsla(25,35%,30%,1) 100%)",
            }}
          ></div>

          {/* Storytelling */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center ">
            <h2 className="story-line h2-fluid font-extrabold mb-6 text-shadow-lg">
              Simple vision
            </h2>
            <p className="story-line text-lg md:text-2xl text-shadow-lg">
              to bring vibrant, plant-based flavors from local fields straight
              to your table.
            </p>
          </div>
        </div>

        {/* Section 3 - Kitchen Parallax */}
        <div className="parallaxSection h-screen md:h-[150vh] relative overflow-hidden p-5 md:p-15">
          {/* Background */}
          <div
            className="bg absolute inset-0 w-full h-full bg-center bg-cover"
            style={{ backgroundImage: `url(${image6})` }}
          ></div>

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 backdrop-blur-xs"
            style={{
              backgroundImage:
                "linear-gradient(180deg, hsla(25,35%,30%,1) 0%,hsla(25,35%,30%,0.3) 20%,hsla(25,35%,85%,0.25) 60%, hsla(25,35%,30%,1) 100%",
            }}
          ></div>

          {/* Storytelling */}
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center ">
            <h2 className="story-line h2-fluid font-extrabold mb-6 text-shadow-lg">
              Crafted with care
            </h2>
            <p className="story-line text-lg md:text-2xl text-shadow-lg">
              Every ingredient reflects our passion — from the farm, through the
              heart of our kitchen, to...
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className=" h-screen bg-[hsla(25,35%,30%,1)] flex flex-col-reverse md:flex-row gap-10 p-5 md:p-15">
        <div className="w-full h-full md:w-1/2 ">
          <Carousel images={sliderImages} />
        </div>
        {/* Left column (text) */}
        <div className=" text-right self-start md:sticky top-1/3 w-full md:w-1/2">
          <h2 className="h2-fluid font-extrabold mb-2">Your Plate</h2>
          <p className="text-l md:text-2xl">
            Every leaf and grain finds its place in dishes crafted with love.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
