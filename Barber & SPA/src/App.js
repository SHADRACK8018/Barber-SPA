import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
// Services page removed as per user request
//import ChatIcon from "./components/ChatIcon";
import WhatsAppIcon from "./components/WhatsAppIcon";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        <Route path="/about" element={<About />} />{" "}
        <Route path="/contact" element={<Contact />} />{" "}
        {/* Services route removed */}{" "}
      </Routes>{" "}
      <Footer />
      <WhatsAppIcon />
    </Router>
  );
};

export default App;
