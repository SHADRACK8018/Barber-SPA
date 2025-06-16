import React from "react";
import midkidImg from "../Assets/midkid.jpg";

const Contact = () => {
  return (
    <section
      className="d-flex justify-content-center align-items-center bg-black text-white px-3 px-md-5"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="bg-dark rounded-5 shadow-lg p-4 p-md-5 border border-secondary"
        style={{ maxWidth: "1400px", width: "100%" }}
      >
        <div className="row align-items-center">
          {/* Image Side */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src={midkidImg}
              alt="Contact Destiny Barber & SPA"
              className="img-fluid rounded-5 shadow-lg border border-secondary"
              style={{
                height: "768px",
                width: "1024px",
                objectFit: "cover",
                transition: "transform 0.4s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            />
          </div>

          {/* Form Side */}
          <div className="col-lg-6">
            <h2 className="display-4 fw-bold mb-3 text-warning">
              Get in Touch
            </h2>
            <p className="lead mb-4 text-light">
              We’d love to hear from you! Reach out and we’ll respond shortly.
            </p>

            <form className="needs-validation" noValidate>
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="form-label visually-hidden"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  className="form-control form-control-lg rounded-pill px-4 shadow-sm bg-secondary text-white border-0"
                  placeholder="Full Name"
                  required
                  aria-required="true"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="emailAddress"
                  className="form-label visually-hidden"
                >
                  Email Address
                </label>
                <input
                  id="emailAddress"
                  type="email"
                  className="form-control form-control-lg rounded-pill px-4 shadow-sm bg-secondary text-white border-0"
                  placeholder="Email Address"
                  required
                  aria-required="true"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="form-label visually-hidden">
                  Your Message
                </label>
                <textarea
                  id="message"
                  className="form-control form-control-lg rounded-4 px-4 py-3 shadow-sm bg-secondary text-white border-0"
                  placeholder="Your Message"
                  rows="5"
                  required
                  aria-required="true"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-warning btn-lg rounded-pill px-5 py-2 shadow-lg"
                style={{
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#d39e00")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#ffc107")
                }
              >
                Send Message
              </button>
            </form>

            {/* Social Icons */}
            <div className="social-icons mt-5 d-flex gap-4 justify-content-center justify-content-lg-start">
              {[
                {
                  icon: "bi-facebook",
                  color: "text-primary",
                  link: "https://facebook.com/destinybarberandspa",
                },
                {
                  icon: "bi-instagram",
                  color: "text-danger",
                  link: "https://instagram.com/destinybarberandspa",
                },
                {
                  icon: "bi-twitter",
                  color: "text-info",
                  link: "https://twitter.com/destinybarberandspa",
                },
                {
                  icon: "bi-youtube",
                  color: "text-danger",
                  link: "https://youtube.com/destinybarberandspa",
                },
                {
                  icon: "bi-linkedin",
                  color: "text-primary",
                  link: "https://linkedin.com/company/destinybarberandspa",
                },
              ].map(({ icon, color, link }, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${color}`}
                  style={{
                    fontSize: "2.5rem",
                    transition: "transform 0.3s ease",
                  }}
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
      </div>
    </section>
  );
};

export default Contact;
