import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="w-full px-6 py-3 flex justify-between items-center">
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
          <Link to="/" className="hover:text-green-600">
            GREEN
          </Link>
          <Link to="/modern" className="hover:text-green-600">
            MORDEN
          </Link>
          <Link to="/traditional" className="hover:text-green-600">
            TRADITIONAL
          </Link>
          <Link to="/project" className="hover:text-green-600">
            FIELD
          </Link>
        </div>

        {/* 搜索框 */}
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="w-40 border rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
