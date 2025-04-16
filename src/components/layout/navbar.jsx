import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-white py-4 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto max-w-[1330px] flex justify-between items-center px-6">
        
        {/* Logo Recyclens */}
        <div className="flex items-center">
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="h-8 mr-2 ml-6 cursor-pointer" />
          </Link>
        </div>

        <ul className="flex space-x-10 text-gray-800 font-medium ml-auto relative">
          <li><Link to="/about" className="hover:text-teal-600">Tentang Kami</Link></li>
          <li><Link to="/scan" className="hover:text-teal-600">Scan Sampah</Link></li>

          {/* Dropdown Edukasi */}
          <li
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span
              className="hover:text-teal-600 cursor-pointer select-none"
              onClick={toggleDropdown}
            >
              Edukasi
            </span>

            <div
              className={`absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 w-40 z-20 transform transition-all duration-200 ease-out ${
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

        <Link to="/contact" className="border border-teal-600 text-teal-600 px-6 py-2 rounded-md hover:bg-teal-600 hover:text-white transition mr-6 ml-8">
          Kontak
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
