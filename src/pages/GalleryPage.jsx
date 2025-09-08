import { NavPage, ScrollToTop, HtmlBcg } from "../components";
import SakuraPetals from "../styles/SakuraPetals";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import image1 from "../assets/gallery1.png";
import image2 from "../assets/gallery2.png";
import image3 from "../assets/gallery3.png";
import image4 from "../assets/gallery4.png";
import image5 from "../assets/gallery5.png";
import image6 from "../assets/gallery6.png";
import image7 from "../assets/gallery7.png";
import image8 from "../assets/gallery8.png";
import image9 from "../assets/gallery9.png";
import image10 from "../assets/gallery10.png";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const galleryItems = [
  { id: 1, image: image1, name: "Tofu Panko" },
  { id: 2, image: image2, name: "Sweet & Sour" },
  { id: 3, image: image3, name: "Lava Cake" },
  { id: 4, image: image4, name: "Dessert" },
  { id: 5, image: image5, name: "Every Tomato" },
  { id: 6, image: image6, name: "Zucchini" },
  { id: 7, image: image7, name: "Asparagus" },
  { id: 8, image: image8, name: "Vege Bowl" },
  { id: 9, image: image9, name: "Interior" },
  { id: 10, image: image10, name: "Interior" },
];

const GalleryPage = () => {
  // Title animation
  useGSAP(() => {
    gsap.from(".gallery-title", {
      y: -60,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });
  }, []);

  // Reveal animation for gallery items
  useGSAP(() => {
    gsap.from(".gallery-item *", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".gallery-item",
        start: "top 95%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <section className="min-h-screen bg-skymagenta p-5 md:p-15">
      <ScrollToTop />
      <SakuraPetals
        petalCount={50}
        color1="text-carolina"
        color2="text-viridian"
      />
      <HtmlBcg />
      <NavPage
        iconColor="text-seashell"
        overlayClassName="bg-thulian text-softblack"
      />

      <h2 className="gallery-title h2-fluid mb-5 mt-15 self-end text-right font-extrabold text-seashell">
        Gallery
      </h2>

      <div className="gallery-item grid w-full h-full grid-cols-1 gap-4 md:grid-cols-2">
        {galleryItems.map(({ id, name, image },index) => (
          <div key={id} className="w-full uppercase">
            <img
              src={image}
              alt={name}
              className="aspect-[3/2] rounded-xl object-cover object-center shadow-xl md:aspect-[4/3]"
              loading={index < 2 ? "eager" : "lazy"}
            />
            <p className="ml-2 text-s text-softblack md:text-lg">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryPage;