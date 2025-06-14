import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ServicesSection from "../components/ServicesSection";

import Ababer1 from "../Assets/Ababer1.jpg";
import Ababer2 from "../Assets/Ababer2.jpg";
import Ababer3 from "../Assets/Ababer3.jpg";
import Ababer4 from "../Assets/Ababer4.jpg";
import Ababer5 from "../Assets/Ababer5.jpg";

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
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const images = [Ababer1, Ababer2, Ababer3, Ababer4, Ababer5];

  return (
    <>
      <div style={{ height: "4rem" }}></div>
      {/* Hero Section */}
      <section
        className="hero-section text-center py-5 position-relative"
        style={{
          background: "linear-gradient(135deg, #000000, #434343)",
          overflow: "hidden",
          paddingTop: "6rem",
        }}
      >
        <div className="container position-relative z-2">
          <h1
            className="display-1 fw-bold mb-3 text-warning"
            style={{ letterSpacing: "2px" }}
          >
            Destiny Barber & SPA
          </h1>
          <p className="lead mb-4 fs-4 fw-light fst-italic text-white">
            Feel fresh. Look great. Be confident.
          </p>
          <a
            href="#services"
            className="btn btn-warning btn-lg rounded-pill px-5 shadow-sm"
          >
            Explore Services
          </a>
        </div>
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: "url(/hero-bg.jpg) center/cover no-repeat",
            opacity: 0.1,
            zIndex: 1,
          }}
        ></div>
      </section>

      {/* Carousel */}
      <section className="py-5 bg-black text-white text-center">
        <div className="container position-relative">
          <h2 className="mb-4 display-5 fw-bold">Gallery Showcase</h2>
          <div
            ref={carouselRef}
            className="d-flex overflow-auto gap-4 px-2 py-3 border rounded bg-dark bg-opacity-50"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {images.map((src, idx) => (
              <div
                key={idx}
                className="rounded-4 shadow overflow-hidden border border-secondary flex-shrink-0 position-relative"
                style={{ width: "320px", height: "320px" }}
              >
                <img
                  src={src}
                  alt={`Style ${idx + 1}`}
                  className="w-100 h-100 object-fit-cover"
                  style={{ filter: "brightness(85%)" }}
                />
                <div className="position-absolute bottom-0 start-0 w-100 text-white bg-dark bg-opacity-75 py-1 px-2 text-start">
                  <small>Style #{idx + 1}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <ServicesSection />

      {/* Testimonials */}
      <section className="py-5 bg-black text-white text-center">
        <div className="container">
          <h2 className="mb-5 display-4 fw-bold text-warning">
            Client Reviews
          </h2>
          <div className="row g-4 justify-content-center">
            {["John K.", "Sarah M.", "Kevin O."].map((name, i) => (
              <div key={i} className="col-md-4">
                <div className="card p-4 shadow rounded-4 bg-dark text-white border border-secondary">
                  <p className="fst-italic">
                    "Absolutely the best grooming experience I’ve had!"
                  </p>
                  <h5 className="fw-bold mb-0">{name}</h5>
                  <small className="text-muted">Verified Client</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-5 bg-dark text-white text-center">
        <div className="container">
          <h2 className="mb-4 display-5 fw-bold text-warning">
            Book an Appointment
          </h2>
          <p className="mb-3">We're located at Edens Centre, Ground Floor</p>
          <p className="fs-5">
            Call or WhatsApp:{" "}
            <a
              href="https://wa.me/254700000000"
              className="text-warning fw-bold"
            >
              0700 000 000
            </a>
          </p>
          <a href="#" className="btn btn-warning btn-lg rounded-pill">
            Book Now
          </a>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-5 bg-black text-white text-center">
        <div className="container">
          <h2 className="mb-4">Subscribe to Our Newsletter</h2>
          <p className="mb-4 text-light">
            Get grooming tips, promos, and updates right to your inbox.
          </p>
          <form className="row justify-content-center">
            <div className="col-md-6 d-flex">
              <input
                type="email"
                className="form-control rounded-start-pill bg-dark text-white border border-secondary"
                placeholder="Enter email"
              />
              <button className="btn btn-warning rounded-end-pill px-4">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
