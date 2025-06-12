import React from "react";

const About = () => {
  return (
    <section
      className="container py-5 bg-light rounded-4 shadow-sm"
      style={{ minHeight: "100vh", paddingTop: "120px" }}
    >
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
            alt="About Destiny Barbershop"
            className="img-fluid rounded-4 shadow"
            style={{ border: "5px solid #6c757d" }}
          />
        </div>
        <div className="col-md-6 fade-in-down">
          <h2 className="mb-4 display-3 fw-bold text-secondary">
            About Destiny Barbershop
          </h2>
          <p className="lead fs-5 text-secondary">
            At <strong>Destiny Barbershop</strong>, grooming is more than a
            service — it’s a lifestyle. Established with a passion for
            excellence and a commitment to community, we blend timeless
            tradition with cutting-edge techniques. Our expert barbers are
            dedicated to providing personalized styles that enhance your
            confidence and express your individuality. From classic cuts to
            modern trends, every visit promises precision, comfort, and a
            welcoming atmosphere. Join us and experience the art of grooming
            perfected through years of expertise and genuine care.
          </p>
          <div
            className="map-container mt-4 rounded-4 shadow-sm"
            style={{ height: "300px", overflow: "hidden" }}
          >
            <iframe
              title="Destiny Barbershop Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019927927927!2d-122.4194154846813!3d37.77492977975944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b1a1a1b%3A0x4a1a1a1a1a1a1a1a!2sDestiny%20Barbershop!5e0!3m2!1sen!2sus!4v1695830400000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-4 shadow-sm"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
