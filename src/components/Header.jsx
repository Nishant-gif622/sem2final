import { Link, useNavigate } from "react-router-dom";

function Header() {

  const navigate = useNavigate();

  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="header">

      <h2 className="title">📅 Event Calendar</h2>

      <div className="nav-links">
        <Link to="/month">Month View</Link>
        <Link to="/week">Week View</Link>
        <Link to="/day">Day View</Link>
      </div>

      {user && (
        <div className="user-section">
          <span>👤 {user}</span>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}

    </div>
  );
}

export default Header;