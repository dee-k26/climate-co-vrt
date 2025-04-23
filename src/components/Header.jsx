import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo192.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-primary text-white flex justify-between items-center px-6 py-4 shadow-md relative">
      {/* Logo and Site Name */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Climate Co Logo" className="h-10" />
        <h1 className="text-xl font-bold">Climate Co</h1>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => {
          setMenuOpen(!menuOpen);
          setServicesOpen(false);
        }}
      >
        ☰
      </button>

      {/* Navigation */}
      <nav
        className={`${menuOpen ? "block" : "hidden"} absolute top-full left-0 w-full bg-primary text-white md:static md:flex md:items-center md:gap-8 md:w-auto md:bg-transparent z-50`}
      >
        <ul className="flex flex-col md:flex-row gap-4 p-4 md:p-0">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>

          {/* Services Dropdown */}
          <li
            className="relative group"
          >
            <button
              className="dropdown-button"
              onClick={(e) => {
                e.stopPropagation();
                if (isMobile) setServicesOpen(!servicesOpen);
              }}
            >
              Services
            </button>

            <ul
              className={`absolute top-[100%] left-0 w-48 bg-white text-black rounded shadow-md z-50 transition-all duration-150
                ${isMobile ? (servicesOpen ? "block" : "hidden") : "invisible opacity-0 group-hover:visible group-hover:opacity-100"}
              `}
            >
              <li>
                <Link
                  to="/aircon-installation"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setMenuOpen(false);
                    setServicesOpen(false);
                  }}
                >
                  Aircon Installation
                </Link>
              </li>
              <li>
                <Link
                  to="/aircon-service"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setMenuOpen(false);
                    setServicesOpen(false);
                  }}
                >
                  Aircon Service & Repair
                </Link>
              </li>
              <li>
                <Link
                  to="/heater-service"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setMenuOpen(false);
                    setServicesOpen(false);
                  }}
                >
                  Heater Service & Repair
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/government-rebate" onClick={() => setMenuOpen(false)}>
              Rebates
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
