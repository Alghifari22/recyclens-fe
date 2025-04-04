import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white py-4 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto max-w-[1330px] flex justify-between items-center px-6">
        
        {/* Logo Recyclens */}
        <div className="flex items-center">
            <Link to="/">
                <img src="/logo.png" alt="Logo" className="h-8 mr-2 ml-6 cursor-pointer" />
            </Link>
        </div>

        <ul className="flex space-x-10 text-gray-800 font-medium ml-auto">
          <li><Link to="/about" className="hover:text-teal-600">Tentang Kami</Link></li>
          <li><Link to="/scan" className="hover:text-teal-600">Scan Sampah</Link></li>
          <li><Link to="/education" className="hover:text-teal-600">Edukasi</Link></li>
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
