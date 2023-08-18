import "./Navbar.css";
import Profile from "../assets/images/userimg/user-1.png";
import { PiSquaresFour } from "react-icons/pi";
import { MdClass } from "react-icons/md";
import {
  FaArrowRightFromBracket,
  FaPenToSquare,
  FaUserGroup,
} from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { HiMiniCheckBadge } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="profile-container">
          <div className="img-container">
            <NavLink to={"/"}>
              <img src={Profile} alt="profile-img" className="user-img-md" />
            </NavLink>
          </div>
          <div className="profile-links">
            <NavLink to={"/"}>Learn Music</NavLink>
            <NavLink to={"/"}>Contact Support</NavLink>
          </div>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to={"/"} className="nav-link">
              <PiSquaresFour />
              <p className="link-text">Music Overview</p>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/class"} href="#" className="nav-link">
              <MdClass />
              <span className="link-text">Music Classes</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/grade"} href="#" className="nav-link">
              <HiMiniCheckBadge />
              <span className="link-text">Music Grades</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/teacher"} href="#" className="nav-link">
              <FaUserGroup />
              <span className="link-text">Music Teachers</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/notes"} href="#" className="nav-link">
              <FaPenToSquare />
              <span className="link-text">Music Notes</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="line">
        <hr />
      </div>
      <div className="options-container">
        <ul className="options-nav">
          <li className="options-item">
            <NavLink to={"/settings"} href="#" className="options-link">
              <IoSettingsSharp />
              <span className="link-text">Settings</span>
            </NavLink>
          </li>
          <li className="options-item">
            <NavLink to={"/logout"} href="#" className="options-link">
              <FaArrowRightFromBracket />
              <span className="link-text">Logout</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
