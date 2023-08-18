import { Link } from "react-router-dom";
import "../../src/App.css";

const Dummy = () => {
  return (
    <div className="dummy">
      AS PER THE TASK
      <br />
      ONLY{" "}
      <span style={{ textDecoration: "underline", fontWeight: "bold" }}>
        MUSIC OVERVIEW
      </span>{" "}
      AND{" "}
      <span style={{ textDecoration: "underline", fontWeight: "bold" }}>
        MUSIC NOTES
      </span>{" "}
      PAGES ARE AVAILABLE
      <Link to={"/"} style={{ fontWeight: "bold" }}>
        Link to Music Overview Page
      </Link>
      <Link to={"/notes"} style={{ fontWeight: "bold" }}>
        Link to Music Notes Page
      </Link>
    </div>
  );
};

export default Dummy;
