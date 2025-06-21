import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Modern from "./pages/Modern";
import Traditional from "./pages/Traditional";

import Field from "./pages/Field";

function App() {
  return (
    <div className="w-[80rem] min-h-screen text-gray-800 font-sans">
      <Navbar />
      <div className="w-[80rem] mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modern" element={<Modern />} />
          <Route path="/traditional" element={<Traditional />} />
          <Route path="/field" element={<Field />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
