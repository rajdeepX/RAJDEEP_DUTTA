import user1 from "../assets/images/userimg/user-2.png";
import user2 from "../assets/images/userimg/user-06.png";
import { BsFillCircleFill } from "react-icons/bs";
import "./Notes.css";
import Search from "../components/Search";
import { useState } from "react";

const Notes = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <main className="notes-main-container">
      <Search />
      <div className="notes-detail-container">
        <h2>News</h2>
        <div className="notes-info-container">
          <div className="notes-container">
            <div className="notes-header">
              <h3>Latest</h3>
              <select name="news" id="news" placeholder="Search news">
                <option selected>Search news</option>
                <option>News</option>
                <option>News</option>
              </select>
            </div>
            <div className="user-notes-info">
              <div className="user-notes-info-container">
                <div className="noteUser-img-container">
                  <div className="noteUser-img">
                    <img src={user1} alt="user-img" />
                  </div>
                </div>
                <div className="noteUser-info-detail">
                  <div className="noteUser-info-head">
                    <div className="noteUser-user-info">
                      <h4>John Doe</h4>
                      <div className="notes-info-time">
                        <p>2h</p>
                        <BsFillCircleFill />
                      </div>
                    </div>
                    <p>on Music Theory</p>
                  </div>
                  <div className="noteUser-info-body">
                    <p>Great article, thanks</p>
                  </div>
                  <div className="noteUser-reaction">
                    <a href="#">Like</a>
                    <a href="#">Reply</a>
                  </div>
                </div>
              </div>
              <hr className="bold" />
              <div className="user-notes-info-container">
                <div className="noteUser-img-container">
                  <div className="noteUser-img">
                    <img src={user2} alt="user-img" />
                  </div>
                </div>
                <div className="noteUser-info-detail">
                  <div className="noteUser-info-head">
                    <div className="noteUser-user-info">
                      <h4>Jane Smith</h4>
                      <div className="notes-info-time">
                        <p>2h</p>
                        <BsFillCircleFill />
                      </div>
                    </div>
                    <p>on Music Theory</p>
                  </div>
                  <div className="noteUser-info-body">
                    <p>Great article, thanks</p>
                  </div>
                  <div className="noteUser-reaction">
                    <a href="#">Like</a>
                    <a href="#">Reply</a>
                  </div>
                </div>
              </div>
              <hr className="bold" />
            </div>
          </div>
          <div className="notes-filter-container">
            <h3>Filter</h3>
            <div className="checkbox-container">
              <label htmlFor="comments">
                Comments
                <input
                  type="checkbox"
                  name="comments"
                  id="comments"
                  checked={isChecked}
                />
              </label>
              <label htmlFor="likes">
                likes
                <input
                  type="checkbox"
                  name="likes"
                  id="likes"
                  checked={isChecked}
                />
              </label>
              <label htmlFor="review">
                review
                <input
                  type="checkbox"
                  name="review"
                  id="review"
                  checked={isChecked}
                />
              </label>
              <label htmlFor="mentions">
                mentions
                <input
                  type="checkbox"
                  name="mentions"
                  id="mentions"
                  checked={isChecked}
                />
              </label>
              <label htmlFor="purchases">
                purchases
                <input
                  type="checkbox"
                  name="purchases"
                  id="purchases"
                  checked={isChecked}
                />
              </label>
              <label htmlFor="message">
                message
                <input
                  type="checkbox"
                  name="message"
                  id="messaget"
                  checked={isChecked}
                />
              </label>
            </div>
            <div className="filter-btn-container">
              <button onClick={() => setIsChecked(true)}>Select all</button>
              <button onClick={() => setIsChecked(false)}>Unselect all</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Notes;
