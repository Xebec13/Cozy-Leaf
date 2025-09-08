import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HtmlBcg = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const html = document.documentElement;

    switch (pathname) {
      case "/":
        html.style.backgroundColor = "hsla(167, 35%, 38%, 1)"; // Viridian green
        break;
      case "/contact":
        html.style.backgroundColor = "hsla(333, 78%, 67%, 1)"; // Thulian pink
        break;
      case "/promo":
        html.style.backgroundColor = "hsla(291, 54%, 77%, 1)"; // Thistle
        break;
      case "/gallery":
        html.style.backgroundColor = "hsla(320, 46%, 64%, 1)"; // Sky magenta
        break;
      case "/menu":
        html.style.backgroundColor = "hsla(330, 30%, 44%, 1)"; // Plumrose
        break;
      case "/order":
        html.style.backgroundColor = "hsla(16, 33%, 91%, 1)"; // Seashell
        break;
      case "/about":
        html.style.backgroundColor = "hsla(203, 50%, 62%, 1)"; // Carolina blue
        break;
      case "/events":
        html.style.backgroundColor = "hsla(203, 50%, 62%, 1)"; // Carolina blue
        break;
      case "/reservation":
        html.style.backgroundColor = "hsla(311, 34%, 74%, 1)"; // Mauve
        break;
      default:
        html.style.backgroundColor = "hsla(0, 0%, 100%, 1)"; // White (fallback)
        break;
    }
  }, [pathname]);

  return null;
};

export default HtmlBcg;