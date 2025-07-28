import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const closeDropdown = () => setDropdownOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <nav className="bg-white py-6 fixed top-0 left-0 w-full z-20 shadow-sm">
      <div className="container mx-auto max-w-[1330px] flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="h-8 mr-2 ml-2 cursor-pointer" />
          </Link>
        </div>

        {/* Hamburger (mobile) */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden lg:flex space-x-10 text-gray-800 font-medium ml-auto relative">
          <li><Link to="/about" className="hover:text-teal-600">Tentang Kami</Link></li>
          <li><Link to="/scan" className="hover:text-teal-600">Scan Sampah</Link></li>

          {/* Dropdown Edukasi */}
          <li
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span
              className="hover:text-teal-600 cursor-pointer select-none flex items-center gap-1"
              onClick={toggleDropdown}
            >
              Edukasi <ChevronDown size={16} />
            </span>

            <div
              className={`absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 w-40 z-20 transition-all duration-200 ease-out ${
                dropdownOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
              }`}
            >
              <Link to="/organik" className="block px-4 py-2 hover:bg-teal-100 text-gray-700" onClick={closeDropdown}>Organik</Link>
              <Link to="/anorganik" className="block px-4 py-2 hover:bg-teal-100 text-gray-700" onClick={closeDropdown}>Anorganik</Link>
              <Link to="/b3" className="block px-4 py-2 hover:bg-teal-100 text-gray-700" onClick={closeDropdown}>B3</Link>
            </div>
          </li>

          <li><Link to="/blog" className="hover:text-teal-600">Blog</Link></li>
        </ul>

        {/* Kontak Button (desktop only) */}
        <Link to="/contact" className="hidden lg:inline border border-teal-600 text-teal-600 px-6 py-2 rounded-md hover:bg-teal-600 hover:text-white transition ml-8 mr-2">
          Kontak
        </Link>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-6 mt-4 pb-4">
          <ul className="space-y-4 text-gray-800 font-medium">
            <li><Link to="/about" className="block hover:text-teal-600" onClick={toggleMenu}>Tentang Kami</Link></li>
            <li><Link to="/scan" className="block hover:text-teal-600" onClick={toggleMenu}>Scan Sampah</Link></li>
            <li>
              <div className="cursor-pointer hover:text-teal-600 flex items-center gap-1" onClick={toggleDropdown}>
                Edukasi <ChevronDown size={16} />
              </div>
              {dropdownOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  <Link to="/organik" className="block hover:text-teal-600" onClick={toggleMenu}>Organik</Link>
                  <Link to="/anorganik" className="block hover:text-teal-600" onClick={toggleMenu}>Anorganik</Link>
                  <Link to="/b3" className="block hover:text-teal-600" onClick={toggleMenu}>B3</Link>
                </div>
              )}
            </li>
            <li><Link to="/blog" className="block hover:text-teal-600" onClick={toggleMenu}>Blog</Link></li>
            <li>
              <Link to="/contact" className="block border border-teal-600 text-teal-600 px-4 py-2 rounded-md hover:bg-teal-600 hover:text-white transition" onClick={toggleMenu}>
                Kontak
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
