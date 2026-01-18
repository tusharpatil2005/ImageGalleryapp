import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import SearchBar from "./SearchBar";

const Navbar = ({ searchQuery, setSearchQuery }) => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

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
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              className="w-2/3"
            />
          </div>

          

          {/* Mobile Search */}
          <div className="md:hidden flex-1 px-4">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              className="w-full"
            />
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
