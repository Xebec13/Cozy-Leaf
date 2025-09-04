import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HtmlBcg = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const html = document.documentElement;

    switch (pathname) {
      case "/":
        html.style.backgroundColor = "hsla(167, 35%, 38%, 1)"; // viridian
        break;
      case "/contact":
        html.style.backgroundColor = "hsla(333, 78%, 67%, 1)"; // bg-thulian
        break;
      case "/promo":
        html.style.backgroundColor = "rgb(222, 161, 233)"; // bg-thistle
        break;
      case "/gallery":
        html.style.backgroundColor = "#cd79af"; // 
        break;
      case "/menu":
        html.style.backgroundColor = "hsla(16, 33%, 91%, 1)"; // bg-seashell
        break;
      case "/about":
        html.style.backgroundColor = "hsla(203, 50%, 62%, 1)"; // bg-carolina
        break;
      default:
        html.style.backgroundColor = "#fff"; // fallback
        break;
    }
  }, [pathname]);

  return null;
};

export default HtmlBcg;