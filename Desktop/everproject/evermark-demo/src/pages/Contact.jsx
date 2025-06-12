import React from "react";

const Contact = () => {
  return (
    <section
      className="container py-5 rounded-4 shadow-sm p-5"
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
    >
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
            alt="Contact Destiny Barbershop"
            className="img-fluid rounded-4 shadow border border-white border-3 p-1"
            style={{
              height: "600px",
              objectFit: "cover",
              borderColor: "white",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </div>
        <div className="col-md-6 text-dark">
          <h2 className="mb-4 display-3 fw-bold">Contact Us</h2>
          <p className="lead fs-5">
            We would love to hear from you! Reach out to us anytime.
          </p>
          <form className="contact-form">
            <div className="mb-4">
              <label htmlFor="name" className="form-label fw-semibold">
                Name
              </label>
              <input
                type="text"
                className="form-control border-0 rounded-pill px-4 py-3"
                id="name"
                placeholder="Your name"
                style={{ boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="form-label fw-semibold">
                Email address
              </label>
              <input
                type="email"
                className="form-control border-0 rounded-pill px-4 py-3"
                id="email"
                placeholder="name@example.com"
                style={{ boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="form-label fw-semibold">
                Message
              </label>
              <textarea
                className="form-control border-0 rounded-4 px-4 py-3"
                id="message"
                rows="5"
                placeholder="Your message"
                style={{ boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary fw-bold rounded-pill px-5 py-3 shadow"
              style={{ transition: "background-color 0.3s ease" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#5a3e99")
              }
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "")}
            >
              Send Message
            </button>
          </form>
          <div className="social-media mt-5 d-flex gap-4 justify-content-center">
            {[
              {
                href: "https://facebook.com/destinybarbershop",
                icon: "bi-facebook",
                color: "text-primary",
              },
              {
                href: "https://twitter.com/destinybarbershop",
                icon: "bi-twitter",
                color: "text-info",
              },
              {
                href: "https://instagram.com/destinybarbershop",
                icon: "bi-instagram",
                color: "text-danger",
              },
              {
                href: "https://linkedin.com/company/destinybarbershop",
                icon: "bi-linkedin",
                color: "text-primary",
              },
              {
                href: "https://youtube.com/destinybarbershop",
                icon: "bi-youtube",
                color: "text-danger",
              },
            ].map(({ href, icon, color }) => (
              <a
                key={icon}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon.replace("bi-", "")}
                className={`${color} fw-bold transition transform`}
                style={{ fontSize: "2.5rem" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.2)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <i className={`bi ${icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
