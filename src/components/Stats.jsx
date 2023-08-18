import PropTypes from "prop-types";
import "./Stats.css";

const Stats = ({ icon, text, number }) => {
  return (
    <div className="music-stats">
      <div className="stats-icon-container">{icon}</div>
      <p className="stats-text">{text}</p>
      <p className="stats-numbers">{number}</p>
    </div>
  );
};

export default Stats;

Stats.propTypes = {
  icon: PropTypes.any,
  text: PropTypes.string,
  number: PropTypes.number,
};
