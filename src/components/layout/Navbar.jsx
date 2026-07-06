import { Link } from "react-router-dom";
import { House, People, PersonCircle } from "react-bootstrap-icons";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ background: "#0d6efd" }}
    >
      <div className="container-fluid">

        <Link className="navbar-brand fw-bold" to="/">
          ERP Lead Management
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav me-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                <House className="me-2" />
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">
                <People className="me-2" />
                Leads
              </Link>
            </li>

          </ul>

          <div className="d-flex align-items-center">

            <PersonCircle size={28} className="text-white me-2" />

            <span className="text-white fw-semibold">
              Admin
            </span>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;