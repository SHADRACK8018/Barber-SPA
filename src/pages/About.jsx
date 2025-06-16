import React from "react";

const teamMembers = [
  {
    name: "Jayden Mwangi",
    role: "Master Barber",
    img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba5?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Nehemiah Kiptoo",
    role: "Spa Specialist",
    img: "src/Assets/Nehemiah Kiptoo.jpeg",
  },
  {
    name: "Brian Otieno",
    role: "Hair Stylist",
    img: "https://images.unsplash.com/photo-1520975911432-56c7ce90f3b0?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Jayden Mwangi",
    role: "Piercing Specialist",
    img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba5?auto=format&fit=crop&w=400&q=80",
  },
];

const About = () => {
  return (
    <>
      <div style={{ height: "4rem" }}></div>
      <section className="bg-black text-white py-5 px-3 px-md-5">
        {/* About Section */}
        <div className="row align-items-center mb-5">
          {/* Image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="rounded-4 overflow-hidden shadow-lg border border-secondary">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
                alt="About Destiny Barber & SPA"
                className="img-fluid object-fit-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/800x450/111827/ffffff?text=Image+Missing";
                }}
                style={{ width: "1024px", height: "768px" }}
              />
            </div>
          </div>

          {/* Text */}
          <div className="col-md-6">
            <h2 className="display-4 fw-bold text-warning mb-3">
              Destiny Barber & <span className="text-white">SPA</span>
            </h2>
            <p className="lead">
              Since 2022, <strong>Destiny Barber & SPA</strong> has elevated
              grooming experiences. We blend modern finesse with timeless
              techniques to create a sanctuary of self-care and luxury.
            </p>
            <p>
              Our services range from stylish cuts to therapeutic spa rituals—
              each tailored to your individual needs and delivered with
              precision and care.
            </p>
            <p>
              Here, every visit is more than a service—it's a celebration of
              self.
            </p>

            {/* Google Map */}
            <div className="mt-4 rounded overflow-hidden border border-secondary">
              <iframe
                title="Destiny Barbershop Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019927927927!2d-122.4194154846813!3d37.77492977975944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b1a1a1b%3A0x4a1a1a1a1a1a1a1a!2sDestiny%20Barbershop!5e0!3m2!1sen!2sus!4v1695830400000!5m2!1sen!2sus"
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <a
              href="https://wa.me/254711371896"
              className="btn btn-warning btn-lg mt-4 px-4 rounded-pill"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Appointment
            </a>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-5">
          <h3 className="display-5 fw-bold text-secondary">
            Our <span className="text-warning">Team</span>
          </h3>
          <p className="text-light">Meet the people behind the magic ✂️💆‍♀️</p>
        </div>

        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card bg-dark text-white h-100 border border-secondary shadow-sm">
                <img
                  src={member.img}
                  alt={member.name}
                  className="card-img-top"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://placehold.co/400x300/111827/ffffff?text=Image+Missing";
                  }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold text-warning">
                    {member.name}
                  </h5>
                  <p className="card-text text-light fst-italic">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
