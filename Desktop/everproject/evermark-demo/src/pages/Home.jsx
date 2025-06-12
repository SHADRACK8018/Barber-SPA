import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollAmount = 150;
    const interval = setInterval(() => {
      if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
        carousel.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero-section text-white text-center py-5"
        style={{
          minHeight: "300px",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          borderRadius: "0 0 2rem 2rem",
          animation: "fadeInDown 1s ease forwards",
        }}
      >
        <div className="container">
          <h1
            className="display-1 fw-bold"
            style={{
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            }}
          >
            Look Sharp, Feel Sharper
          </h1>
          <p className="lead mb-5 fst-italic" style={{ fontWeight: 300 }}>
            Professional grooming by Destiny Experts — Experience the art of
            style and confidence.
          </p>
          <a
            href="#services"
            className="btn btn-primary btn-lg rounded-pill shadow"
            style={{
              fontWeight: 600,
              boxShadow: "0 4px 15px rgba(118, 75, 162, 0.6)",
            }}
          >
            Explore Services
          </a>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="carousel-section py-4 bg-light">
        <div className="container d-flex align-items-center">
          <div
            id="carousel"
            ref={carouselRef}
            className="d-flex overflow-auto gap-3"
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              minWidth: "80vw",
            }}
          >
            {[
              "/Ababer1.jpg",
              "/Ababer2.jpg",
              "/Ababer3.jpg",
              "/Ababer4.jpg",
              "/Ababer5.jpg",
            ].map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Carousel ${index + 1}`}
                className="rounded-circle shadow"
                style={{
                  width: "400px",
                  height: "400px",
                  objectFit: "cover",
                  flexShrink: 0,
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section py-5 text-center">
        <div className="container">
          <h2 className="mb-5 display-4 fw-bold text-secondary">
            Our Services
          </h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-3">
              <div className="card h-100 shadow rounded-4">
                <div className="card-body">
                  <h3 className="card-title">✂️ Men’s Haircut</h3>
                  <p className="card-text">
                    Expert haircuts tailored to your style. Precision cuts with
                    the latest trends and classic looks.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 shadow rounded-4">
                <div className="card-body">
                  <h3 className="card-title">🧔 Beard Styling</h3>
                  <p className="card-text">
                    Precision beard grooming and styling. Shape and maintain
                    your beard with expert care.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 shadow rounded-4">
                <div className="card-body">
                  <h3 className="card-title">🧖 Facial Treatment</h3>
                  <p className="card-text">
                    Relaxing and rejuvenating facial treatments. Refresh your
                    skin and relax your mind.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card h-100 shadow rounded-4">
                <div className="card-body">
                  <h3 className="card-title">👦 Kids Haircut</h3>
                  <p className="card-text">
                    Friendly and fun haircuts for kids. Comfortable environment
                    for your little ones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section py-5 bg-white">
        <div className="container">
          <h2 className="mb-5 display-4 fw-bold text-center text-secondary">
            What Our Clients Say
          </h2>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="card p-3 shadow rounded-4">
                <p className="mb-2 fst-italic">
                  "Destiny Barbershop transformed my look! The staff is
                  professional and friendly."
                </p>
                <h5 className="mb-0 fw-bold">John Doe</h5>
                <small className="text-muted">Regular Client</small>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 shadow rounded-4">
                <p className="mb-2 fst-italic">
                  "Excellent service and attention to detail. Highly recommend!"
                </p>
                <h5 className="mb-0 fw-bold">Jane Smith</h5>
                <small className="text-muted">Satisfied Customer</small>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 shadow rounded-4">
                <p className="mb-2 fst-italic">
                  "Friendly atmosphere and great results every time."
                </p>
                <h5 className="mb-0 fw-bold">Mike Johnson</h5>
                <small className="text-muted">Loyal Client</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="booking-section py-5 text-center bg-light rounded-4 shadow-sm">
        <div className="container">
          <h2 className="mb-4 display-5 fw-semibold">Book Your Appointment</h2>
          <p className="mb-4 fs-5">
            Visit us at <strong>Edens Centre, Ground Floor</strong>
            <br />
            Call or WhatsApp us at{" "}
            <a
              href="https://wa.me/254700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              0700 000 000
            </a>
          </p>
          <a
            href="#contact"
            className="btn btn-success btn-lg rounded-pill shadow"
          >
            Book Now
          </a>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section py-5 text-center bg-white rounded-4 shadow-sm">
        <div className="container">
          <h2 className="mb-4 display-5 fw-semibold">
            Subscribe to Our Newsletter
          </h2>
          <p className="mb-4 fs-5">
            Stay updated with the latest news, offers, and grooming tips.
          </p>
          <form className="d-flex justify-content-center">
            <input
              type="email"
              className="form-control w-50 me-2 rounded-pill"
              placeholder="Enter your email"
              aria-label="Email"
            />
            <button type="submit" className="btn btn-primary rounded-pill px-4">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
