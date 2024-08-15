import React from "react";
import "./Navbar.css";

import { Link } from "react-router-dom";

import { FaGooglePlay } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoSunnyOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="glass">
      <div className="nav__icon">
        <FaGooglePlay className="ico" />
      </div>
      <ul className="nav__links">
        <Link to={"/"}>
          {" "}
          <li className="nav__link">Home</li>
        </Link>
        <li className="nav__link">Pricing</li>
        <Link to={"/movies"}>
          <li className="nav__link">Movies</li>
        </Link>
        <li className="nav__link">Series</li>
        <li className="nav__link">Collection</li>
        <li className="nav__link">FAQ</li>
      </ul>
      <ul className="nav__menu">
        <li className="nav__menu__item">
          <CiSearch />
        </li>
        <li className="nav__menu__item">
          <CiBellOn />
        </li>
        <li className="nav__menu__item">
          <CiUser />
        </li>
        <li className="nav__menu__item">
          <IoSunnyOutline />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
