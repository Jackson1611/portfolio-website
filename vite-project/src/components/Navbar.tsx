import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setShowNavbar(prevScrollPos > currentScrollPos || currentScrollPos < 10);

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

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
            className="hover:text-pink-600 ease-in duration-300 font-mono	"
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
            className="hover:text-pink-600 ease-in duration-300 font-mono"
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
            className="hover:text-pink-600 ease-in duration-300 font-mono"
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
            className="hover:text-pink-600 ease-in duration-300 font-mono"
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
            className="hover:text-pink-600 ease-in duration-300 font-mono"
          >
            <button>Contact</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
