import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import App from "./App";
import {
  EventPage,
  GalleryPage,
  MenuPage,
  PromoPage,
  OrderPage,
  ReservationPage,
  AboutPage,
  ContactPage,
} from "./pages";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App, // 👈 App = Twoja strona główna z Nav
  },
  {
    path: "/events",
    Component: EventPage,
  },
  {
    path: "/gallery",
    Component: GalleryPage,
  },
  {
    path: "/menu",
    Component: MenuPage,
  },
  {
    path: "/promo",
    Component: PromoPage,
  },
  {
    path: "/order",
    Component: OrderPage,
  },
  {
    path: "/reservation",
    Component: ReservationPage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);