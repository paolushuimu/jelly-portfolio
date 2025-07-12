import { Routes, Route } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer";
import Project from "./pages/Project";
// import LogoPage from "./pages/Logo";

function App() {
  return (
    <div className="w-[80rem] min-h-screen text-gray-800 font-sans">
      <div className="w-[80rem] mx-auto">
        <Routes>
          {/* <Route path="/" element={<LogoPage />}></Route> */}
          <Route path="/projects" element={<Project />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
