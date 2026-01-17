import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigate
import logo from '../assets/logo.jpg';

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate(); // ✅ get navigate function

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-6 z-50 px-3 mt-6">
      <div
        className={`max-w-7xl mx-auto bg-[#FA8112] transition-all duration-300 
        rounded-none lg:rounded-full ${scrolled ? "shadow-lg" : "shadow-none"}`}
      >
        <div className="flex items-center justify-between px-6 py-3 gap-4">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="ImageGallery" className="w-9 h-9 rounded-full" />
            <span className="text-lg font-bold text-white">ImageGallery</span>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 justify-center">
            <input
              type="text"
              placeholder="Search images..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-2/3 px-4 py-2 rounded-full outline-none border border-white/40
              bg-white text-black focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Desktop Login Button */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={() => navigate("/login")} // ✅ navigate to login page
              className="px-4 py-2 rounded-full bg-white text-black border border-gray-300 hover:bg-gray-100 transition"
            >
              Login
            </button>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden flex-1 px-4">
            <input
              type="text"
              placeholder="Search images..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-full outline-none border border-white/40
              bg-white text-black focus:ring-2 focus:ring-white"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
