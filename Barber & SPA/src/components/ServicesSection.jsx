import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import haircutImg from "../Assets/Haircut.jpeg";
import beardImg from "../Assets/Beard.jpg";
import facialImg from "../Assets/facial.jpg";
import massageImg from "../Assets/Massages.jpg";
import hairColorImg from "../Assets/hair colouring.jpg";
import nailsImg from "../Assets/nailsqwegji.jpeg";
import kidsCutImg from "../Assets/Kids Hircut.jpeg";
import waxingImg from "../Assets/Waxing.jpeg";

const serviceData = [
  {
    name: "Haircuts",
    description: "Fresh fades, trims & modern styles tailored just for you.",
    image: haircutImg,
    details: "Includes consultation, wash, cut, and styling.",
    price: "KES 700",
  },
  {
    name: "Beard Styling",
    description: "Defined, sharp, and shaped with precision.",
    image: beardImg,
    details: "Beard trim, shape up, oil & finish.",
    price: "KES 500",
  },
  {
    name: "Facials",
    description: "Glow up with deep cleansing & refreshing treatments.",
    image: facialImg,
    details: "Includes exfoliation, mask, and hydration.",
    price: "KES 1500",
  },
  {
    name: "Massages",
    description: "Relax, unwind and rejuvenate with expert care.",
    image: massageImg,
    details: "Full body Swedish or deep tissue massage.",
    price: "KES 2500",
  },
  {
    name: "Hair Coloring",
    description: "Bold colors or subtle tones, your style, your choice.",
    image: hairColorImg,
    details: "Highlights, full color, or touch-ups available.",
    price: "KES 700+",
  },
  {
    name: "Nails",
    description: "Clean, trimmed, and polished to perfection.",
    image: nailsImg,
    details: "Includes cleaning, trimming, shaping, and polish.",
    price: "KES 600",
  },
  {
    name: "Kids Cuts",
    description: "Cool, quick, and comfy for little champs.",
    image: kidsCutImg,
    details: "Fun, fast, and stylish cuts for kids.",
    price: "KES 500",
  },
  {
    name: "Waxing",
    description: "Smooth skin with gentle, effective waxing.",
    image: waxingImg,
    details: "Facial, arm, leg, and body waxing available.",
    price: "KES 800+",
  },
];

const ServiceModal = ({ show, onClose, service }) => {
  if (!show || !service) return null;

  return (
    <div
      className={`modal fade d-block ${show ? "show" : ""}`}
      style={{
        backgroundColor: "rgba(0,0,0,0.9)",
        backdropFilter: "blur(5px)",
        transition: "opacity 0.3s ease",
        opacity: show ? 1 : 0,
        pointerEvents: show ? "auto" : "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1050,
      }}
    >
      <div
        className="modal-dialog modal-dialog-centered"
        style={{
          animation: show
            ? "fadeInScale 0.3s ease forwards"
            : "fadeOutScale 0.3s ease forwards",
        }}
      >
        <div className="modal-content bg-dark text-white border-warning border-2 rounded-4">
          <div className="modal-header border-0">
            <h5 className="modal-title text-warning">{service.name}</h5>
            <button
              onClick={onClose}
              className="btn-close btn-close-white"
            ></button>
          </div>
          <div className="modal-body">
            <img
              src={process.env.PUBLIC_URL + service.image}
              alt={service.name}
              className="img-fluid rounded mb-3"
            />
            <p>{service.details}</p>
            <h6 className="text-warning">Price: {service.price}</h6>
          </div>
          <div className="modal-footer border-0 d-flex justify-content-between">
            <button
              className="btn btn-outline-warning rounded-pill px-4"
              onClick={onClose}
            >
              Close
            </button>
            <a
              href="#booking"
              className="btn btn-warning rounded-pill px-4"
              onClick={onClose}
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes fadeOutScale {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.9);
          }
        }
      `}</style>
    </div>
  );
};

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleOpen = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  const filteredServices = serviceData.filter(
    (service) =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="services" className="py-5 bg-dark text-light text-center">
      <div className="container-fluid px-5">
        <h2 className="mb-4 display-4 fw-bold text-warning">
          Our Full-Service Menu
        </h2>
        <input
          type="text"
          className="form-control mb-4 rounded-pill bg-black text-light border-warning border-2 px-4"
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search services"
        />
        <div className="row g-5 justify-content-center">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, i) => (
              <div key={i} className="col-md-3 col-sm-6">
                <div className="card h-100 shadow-lg rounded-4 border-0 bg-black text-light">
                  <img
                    src={process.env.PUBLIC_URL + service.image}
                    alt={service.name}
                    className="card-img-top object-fit-cover rounded-top"
                    style={{ height: "200px" }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h4 className="card-title fw-bold text-warning">
                        {service.name}
                      </h4>
                      <p className="card-text text-secondary">
                        {service.description}
                      </p>
                    </div>
                    <button
                      onClick={() => handleOpen(service)}
                      className="btn btn-outline-warning mt-3 rounded-pill px-4"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-warning">No services found.</p>
          )}
        </div>
      </div>
      <ServiceModal
        show={modalOpen}
        onClose={handleClose}
        service={selectedService}
      />
    </section>
  );
};

export default ServicesSection;
