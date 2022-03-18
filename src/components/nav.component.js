import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/home">
              Welcome
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="connect">
              Connect
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={`nav-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              to="news"
            >
              New & Trends
            </NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#1">
              Sharing & Blogs
            </a>
          </li>
          <li className="nav-item">
            <NavLink
              className={`nav-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              to="services"
            >
              Services
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={`nav-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              to="contact"
            >
              Contact
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={`nav-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              to="profiles"
            >
              Profile
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={`nav-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              to="jobs"
            >
              Jobs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={`nav-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              to="company"
            >
              Company
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={`nav-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              to="matrimony"
            >
              Matrimony
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={`nav-link ${({ isActive }) =>
                isActive ? "active" : ""}`}
              to="churches"
            >
              Churches
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
