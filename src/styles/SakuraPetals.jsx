import { useEffect, useRef } from "react";
import LeafIcon from "./LeafIcon"; // upewnij się że ścieżka jest poprawna
import "./sakurapetals.css";

const SakuraPetals = ({ petalCount = 30, color1 = "text-black", color2 = "text-white" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const petals = containerRef.current.querySelectorAll(".petal");

    petals.forEach((petal, i) => {
      const scale = Math.random() * 0.8 + 0.2;

      petal.animate(
        [
          {
            transform: `translate3d(${(i / petalCount) * 100}vw, 0, 0) scale(${scale})`,
            opacity: scale,
          },
          {
            transform: `translate3d(${(i / petalCount) * 100 + 10}vw, 150vh, 0) scale(${scale})`,
            opacity: 1,
          },
        ],
        {
          duration: Math.random() * 90000 + 3000,
          iterations: Infinity,
          delay: -(Math.random() * 5000),
        }
      );
    });
  }, [petalCount]);

  return (
    <div id="petals-container" ref={containerRef}>
      {Array.from({ length: petalCount }).map((_, index) => {
        // naprzemiennie używamy color1 i color2
        const colorClass = index % 2 === 0 ? color1 : color2;
        return (
          <div key={index} className="petal">
            <div className="rotate">
              <LeafIcon className={`askew w-6 h-6 ${colorClass}`} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SakuraPetals;