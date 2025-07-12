import { useState } from "react";
import { Link } from "react-router-dom";

import Search from "./Search";

function Navbar({ activeTab, setActiveTab }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const tabs = ["GREEN", "MODERN", "TRADITIONAL", "FIELD"];
  console.log(activeTab);

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-white shadow-md z-50">
      <div className="w-full h-full px-6 flex justify-between items-center">
        {/* LOGO + 下拉菜单 */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-40 font-bold text-xl text-left px-4 py-1"
          >
            JELLY
          </button>
          {dropdownOpen && (
            <div className="absolute left-0 mt-2 w-40 bg-white border shadow-md rounded">
              <Link to="/about" className="block px-4 py-2 hover:bg-gray-100">
                ABOUT
              </Link>
              <Link to="/contact" className="block px-4 py-2 hover:bg-gray-100">
                CONTACT
              </Link>
              <Link to="/like" className="block px-4 py-2 hover:bg-gray-100">
                LIKE
              </Link>
            </div>
          )}
        </div>

        {/* 中间四个页面按钮 */}
        <div className="flex gap-36 text-gray-700 font-medium">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`hover:text-green-600 transition ${
                activeTab === tab ? "text-green-600 font-semibold" : ""
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* 搜索框 */}
        <Search />
      </div>
    </nav>
  );
}

export default Navbar;
