import PropTypes from "prop-types";
import "./Acheivements.css";

const Acheivements = ({ icon, title, number, text }) => {
  return (
    <div className="acheivement-card">
      <div className="acv-icon-container">{icon}</div>
      <div className="acv-description-container">
        <div className="acv-heading">
          <h4>{title}</h4>
          <p className="acv-text">{number}</p>
        </div>
        <div className="acv-status-bar">
          <div className="acv-status-progress"></div>
        </div>
        <p className="acv-text">{text}</p>
      </div>
    </div>
  );
};

export default Acheivements;

Acheivements.propTypes = {
  icon: PropTypes.any,
  text: PropTypes.string,
  number: PropTypes.string,
  title: PropTypes.string,
};
