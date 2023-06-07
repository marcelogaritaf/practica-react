import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Carusel1 from "./routes/carusel-1/Carusel1";
import Carusel2 from "./routes/carusel-2/Carusel2";
import Carusel3 from "./routes/carusel-3/Carusel3";
import Carusel4 from "./routes/carusel-4/Carusel4";
import Carusel5 from "./routes/carusel-5/Carusel5";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Carusel1 />} />
          <Route path="carusel-2" element={<Carusel2 />} />
          <Route path="carusel-3" element={<Carusel3 />} />
          <Route path="carusel-4" element={<Carusel4 />} />
          <Route path="carusel-5" element={<Carusel5 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
