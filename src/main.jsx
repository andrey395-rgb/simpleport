import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./common/ThemeContext.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

// Initializes AOS so `data-aos="..."` attributes animate on scroll.
AOS.init({
  once: true,
  duration: 600,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
