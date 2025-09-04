import { NavPage, ScrollToTop } from "../components";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import image2 from "../assets/cl-gallery2.png";
import image3 from "../assets/cl-gallery3.png";

const GalleryPage = () => {
  // Parallax only for image sections (farm, kitchen, etc.)
  useGSAP(() => {
    const getRatio = (el) =>
      window.innerHeight / (window.innerHeight + el.offsetHeight);

    gsap.utils.toArray(".parallaxSection").forEach((section) => {
      const bg = section.querySelector(".bg");

      gsap.set(bg, { willChange: "background-position" });

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
    <section className="min-h-screen bg-lilac-80 ">
      <ScrollToTop />
      <NavPage
        iconColor="text-seashell"
        overlayClassName="bg-thulian text-softblack"
      />
      
      
    </section>
  );
};

export default GalleryPage;
