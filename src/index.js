import { createRoot } from "react-dom/client";
import WatchNow from "./WatchNow";
import { data } from "./Data.js";
import NoPage from "./NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import React from "react";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/watchnow/:source" element={<WatchNow />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
