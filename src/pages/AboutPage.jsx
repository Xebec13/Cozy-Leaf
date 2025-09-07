import { NavPage, Carousel, ScrollToTop, HtmlBcg } from "../components";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaArrowDown } from "react-icons/fa";
import SakuraPetals from "../styles/SakuraPetals";

import imageFarm from "../assets/cl-restaurant-about.png";
import imageKitchen from "../assets/cl-restaurant-about6.png";
import image1 from "../assets/gallery6.png";
import image2 from "../assets/gallery7.png";
import image3 from "../assets/gallery8.png";

const sliderImages = [image1, image2, image3];

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutPage = () => {
  // Intro animation (Section 1)
  useGSAP(() => {
    gsap.fromTo(
      ".intro-line",
      { opacity: 0, y: 80 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.3, ease: "power3.out" }
    );
  }, []);

  // Paragraph reveal (Sections 2 + 3)
  useGSAP(() => {
    gsap.utils.toArray(".story-line").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 80 },
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 100%",
            end: "top 20%",
            toggleActions: "play reverse play reverse", // stable without scrub
          },
        }
      );
    });
  }, []);

  // Parallax backgrounds (farm & kitchen sections)
  useGSAP(() => {
    const getRatio = (el) =>
      window.innerHeight / (window.innerHeight + el.offsetHeight);

    gsap.utils.toArray(".parallaxSection").forEach((section) => {
      const bg = section.querySelector(".bg");

      gsap.fromTo(
        bg,
        {
          backgroundPosition: `50% ${-window.innerHeight * getRatio(section)}px`,
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

  // Carousel fade-in animation
  useGSAP(() => {
    gsap.fromTo(
      ".carousel-container",
      { opacity: 0, y: 100 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".carousel-container",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section className="min-h-screen text-seashell">
      <ScrollToTop />
      <HtmlBcg />
      <NavPage
        iconColor="text-seashell"
        overlayClassName="bg-viridian text-seashell"
      />

      {/* Section 1 – Intro */}
      <div className="flex flex-col justify-center items-center gap-10 min-h-screen w-full bg-carolina p-5 md:p-15">
        <SakuraPetals petalCount={50} color1="text-thulian" color2="text-viridian" />
        <h2 className="intro-line h2-fluid font-extrabold text-center z-20">
          Our story begins with
        </h2>
        <FaArrowDown className="intro-line text-2xl animate-bounce" />
      </div>

      {/* Section 2 + 3 wrapper */}
      <div className="relative h-auto">
        {/* Section 2 – Farm Parallax */}
        <div className="parallaxSection relative flex flex-col justify-center items-center overflow-hidden min-h-screen md:h-[150vh] p-5 md:p-15">
          <div
            className="bg absolute inset-0 w-full h-full bg-center bg-cover"
            style={{ backgroundImage: `url(${imageFarm})` }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(180deg, hsla(203,50%,62%,1) 0%, hsla(203,50%,62%,0.3) 30%, hsla(25,35%,85%,0.25) 40%, hsla(25,35%,30%,1) 100%)",
            }}
          />
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h2 className="story-line h2-fluid font-extrabold mb-6 text-shadow-lg">
              Simple vision
            </h2>
            <p className="story-line text-lg md:text-2xl font-bold text-shadow-lg">
              to bring vibrant, plant-based flavors from local fields straight
              to your table.
            </p>
          </div>
        </div>

        {/* Section 3 – Kitchen Parallax */}
        <div className="parallaxSection relative flex flex-col justify-center items-center overflow-hidden min-h-screen md:h-[150vh] p-5 md:p-15">
          <div
            className="bg absolute inset-0 w-full h-full bg-center bg-cover"
            style={{ backgroundImage: `url(${imageKitchen})` }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(180deg, hsla(25,35%,30%,1) 0%,hsla(25,35%,85%,0.25) 60%, hsla(25,35%,30%,1) 100%)",
            }}
          />
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h2 className="story-line h2-fluid font-extrabold mb-6 text-shadow-lg">
              Crafted with care
            </h2>
            <p className="story-line text-lg md:text-2xl font-bold text-shadow-lg">
              Every ingredient reflects our passion — from the farm, through the
              heart of our kitchen, to...
            </p>
          </div>
        </div>
      </div>

      {/* Section 4 – Carousel */}
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-5 min-h-screen md:h-screen bg-[hsla(25,35%,30%,1)] p-5 md:p-15">
        <div className="carousel-container w-full h-full md:w-1/2 aspect-[4/3]">
          <Carousel images={sliderImages} />
        </div>
        <div className="w-full text-right md:sticky top-1/2 md:self-start">
          <h2 className="h2-fluid font-extrabold mb-2">Your plate</h2>
          <p className="md:text-2xl">
            Every leaf and grain finds its place in dishes crafted with love.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;