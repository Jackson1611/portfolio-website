import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className=" fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#e9eaeb] text-black-300">
      <div>
        <Link to="home" smooth={true} duration={500}>
          <img
            src={Logo}
            alt="Logo Image"
            style={{
              width: "90px",
              height: "90px",
              marginTop: "10px",
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
            style={{ padding: "10px", fontSize: "20px" }}
            className="hover:text-pink-600 ease-in duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            style={{ padding: "10px", fontSize: "20px" }}
            className="hover:text-pink-600 ease-in duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            style={{ padding: "10px", fontSize: "20px" }}
            className="hover:text-pink-600 ease-in duration-300"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            style={{ padding: "10px", fontSize: "20px" }}
            className="hover:text-pink-600 ease-in duration-300"
          >
            Portfiolo
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            style={{ padding: "10px", fontSize: "20px" }}
            className="hover:text-pink-600 ease-in duration-300"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
