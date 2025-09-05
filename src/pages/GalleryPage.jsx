import { NavPage, ScrollToTop, HtmlBcg } from "../components";
import SakuraPetals from "../styles/SakuraPetals"
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

gsap.registerPlugin(ScrollTrigger,useGSAP);

const galleryItems = [
  { id: 1, image: image1, name: "Tofu Panko" },
  { id: 2, image: image2, name: "Sweet&Sour" },
  { id: 3, image: image3, name: "Lava Cake" },
  { id: 4, image: image4, name: "Desert" },
  { id: 5, image: image5, name: "Every Tomato" },
  { id: 6, image: image6, name: "Zucchini" },
  { id: 7, image: image7, name: "Asparagus" },
  { id: 8, image: image8, name: "Vege Bowl" },
  { id: 9, image: image9, name: "Interior" },
  { id: 10, image: image10, name: "Interior" },
];

const GalleryPage = () => {
  useGSAP(() => {
    // animacja nagłówka
    gsap.from(".gallery-title", {
      y: -60,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });
  }, []);
  useGSAP(() => {
    // animacja reveal dla każdego elementu galerii
    gsap.utils.toArray(".gallery-item").forEach((el, i) => {
      gsap.from(el, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: i * 0.1, // lekki efekt domina
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);
  return (
    <section className="min-h-screen bg-skymagenta p-15">
      <ScrollToTop />
      <SakuraPetals petalCount={50} color1="text-carolina" color2="text-viridian" />
      <HtmlBcg />
      <NavPage
        iconColor="text-seashell"
        overlayClassName="bg-thulian text-softblack"
      />

      <h2 className="gallery-title text-seashell text-right self-end h2-fluid font-extrabold mb-5 mt-15">
        Gallery
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full h-full">
        {galleryItems.map(({ id, name, image }) => (
          <div key={id} className="gallery-item w-full uppercase">
            <img
              className="object-cover object-center aspect-[3/2] md:aspect-[4/3] rounded-xl shadow-xl"
              src={image}
              loading="lazy"
              alt={name}
            />
            <p className="text-softblack text-s md:text-lg ml-2">{name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryPage;