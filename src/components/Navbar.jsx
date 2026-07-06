import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaBell,
  FaUserCircle,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";
// import { useAuth } from "../context/AuthContext";
// import appConfig from "../config/appConfig";
import "./Navbar.css";

function Navbar() {
  const user = {
  name: "Admin",
  role: "Administrator",
  avatar: "https://ui-avatars.com/api/?name=Admin&background=0D6EFD&color=fff",
};

const appConfig = {
  appName: "ERP Lead Management",
  company: "Developed by Azhagu Malai Krishnan",
};

  const navigate = useNavigate();
  const location = useLocation();

  const [currentTime, setCurrentTime] = useState(new Date());

  const [showMenu, setShowMenu] = useState(false);

  const [showNotification, setShowNotification] = useState(false);

  const notifications = [
    {
      id: 1,
      title: "New Lead Added",
      time: "2 mins ago",
    },
    {
      id: 2,
      title: "Lead Updated",
      time: "10 mins ago",
    },
    {
      id: 3,
      title: "Today's Follow-up",
      time: "1 hour ago",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = currentTime.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const formatTime = currentTime.toLocaleTimeString("en-IN");

  const logout = () => {
    alert("Logout Successfully");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-gradient shadow-sm sticky-top">

      <div className="container-fluid">

        <Link
          to="/"
          className="navbar-brand fw-bold d-flex align-items-center gap-2"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="logo"
            width="42"
          />

          <div>

            <div className="brand-title">
              {appConfig.appName}
            </div>

            <small className="brand-company">
              {appConfig.company}
            </small>

          </div>

        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() =>
            document
              .getElementById("navbarContent")
              .classList.toggle("show")
          }
        >
          <FaBars />
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarContent"
        >

          <ul className="navbar-nav me-auto ms-4">

            <li className="nav-item">

              <Link
                to="/"
                className={`nav-link fw-semibold ${
                  location.pathname === "/"
                    ? "active-nav"
                    : ""
                }`}
              >
                Dashboard
              </Link>

            </li>

            <li className="nav-item">

              <Link
                to="/add-lead"
                className={`nav-link fw-semibold ${
                  location.pathname === "/add-lead"
                    ? "active-nav"
                    : ""
                }`}
              >
                Add Lead
              </Link>

            </li>

          </ul>

          <div className="d-flex align-items-center gap-4">

            <div className="datetime-box text-end">

              <div className="date-text">

                {formatDate}

              </div>

              <small className="time-text">

                {formatTime}

              </small>

            </div>

            {/* Notification */}
<div className="notification-wrapper position-relative">
  <button
    className="btn notification-btn"
    onClick={() => setShowNotification(!showNotification)}
  >
    <FaBell size={20} />
    <span className="notification-count">
      {notifications.length}
    </span>
  </button>

  {showNotification && (
    <div className="notification-dropdown shadow">
      <div className="notification-header">
        Notifications
      </div>

      {notifications.map((item) => (
        <div
          key={item.id}
          className="notification-item"
        >
          <strong>{item.title}</strong>
          <small>{item.time}</small>
        </div>
      ))}

      <div className="text-center p-2 border-top">
        <Link
          to="/notifications"
          className="text-decoration-none fw-semibold"
        >
          View All Notifications
        </Link>
      </div>
    </div>
  )}
</div>

        </div>

      </div>

    </div>
    </nav>
  );
}

export default Navbar;