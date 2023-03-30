import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setShowNavbar(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div
      className={`fixed w-full h-20 flex justify-between items-center px-4 bg-[#e9eaeb] text-black-300 transition-all duration-300 ${
        showNavbar ? "top-0" : "-top-20"
      }`}
    >
      <div>
        <Link to="home" smooth={true} duration={500}>
          <img
            src={Logo}
            alt="Logo Image"
            style={{
              width: "70px",
              height: "70px",
              marginTop: "20px",
              marginLeft: "10px",
            }}
          />
          <h3></h3>
        </Link>
      </div>

      {/* menu */}
      <ul className="hidden md:flex font-bold">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            style={{
              padding: "10px",
              fontSize: "20px",
            }}
            className="hover:text-pink-600 ease-in duration-300 	"
          >
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            style={{ padding: "10px", fontSize: "20px" }}
            className="hover:text-pink-600 ease-in duration-300 "
          >
            <button>About</button>
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            style={{ padding: "10px", fontSize: "20px" }}
            className="hover:text-pink-600 ease-in duration-300 "
          >
            <button>Skills</button>
          </Link>
        </li>
        <li>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            style={{ padding: "10px", fontSize: "20px" }}
            className="hover:text-pink-600 ease-in duration-300 "
          >
            <button>Portfolio</button>
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            style={{ padding: "10px", fontSize: "20px" }}
            className="hover:text-pink-600 ease-in duration-300 "
          >
            <button>Contact</button>
          </Link>
        </li>
      </ul>
      <button
        className="md:hidden block focus:outline-none"
        onClick={toggleMenu}
      >
        {menuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-black-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-100 flex justify-center items-center">
          <ul className="text-center">
            <li className="mb-2">
              <Link
                to="home"
                smooth={true}
                duration={500}
                style={{ fontSize: "30px" }}
                className="block px-4 py-2 rounded hover:bg-gray-200 font-bold"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="about"
                smooth={true}
                duration={500}
                style={{ fontSize: "30px" }}
                className="block px-4 py-2 rounded hover:bg-gray-200 font-bold"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="skills"
                smooth={true}
                duration={500}
                style={{ fontSize: "30px" }}
                className="block px-4 py-2 rounded hover:bg-gray-200 font-bold"
                onClick={toggleMenu}
              >
                Skills
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="portfolio"
                smooth={true}
                duration={500}
                style={{ fontSize: "30px" }}
                className="block px-4 py-2 rounded hover:bg-gray-200 font-bold"
                onClick={toggleMenu}
              >
                Portfolio
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                style={{ fontSize: "30px" }}
                className="block px-4 py-2 rounded hover:bg-gray-200 font-bold"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
