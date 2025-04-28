import React from "react";
import ContactForm from "../components/ContactForm";
import airconServiceImage from "../assets/aircon-repair.webp";

export default function AirconService() {
  return (
    <div className="body">
      {/* Header Section */}
      <section
        className="hero-section"
        >
        <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="section-heading">Air Conditioning Service & Repairs</h1>
        <p className="text-lg mb-6">Stay cool with our expert aircon servicing, repairs, and maintenance.</p>
        <a href="/contact" className="inline-block bg-accent hover:bg-hover text-white font-semibold py-2 px-6 rounded-full transition-all">
          Book Now
        </a>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:text-left">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img src={airconServiceImage} alt="Aircon Service" className="w-full md:w-1/2 rounded shadow-md" />
          <div className="card-box">
            <h2 className="text-3xl font-semibold mb-4">Why Regular Aircon Servicing is Important</h2>
            <p className="mb-4">Regular maintenance keeps your air conditioner running efficiently, improves air quality, and extends the lifespan of your unit.</p>
            <ul className="list-checks">
              <li>Improve cooling efficiency</li>
              <li>Prevent costly breakdowns</li>
              <li>Enhance air quality & remove allergens</li>
              <li>Increase the lifespan of your AC unit</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16 px-4 text-center">
        <h2 className="text-3xl font-semibold mb-4">Book Your Aircon Service Today</h2>
        <p className="mb-8">Ensure your air conditioner is running at peak performance.</p>
        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
