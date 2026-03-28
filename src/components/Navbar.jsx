import { Link } from "react-router-dom";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCalendarWeek } from "react-icons/fa";
import { FaCalendarDay } from "react-icons/fa";

function Navbar() {
  return (
    <div className="nav-links">

      <Link to="/month">
        <FaCalendarAlt /> Month
      </Link>

      <Link to="/week">
        <FaCalendarWeek /> Week
      </Link>

      <Link to="/day">
        <FaCalendarDay /> Day
      </Link>

    </div>
  );
}

export default Navbar;