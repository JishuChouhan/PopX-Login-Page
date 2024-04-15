import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import First from "./components/First";
import Second from "./components/Second";
import Third from "./components/Third";
import Fourth from "./components/Fourth";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<First/>} />~
        <Route path="/second" element={<Second/>} />
        <Route path="/third" element={<Third/>} />
        <Route path="/fourth" element={<Fourth/>} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
