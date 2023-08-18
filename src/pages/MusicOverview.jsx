import Profile from "../assets/images/userimg/user-main.png";
import user2 from "../assets/images/userimg/user-2.png";
import user3 from "../assets/images/userimg/user-03.png";
import user4 from "../assets/images/userimg/user-04.png";
import user5 from "../assets/images/userimg/user-5.png";
import { FaMusic, FaTrophy } from "react-icons/fa6";
import { BsCheckLg } from "react-icons/bs";
import { AiFillClockCircle } from "react-icons/ai";
import { MdOutlineAdd } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Stats from "../components/Stats";
import Acheivements from "../components/Acheivements";
import UserTab from "../components/UserTab";
import Button from "../components/Button";
import "./MusicOverview.css";

const MusicOverview = () => {
  return (
    <main className="music-main-container">
      <div className="music-left-container">
        <div className="music-profile-container">
          <div className="music-profile-img-container">
            <div className="music-img-container">
              <img src={Profile} alt="profile" className="profile-img-main" />
            </div>
          </div>
          <div className="music-info-container">
            <div className="music-info">
              <h2>John Smith</h2>
              <div className="music-description">
                <FaMusic />
                <p>Learn to play guitar with popular songs</p>
              </div>
            </div>
            <div className="music-detail-container">
              <div className="music-details">
                <div className="music-progress">
                  <p className="numbers">0</p>
                  <p>My progress</p>
                </div>
                <div className="music-followers">
                  <p className="numbers">2</p>
                  <p>Followers</p>
                </div>
                <div className="music-following">
                  <p className="numbers">32</p>
                  <p>Following</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="music-stats-container">
          <h3>Statistics</h3>
          <div className="statistics-container">
            <Stats icon={<BsCheckLg />} text={"Practice hours"} number={56} />
            <Stats
              icon={<AiFillClockCircle />}
              text={"Completed lessons"}
              number={3}
            />
            <Stats icon={<FaTrophy />} text={"Skills mastered"} number={7} />
          </div>
        </div>
        <div className="music-achievement-container">
          <h3>Acheivements</h3>
          <div className="acheivements-container">
            <Acheivements
              icon={<AiFillClockCircle />}
              title={"Dedicated Learner"}
              number={"2/3"}
              text={"Maintain a 3-day practice streak"}
            />
            <Acheivements
              icon={<FaTrophy />}
              title={"Point Collector"}
              number={"1200/3000"}
              text={"Earn 1800 more points"}
            />
          </div>
        </div>
      </div>
      <div className="music-right-container">
        <div className="music-recommend-container">
          <h3>Recommended Songs</h3>
          <div className="songs-container">
            <UserTab
              img={user2}
              name={"Erik Davis"}
              iconAdd={
                <MdOutlineAdd
                  style={{
                    backgroundColor: "#ff2c25",
                    padding: "5px",
                    borderRadius: "50%",
                    fill: "#fff",
                    fontSize: "2.2rem",
                  }}
                />
              }
              iconDel={<RxCross2 />}
            />
            <hr />
            <UserTab
              img={user3}
              name={"David Wilson"}
              iconAdd={
                <MdOutlineAdd
                  style={{
                    backgroundColor: "#ff2c25",
                    padding: "5px",
                    borderRadius: "50%",
                    fill: "#fff",
                    fontSize: "2.2rem",
                  }}
                />
              }
              iconDel={<RxCross2 />}
            />
            <hr />
            <Button text={"View all"} />
          </div>
        </div>
        <div className="music-recommend-container">
          <h3>Friends</h3>
          <div className="songs-container">
            <UserTab img={user4} name={"Micheal Clarke"} button={"Profile"} />
            <hr />
            <UserTab img={user5} name={"Sarah Thompson"} button={"Profile"} />
            <hr />
            <Button text={"View all"} />
          </div>
        </div>
        <div className="music-button-container">
          <button>Find friends</button>
          <button>Invite friends</button>
        </div>
      </div>
    </main>
  );
};

export default MusicOverview;
