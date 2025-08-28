import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import EventPage from "./pages/EventPage";
import "./index.css"

const router = createBrowserRouter([
  {
    path: "/",
    Component: App, // 👈 App = Twoja strona główna z Nav
  },
  {
    path: "/events",
    Component: EventPage, // 👈 podstrona
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);