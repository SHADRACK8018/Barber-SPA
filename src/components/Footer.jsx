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
      <div style={{ marginBottom: "1rem" }}>
        <h4 style={{ fontWeight: "600", letterSpacing: "1px", color: "#fff" }}>
          Destiny Barber & SPA
        </h4>
        <p style={{ margin: "0.5rem 0", fontSize: "0.95rem", color: "#aaa" }}>
          Excellence in Every Step
        </p>
      </div>

      {/* Social icons (placeholders - link yours) */}
      <div style={{ marginBottom: "1rem" }}>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          style={{ margin: "0 10px", color: "#FFD700", fontSize: "1.2rem" }}
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          style={{ margin: "0 10px", color: "#25D366", fontSize: "1.2rem" }}
        >
          <i className="fab fa-whatsapp"></i>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          style={{ margin: "0 10px", color: "#0A66C2", fontSize: "1.2rem" }}
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>

      {/* Copyright */}
      <div style={{ fontSize: "0.9rem", color: "#999" }}>
        &copy; {currentYear} Destiny Barber & SPA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
