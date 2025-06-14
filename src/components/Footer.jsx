import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "linear-gradient(90deg, #111 0%, #222 100%)",
        color: "#eee",
        padding: "2rem 1rem",
        textAlign: "center",
        fontFamily: "'Segoe UI', sans-serif",
        fontSize: "1rem",
        marginTop: "auto",
      }}
    >
      <div className="container">
        <div className="mb-4">
          <h4
            className="fw-semibold text-white mb-2"
            style={{ letterSpacing: "1px" }}
          >
            Destiny Barber & SPA
          </h4>
          <p className="mb-0 text-secondary" style={{ fontSize: "0.95rem" }}>
            Excellence in Every Step
          </p>
        </div>

        {/* Social icons (placeholders - link yours) */}
        <div className="mb-4">
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="mx-2"
            style={{ color: "#FFD700", fontSize: "1.2rem" }}
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="mx-2"
            style={{ color: "#25D366", fontSize: "1.2rem" }}
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="mx-2"
            style={{ color: "#0A66C2", fontSize: "1.2rem" }}
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-secondary" style={{ fontSize: "0.9rem" }}>
          &copy; {currentYear} Destiny Barber & SPA. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
