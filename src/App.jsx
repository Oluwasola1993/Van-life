import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Van from "./Pages/Van";
import Signin from "./Pages/Signin";
import Footer from "./Components/Footer";
import Notfound from "./Pages/Notfound";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/van" element={<Van />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
