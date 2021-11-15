import React from "react";
import People from "./People";
import Menu from "./components/Menu";

import Home from "./Home";
import Street from "./Street";
import Stilllife from "./Stilllife";
import Random from "./Random";
import Green from "./Green";
import Footer from "./components/Footer";

import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/*" element={<Home />} />
        <Route path="people" element={<People />} />
        <Route path="street" element={<Street />} />
        <Route path="stilllife" element={<Stilllife />} />
        <Route path="random" element={<Random />} />
        <Route path="green" element={<Green />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
