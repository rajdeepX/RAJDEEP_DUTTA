import { BiSearchAlt2 } from "react-icons/bi";
import "./Search.css";
import { FaMusic } from "react-icons/fa6";
import { BsFillCircleFill } from "react-icons/bs";
import Profile from "../assets/images/userimg/user-1.png";

const Search = () => {
  return (
    <div className="search-container">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search for music notes"
      />

      <div className="search-icon-container">
        <button>Learn</button>
        <div className="search-glass">
          <BiSearchAlt2 className="search-icon" />
          <BsFillCircleFill className="dot" />
        </div>
        <div className="search-music">
          <FaMusic className="search-icon" />
          <BsFillCircleFill className="dot" />
        </div>
        <div className="search-user-img">
          <img src={Profile} alt="profile-img" />
        </div>
      </div>
    </div>
  );
};

export default Search;
