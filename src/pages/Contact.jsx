import React from "react";
import ContactForm from "../components/ContactForm";
import aboutImage from "../assets/thank-you.webp";

export default function AboutContact() {
  return (
    <div className="body">
      {/* About Us Section */}
      <section className="hero-section">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h1 className="section-heading">About Climate Co</h1>
            <p className="mb-4">
              Climate Co is a <strong>family-owned business</strong> with <strong>16 years of experience</strong> in the heating and cooling industry.
              We provide expert installation, servicing, and repairs for residential and commercial customers.
            </p>
            <h2 className="text-2xl font-semibold mb-2">Why Choose Us?</h2>
            <ul className="list-checks">
              <li>Over 16 years of industry experience</li>
              <li>Family-owned and operated</li>
              <li>High-quality installations and servicing</li>
              <li>Energy-efficient solutions & government rebates</li>
              <li>Customer-focused with transparent pricing</li>
            </ul>
          </div>
          <img src={aboutImage} alt="Team at Climate Co" className="w-full md:w-1/2 rounded shadow-md" />
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 px-4 max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:text-left">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-2">📍 Ocean Grove, VIC</p>
          <p className="mb-2">📞 <a href="tel:0430831199" className="hover:underline">0430 831 199</a></p>
          <p className="mb-4">✉️ <a href="mailto:info@climateco.au" className="hover:underline">info@climateco.au</a></p>
          <iframe
            title="Google Maps"
            src="https://maps.google.com/maps?q=Ocean+Grove+VIC&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="300"
            className="rounded shadow-md"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
