import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          backgroundColor: "#111",
          color: "#fff",
          padding: "0.75rem 1rem",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          zIndex: 999,
        }}
      >
        <Link
          to="/"
          className="navbar-brand"
          style={{
            color: "#fff",
            fontWeight: "700",
            fontSize: "1.4rem",
            textTransform: "uppercase",
            letterSpacing: "1px",
            textDecoration: "none",
          }}
        >
          Destiny Barber & SPA
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ border: "none", filter: "invert(1)" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {navLinks.map(({ to, label }) => (
              <li className="nav-item" key={to}>
                <Link
                  to={to}
                  className="nav-link"
                  style={{
                    color: location.pathname === to ? "#FFD700" : "#ccc",
                    marginLeft: "1.25rem",
                    fontWeight: "500",
                    fontSize: "1rem",
                    transition: "color 0.3s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#FFD700")
                  }
                  onMouseLeave={(e) => {
                    if (location.pathname !== to) {
                      e.currentTarget.style.color = "#ccc";
                    }
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
