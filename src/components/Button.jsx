import PropTypes from "prop-types";

const Button = ({ text }) => {
  return (
    <button
      style={{
        padding: "10px",
        color: "#fff",
        borderRadius: "50px",
        backgroundColor: "#ff2c25",
        border: "none",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
Button.propTypes = {
  text: PropTypes.string,
};
