import Button from "./Button";
import PropTypes from "prop-types";
import "./UserTab.css";

const UserTab = ({ img, name, iconAdd, iconDel, button }) => {
  return (
    <div className="user-tab-container">
      <div className="user-info-container">
        <div className="userTab-img-container">
          <img src={img} alt="userImg" />
        </div>
        <p>{name}</p>
      </div>
      <div className="tab-icon-container">
        {iconAdd}
        {iconDel}
        {button ? <Button text={button} /> : null}
      </div>
    </div>
  );
};

export default UserTab;

UserTab.propTypes = {
  img: PropTypes.any,
  name: PropTypes.string,
  button: PropTypes.string,
  iconAdd: PropTypes.any,
  iconDel: PropTypes.any,
};
