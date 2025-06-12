import React from "react";

const servicesData = [
  {
    name: "Haircuts",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
    alt: "Haircut service",
  },
  {
    name: "Shaving",
    img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=400&q=80",
    alt: "Shaving service",
  },
  {
    name: "Beard Trimming",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=400&q=80",
    alt: "Beard trimming service",
  },
  {
    name: "Hair Coloring",
    img: "https://images.unsplash.com/photo-1524504388940-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
    alt: "Hair coloring service",
  },
  {
    name: "Facial Treatments",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
    alt: "Facial treatment service",
  },
  {
    name: "Nails",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80",
    alt: "Nail service",
  },
  {
    name: "Massages",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    alt: "Massage service",
  },
  {
    name: "Hair Styling",
    img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80",
    alt: "Hair styling service",
  },
  {
    name: "Scalp Treatment",
    img: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=400&q=80",
    alt: "Scalp treatment service",
  },
  {
    name: "Eyebrow Shaping",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
    alt: "Eyebrow shaping service",
  },
  {
    name: "Waxing",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
    alt: "Waxing service",
  },
  {
    name: "Hot Towel Treatment",
    img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=400&q=80",
    alt: "Hot towel treatment service",
  },
  {
    name: "Hair Relaxing",
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=400&q=80",
    alt: "Hair relaxing service",
  },
  {
    name: "Kids Haircuts",
    img: "https://images.unsplash.com/photo-1524504388940-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
    alt: "Kids haircut service",
  },
  {
    name: "Facial Waxing",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
    alt: "Facial waxing service",
  },
  {
    name: "Scalp Massage",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    alt: "Scalp massage service",
  },
  {
    name: "Hair Spa",
    img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80",
    alt: "Hair spa service",
  },
];

const Services = () => {
  return (
    <section className="container py-5">
      <h2 className="mb-5 display-4 fw-bold text-secondary text-center">
        Our Services
      </h2>
      <div className="row g-4">
        {servicesData.map((service) => (
          <div key={service.name} className="col-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow rounded-4">
              <img
                src={service.img}
                alt={service.alt}
                className="card-img-top rounded-top"
                style={{ objectFit: "cover", height: "180px" }}
              />
              <div className="card-body">
                <h5 className="card-title text-center">{service.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
